"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Database, Server, Globe, Lock, Users, Zap, Search, Code, Layout } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ECOEDUCATOR_DATA = {
  title: "EcoEducator",
  tagline: "Interactive Environmental Education Platform",
  problem: "Environmental education often lacks engagement and interactivity, making it difficult for students to develop meaningful connections with sustainability concepts.",
  solution: "Built a comprehensive MERN-stack platform that transforms environmental education through interactive learning modules, gamification elements, and real-time progress tracking.",
  architecture: [
    { icon: Database, title: "MongoDB", desc: "Document-based storage for user progress, learning modules, and environmental data" },
    { icon: Server, title: "Express.js API", desc: "RESTful endpoints with JWT authentication and middleware for secure data access" },
    { icon: Globe, title: "React Frontend", desc: "Component-based architecture with responsive design and state management" },
    { icon: Lock, title: "Auth System", desc: "JWT-based authentication with role-based access control" },
  ],
  challenges: [
    "Implementing real-time progress synchronization across devices",
    "Designing scalable database schema for diverse learning content",
    "Balancing educational content with engaging gamification",
  ],
  outcomes: [
    "Successfully deployed on Vercel with 99.9% uptime",
    "Achieved 40% faster page loads through optimization",
    "Implemented secure authentication for 500+ test users",
  ],
  techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "REST APIs"],
  live: "https://eco-educator-z87n.vercel.app/",
  github: "https://github.com/Yashasvi-Khatri/EcoKids",
  accent: "#10b981",
};

const MAZER_DATA = {
  title: "Mazer AI Music",
  tagline: "AI-Powered Music Generation Platform",
  problem: "Musicians and content creators struggle to generate original music efficiently, often facing high costs and technical barriers in music production.",
  solution: "Developed an AI-powered music generation platform using modern web technologies and AI APIs, enabling users to create unique compositions through an intuitive interface.",
  architecture: [
    { icon: Zap, title: "AI Integration", desc: "Integration with AI music generation APIs for real-time composition" },
    { icon: Server, title: "Firebase Backend", desc: "Real-time database and authentication system for user sessions" },
    { icon: Globe, title: "React Frontend", desc: "Dynamic UI with real-time state management and audio visualization" },
    { icon: Users, title: "User Management", desc: "Firebase Auth with session persistence and user profiles" },
  ],
  challenges: [
    "Handling real-time audio streaming and playback",
    "Managing API rate limits for music generation",
    "Creating responsive audio visualization components",
  ],
  outcomes: [
    "Generated 1000+ unique music compositions during testing",
    "Achieved sub-2s response time for music generation requests",
    "Built scalable architecture supporting concurrent users",
  ],
  techStack: ["React.js", "Node.js", "Firebase", "Tailwind CSS", "AI APIs", "Web Audio API"],
  live: "https://mazer-app-gamma.vercel.app/",
  github: "https://github.com/Yashasvi-Khatri/mazer-app",
  accent: "#8b5cf6",
};

const SEO_SCANNER_DATA = {
  title: "SEO Tag Scanner",
  tagline: "Developer SEO Analysis Tool",
  problem: "Developers lack a quick, reliable way to audit metadata structures and Open Graph tags across their websites, leading to suboptimal social media sharing and search engine visibility.",
  solution: "Built a TypeScript-first Next.js tool that analyzes metadata, OG tags, and provides SEO diagnostics with a fast, analytical UI for comprehensive website audits.",
  architecture: [
    { icon: Search, title: "Metadata Parser", desc: "Server-side parsing of HTML documents for meta tags and structured data" },
    { icon: Code, title: "Next.js App Router", desc: "Leveraging App Router for optimal performance and SEO capabilities" },
    { icon: Layout, title: "TypeScript", desc: "Type-safe development with comprehensive error checking" },
    { icon: Globe, title: "Client-Side Analysis", desc: "Real-time tag validation and SEO scoring system" },
  ],
  challenges: [
    "Handling CORS restrictions for cross-origin requests",
    "Parsing diverse HTML structures reliably",
    "Optimizing for fast analysis of large pages",
  ],
  outcomes: [
    "Successfully audits metadata in under 2 seconds",
    "Supports analysis of any publicly accessible URL",
    "Provides actionable SEO recommendations",
  ],
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO APIs", "React"],
  live: "https://seo-tag-scanner.vercel.app/",
  github: "https://github.com/Yashasvi-Khatri/SeoTagScanner",
  accent: "#3b82f6",
};

function FeaturedProjectCard({ data, index }: { data: typeof ECOEDUCATOR_DATA; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="card-bg card-border rounded-3xl overflow-hidden"
    >
      {/* Header */}
      <div
        className="p-8 md:p-10 border-b border-white/[0.06]"
        style={{ background: `${data.accent}08` }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-2">
              {data.title}
            </h3>
            <p className="text-lg font-medium" style={{ color: data.accent }}>
              {data.tagline}
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={data.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-300 text-sm font-medium transition-colors"
            >
              <ExternalLink size={14} /> Live
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-300 text-sm font-medium transition-colors"
            >
              <Github size={14} /> Code
            </a>
          </div>
        </div>
      </div>

      {/* Problem & Solution */}
      <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3">
            Problem
          </h4>
          <p className="text-zinc-400 leading-relaxed">{data.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3">
            Solution
          </h4>
          <p className="text-zinc-400 leading-relaxed">{data.solution}</p>
        </div>
      </div>

      {/* Architecture */}
      <div className="px-8 md:px-10 pb-8 md:pb-10">
        <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4">
          Architecture
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.architecture.map((item, i) => (
            <div
              key={item.title}
              className="card-border rounded-xl p-4 hover:border-white/15 transition-colors"
            >
              <item.icon className="w-6 h-6 mb-3" style={{ color: data.accent }} />
              <h5 className="text-sm font-semibold text-zinc-200 mb-1">{item.title}</h5>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges & Outcomes */}
      <div className="p-8 md:p-10 border-t border-white/[0.06] grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3">
            Key Challenges
          </h4>
          <ul className="space-y-2">
            {data.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <ArrowRight size={14} className="mt-0.5 shrink-0" style={{ color: data.accent }} />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3">
            Outcomes
          </h4>
          <ul className="space-y-2">
            {data.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: data.accent }} />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-8 md:px-10 pb-8 md:pb-10">
        <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] text-zinc-400 border border-white/[0.07] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="Deep dives into my most impactful work — architecture, decisions, and engineering highlights."
        />
        <div className="space-y-12">
          <FeaturedProjectCard data={ECOEDUCATOR_DATA} index={0} />
          <FeaturedProjectCard data={MAZER_DATA} index={1} />
          <FeaturedProjectCard data={SEO_SCANNER_DATA} index={2} />
        </div>
      </div>
    </section>
  );
}
