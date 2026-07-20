// src/components/Contact.js
import React, { useState } from "react";
import {
  Box, Flex, Heading, Text, FormControl, FormLabel, Input, Textarea, Button,
  Link, VisuallyHidden, Alert, AlertIcon, chakra,
} from "@chakra-ui/react";
import { Linkedin } from "react-bootstrap-icons";

const LinkedinIcon = chakra(Linkedin);

const LINKEDIN_URL = "https://www.linkedin.com/in/meelyn-pandit-ph-d-51915977/";

// Set at build time (SAM output "ContactApiUrl"). See my-portfolio/.env.example.
const CONTACT_API_URL = process.env.REACT_APP_CONTACT_API_URL;

const inputStyles = {
  bg: "gray.800",
  border: "1px solid",
  borderColor: "gray.700",
  color: "gray.100",
  _focus: {
    borderColor: "brand.500",
    boxShadow: "0 0 0 2px var(--chakra-colors-brand-600)",
  },
};

const EMPTY = { email: "", subject: "", message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const submitting = status.state === "submitting";

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!CONTACT_API_URL) {
      setStatus({
        state: "error",
        message:
          "The contact form isn't configured yet. Please reach out on LinkedIn below.",
      });
      return;
    }

    setStatus({ state: "submitting", message: "" });
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.ok === false) {
        throw new Error(data.error || "Request failed.");
      }
      setStatus({
        state: "success",
        message: data.message || "Thanks — your message was sent!",
      });
      setForm(EMPTY);
    } catch (err) {
      setStatus({
        state: "error",
        message:
          err.message ||
          "Something went wrong. Please try again or reach out on LinkedIn.",
      });
    }
  };

  return (
    <Box as="section" id="contact" position="relative">
      <Flex maxW="6xl" mx="auto" px={5} py={10} direction="column" align="center">
        <Box
          as="form"
          onSubmit={handleSubmit}
          w={{ base: "full", md: "1/2", lg: "1/3" }}
          display="flex"
          flexDirection="column">
          <Heading as="h2" color="white" size={{ base: "lg", sm: "xl" }} mb={1} fontWeight="medium" textAlign="center">
            Contact Me
          </Heading>
          <Text lineHeight="relaxed" mb={5} textAlign="center">
            Have any questions about my work or background? Send me a message:
          </Text>

          {status.state === "success" && (
            <Alert status="success" borderRadius="md" mb={4} bg="green.800" color="green.100">
              <AlertIcon color="green.300" />
              {status.message}
            </Alert>
          )}
          {status.state === "error" && (
            <Alert status="error" borderRadius="md" mb={4} bg="red.800" color="red.100">
              <AlertIcon color="red.300" />
              {status.message}
            </Alert>
          )}

          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="email" fontSize="sm" color="gray.400" lineHeight="7">Email</FormLabel>
            <Input
              type="email" id="email" name="email" autoComplete="email"
              value={form.email} onChange={update("email")} {...inputStyles}
            />
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="subject" fontSize="sm" color="gray.400" lineHeight="7">Subject</FormLabel>
            <Input
              type="text" id="subject" name="subject" maxLength={200}
              value={form.subject} onChange={update("subject")} {...inputStyles}
            />
          </FormControl>

          <FormControl mb={4} isRequired>
            <FormLabel htmlFor="message" fontSize="sm" color="gray.400" lineHeight="7">Message</FormLabel>
            <Textarea
              id="message" name="message" h={32} resize="none" maxLength={5000}
              value={form.message} onChange={update("message")} {...inputStyles}
            />
          </FormControl>

          {/* Honeypot: hidden from users, tempting to bots. Submissions with it
              filled are silently dropped server-side. */}
          <VisuallyHidden>
            <FormControl>
              <FormLabel htmlFor="company">Company</FormLabel>
              <Input
                type="text" id="company" name="company" tabIndex={-1}
                autoComplete="off" value={form.company} onChange={update("company")}
              />
            </FormControl>
          </VisuallyHidden>

          <Button
            type="submit"
            isLoading={submitting}
            loadingText="Sending"
            color="white" bg="blue.500" _hover={{ bg: "blue.600" }}
            fontSize="lg" borderRadius="md">
            Send Message
          </Button>

          <Flex align="center" justify="center" mt={6} gap={2}>
            <Text fontSize="sm" color="gray.500">or connect with me on</Text>
            <Link
              href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
              display="inline-flex" alignItems="center" gap={1}
              color="brand.400" fontSize="sm" fontWeight="medium"
              _hover={{ color: "brand.300", textDecoration: "none" }}>
              <LinkedinIcon boxSize={4} /> LinkedIn
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
