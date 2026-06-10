"use client";

import Button from "./ui/Button";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-full px-8 py-3 shadow-[0_1px_2px_rgba(5,26,36,0.08),0_4px_20px_rgba(5,26,36,0.12),0_0_0_0.5px_rgba(5,26,36,0.06)]">
        <div className="flex items-center gap-6">
          {/* Left: YK */}
          <span className="font-mondwest text-xl font-semibold text-[#051A24]">
            YK
          </span>

          {/* Separator */}
          <div className="w-px h-4 bg-[#051A24]/20" />

          {/* Nav links - hidden on mobile */}
          <div className="hidden md:flex gap-5">
            <a
              href="#featured-projects"
              className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-colors font-montreal"
            >
              Work
            </a>
            <a
              href="#research"
              className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-colors font-montreal"
            >
              Research
            </a>
            <a
              href="#skills"
              className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-colors font-montreal"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-colors font-montreal"
            >
              Contact
            </a>
          </div>

          {/* Right: Hire me button */}
          <Button
            variant="primary"
            href="mailto:yashasvikhatrii@gmail.com"
            className="text-sm px-5 py-2"
          >
            Hire me
          </Button>
        </div>
      </div>
    </nav>
  );
}
