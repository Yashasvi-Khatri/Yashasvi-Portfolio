"use client";

import { useState } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const SKILLS: Record<string, string[]> = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5 / CSS3",
    "Bootstrap",
    "Responsive Design",
    "Component Architecture",
    "Framer Motion",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "WebSockets",
    "Middleware Design",
    "API Integration",
  ],
  Databases: [
    "MongoDB",
    "MySQL",
    "Aggregation Pipelines",
    "Schema Design",
  ],
  "AI / ML": [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Scikit-learn",
    "NLP",
    "Neural Networks",
    "Sentiment Analysis",
  ],
  "Cloud & Tools": [
    "Git & GitHub",
    "Postman",
    "Swagger",
    "AWS S3",
    "Vercel",
    "Render",
    "Data Pipelines",
  ],
};

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "⬡",
  Backend: "◈",
  Databases: "◉",
  "AI / ML": "◆",
  "Cloud & Tools": "◎",
};

const STATS = [
  { value: "5", label: "Skill Categories" },
  { value: "35+", label: "Technologies" },
];

export default function Skills() {
  const [active, setActive] = useState(Object.keys(SKILLS)[0]);
  const { ref, inView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={inView ? "animate-fade-in-up" : "opacity-0"}
          style={{ animationDelay: "0.1s" }}
        >
          <p className="font-mono text-xs tracking-widest text-[#273C46] uppercase mb-3">
            Technical Stack
          </p>
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#051A24] tracking-tight mb-16">
            Skills & <span className="font-mondwest">tools</span>
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.keys(SKILLS).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 border ${
                active === cat
                  ? "bg-[#051A24] border-[#051A24] text-white"
                  : "bg-white border-[#051A24]/20 text-[#051A24]/60 hover:text-[#051A24]"
              }`}
            >
              {CATEGORY_ICONS[cat]} {cat}
            </button>
          ))}
        </div>

        {/* Skill chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SKILLS[active].map((skill, i) => (
            <div
              key={skill}
              className="flex items-center gap-2.5 bg-white border border-[#051A24]/15 rounded-xl px-4 py-3 hover:border-[#051A24]/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#051A24] shrink-0" />
              <span className="text-[13px] font-medium text-[#051A24]/70">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white border border-[#051A24]/10 rounded-xl p-5 text-center"
            >
              <div className="text-[22px] font-bold text-[#051A24] tracking-tight">
                {value}
              </div>
              <div className="text-[12px] text-[#273C46] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
