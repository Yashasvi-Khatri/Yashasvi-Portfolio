"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

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

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Technical Stack"
          subtitle="Categorized engineering capabilities across the full product lifecycle."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.keys(SKILLS).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 border ${
                active === cat
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/15"
              }`}
            >
              {CATEGORY_ICONS[cat]} {cat}
            </button>
          ))}
        </div>

        {/* Skill chips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          >
            {SKILLS[active].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="flex items-center gap-2.5 card-bg card-border rounded-xl px-4 py-3 hover:border-indigo-500/30 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                <span className="text-[13px] font-medium text-zinc-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="card-bg card-border rounded-xl p-5 text-center"
            >
              <div className="text-[22px] font-bold text-indigo-400 tracking-tight">
                {value}
              </div>
              <div className="text-[12px] text-zinc-500 mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
