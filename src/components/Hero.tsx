
import { ArrowDown } from "lucide-react";

const STATS = [
  { number: "8.3s", label: "PR reviewed", sub: "React · 246k★ · 247 files" },
  { number: "<10s", label: "Email drafted", sub: "Context → draft → approval" },
  { number: "16", label: "Prod fixes", sub: "Committed · documented in Git" },
  { number: "7", label: "REST endpoints", sub: "Email agent API surface" },
];

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden"
    aria-label="Introduction"
  >
    {/* Dot-grid background — CSS only, zero JS cost */}
    <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />

    {/* Radial glow from top */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(129,140,248,0.18), transparent)",
      }}
      aria-hidden="true"
    />

    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* Available signal */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <span
            className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot"
            aria-hidden="true"
          />
          Available for AI/ML and software engineering roles
        </div>

        {/* Role label */}
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.25em]">
          AI / ML Engineer · Full-Stack Developer
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none">
          D. Karthik Reddy
        </h1>

        {/* Single declarative value prop */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I build AI systems that ship — deployed, peer-reviewed, and already live.
          <br className="hidden md:block" />
          SIH 2023 national winner. IEEE-published. Patent co-inventor.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-colors hover-glow"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/10"
          >
            Get in touch
          </a>
        </div>

        {/* Stats row */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/10">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-black/70 px-4 py-6 text-center hover:bg-white/5 transition-colors duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-black text-white group-hover:text-primary transition-colors duration-300">
                {stat.number}
              </div>
              <div className="mt-1 text-xs font-semibold text-primary">{stat.label}</div>
              <div className="mt-0.5 text-xs text-gray-600 leading-snug">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/70 transition-colors animate-float z-10"
      aria-label="Scroll to About"
    >
      <ArrowDown size={20} />
    </a>
  </section>
);

export default Hero;
