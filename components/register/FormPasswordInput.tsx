import { useEffect, useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function FormPasswordInput({
  label,
  name,
  value,
  onChange,
  onStrengthChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  onStrengthChange?: (isStrongEnough: boolean) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const checks = {
    length: value.length >= 8,
    uppercase: /[A-Z]/.test(value),
    number: /[0-9]/.test(value),
    special: /[^A-Za-z0-9]/.test(value),
  };

  const strengthScore = Object.values(checks).filter(Boolean).length;
  const isStrongEnough = strengthScore >= 3;

  useEffect(() => {
    onStrengthChange?.(isStrongEnough);
  }, [isStrongEnough, onStrengthChange]);

  const strengthLabel = ["Weak", "Fair", "Good", "Strong"];
  const strengthColor = [
    "bg-red-500",
    "bg-yellow-400",
    "bg-blue-500",
    "bg-green-500",
  ];

  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-[#222A8C]"
      >
        {label}
      </label>

      {/* Password Input */}
      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required
          placeholder={`Enter your ${label.toLowerCase()}`}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-12 text-black focus:border-[#222A8C] focus:outline-none"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#222A8C]"
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Strength Meter */}
      {value && (
        <div className="mt-2">
          <div className="h-2 w-full rounded bg-gray-200">
            <div
              className={`h-2 rounded transition-all duration-300 ${
                strengthColor[strengthScore - 1] || "bg-red-500"
              }`}
              style={{ width: `${(strengthScore / 4) * 100}%` }}
            />
          </div>

          <p className="mt-1 text-xs text-gray-600">
            Strength:{" "}
            <span className="font-medium">
              {strengthLabel[strengthScore - 1] || "Weak"}
            </span>
          </p>
        </div>
      )}

      {/* Checklist */}
      {value && (
        <ul className="mt-3 space-y-1 text-sm">
          {[
            { label: "At least 8 characters", valid: checks.length },
            { label: "One uppercase letter", valid: checks.uppercase },
            { label: "One number", valid: checks.number },
            { label: "One special character", valid: checks.special },
          ].map((item) => (
            <li
              key={item.label}
              className={`flex items-center gap-2 ${
                item.valid ? "text-green-600" : "text-gray-500"
              }`}
            >
              <CheckCircleIcon
                className={`h-4 w-4 ${
                  item.valid ? "opacity-100" : "opacity-30"
                }`}
              />
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
