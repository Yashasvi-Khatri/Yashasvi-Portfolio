"use client";

import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useInView } from "@/hooks/useInView";

const PROJECTS = [
  {
    id: 1,
    title: "EcoKids",
    tagline: "Interactive Environmental Education Platform",
    description:
      "Educational platform promoting environmental awareness through engaging digital experiences and responsive UI systems.",
    highlights: [
      "Responsive MERN stack architecture",
      "Interactive learning modules",
      "JWT authentication & REST APIs",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    live: "https://eco-educator-8ivl.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/EcoKids",
    category: "EdTech",
    accent: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
  },
  {
    id: 2,
    title: "Mazer AI Music",
    tagline: "AI-Powered Music Generation Platform",
    description:
      "Generative AI music platform with scalable frontend architecture, Firebase authentication, and modern dynamic UI systems.",
    highlights: [
      "AI product-inspired UX patterns",
      "Firebase auth & user sessions",
      "Real-time state management",
    ],
    stack: ["React.js", "Node.js", "Firebase", "Tailwind CSS", "AI APIs"],
    live: "https://mazer-app-gamma.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/mazer-app",
    category: "AI Product",
    accent: "#8b5cf6",
    accentBg: "rgba(139,92,246,0.08)",
  },
  {
    id: 3,
    title: "BusyBuy",
    tagline: "Modern E-Commerce Platform",
    description:
      "Production-style e-commerce platform featuring Redux state management, scalable shopping workflows, and responsive component architecture.",
    highlights: [
      "Redux global state management",
      "E-commerce cart & order flows",
      "Optimized product rendering",
    ],
    stack: ["React.js", "Redux", "Express.js", "MongoDB", "Tailwind CSS"],
    live: "https://busy-buy-2-7x8c.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/BusyBuy-2",
    category: "E-Commerce",
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
  },
  {
    id: 4,
    title: "SEO Tag Scanner",
    tagline: "Developer SEO Analysis Tool",
    description:
      "TypeScript-first Next.js developer tool for auditing metadata structures, Open Graph tags, and SEO diagnostics with fast analytical UI.",
    highlights: [
      "Next.js App Router + TypeScript",
      "Metadata & OG tag analysis",
      "Performance-optimized rendering",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO APIs"],
    live: "https://seo-tag-scanner.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/SeoTagScanner",
    category: "Dev Tools",
    accent: "#3b82f6",
    accentBg: "rgba(59,130,246,0.08)",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className="group card-bg card-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s, box-shadow 0.3s ease`,
        boxShadow: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px ${project.accent}18`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${project.accent}30`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.07)";
      }}
    >
      {/* Card header */}
      <div
        className="h-[110px] flex items-center justify-center relative border-b border-white/[0.05]"
        style={{ background: project.accentBg }}
      >
        <div className="text-center">
          <div
            className="text-3xl font-black font-mono opacity-50"
            style={{ color: project.accent }}
          >
            {"{}"}
          </div>
          <div
            className="text-[10px] font-bold tracking-widest uppercase mt-1 opacity-75"
            style={{ color: project.accent }}
          >
            {project.category}
          </div>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide">
            ● PRODUCTION
          </span>
        </div>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="absolute top-3 right-3 text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors px-2 py-1 rounded bg-white/5 border border-white/[0.07]"
        >
          vercel.app ↗
        </a>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3
          className="text-[16px] font-bold text-zinc-100 mb-1 tracking-tight"
        >
          {project.title}
        </h3>
        <p className="text-[12px] font-medium mb-3" style={{ color: project.accent }}>
          {project.tagline}
        </p>
        <p className="text-[13px] text-zinc-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mb-4 space-y-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[12px] text-zinc-400">
              <span style={{ color: project.accent }} className="mt-0.5">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Stack chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.07] font-mono"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-white text-[12px] font-semibold py-2 rounded-lg transition-opacity hover:opacity-80"
            style={{ background: project.accent }}
          >
            <ExternalLink size={12} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 text-zinc-300 text-[12px] font-medium py-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          >
            <Github size={12} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="Production deployments — real applications built and shipped."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
