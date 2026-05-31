"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Github } from "lucide-react";
import Terminal from "./Terminal";

export default function Hero() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[70px] pb-20 px-6 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div className="space-y-8">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-[13px] font-medium tracking-wide">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight leading-[1.1] text-zinc-50"
          >
            Building AI-powered products that solve{" "}
            <span className="text-gradient">real-world problems.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18px] text-zinc-400 leading-relaxed max-w-[520px]"
          >
            Full Stack Developer focused on AI, Data Systems and modern web experiences.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scroll("featured-projects")}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[15px] px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scroll("research")}
              className="flex items-center gap-2 bg-transparent border border-white/12 hover:border-white/20 text-zinc-300 font-medium text-[15px] px-6 py-3 rounded-lg transition-all hover:bg-white/5"
            >
              <FileText size={16} /> Research
            </button>
            <a
              href="https://github.com/Yashasvi-Khatri"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-transparent border border-white/12 hover:border-white/20 text-zinc-300 font-medium text-[15px] px-6 py-3 rounded-lg transition-all hover:bg-white/5"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="mailto:yashasvikhatrii@gmail.com"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[15px] px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              Hire Me
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-10 pt-8 border-t border-white/[0.08]"
          >
            {[
              ["5+", "Deployed Projects"],
              ["1", "Research Publication"],
              ["4+", "AI Applications"],
            ].map(([val, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div className="text-[24px] font-bold text-zinc-100 tracking-tight">
                  {val}
                </div>
                <div className="text-[13px] text-zinc-500 mt-1">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right — Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
