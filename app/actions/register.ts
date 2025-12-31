"use server";

export type RegisterFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitRegisterForm(
  prevState: any,
  formData: FormData,
) {
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();
  const confirmPassword = String(formData.get("confirmPassword") || "").trim();

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return { status: "error", message: "All fields are required." };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "error", message: "Invalid email address." };
  }

  
}
