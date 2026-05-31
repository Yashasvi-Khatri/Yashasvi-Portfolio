"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import ResumeModal from "./Resume";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Featured", href: "#featured-projects" },
  { label: "GitHub", href: "#github" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center gap-8">
        {/* Logo */}
        <div className="relative shrink-0">
          <button
            onClick={() => {
              setShowFullName(!showFullName);
              scrollTo("#home");
            }}
            className="font-mono font-semibold text-[15px] text-zinc-100 tracking-tight"
          >
            YK<span className="text-indigo-500">.</span>
          </button>
          <div
            className={`absolute left-0 top-full mt-1 font-mono text-[13px] text-zinc-300 whitespace-nowrap transition-all duration-300 ease-out ${
              showFullName
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Yashasvi Khatri
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors duration-200 ${
                active === l.href.replace("#", "")
                  ? "text-indigo-400"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="https://github.com/Yashasvi-Khatri"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/yashasvi-khatri-378231217/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
          <button
            onClick={() => setResumeOpen(true)}
            className="hidden sm:flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[12px] font-semibold px-3.5 py-1.5 rounded-md transition-colors"
          >
            <FileText size={13} />
            Resume
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-zinc-400 ml-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left px-3 py-2.5 rounded-md text-[14px] text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => setResumeOpen(true)}
            className="mt-2 flex items-center gap-2 text-[13px] text-indigo-400 px-3 py-2"
          >
            <FileText size={14} /> Download Resume
          </button>
        </div>
      )}

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </nav>
  );
}
