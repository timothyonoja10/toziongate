import { useState } from "react";

export default function FormPasswordInput({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

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
          required
          placeholder={`Enter your ${label.toLowerCase()}`}
          className="w-full text-black rounded-lg border border-gray-300 px-4 py-2 pr-12 focus:border-[#222A8C] focus:outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-[#222A8C]"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
