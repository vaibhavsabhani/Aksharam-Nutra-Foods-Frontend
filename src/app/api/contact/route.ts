import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function isValidPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") return false;
  const payload = value as Record<string, unknown>;
  return (
    typeof payload.firstName === "string" &&
    payload.firstName.trim().length > 0 &&
    typeof payload.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) &&
    typeof payload.message === "string" &&
    payload.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, message } = body;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@aksharamnutrafoods.com";

  if (!process.env.SMTP_HOST) {
    console.log("[contact] SMTP not configured, logging submission instead:", {
      firstName,
      lastName,
      email,
      message,
    });
    return NextResponse.json({ message: "Message received." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to,
      replyTo: email,
      subject: `New website enquiry from ${firstName} ${lastName ?? ""}`.trim(),
      text: `Name: ${firstName} ${lastName ?? ""}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again later." },
      { status: 502 }
    );
  }
}
