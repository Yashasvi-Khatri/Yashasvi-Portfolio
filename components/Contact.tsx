"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeader
          title="Get in Touch"
          subtitle="Open to new opportunities, collaborations, and interesting engineering problems."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="card-bg card-border rounded-2xl p-8 sm:p-10"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Mail className="text-indigo-400" size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[12px] text-zinc-500 mb-0.5">Email</p>
                <a
                  href="mailto:yashasvikhatrii@gmail.com"
                  className="text-[15px] text-zinc-200 hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded"
                >
                  yashasvikhatrii@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Phone className="text-indigo-400" size={20} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[12px] text-zinc-500 mb-0.5">Phone</p>
                <a
                  href="tel:+919821955539"
                  className="text-[15px] text-zinc-200 hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded"
                >
                  +91 9821955539
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 border-t border-white/[0.06]"
            >
              <p className="text-[13px] text-zinc-500 mb-3">Connect with me</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Yashasvi-Khatri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg card-border bg-white/[0.03] text-zinc-400 hover:text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
                  aria-label="Visit GitHub profile"
                >
                  <Github size={16} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yashasvi-khatri-378231217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg card-border bg-white/[0.03] text-zinc-400 hover:text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin size={16} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
