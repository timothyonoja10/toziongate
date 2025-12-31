"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";

export type RegisterFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitRegisterForm(
  prevState: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  /* ------------------ Validation ------------------ */
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "error", message: "Invalid email address." };
  }

  if (password !== confirmPassword) {
    return { status: "error", message: "Passwords do not match." };
  }

  const strengthScore = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  if (strengthScore < 3) {
    return {
      status: "error",
      message:
        "Password must be at least 8 characters and include uppercase letters, numbers, or special characters.",
    };
  }

  /* ------------------ DB logic ------------------ */
  await connectDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return {
      status: "error",
      message: "An account with this email already exists.",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  /* ---------------- FLASH MESSAGE ---------------- */
  const cookieStore = await cookies();

  cookieStore.set("flash", "🎉 Registration successful!", {
    path: "/",
    httpOnly: true,
    maxAge: 10,
  });


  // return {
  //   status: "success",
  //   message: "Registration successful.",
  // };

  redirect("/");
}
