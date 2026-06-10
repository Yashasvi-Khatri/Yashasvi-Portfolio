"use client";

import { useInViewAnimation } from "../hooks/useInViewAnimation";
import Button from "./ui/Button";

export default function Hero() {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const { ref: nameRef, inView: nameInView } = useInViewAnimation<HTMLDivElement>();
  const { ref: taglineRef, inView: taglineInView } = useInViewAnimation<HTMLDivElement>();
  const { ref: headingRef, inView: headingInView } = useInViewAnimation<HTMLDivElement>();
  const { ref: descriptionRef, inView: descriptionInView } = useInViewAnimation<HTMLDivElement>();
  const { ref: buttonsRef, inView: buttonsInView } = useInViewAnimation<HTMLDivElement>();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-12 md:pt-16"
    >
      <div className="max-w-[440px] mx-auto w-full">
        {/* Logo/Name */}
        <div
          ref={nameRef}
          className={nameInView ? "animate-fade-in-up" : "opacity-0"}
          style={{ animationDelay: "0.1s" }}
        >
          <h1 className="font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4">
            Yashasvi Khatri
          </h1>
        </div>

        {/* Tagline */}
        <div
          ref={taglineRef}
          className={taglineInView ? "animate-fade-in-up" : "opacity-0"}
          style={{ animationDelay: "0.2s" }}
        >
          <p className="font-mono text-xs md:text-sm text-[#051A24] mb-2">
            Full Stack Engineer · AI & Data Science
          </p>
        </div>

        {/* Main heading */}
        <div
          ref={headingRef}
          className={headingInView ? "animate-fade-in-up" : "opacity-0"}
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap">
            Build the next wave,<br />
            the <span className="font-mondwest">bold way.</span>
          </h2>
        </div>

        {/* Description paragraphs */}
        <div
          ref={descriptionRef}
          className={`flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 ${descriptionInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <p>
            I'm completing my B.Tech in AI & Data Science at GGSIPU (graduating 2027). I interned at DRDO working on mission-critical engineering, which permanently shaped how I think about code quality.
          </p>
          <p>
            I build AI-powered products end-to-end — from ML pipelines to React frontends. Two published research papers. Every project is production-deployed.
          </p>
          <p>
            Available for full-time roles. Based in New Delhi, open to remote.
          </p>
        </div>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 ${buttonsInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.5s" }}
        >
          <Button variant="primary" onClick={() => scroll("featured-projects")}>
            View my work
          </Button>
          <Button variant="secondary" href="mailto:yashasvikhatrii@gmail.com">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
