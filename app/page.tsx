import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import QuoteSection from "@/components/QuoteSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import MoreProjects from "@/components/MoreProjects";
import ExperienceHighlight from "@/components/ExperienceHighlight";
import Research from "@/components/Research";
import Skills from "@/components/Skills";
import CTASection from "@/components/CTASection";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main id="main-content" className="min-h-screen pb-80">
        <section>
          <Hero />
        </section>
        <section>
          <InfiniteMarquee />
        </section>
        <section>
          <QuoteSection />
        </section>
        <section id="featured-projects">
          <ProjectsShowcase />
        </section>
        <section>
          <MoreProjects />
        </section>
        <section id="experience">
          <ExperienceHighlight />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section>
          <CTASection />
        </section>
      </main>
      <BottomNav />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
