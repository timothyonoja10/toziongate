
"use client";

import { useEffect, useState } from "react";

export default function Counter({end, label, }: { end: number; label: string;}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration in ms
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-bold md:text-2xl">
          {count.toLocaleString()}
        </span>
        <span className="text-xl font-bold">+</span>
      </div>
      <p className="mt-2 text-md font-medium opacity-90">
        {label}
      </p>
    </div>
  );
}
