"use client";

import { BookOpen, Lightbulb, Target, Link2, ArrowRight, Cpu, Leaf } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

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
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();
  const accentColors = {
    indigo: {
      bg: "bg-[#051A24]/5",
      text: "text-[#051A24]",
      border: "border-[#051A24]/10",
    },
    emerald: {
      bg: "bg-[#051A24]/5",
      text: "text-[#051A24]",
      border: "border-[#051A24]/10",
    },
  };
  const colors = accentColors[project.accent as keyof typeof accentColors];

  return (
    <div
      ref={ref}
      className={inView ? "animate-fade-in-up" : "opacity-0"}
      style={{ animationDelay: `${0.1 + index * 0.2}s` }}
    >
      <div className="bg-white border border-[#051A24]/10 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className={`p-8 md:p-10 border-b border-[#051A24]/10 ${colors.bg}`}>
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-6 h-6 ${colors.text}`} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#051A24] tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#273C46]">{project.category}</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="p-8 md:p-10">
          <h4 className="text-sm font-semibold text-[#273C46] tracking-widest uppercase mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> Summary
          </h4>
          <p className="text-[#051A24]/70 leading-relaxed">{project.summary}</p>
        </div>

        {/* Contributions */}
        <div className="px-8 md:px-10 pb-8 md:pb-10">
          <h4 className="text-sm font-semibold text-[#273C46] tracking-widest uppercase mb-4 flex items-center gap-2">
            <Target className="w-4 h-4" /> Contributions
          </h4>
          <ul className="space-y-3">
            {project.contributions.map((contribution, i) => (
              <li key={i} className="flex items-start gap-3 text-[#051A24]/70">
                <ArrowRight size={16} className={`mt-0.5 shrink-0 ${colors.text}`} />
                <span className="text-sm leading-relaxed">{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features (for CarbonCompanion) */}
        {project.keyFeatures && (
          <div className="px-8 md:px-10 pb-8 md:pb-10">
            <h4 className="text-sm font-semibold text-[#273C46] tracking-widest uppercase mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Key Features
            </h4>
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[#051A24]/70">
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#051A24]`} />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Findings */}
        <div className="px-8 md:px-10 pb-8 md:pb-10">
          <h4 className="text-sm font-semibold text-[#273C46] tracking-widest uppercase mb-4 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> Key Findings
          </h4>
          <ul className="space-y-3">
            {project.keyFindings.map((finding, i) => (
              <li key={i} className="flex items-start gap-3 text-[#051A24]/70">
                <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#051A24]`} />
                <span className="text-sm leading-relaxed">{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Highlights (for CarbonCompanion) */}
        {project.technicalHighlights && (
          <div className="px-8 md:px-10 pb-8 md:pb-10">
            <h4 className="text-sm font-semibold text-[#273C46] tracking-widest uppercase mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Technical Highlights
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technicalHighlights.map((highlight, i) => (
                <span
                  key={i}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#051A24]/5 text-[#051A24]/70 border border-[#051A24]/15 font-mono"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Relation to Project */}
        <div className={`p-8 md:p-10 border-t border-[#051A24]/10 ${colors.bg}`}>
          <h4 className="text-sm font-semibold text-[#273C46] tracking-widest uppercase mb-3 flex items-center gap-2">
            <Link2 className="w-4 h-4" /> Relation to Projects
          </h4>
          <p className="text-[#051A24]/70 leading-relaxed text-sm">
            {project.relationToProject}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Research() {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={inView ? "animate-fade-in-up" : "opacity-0"}
          style={{ animationDelay: "0.1s" }}
        >
          <p className="font-mono text-xs tracking-widest text-[#273C46] uppercase mb-3">
            Research
          </p>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#051A24] tracking-tight mb-16">
            Academic <span className="font-mondwest">work</span>
          </h2>
        </div>

        <div className="space-y-12">
          {RESEARCH_PROJECTS.map((project, index) => (
            <ResearchCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
