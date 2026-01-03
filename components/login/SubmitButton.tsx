import { useFormState, useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 rounded-lg bg-[#FF0066] px-6 py-3 font-medium 
        text-white transition hover:bg-[#222A8C] disabled:opacity-60"
    >
      {pending ? "Sending..." : "Login"}
    </button>
  );
}
