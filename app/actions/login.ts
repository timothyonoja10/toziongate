"use server";

import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type LoginFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLoginForm(
  prevState: any,
  formData: FormData
): Promise<LoginFormState> {
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "").trim();

  /* ------------------ Basic validation ------------------ */
  if (!email || !password) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "error", message: "Invalid email address." };
  }

  /* ------------------ Connect to DB ------------------ */
  await connectDB();

  const user = await User.findOne({ email });

  if (!user) {
    return { status: "error", message: "Email or password is incorrect." };
  }

  /* ------------------ Verify password ------------------ */
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return { status: "error", message: "Email or password is incorrect." };
  }

  /* ------------------ Set flash message ------------------ */
  const cookieStore = await cookies();
  cookieStore.set("flash", `🎉 Welcome back, ${user.firstName}!`, {
    path: "/",
    httpOnly: true,
    maxAge: 10, // 10 seconds
  });

  /* ------------------ Redirect to home ------------------ */
  redirect("/");

  // This is never reached
  return { status: "success" };
}
