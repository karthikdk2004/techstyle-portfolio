
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATS = [
  {
    number: "1st",
    label: "Smart India Hackathon 2023",
    sub: "Ministry of Defence · 1M+ national participants",
  },
  {
    number: "97.75%",
    label: "IEEE ICIIP 2025",
    sub: "GI disease classification · peer-reviewed lead author",
  },
  {
    number: "2",
    label: "Live AI apps deployed",
    sub: "PR Reviewer · Email Agent · accessible now",
  },
  {
    number: "Patent",
    label: "Co-Inventor",
    sub: "AI acoustic rail defect detection · Indian Patent Office",
  },
];

const Achievements = () => (
  <section
    id="achievements"
    className="py-24 bg-black border-y border-white/5"
    aria-label="Key achievements"
  >
    <div className="container mx-auto px-6">
      <p
        className="text-center text-xs font-semibold text-primary uppercase tracking-widest mb-14"
        data-reveal
      >
        By the numbers
      </p>

      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/8"
        data-reveal
        data-delay="1"
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className="bg-black/80 px-6 py-10 text-center hover:bg-white/[0.04] transition-colors duration-300 group"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-primary transition-colors duration-300 leading-none">
              {s.number}
            </div>
            <div className="text-sm font-semibold text-primary mb-1.5">{s.label}</div>
            <div className="text-xs text-gray-600 leading-relaxed max-w-[140px] mx-auto">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => {
  useScrollReveal();

  return (
    <main id="main-content" className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
};

export default Index;
