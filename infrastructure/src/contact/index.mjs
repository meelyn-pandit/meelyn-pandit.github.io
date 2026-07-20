// Contact form handler.
// API Gateway (HTTP API) -> Lambda -> Amazon SES, with a copy of each
// submission written to DynamoDB. Runs on Node.js 22 (ESM).

import { randomUUID } from "node:crypto";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const ses = new SESClient({});
const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

const {
  SENDER_EMAIL,
  RECIPIENT_EMAIL,
  ALLOWED_ORIGIN = "*",
  TABLE_NAME,
} = process.env;

const MAX = { email: 254, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Content-Type": "application/json",
};

const respond = (statusCode, body) => ({
  statusCode,
  headers: corsHeaders,
  body: JSON.stringify(body),
});

/** Validate and normalize the incoming payload. Returns {data} or {error}. */
function parse(event) {
  let payload;
  try {
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body ?? "", "base64").toString("utf8")
      : event.body ?? "";
    payload = JSON.parse(raw || "{}");
  } catch {
    return { error: "Request body must be valid JSON." };
  }

  // Honeypot: real users never fill a hidden field. Bots do.
  if (payload.company) return { honeypot: true };

  const email = String(payload.email ?? "").trim();
  const subject = String(payload.subject ?? "").trim();
  const message = String(payload.message ?? "").trim();

  if (!email || !subject || !message)
    return { error: "email, subject, and message are all required." };
  if (!EMAIL_RE.test(email) || email.length > MAX.email)
    return { error: "Please provide a valid email address." };
  if (subject.length > MAX.subject)
    return { error: `Subject must be ${MAX.subject} characters or fewer.` };
  if (message.length > MAX.message)
    return { error: `Message must be ${MAX.message} characters or fewer.` };

  return { data: { email, subject, message } };
}

async function sendEmail({ email, subject, message }) {
  const text =
    `New portfolio contact submission\n\n` +
    `From: ${email}\nSubject: ${subject}\n\n${message}\n`;

  await ses.send(
    new SendEmailCommand({
      Source: SENDER_EMAIL,
      Destination: { ToAddresses: [RECIPIENT_EMAIL] },
      ReplyToAddresses: [email],
      Message: {
        Subject: { Data: `[Portfolio] ${subject}`, Charset: "UTF-8" },
        Body: { Text: { Data: text, Charset: "UTF-8" } },
      },
    })
  );
}

async function logSubmission({ email, subject, message }, meta) {
  if (!TABLE_NAME) return;
  const now = Math.floor(Date.now() / 1000);
  await ddb.send(
    new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        id: randomUUID(),
        email,
        subject,
        message,
        sourceIp: meta.sourceIp ?? null,
        userAgent: meta.userAgent ?? null,
        createdAt: new Date().toISOString(),
        // Auto-expire logged submissions after 180 days.
        expiresAt: now + 180 * 24 * 60 * 60,
      },
    })
  );
}

export const handler = async (event) => {
  const method =
    event.requestContext?.http?.method ?? event.httpMethod ?? "POST";
  if (method === "OPTIONS") return respond(204, {});

  const result = parse(event);

  // Silently accept honeypot hits so bots can't distinguish success/failure.
  if (result.honeypot) return respond(202, { ok: true });
  if (result.error) return respond(400, { ok: false, error: result.error });

  try {
    await sendEmail(result.data);
    // Logging is best-effort: never fail the request if DynamoDB hiccups.
    await logSubmission(result.data, {
      sourceIp: event.requestContext?.http?.sourceIp,
      userAgent: event.requestContext?.http?.userAgent,
    }).catch((err) => console.error("DynamoDB log failed", err));

    return respond(200, { ok: true, message: "Thanks — your message was sent." });
  } catch (err) {
    console.error("Failed to send contact email", err);
    return respond(502, {
      ok: false,
      error: "Something went wrong sending your message. Please try again later.",
    });
  }
};
