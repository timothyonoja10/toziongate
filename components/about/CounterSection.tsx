"use client";

import { useEffect, useState } from "react";
import Counter from "./Counter";

export default function CounterSection() {
  return (
    <section className="w-full bg-[#FF0066] py-16">
      <div className="mx-auto flex max-w-8xl flex-col gap-10 px-6 text-white md:flex-row md:justify-center md:gap-40">
        
        <Counter end={1500} label="Certified Courses"/>

        <Counter end={5000} label="Job Offers"/>

        <Counter end={25000} label="Job Matchings"/>

      </div>
    </section>
  );
}
