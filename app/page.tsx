import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-x-hidden">
      {/* Global radial glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.10) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
