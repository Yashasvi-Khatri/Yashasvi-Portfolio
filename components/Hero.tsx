"use client";

import { Github, ArrowRight, Mail } from "lucide-react";
import Terminal from "./Terminal";

export default function Hero() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[70px] pb-20 px-6 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          {/* Availability badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse2" />
            <span className="text-emerald-400 text-[12px] font-medium tracking-wide">
              Open to Frontend & Full Stack Opportunities
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.08] text-zinc-50 mb-5">
            Full Stack MERN Developer building{" "}
            <span className="text-gradient">scalable AI-powered</span> web
            applications.
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up-delay-2 text-[17px] text-zinc-400 leading-relaxed mb-9 max-w-[500px]">
            AI & Data Science undergraduate focused on modern React ecosystems,
            scalable backend systems, real-time applications, and
            production-grade user experiences.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-3 mb-11">
            <button
              onClick={() => scroll("projects")}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-colors"
            >
              View Projects <ArrowRight size={15} />
            </button>
            <a
              href="https://github.com/Yashasvi-Khatri"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-transparent border border-white/12 hover:border-white/20 text-zinc-300 font-medium text-[14px] px-5 py-2.5 rounded-lg transition-colors"
            >
              <Github size={15} /> GitHub
            </a>
            <button
              onClick={() => scroll("contact")}
              className="flex items-center gap-2 bg-transparent border border-white/12 hover:border-white/20 text-zinc-300 font-medium text-[14px] px-5 py-2.5 rounded-lg transition-colors"
            >
              <Mail size={15} /> Contact Me
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 flex gap-8 pt-7 border-t border-white/[0.06]">
            {[
              ["4+", "Projects Shipped"],
              ["DRDO", "R&D Internship"],
              ["MERN", "Core Stack"],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-[18px] font-bold text-zinc-100 tracking-tight">
                  {val}
                </div>
                <div className="text-[12px] text-zinc-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Terminal */}
        <div className="animate-fade-up-delay-3">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
