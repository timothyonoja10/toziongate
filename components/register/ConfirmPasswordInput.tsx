"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function ConfirmPasswordInput({
  password,
  label = "Confirm Password",
  name = "confirmPassword",
  value,
  onChange,
}: {
  password: string;
  label?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isMatch = value.length > 0 && value === password;

  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-[#222A8C]"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder="Re-enter your password"
          className={`w-full rounded-lg border px-4 py-2 pr-12 text-black focus:outline-none ${
            isMatch
              ? "border-green-500 focus:border-green-500"
              : "border-gray-300 focus:border-[#222A8C]"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#222A8C]"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Match Feedback */}
      {value && (
        <p
          className={`mt-1 text-xs ${
            isMatch ? "text-green-600" : "text-red-500"
          }`}
        >
          {isMatch ? "Passwords match" : "Passwords do not match"}
        </p>
      )}
    </div>
  );
}
