"use client";

import Image from "next/image";
import { useRef } from "react";

const MARQUEE_ITEMS = [
  {
    src: "/project-screenshots/eco-educator.png",
    alt: "EcoEducator — Environmental Education Platform",
    href: "https://eco-educator-z87n.vercel.app/",
    label: "EcoEducator",
  },
  {
    src: "/project-screenshots/mazer.png",
    alt: "Mazer AI — Beat Generation Studio",
    href: "https://mazer-app-gamma.vercel.app/",
    label: "Mazer AI",
  },
  {
    src: "/project-screenshots/seo-scanner.png",
    alt: "SEO Tag Scanner — Metadata Audit Tool",
    href: "https://seo-tag-scanner.vercel.app/",
    label: "SEO Scanner",
  },
  {
    src: "/project-screenshots/neonews.png",
    alt: "NeoNews — Modern News Platform",
    href: "https://neo-news-taupe.vercel.app/",
    label: "NeoNews",
  },
  {
    src: "/project-screenshots/busybuy.png",
    alt: "BusyBuy — E-Commerce Platform",
    href: "https://busy-buy-2-rosy.vercel.app/",
    label: "BusyBuy",
  },
  {
    src: "/project-screenshots/wiki-analyzer.png",
    alt: "Wiki Analyzer — Wikipedia Data Analysis",
    href: "https://wiki-analyzer.vercel.app/",
    label: "Wiki Analyzer",
  },
];

// Duplicate for seamless infinite loop
const ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function InfiniteMarquee() {
  return (
    <section className="w-full mt-16 md:mt-20 mb-16 overflow-hidden" aria-label="Project showcase">
      <div
        className="flex animate-marquee"
        style={{ width: "max-content" }}
      >
        {ITEMS.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mx-3 flex-shrink-0 group"
            style={{ width: "480px" }}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-[270px] md:h-[320px]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="480px"
              />
              {/* Hover overlay with label */}
              <div className="absolute inset-0 bg-[#051A24]/0 group-hover:bg-[#051A24]/40 transition-all duration-300 rounded-2xl flex items-end p-4 opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium bg-[#051A24]/80 px-3 py-1 rounded-full">
                  {item.label} ↗
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Stats row below marquee */}
      <div className="max-w-2xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
        {[
          { value: "DRDO", label: "R&D Intern" },
          { value: "2×", label: "Published Researcher" },
          { value: "6+", label: "Production Projects" },
          { value: "MERN", label: "Core Stack" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="font-mondwest text-2xl font-semibold text-[#051A24] tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs text-[#273C46] mt-1 font-mono">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
