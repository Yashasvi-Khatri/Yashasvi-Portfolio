"use client";

import { useState, useEffect } from "react";

const LINES = [
  { type: "cmd", text: "$ init portfolio --stack mern" },
  { type: "info", text: "✓ React 18 + TypeScript ready" },
  { type: "info", text: "✓ Node.js + Express.js configured" },
  { type: "info", text: "✓ MongoDB Atlas connected" },
  { type: "cmd", text: "$ deploy --platform vercel" },
  { type: "success", text: "▶ Build optimized: 98/100" },
  { type: "success", text: "▶ Live on production.vercel.app" },
  { type: "cmd", text: "$ run --ai-pipeline train" },
  { type: "info", text: "✓ Model accuracy: 94.2%" },
  { type: "success", text: "✓ WebSocket server ready :3001" },
];

export default function Terminal() {
  const [lines, setLines] = useState<typeof LINES>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < LINES.length) {
        setLines((prev) => [...prev, LINES[i]]);
        i++;
      } else {
        setDone(true);
        clearInterval(t);
      }
    }, 340);
    return () => clearInterval(t);
  }, []);

  const colorMap: Record<string, string> = {
    cmd: "text-indigo-400",
    info: "text-emerald-400",
    success: "text-teal-300",
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-zinc-950">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <span className="ml-3 text-[11px] text-zinc-500 font-mono">
          portfolio — terminal
        </span>
      </div>

      {/* Lines */}
      <div className="p-5 min-h-[220px]">
        {lines.map((l, i) => (
          <div
            key={i}
            className={`font-mono text-[12px] leading-6 ${l ? colorMap[l.type] ?? "text-zinc-400" : "text-zinc-400"}`}
          >
            {l?.text ?? ""}
          </div>
        ))}
        {!done && (
          <span className="inline-block w-2 h-3.5 bg-indigo-500 align-middle animate-blink" />
        )}
      </div>
    </div>
  );
}
