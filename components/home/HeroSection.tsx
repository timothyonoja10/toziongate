"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = [
  "/hero-1.jpg", 
  "/hero-2.JPG", 
  "/hero-3.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      
      {/* Background Images */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Toziongate Career Opportunities"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover brightness-75"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 
        bg-gradient-to-r 
        from-black/70 via-black/40 to-black/10"
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 pt-24 pb-16 md:pr-64">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Advance Your Career, Achieve Your Goals
        </h1>

        <p className="mt-4 max-w-2xl text-gray-200">
          Unlock personalized guidance and professional training to succeed in health,
          social care, security, and international opportunities. Apply for NHS and HSC
          jobs, get expert CV support, attend UK-accredited courses, and prepare for a
          brighter future.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/services"
            className="px-6 py-3 rounded-xl bg-[#FF0066] text-white font-medium hover:bg-[#222A8C] transition"
          >
            Find out more
          </a>

          <a
            href="/contact"
            className="hidden md:inline-block px-6 py-3 rounded-xl border border-white text-white font-medium hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
