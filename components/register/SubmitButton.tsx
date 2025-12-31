import { useFormState, useFormStatus } from "react-dom";

export default function SubmitButton({ canSubmit } : { canSubmit: boolean; }) {
  const { pending } = useFormStatus();
  const disabled = pending || !canSubmit; 
  
  return (
    <button
      type="submit"
      disabled={disabled}
      className="mt-6 rounded-lg bg-[#222A8C] px-6 py-3 font-medium 
        text-white transition hover:bg-[#FF0066] disabled:opacity-60"
    >
      {pending ? "Sending..." : "Register"}
    </button>
  );
}
