"use client";

import { useInViewAnimation } from "../hooks/useInViewAnimation";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  image: string;
  live: string;
  github: string;
  tags?: string[];
}

const projects: Project[] = [
  {
    name: "EcoEducator",
    description: "Interactive environmental education platform — Gemini AI EcoCoach, Google Maps CO₂ calculator, gamified XP rewards, and teacher analytics dashboard.",
    image: "/project-screenshots/eco-educator.png",
    live: "https://eco-educator-z87n.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/EcoKids",
    tags: ["React", "Firebase", "Gemini AI", "Maps API"],
  },
  {
    name: "Mazer AI Music",
    description: "AI beat studio — describe a beat in English, get a 16-step drum pattern. Web Audio API DSP synthesis (no samples), OpenRouter/Llama 3.1, Firebase realtime collaboration.",
    image: "/project-screenshots/mazer.png",
    live: "https://mazer-app-gamma.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/mazer-app",
    tags: ["React", "Web Audio API", "OpenRouter", "Firebase"],
  },
  {
    name: "SEO Tag Scanner",
    description: "TypeScript-first Next.js developer tool that audits 30+ metadata signals, Open Graph tags, JSON-LD structured data, and Core Web Vitals indicators.",
    image: "/project-screenshots/seo-scanner.png",
    live: "https://seo-tag-scanner.vercel.app/",
    github: "https://github.com/Yashasvi-Khatri/SeoTagScanner",
    tags: ["Next.js", "TypeScript", "App Router", "SEO APIs"],
  },
];

export default function ProjectsShowcase() {
  const { ref: headingRef, inView: headingInView } = useInViewAnimation<HTMLDivElement>();
  const projectRefs = projects.map(() => useInViewAnimation<HTMLDivElement>());

  return (
    <section className="max-w-[1100px] mx-auto px-6 py-16">
      {/* Section heading */}
      <div
        ref={headingRef}
        className={headingInView ? "animate-fade-in-up" : "opacity-0"}
        style={{ animationDelay: "0.1s" }}
      >
        <p className="font-mono text-xs tracking-widest text-[#273C46] uppercase mb-3">
          Selected Work
        </p>
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#051A24] tracking-tight mb-16">
          Projects that <span className="font-mondwest">shipped</span>
        </h2>
      </div>

      {/* Project items */}
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((project, index) => {
          const { ref, inView } = projectRefs[index];
          return (
            <div
              key={project.name}
              ref={ref}
              className={inView ? "animate-fade-in-up" : "opacity-0"}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Text block */}
              <div className="ml-0 md:ml-24 mb-6">
                <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#051A24]">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base text-[#051A24]/70 mt-2">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#051A24]/50 hover:text-[#051A24]"
                  >
                    Live demo ↗
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#051A24]/50 hover:text-[#051A24]"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full rounded-2xl shadow-lg overflow-hidden h-[240px] md:h-[420px]">
                <Image
                  src={project.image}
                  alt={`${project.name} — project screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
