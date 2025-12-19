"use server";

import nodemailer from "nodemailer";
import checkRateLimit from "./ratelimit";
import { headers } from "next/dist/server/request/headers";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  prevState: any,
  formData: FormData,
) {
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("website") || "").trim();
  //const token = String(formData.get("g-recaptcha-response") || "");

  if (!firstName || !lastName || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "error", message: "Invalid email address." };
  }

  // Spam detection
  if (honeypot) {
    return { status: "error", message: "Spam detected." };
  }

  // 🛡 Rate limiting (simple IP-based)
  const ipHeader = (await headers()).get('x-forwarded-for');
  
  // Ensure it's a string (fallback to "unknown" or "demo-ip")
  const ip: string = ipHeader ?? "unknown"; 


  // Rate limiting
  if (ipHeader === "unknown" || !checkRateLimit(ip)) {
    return { status: "error", message: "Too many submissions. Try again later." };
  }

  // if (!token) {
  //   return { status: "error", message: "reCAPTCHA verification failed." };
  // }

  // // Verify reCAPTCHA
  // const verify = await fetch(
  //   "https://www.google.com/recaptcha/api/siteverify",
  //   {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  //   }
  // );

  // const result = await verify.json();

  // if (!result.success) {
  //   return { status: "error", message: "reCAPTCHA verification failed." };
  // }

  // 👉 Place email / DB / CRM logic here
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Toziongate Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    // Optional: auto-reply to user
    await transporter.sendMail({
      from: `"Toziongate Institute" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message",
      html: `
        <p>Dear ${firstName},</p>
        <p>Thank you for contacting Toziongate Institute. We have received your message and will respond shortly.</p>
        <p>Kind regards,<br/>Toziongate Institute</p>
      `,
    });

    return { status: "success" };
  } catch (error) {
    console.error("Email error:", error);
    return {
      status: "error",
      message: "Failed to send message. Please try again.",
    };
  }
}
