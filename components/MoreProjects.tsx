"use client";
import Image from "next/image";

const MORE = [
  { src: "/project-screenshots/neonews.png", label: "NeoNews", desc: "News platform", href: "https://neo-news-taupe.vercel.app/", color: "#ef4444" },
  { src: "/project-screenshots/busybuy.png", label: "BusyBuy", desc: "E-commerce MERN", href: "https://busy-buy-2-rosy.vercel.app/", color: "#f97316" },
  { src: "/project-screenshots/wiki-analyzer.png", label: "Wiki Analyzer", desc: "Data visualization", href: "https://wiki-analyzer.vercel.app/", color: "#38bdf8" },
];

export default function MoreProjects() {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-8 mb-16">
      <p className="font-mono text-xs text-[#273C46] tracking-widest uppercase mb-8">
        Also shipped
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MORE.map((p) => (
          <a
            key={p.label}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative rounded-xl overflow-hidden h-[180px] shadow-md mb-3">
              <Image src={p.src} alt={p.label} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" sizes="350px" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
              <span className="font-mondwest text-sm font-semibold text-[#051A24]">{p.label}</span>
              <span className="text-xs text-[#273C46]/60 ml-auto">{p.desc} ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
