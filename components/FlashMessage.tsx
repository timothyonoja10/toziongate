"use client";

import { useEffect, useState, startTransition } from "react";
import { clearFlash } from "@/app/actions/flash";

interface FlashMessageProps {
  initialMessage?: string;
}

export default function FlashMessage({ initialMessage }: FlashMessageProps) {
  const [message, setMessage] = useState<string | undefined | null>(initialMessage);

  useEffect(() => {
    if (message) {
      // Clear the cookie after showing the message
      startTransition(() => {
        clearFlash();
      });

      // Optionally, remove from UI after a few seconds
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message) return null;

  return (
    <div className="mb-4 rounded bg-green-100 p-3 text-green-800">
      {message}
    </div>
  );
}
