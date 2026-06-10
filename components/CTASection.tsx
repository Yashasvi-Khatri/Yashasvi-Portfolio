"use client";

import { useRef, useEffect, useState } from "react";
import Button from "./ui/Button";

const gifUrls = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
];

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastSpawnTime, setLastSpawnTime] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawnTime < 80) return;
    setLastSpawnTime(now);

    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const randomGif = gifUrls[Math.floor(Math.random() * gifUrls.length)];
    const rotation = Math.random() * 20 - 10; // -10deg to +10deg

    const img = document.createElement("img");
    img.src = randomGif;
    img.className = "absolute h-24 md:h-32 rounded-xl shadow-md object-cover pointer-events-none";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
    img.style.animation = "thumbnailFade 1000ms ease-out forwards";

    containerRef.current.appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 1000);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes thumbnailFade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
        }
      `}</style>
      <section className="py-24 px-6">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="max-w-7xl mx-auto bg-white border border-[#051A24]/8 rounded-[40px] py-32 text-center relative overflow-hidden"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-[#0D212C] tracking-tight mb-10">
            Work <span className="font-mondwest">with</span> me
          </h2>
          <Button
            variant="primary"
            href="mailto:yashasvikhatrii@gmail.com"
            className="px-8 py-4 text-base"
          >
            Start a conversation →
          </Button>
        </div>
      </section>
    </>
  );
}
