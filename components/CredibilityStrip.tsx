"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "5+", label: "Deployed Projects" },
  { value: "1", label: "Research Publication" },
  { value: "4+", label: "AI Applications Built" },
  { value: "15+", label: "Technologies Used" },
];

export default function CredibilityStrip() {
  return (
    <section className="py-16 px-6 border-y border-white/[0.06] bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
