"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Facebook, Linkedin } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import SocialLink from "./SocialLink";
import { useActionState } from "react";

const initialState = { status: "idle", message: "" };

export default function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  
  return (
    <section className="w-full bg-white px-4 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 md:grid-cols-5">

        {/* ================= GET IN TOUCH ================= */}
        <div className="bg-white md:col-span-3">
          <h2 className="mb-4 text-lg font-bold text-[#222A8C]">
            Get in touch
          </h2>

          <p className="mb-8 text-sm text-gray-600 leading-relaxed">
            Thank you for choosing Toziongate Institute as your partner in education and 
            career development. We’re delighted to connect with you and support you at every 
            stage of your learning journey. Whether you’re seeking more information about 
            our programmes, need guidance on applications, or wish to explore partnership 
            opportunities, our team is ready to assist you.
          </p>

          <form action={formAction} noValidate aria-describedby="form-status"
            className="rounded-2xl border border-[#FF0066] p-6 shadow-sm">

            <h3 className="mb-6 text-xl font-semibold text-[#222A8C]">
              Contact Us
            </h3>

            {/* Names */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormInput label="First Name" name="firstName" />
              <FormInput label="Last Name" name="lastName" />
            </div>

            {/* Email */}
            <FormInput label="Email" name="email" type="email" />

            {/* Message */}
            <div className="mt-4">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#222A8C]">
                Your Message
              </label>
              <textarea id="message" name="message" rows={4} required placeholder="Type your message here"
                className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 focus:border-[#222A8C] focus:outline-none"
              />
            </div>

            {/* reCAPTCHA
            <div
              className="g-recaptcha mt-6"
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            /> */}

            {/* Honeypot (hidden) */}
            <input type="text" name="website" autoComplete="off" className="hidden" />

            <SubmitButton />

            {/* Status */}
            <div id="form-status" aria-live="polite" className="mt-4">
              {state?.status === "success" && (
                <p className="text-green-600">
                  ✅ Your message has been sent successfully.
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

        {/* ================= CONTACT DETAILS ================= */}
        <div className="rounded-2xl bg-white py-4 pr-4 pl-8 md:col-span-2">
          <h3 className="mb-4 text-md font-semibold text-[#222A8C]">
            Office Address
          </h3>
          <p className="mb-6 text-gray-700 text-xs">
            Barking and Dagenham, United Kingdom
          </p>

          <h3 className="mb-4 text-md font-semibold text-[#222A8C]">
            Contact Information
          </h3>

          <ul className="mb-6 list-disc space-y-2 text-gray-700 text-xs pl-7">
            <li><strong>General Inquiries:</strong> <span className="text-[#FF0066]">info@toziongate.co.uk</span> </li>
            <li><strong>Recruitment:</strong> <span className="text-[#FF0066]">recruitment@toziongate.co.uk</span></li>
            <li><strong>Partnerships:</strong> <span className="text-[#FF0066]">partnerships@toziongate.co.uk</span></li>
            <li><strong>Phone:</strong> <span className="text-[#FF0066]">+44 794 938 7706</span></li>
          </ul>

          <h3 className="mb-2 text-md font-semibold text-[#222A8C]">
            Connect With Us
          </h3>

          <div className="flex gap-4">
            <SocialLink icon={<Facebook size={18} />} label="Ti-facebook" />
            <SocialLink icon={<Linkedin size={18} />} label="Ti-linkedin" />
          </div>
        </div>
      </div>
    </section>
  );
}




