"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitLoginForm } from "@/app/actions/login";
import FormInput from "../contact/FormInput";
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";
import FormPasswordInput from "./FormPasswordInput";
import type { LoginFormState } from "@/app/actions/login";

const initialState: LoginFormState = {
  status: "idle",
};

export default function LoginSection() {
  const [state, formAction] = useActionState(submitLoginForm, initialState);
  
  return (
    <section className="w-full bg-white px-4 pt-4 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2">

        {/* ================= GET IN TOUCH ================= */}
        <div className="bg-white">

          <form action={formAction} noValidate aria-describedby="form-status"
            className="border border-[#FF0066] p-4">

            <h2 className="my-4 text-3xl font-semibold text-[#FF0066]">
              Welcome Back!
            </h2>
            <h2 className="mb-8 text-xm">
              Enter your student account details below to log in.
            </h2>

            {/* Email */}
            <FormInput label="Email" name="email" type="email" />
            <FormPasswordInput label="Password" name="password" />


            <SubmitButton />

            {/* Status */}
            <div id="form-status" aria-live="polite" className="mt-4">
              {state?.status === "success" && (
                <p className="text-green-600">
                  ✅ You've been logged in successfully.
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
