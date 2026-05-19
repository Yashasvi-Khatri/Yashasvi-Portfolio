"use client";

import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import { useInView } from "@/hooks/useInView";

const INTERESTS = [
  "AI-enabled products",
  "Real-time systems",
  "SaaS applications",
  "Developer tools",
  "Modern frontend architecture",
  "Open-source engineering",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <SectionHeader title="About" />

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Bio */}
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>
            <p className="text-[15px] text-zinc-400 leading-[1.8] mb-4">
              Full Stack Developer and AI & Data Science undergraduate at{" "}
              <span className="text-zinc-200 font-medium">
                GGSIPU (2023–2027)
              </span>{" "}
              specializing in MERN stack engineering, scalable frontend systems,
              and modern web application architecture.
            </p>
            <p className="text-[15px] text-zinc-400 leading-[1.8]">
              Focused on building production-grade applications with clean user
              experiences, performant backend systems, and scalable deployment
              workflows. Previously an intern at{" "}
              <span className="text-zinc-200 font-medium">DRDO</span> — working
              in mission-critical engineering environments.
            </p>
          </div>

          {/* Interests */}
          <div>
            <h4 className="text-[12px] font-semibold text-indigo-400 tracking-widest uppercase mb-4">
              Interested in
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {INTERESTS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 card-bg card-border rounded-xl px-4 py-3 hover:border-indigo-500/30 transition-colors"
                >
                  <span className="text-indigo-400">▸</span>
                  <span className="text-[14px] text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
