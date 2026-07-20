# Portfolio infrastructure (AWS SAM)

Serverless AWS infrastructure for the portfolio site: a static React app on
**S3 + CloudFront**, and a **Contact Me** API on **API Gateway → Lambda → Amazon
SES**, with every submission logged to **DynamoDB**. Everything is defined as
Infrastructure-as-Code ([`template.yaml`](template.yaml)) and deployed via
**GitHub Actions** using **OIDC** (no long-lived AWS keys).

## Architecture

```mermaid
flowchart LR
    U[Browser] -->|HTTPS| CF[CloudFront CDN]
    CF -->|OAC, private| S3[(S3 bucket<br/>React build)]
    U -->|POST /contact| APIGW[API Gateway<br/>HTTP API + CORS]
    APIGW --> L[Lambda<br/>Node.js 20]
    L -->|SendEmail| SES[Amazon SES]
    SES -->|email| G[meelyn.pandit@gmail.com]
    L -->|PutItem| DDB[(DynamoDB<br/>submissions)]
    L --> CW[CloudWatch Logs]
```

| Concern | Service | Notes |
|---|---|---|
| Static hosting | S3 (private) + CloudFront | Bucket is locked down; only CloudFront reads it via Origin Access Control (OAC). TLS enforced. |
| Dynamic API | API Gateway HTTP API + Lambda | `POST /contact`, CORS-scoped, throttled (10 rps / burst 20). |
| Email | Amazon SES | Sends to your Gmail; sender's address is the submitter (`Reply-To`). |
| Persistence | DynamoDB | On-demand, encrypted, PITR on, 180-day TTL. Best-effort — never blocks email. |
| Observability | CloudWatch Logs (JSON) + X-Ray tracing | 30-day log retention. |
| Security | Least-privilege IAM | Lambda may only `ses:SendEmail` from the verified identity and `PutItem` to the one table. |

## Why this stack (recruiter-facing highlights)

- **Lambda** (ESM, arm64, esbuild bundling, SDK marked external), **API
  Gateway**, **SES**, **DynamoDB**, **S3**, **CloudFront/OAC** — a realistic
  serverless surface area.
- **IaC** with AWS SAM; reproducible, reviewable, one-command deploys.
- **CI/CD** with GitHub Actions + **OIDC federation** (keyless).
- **Security posture**: private bucket, TLS-only, least-privilege roles,
  input validation, honeypot spam trap, API throttling.

## Prerequisites

- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- AWS CLI configured with a profile for **your personal account**
  (`meelyn.pandit@gmail.com`), e.g. `--profile personal`.
  > ⚠️ The default profile on this machine currently points at a *work*
  > account. Always pass `--profile personal` for this project.
- Node.js 20+

## One-time setup

### 1. Verify SES identities

In the SES sandbox you must verify the addresses you send **from** and **to**.
Both are your Gmail here, so verifying it once covers both:

```bash
aws ses verify-email-identity --email-address meelyn.pandit@gmail.com \
  --region us-east-1 --profile personal
```

Click the confirmation link Amazon emails you. To send to *arbitrary*
recipients later, request [SES production access](https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html)
— not needed for a fixed-recipient contact form.

### 2. (CI only) Create the GitHub OIDC deploy role

Create an IAM role your GitHub repo can assume via OIDC (trust policy scoped to
`repo:meelyn-pandit/meelyn-pandit.github.io:*`) with permissions to run
CloudFormation/SAM, and to manage the S3/CloudFront/Lambda/etc. resources.
Then set in the repo:

- **Secret** `AWS_DEPLOY_ROLE_ARN` — the role ARN.
- **Variables** (optional, defaults shown): `AWS_REGION=us-east-1`,
  `SENDER_EMAIL`, `RECIPIENT_EMAIL`, `ALLOWED_ORIGIN`.

## Deploy manually

```bash
cd infrastructure
sam build
sam deploy --guided --profile personal   # first time
# subsequent deploys:
sam deploy --profile personal
```

Grab the outputs (also printed after deploy):

```bash
aws cloudformation describe-stacks --stack-name meelyn-portfolio \
  --query "Stacks[0].Outputs" --profile personal
```

Then build + upload the site with the live API URL:

```bash
cd ../my-portfolio
REACT_APP_CONTACT_API_URL="<ContactApiUrl output>" npm run build
aws s3 sync build/ "s3://<SiteBucketName output>/" --delete --profile personal
aws cloudfront create-invalidation \
  --distribution-id "<DistributionId output>" --paths "/*" --profile personal
```

Visit the `SiteUrl` output. (The GitHub Actions workflow does all of the above
automatically on push to `trunk`.)

## Local frontend development

```bash
cd my-portfolio
cp .env.example .env.local     # set REACT_APP_CONTACT_API_URL to the deployed API
npm start
```

Without `REACT_APP_CONTACT_API_URL`, the form shows a friendly "not configured"
message and points visitors to LinkedIn.

## Cost

Comfortably within/near the AWS Free Tier for a personal-traffic portfolio:
Lambda + API Gateway + DynamoDB on-demand cost cents at low volume, CloudFront's
free tier covers the transfer, and SES is ~$0.10 per 1,000 emails.

## Teardown

```bash
# empty the site bucket first (CloudFormation won't delete a non-empty bucket)
aws s3 rm "s3://<SiteBucketName>" --recursive --profile personal
sam delete --stack-name meelyn-portfolio --profile personal
```
