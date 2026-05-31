import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import GitHubPinnedRepos from "@/components/GitHubPinnedRepos";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main id="main-content" className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-x-hidden">
        {/* Global radial glow */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.10) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10">
          <section>
            <Hero />
          </section>
          <section>
            <CredibilityStrip />
          </section>
          <section>
            <Experience />
          </section>
          <section>
            <FeaturedProjects />
          </section>
          <section>
            <GitHubPinnedRepos />
          </section>
          <section>
            <Research />
          </section>
          <section>
            <Skills />
          </section>
          <section>
            <About />
          </section>
          <section>
            <Contact />
          </section>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
