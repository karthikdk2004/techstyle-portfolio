
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Glowing section divider ─── */
const SectionDivider = () => (
  <div className="relative h-px w-full" aria-hidden="true">
    <div
      className="absolute inset-0"
      style={{ background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.3), transparent)" }}
    />
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/60"
      style={{ boxShadow: "0 0 8px rgba(129,140,248,0.5)" }}
    />
  </div>
);

const STATS = [
  {
    number: "1st",
    label: "Smart India Hackathon 2023",
    sub: "Ministry of Defence · 1M+ national participants",
    highlight: true,
  },
  {
    number: "97.75%",
    label: "IEEE ICIIP 2025",
    sub: "GI disease classification · peer-reviewed lead author",
    highlight: false,
  },
  {
    number: "2",
    label: "Live AI apps deployed",
    sub: "PR Reviewer · Email Agent · accessible now",
    highlight: false,
  },
  {
    number: "Patent",
    label: "Co-Inventor",
    sub: "AI acoustic rail defect detection · Indian Patent Office",
    highlight: false,
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
        className="text-center font-mono text-xs text-primary/70 mb-14"
        data-reveal
      >
        // metrics
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
            <div className={`text-4xl md:text-5xl lg:text-6xl font-black mb-3 group-hover:text-primary transition-colors duration-300 leading-none ${s.highlight ? "text-amber-400" : "text-white"}`}>
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

  /* Cursor spotlight — track mouse position as CSS custom properties */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main id="main-content" className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <Achievements />
      <SectionDivider />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
};

export default Index;
