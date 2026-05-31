"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Target, Link2, ArrowRight, Cpu, Leaf } from "lucide-react";
import SectionHeader from "./SectionHeader";

const RESEARCH_PROJECTS = [
  {
    id: 1,
    title: "A Constructivist Approach to AI-Assisted Music Composition",
    category: "AI & Music",
    icon: BookOpen,
    summary: "This research explores how constructivist learning principles can be applied to AI-assisted music composition, focusing on the collaborative relationship between human creativity and artificial intelligence in musical creation.",
    contributions: [
      "Developed a theoretical framework for AI-human collaboration in music",
      "Analyzed the impact of AI tools on creative decision-making processes",
      "Proposed new methodologies for evaluating AI-generated music quality",
    ],
    keyFindings: [
      "AI tools enhance rather than replace human creativity when used constructively",
      "The most successful compositions result from iterative human-AI collaboration",
      "User interface design significantly impacts the creative workflow",
    ],
    relationToProject: "This research directly informed the design and development of Mazer AI Music, particularly in how users interact with AI-generated music and the importance of maintaining human creative control throughout the composition process.",
    accent: "indigo",
  },
  {
    id: 2,
    title: "CarbonCompanion: AI-Powered Carbon Footprint Management System",
    category: "AI & Sustainability",
    icon: Leaf,
    summary: "CarbonCompanion is an AI-powered sustainability platform designed to help individuals track, understand, and reduce their carbon footprint. The system combines carbon emission calculations, predictive analytics, personalized recommendations, and interactive visualizations to make environmental impact tracking more accessible and actionable.",
    contributions: [
      "Designed a full-stack architecture integrating React, Node.js, databases, and machine learning services",
      "Developed AI-driven carbon footprint prediction and recommendation workflows using machine learning models",
      "Built user activity tracking, sustainability goal management, and analytics dashboards",
      "Created a scalable system architecture capable of supporting real-time calculations and personalized insights",
    ],
    keyFeatures: [
      "Real-time carbon footprint tracking",
      "AI-powered emission forecasting",
      "Personalized sustainability recommendations",
      "Interactive environmental analytics dashboard",
      "Goal-setting and progress monitoring",
      "Gamified engagement and achievement system",
    ],
    keyFindings: [
      "Personalized AI recommendations can drive meaningful behavioral change and improve user engagement",
      "Transportation and energy consumption emerged as the largest contributors to overall emissions",
      "Interactive visualizations and continuous feedback loops improve user awareness and long-term sustainability habits",
    ],
    technicalHighlights: [
      "Random Forest model for carbon emission prediction",
      "LSTM-based forecasting for future sustainability trends",
      "K-Means clustering for user behavior segmentation",
      "REST API architecture with authentication and activity management",
      "React-based analytics dashboard and visualization system",
    ],
    accent: "emerald",
  },
];

function ResearchCard({ project, index }: { project: typeof RESEARCH_PROJECTS[0]; index: number }) {
  const Icon = project.icon;
  const accentColors = {
    indigo: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-400",
      border: "border-indigo-500/20",
      gradient: "from-indigo-500/5 to-violet-500/5",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "border-emerald-500/20",
      gradient: "from-emerald-500/5 to-teal-500/5",
    },
  };
  const colors = accentColors[project.accent as keyof typeof accentColors];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="card-bg card-border rounded-3xl overflow-hidden"
    >
      {/* Header */}
      <div className={`p-8 md:p-10 border-b border-white/[0.06] bg-gradient-to-r ${colors.gradient}`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
            <Icon className={`w-6 h-6 ${colors.text}`} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-500">{project.category}</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="p-8 md:p-10">
        <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4" /> Summary
        </h4>
        <p className="text-zinc-400 leading-relaxed">{project.summary}</p>
      </div>

      {/* Contributions */}
      <div className="px-8 md:px-10 pb-8 md:pb-10">
        <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 flex items-center gap-2">
          <Target className="w-4 h-4" /> Contributions
        </h4>
        <ul className="space-y-3">
          {project.contributions.map((contribution, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-3 text-zinc-400"
            >
              <ArrowRight size={16} className={`mt-0.5 shrink-0 ${colors.text}`} />
              <span className="text-sm leading-relaxed">{contribution}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Key Features (for CarbonCompanion) */}
      {project.keyFeatures && (
        <div className="px-8 md:px-10 pb-8 md:pb-10">
          <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> Key Features
          </h4>
          <ul className="space-y-3">
            {project.keyFeatures.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 text-zinc-400"
              >
                <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${colors.text.replace('text', 'bg')}`} />
                <span className="text-sm leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Findings */}
      <div className="px-8 md:px-10 pb-8 md:pb-10">
        <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 flex items-center gap-2">
          <Lightbulb className="w-4 h-4" /> Key Findings
        </h4>
        <ul className="space-y-3">
          {project.keyFindings.map((finding, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="flex items-start gap-3 text-zinc-400"
            >
              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${colors.text.replace('text', 'bg')}`} />
              <span className="text-sm leading-relaxed">{finding}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Technical Highlights (for CarbonCompanion) */}
      {project.technicalHighlights && (
        <div className="px-8 md:px-10 pb-8 md:pb-10">
          <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-4 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> Technical Highlights
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technicalHighlights.map((highlight, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] text-zinc-400 border border-white/[0.07] font-mono"
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        </div>
      )}

      {/* Relation to Project */}
      <div className={`p-8 md:p-10 border-t border-white/[0.06] bg-gradient-to-r ${colors.gradient}`}>
        <h4 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-3 flex items-center gap-2">
          <Link2 className="w-4 h-4" /> Relation to Projects
        </h4>
        <p className="text-zinc-400 leading-relaxed text-sm">
          {project.relationToProject}
        </p>
      </div>
    </motion.div>
  );
}

export default function Research() {
  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Research"
          subtitle="Academic work and AI projects exploring the intersection of technology and real-world impact."
        />

        <div className="space-y-12">
          {RESEARCH_PROJECTS.map((project, index) => (
            <ResearchCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
