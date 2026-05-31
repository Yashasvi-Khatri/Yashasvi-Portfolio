"use client";

import { useState, useEffect } from "react";

const LINES = [
  { type: "cmd", text: "$ whoami" },
  { type: "info", text: "Yashasvi Khatri" },
  { type: "cmd", text: "$ cat profile.json" },
  { type: "info", text: "{" },
  { type: "info", text: '  "role": "Full Stack Engineer",' },
  { type: "info", text: '  "location": "New Delhi, India",' },
  { type: "info", text: '  "education": "GGSIPU (2023-2027)",' },
  { type: "info", text: '  "status": "Open to opportunities"' },
  { type: "info", text: "}" },
  { type: "cmd", text: "$ cat experience.txt" },
  { type: "info", text: "→ DRDO R&D Intern (Jun-Jul 2025)" },
  { type: "info", text: "→ Mission-critical engineering" },
  { type: "cmd", text: "$ cat research.md" },
  { type: "info", text: "→ AI-Assisted Music Composition" },
  { type: "info", text: "→ Carbon Footprint Management" },
  { type: "success", text: "✓ Published researcher" },
  { type: "cmd", text: "$ ./contact.sh" },
  { type: "success", text: "→ yashasvikhatrii@gmail.com" },
  { type: "success", text: "→ +91 9821955539" },
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
          yashasvi — portfolio
        </span>
      </div>

      {/* Lines */}
      <div className="p-5 min-h-[280px]">
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
