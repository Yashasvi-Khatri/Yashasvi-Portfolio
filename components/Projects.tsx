"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const PROJECTS = [
  {
    id: 1,
    title: "SEO Tag Scanner",
    tagline: "Developer SEO Analysis Tool",
    problem: "Developers lack a quick, reliable way to audit metadata structures and Open Graph tags across their websites.",
    solution: "Built a TypeScript-first Next.js tool that analyzes metadata, OG tags, and provides SEO diagnostics with a fast, analytical UI.",
    architecture: "Next.js App Router with TypeScript, server-side rendering for performance, and real-time tag parsing.",
    challenges: ["Handling CORS restrictions for cross-origin requests", "Parsing diverse HTML structures reliably", "Optimizing for fast analysis of large pages"],
    outcomes: ["Successfully audits metadata in under 2 seconds", "Supports analysis of any publicly accessible URL", "Clean, developer-friendly interface"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO APIs"],
    live: "https://seo-tag-scanner.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/SeoTagScanner",
    category: "Dev Tools",
    accent: "#3b82f6",
  },
  {
    id: 2,
    title: "Wikipedia Analysis",
    tagline: "Data Analysis & Visualization Tool",
    problem: "Researchers and students need efficient ways to analyze and visualize Wikipedia article data for academic projects.",
    solution: "Developed a data analysis tool that fetches Wikipedia API data, processes it, and presents insights through interactive visualizations.",
    architecture: "React frontend with Wikipedia API integration, data processing pipeline, and chart-based visualization components.",
    challenges: ["Handling large datasets from Wikipedia API", "Creating meaningful visualizations from unstructured data", "Managing API rate limits effectively"],
    outcomes: ["Successfully processes articles across multiple languages", "Provides actionable insights through visualizations", "Used for academic research projects"],
    stack: ["React.js", "Wikipedia API", "Data Visualization", "Python"],
    live: "https://wiki-analyzer.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/Wikipedia-Analysis",
    category: "Data Science",
    accent: "#f59e0b",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-bg card-border rounded-2xl overflow-hidden hover:border-white/15 transition-colors"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/[0.06]">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-zinc-100 tracking-tight mb-1">
              {project.title}
            </h3>
            <p className="text-sm font-medium" style={{ color: project.accent }}>
              {project.tagline}
            </p>
          </div>
          <span className="text-[10px] font-semibold px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide">
            PRODUCTION
          </span>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-2">
            Problem
          </h4>
          <p className="text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-2">
            Solution
          </h4>
          <p className="text-sm text-zinc-400 leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Architecture */}
      <div className="px-6 pb-6">
        <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-2">
          Architecture
        </h4>
        <p className="text-sm text-zinc-400 leading-relaxed">{project.architecture}</p>
      </div>

      {/* Challenges */}
      <div className="px-6 pb-6">
        <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-2">
          Key Challenges
        </h4>
        <ul className="space-y-1.5">
          {project.challenges.map((challenge, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
              <ArrowRight size={12} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
              {challenge}
            </li>
          ))}
        </ul>
      </div>

      {/* Outcomes */}
      <div className="px-6 pb-6">
        <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-2">
          Outcomes
        </h4>
        <ul className="space-y-1.5">
          {project.outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
              <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: project.accent }} />
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="px-6 pb-6">
        <h4 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase mb-2">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2 py-1 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.07] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 pt-0 flex gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 text-white text-sm font-semibold py-2.5 rounded-lg transition-opacity hover:opacity-90"
          style={{ background: project.accent }}
        >
          <ExternalLink size={14} /> Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 text-zinc-300 text-sm font-medium py-2.5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
        >
          <Github size={14} /> GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Additional Projects"
          subtitle="More case studies exploring diverse technical challenges and solutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
