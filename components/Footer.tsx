export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#051A24]/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Left */}
          <h3 className="font-mondwest text-lg text-[#051A24]">
            Yashasvi Khatri
          </h3>

          {/* Right side - two columns of links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <a
                href="#featured-projects"
                className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-opacity"
              >
                Projects
              </a>
              <a
                href="#research"
                className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-opacity"
              >
                Research
              </a>
              <a
                href="#skills"
                className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-opacity"
              >
                Skills
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/Yashasvi-Khatri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-opacity"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/yashasvi-khatri-378231217/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#051A24]/60 hover:text-[#051A24] transition-opacity"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-[#051A24]/10">
          <p className="text-xs text-[#051A24]/40 font-mono">
            © 2026 Yashasvi Khatri · New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}
