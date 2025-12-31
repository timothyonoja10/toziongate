import { useFormState, useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 rounded-lg bg-[#222A8C] px-6 py-3 font-medium 
        text-white transition hover:bg-[#FF0066] disabled:opacity-60"
    >
      {pending ? "Sending..." : "Login"}
    </button>
  );
}
