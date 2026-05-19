"use client";

import { useRef } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          title="Get in Touch"
          subtitle="Open to new opportunities, collaborations, and interesting engineering problems."
        />

        <div
          ref={ref}
          className="card-bg card-border rounded-2xl p-8 sm:p-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Mail className="text-indigo-400" size={20} />
              </div>
              <div>
                <p className="text-[12px] text-zinc-500 mb-0.5">Email</p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-[15px] text-zinc-200 hover:text-indigo-400 transition-colors"
                >
                  yashasvikhatrii@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Phone className="text-indigo-400" size={20} />
              </div>
              <div>
                <p className="text-[12px] text-zinc-500 mb-0.5">Phone</p>
                <a
                  href="tel:+919876543210"
                  className="text-[15px] text-zinc-200 hover:text-indigo-400 transition-colors"
                >
                  +91 9821955539
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <p className="text-[13px] text-zinc-500 mb-3">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Yashasvi-Khatri"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg card-border bg-white/[0.03] text-zinc-400 hover:text-zinc-200 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashasvi-khatri-378231217/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg card-border bg-white/[0.03] text-zinc-400 hover:text-zinc-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
