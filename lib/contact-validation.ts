import { z } from "zod"

/**
 * Server-side validation for the contact API. The handler does not execute SQL;
 * parameterized queries must be used if submissions are ever stored in a database.
 */
const HAS_DISALLOWED_CTRL =
  /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u{FFFE}\u{FFFF}]/u

const nameField = z
  .string()
  .trim()
  .min(1, "All fields are required.")
  .max(80, "Name is too long.")
  .refine((s) => !HAS_DISALLOWED_CTRL.test(s), "Name contains invalid characters.")
  .refine((s) => !/[<>]/.test(s), "Name contains invalid characters.")
  .regex(
    /^[\p{L}\p{M}0-9\s'.-]+$/u,
    "Name may only contain letters, numbers, spaces, hyphens, apostrophes, and periods.",
  )

const messageField = z
  .string()
  .trim()
  .min(1, "All fields are required.")
  .max(8000, "Message is too long.")
  .refine((s) => !s.includes("\0"), "Message contains invalid characters.")
  .refine((s) => !HAS_DISALLOWED_CTRL.test(s), "Message contains invalid characters.")

const phoneField = z
  .string()
  .trim()
  .regex(/^\+[1-9]\d{6,14}$/, "Invalid phone number.")

const emailField = z
  .string()
  .trim()
  .min(1, "All fields are required.")
  .email({ message: "Invalid email address." })

export const contactFormSchema = z.object({
  firstName: nameField,
  lastName: nameField,
  phone: phoneField,
  email: emailField,
  subject: messageField,
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

export function parseContactPayload(body: unknown): z.SafeParseReturnType<unknown, ContactFormInput> {
  const raw = body && typeof body === "object" ? (body as Record<string, unknown>) : {}
  const normalized = {
    firstName: String(raw.firstName ?? ""),
    lastName: String(raw.lastName ?? ""),
    phone: String(raw.phone ?? "")
      .trim()
      .replace(/\s/g, ""),
    email: String(raw.email ?? ""),
    subject: String(raw.subject ?? ""),
  }
  return contactFormSchema.safeParse(normalized)
}

/** Prevent SMTP header injection via display names in the subject line. */
export function singleLineHeaderSegment(s: string, maxLen: number): string {
  return s.replace(/[\r\n\u2028\u2029]+/g, " ").slice(0, maxLen)
}
