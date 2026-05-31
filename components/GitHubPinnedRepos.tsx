"use client";

import { motion } from "framer-motion";
import { Github, Star, ExternalLink, GitBranch } from "lucide-react";
import SectionHeader from "./SectionHeader";

const REPOS = [
  {
    name: "EcoEducator",
    description: "B2B edtech platform for schools — Gemini AI EcoCoach, Google Maps CO₂ calculator, gamified EcoXP rewards, teacher dashboard. React 18 + TypeScript + Vite + Firebase + shadcn/ui.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2,
    forks: 0,
    url: "https://github.com/Yashasvi-Khatri/EcoEducator",
  },
  {
    name: "mazer-app",
    description: "AI beat studio — describe a beat in English, get a 16-step pattern. Web Audio API DSP synthesis (no samples), OpenRouter/Llama 3.1, Firebase. Research paper: \"Constructivist Approach to AI-Assisted Music Composition\" (VIPS-TC 2025).",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2,
    forks: 0,
    url: "https://github.com/Yashasvi-Khatri/mazer-app",
  },
  {
    name: "SeoTagScanner",
    description: "A full-stack web application that crawls websites and extracts SEO metadata, with JWT authentication and per-user scan history.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1,
    forks: 0,
    url: "https://github.com/Yashasvi-Khatri/SeoTagScanner",
  },
  {
    name: "Yashasvi-Portfolio",
    description: "Personal portfolio website of yashasvi khattri",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 2,
    forks: 0,
    url: "https://github.com/Yashasvi-Khatri/Yashasvi-Portfolio",
  },
  {
    name: "SNIPFIT",
    description: "Comprehensive fitness application built with modern web technologies to help users track their fitness journey, manage memberships, and connect with trainers.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 0,
    forks: 0,
    url: "https://github.com/Yashasvi-Khatri/SNIPFIT",
  },
  {
    name: "wiki-analyzer",
    description: "Wikipedia article analysis tool with data extraction and visualization capabilities.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 1,
    forks: 0,
    url: "https://github.com/Yashasvi-Khatri/wiki-analyzer",
  },
];

function RepoCard({ repo, index }: { repo: typeof REPOS[0]; index: number }) {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-bg card-border rounded-xl p-5 hover:border-indigo-500/30 transition-colors group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Github className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
          <h3 className="text-[15px] font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
            {repo.name}
          </h3>
        </div>
        <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
      </div>
      <p className="text-[13px] text-zinc-400 mb-4 line-clamp-2">{repo.description}</p>
      <div className="flex items-center gap-4 text-[12px] text-zinc-500">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: repo.languageColor }}
          />
          <span>{repo.language}</span>
        </div>
        {repo.stars > 0 && (
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5" />
            <span>{repo.stars}</span>
          </div>
        )}
        {repo.forks > 0 && (
          <div className="flex items-center gap-1">
            <GitBranch className="w-3.5 h-3.5" />
            <span>{repo.forks}</span>
          </div>
        )}
      </div>
    </motion.a>
  );
}

export default function GitHubPinnedRepos() {
  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="GitHub Repositories"
          subtitle="Explore my open-source contributions and personal projects."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REPOS.map((repo, index) => (
            <RepoCard key={repo.name} repo={repo} index={index} />
          ))}
        </div>
        <motion.a
          href="https://github.com/Yashasvi-Khatri"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-8 text-[14px] text-zinc-400 hover:text-indigo-400 transition-colors"
        >
          View all repositories on GitHub <Github className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}
