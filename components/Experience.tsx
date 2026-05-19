"use client";

import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { useInView } from "@/hooks/useInView";

const BULLETS = [
  "Contributed to mission-critical R&D projects within a zero-defect-tolerance engineering environment, applying structured debugging and systematic problem-solving to complex defense technology challenges.",
  "Collaborated with cross-functional engineering teams on high-reliability systems, gaining exposure to enterprise-grade software quality standards and rigorous validation workflows.",
  "Implemented systematic analysis and documentation processes for technical deliverables, ensuring compliance with mission-critical accuracy requirements.",
  "Applied modern problem-solving methodologies in a structured government engineering environment, developing strong discipline in code quality and reliability engineering.",
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="Professional engagements in high-reliability engineering environments."
        />

        <div
          ref={ref}
          className="relative card-bg card-border rounded-2xl p-9 overflow-hidden"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Left accent bar */}
          <div
            className="absolute top-0 left-0 bottom-0 w-[3px]"
            style={{ background: "linear-gradient(180deg, #6366f1, #8b5cf6)" }}
          />

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-[19px] font-bold text-zinc-100 tracking-tight mb-1">
                Research & Development Intern
              </h3>
              <div className="text-[15px] font-semibold text-indigo-400 mb-0.5">
                Defence Research and Development Organisation
              </div>
              <div className="text-[12px] text-zinc-500">
                DRDO · Government of India · New Delhi
              </div>
            </div>
            <span className="shrink-0 self-start text-[12px] font-medium px-3 py-1.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 whitespace-nowrap">
              Jun 2025 – Jul 2025
            </span>
          </div>

          <ul className="space-y-3">
            {BULLETS.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-indigo-400 mt-1 shrink-0">▸</span>
                <span className="text-[13px] text-zinc-400 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap gap-2">
            {[
              "Mission-Critical R&D",
              "Cross-functional Engineering",
              "Systems Reliability",
              "Defense Technology",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded bg-white/[0.04] text-zinc-500 border border-white/[0.07]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
