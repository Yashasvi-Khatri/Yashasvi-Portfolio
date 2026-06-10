"use client";

import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function QuoteSection() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div
        ref={ref}
        className={inView ? "animate-fade-in-up" : "opacity-0"}
        style={{ animationDelay: "0.1s" }}
      >
        <blockquote className="font-mondwest text-3xl md:text-4xl font-semibold text-[#0D212C] leading-tight">
          "Every line of code is a conversation with the future."
        </blockquote>
        <p className="mt-4 text-sm text-[#273C46] font-mono">
          — Building systems that matter
        </p>
      </div>
    </section>
  );
}
