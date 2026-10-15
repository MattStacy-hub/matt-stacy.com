import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { FIELD_LIMITS, projectTypeLabel } from "@/data/contact";
import { CONTACT } from "@/data/site";
import { escapeHtml } from "@/lib/html";

/**
 * Sends a contact-form inquiry by email, over SMTP (the same setup as the AAV
 * site). Needs SMTP_HOST, SMTP_USER and SMTP_PASSWORD; SMTP_PORT defaults to
 * 587. Inquiries go to CONTACT_TO_EMAIL, or the site's contact address.
 */

const REQUIRED_SMTP_VARS = ["SMTP_HOST", "SMTP_USER", "SMTP_PASSWORD"] as const;

/** Refuse an oversized body before it's read into memory. */
const MAX_BODY_BYTES = 64 * 1024;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Inquiry {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
  /** Hidden from people. Only bots fill it in. */
  website?: unknown;
}

const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: NextRequest) {
  const declaredLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let data: Inquiry;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // A bot that filled the hidden field gets a normal-looking success, and no email is sent.
  if (text(data.website)) return NextResponse.json({ ok: true });

  const name = text(data.name);
  const email = text(data.email);
  const message = text(data.message);
  // Resolved from our own list, so nothing posted reaches the Subject header.
  const projectType = projectTypeLabel(text(data.projectType));

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (
    name.length > FIELD_LIMITS.name ||
    email.length > FIELD_LIMITS.email ||
    message.length > FIELD_LIMITS.message
  ) {
    return NextResponse.json({ error: "A field is too long" }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const missing = REQUIRED_SMTP_VARS.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    console.error(`Contact form is not configured: missing ${missing.join(", ")}`);
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_PORT === "465",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Project type", projectType ?? "Not given"],
  ];

  const html = `<!doctype html>
<html><body style="font-family:Helvetica,Arial,sans-serif;color:#2a211c;line-height:1.6;max-width:600px;margin:0 auto;padding:24px">
  <h1 style="font-size:20px;margin:0 0 16px">New inquiry from matt-stacy.com</h1>
  <table style="border-collapse:collapse;margin-bottom:20px">
    ${rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:4px 16px 4px 0;color:#7a6a5d">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td></tr>`,
      )
      .join("")}
  </table>
  <div style="white-space:pre-wrap;border-left:3px solid #c4391c;padding-left:14px">${escapeHtml(message)}</div>
  <p style="font-size:13px;color:#7a6a5d;margin-top:24px">Reply to this email to answer ${escapeHtml(name)} directly.</p>
</body></html>`;

  try {
    await transporter.sendMail({
      from: { name: "matt-stacy.com", address: process.env.SMTP_FROM || process.env.SMTP_USER! },
      to: process.env.CONTACT_TO_EMAIL || CONTACT.email,
      replyTo: { name, address: email },
      subject: `Website inquiry: ${projectType ?? "General"}`,
      text: `${rows.map(([label, value]) => `${label}: ${value}`).join("\n")}\n\n${message}`,
      html,
    });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json({ error: "Could not send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
