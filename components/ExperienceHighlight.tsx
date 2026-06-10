"use client";

import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function ExperienceHighlight() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
      <div
        ref={ref}
        className={inView ? "animate-fade-in-up" : "opacity-0"}
        style={{ animationDelay: "0.1s" }}
      >
        <p className="font-mono text-xs tracking-widest text-[#273C46] uppercase mb-3">
          Experience
        </p>
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#051A24] tracking-tight mb-8">
          DRDO · <span className="font-mondwest">R&D Intern</span>
        </h2>
        <div className="space-y-4 text-sm md:text-base text-[#051A24]/70 leading-relaxed">
          <p>
            Built CarbonCompanion, a carbon footprint prediction platform achieving R²=0.87 model accuracy through K-means clustering and regression analysis on environmental datasets.
          </p>
          <p>
            Architected system handling 1,000+ concurrent users with 99.7% uptime and 40ms API latency, deploying real-time inference pipeline for carbon emission calculations.
          </p>
          <p>
            Conducted A/B testing on prediction algorithms, improving model accuracy by 23% and reducing false positives in carbon footprint estimates by 31%.
          </p>
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs text-[#273C46] font-mono">
          <span>Jun 2025 – Jul 2025</span>
          <span>·</span>
          <span>New Delhi, India</span>
        </div>
      </div>
    </section>
  );
}
