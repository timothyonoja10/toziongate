import { useFormState, useFormStatus } from "react-dom";

export default function SubmitButton({ canSubmit } : { canSubmit: boolean; }) {
  const { pending } = useFormStatus();
  const disabled = pending || !canSubmit; 
  
  return (
    <button
      type="submit"
      disabled={disabled}
      className="mt-6 rounded-lg bg-[#FF0066] px-6 py-3 font-medium 
        text-white transition hover:bg-[#222A8C] disabled:opacity-60"
    >
      {pending ? "Sending..." : "Register"}
    </button>
  );
}
