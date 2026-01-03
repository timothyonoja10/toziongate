"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitRegisterForm } from "@/app/actions/register";
import FormInput from "../contact/FormInput";
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";
import FormPasswordInput from "./FormPasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import type { RegisterFormState } from "@/app/actions/register";

const initialState: RegisterFormState = {
  status: "idle",
};

export default function RegisterSection() {
  const [state, formAction] = useActionState(submitRegisterForm, initialState);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const isConfirmValid = confirmPassword === password && confirmPassword !== "";

  return (
    <section className="w-full bg-white px-4 pt-4 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2">

        {/* ================= GET IN TOUCH ================= */}
        <div className="bg-white">

          <form action={formAction} noValidate aria-describedby="form-status"
            className="border border-[#FF0066] p-4">

            <h2 className="my-4 text-3xl font-semibold text-[#FF0066]">
              Create Account 
            </h2>

            <p className="text-black text-sm mb-6">
              Enter your details below to create your account 
            </p>

            {/* Names */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormInput label="First Name" name="firstName" />
              <FormInput label="Last Name" name="lastName" />
            </div>

            {/* Email */}
            <FormInput label="Email" name="email" type="email" />

            <FormPasswordInput label="Password" name="password" value={password} onChange={setPassword} onStrengthChange={setCanSubmit} />

            <ConfirmPasswordInput password={password} value={confirmPassword} onChange={setConfirmPassword} />

            <SubmitButton canSubmit={canSubmit && isConfirmValid} />

            {/* Status */}
            <div id="form-status" aria-live="polite" className="mt-4">
              {state?.status === "success" && (
                <p className="text-green-600">
                  ✅ You've been registered successfully.
                </p>
              )}
              {state?.status === "error" && (
                <p className="text-red-600">
                  ❌ {state.message}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* ================= Image ================= */}
        <div className="-mx-4 md:-mx-0">
          <img
            src="/auth.jpg"
            alt="Login illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
