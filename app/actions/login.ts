"use server";

export type LoginFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLoginForm(
  prevState: any,
  formData: FormData,
) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();

  if (!email || !password) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "error", message: "Invalid email address." };
  }

  
}
