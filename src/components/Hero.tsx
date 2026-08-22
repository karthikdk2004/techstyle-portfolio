
import { ArrowDown } from "lucide-react";

const STATS = [
  { number: "8.3s", label: "PR reviewed", sub: "React · 31k★ · 247 files" },
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
    {/* Aurora blobs — depth and atmosphere */}
    <div className="aurora-blob absolute w-[700px] h-[700px] bg-indigo-400 -top-40 -left-40" aria-hidden="true" style={{ animationDelay: '0s' }} />
    <div className="aurora-blob absolute w-[500px] h-[500px] bg-cyan-500 top-1/4 -right-40" aria-hidden="true" style={{ animationDelay: '7s' }} />
    <div className="aurora-blob absolute w-[400px] h-[400px] bg-violet-600 bottom-0 left-1/3" aria-hidden="true" style={{ animationDelay: '14s' }} />

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
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Tagline */}
        <p className="text-sm text-gray-500 tracking-wide">
          Software Engineer · AI Engineer · Data Scientist
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading tracking-tight leading-none">
          <span className="font-extrabold text-white">D. Karthik</span>{" "}
          <span className="font-light text-gray-300">Reddy</span>
        </h1>

        {/* Single declarative value prop */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          I build AI systems that ship — deployed, peer-reviewed, and already live.
          <br className="hidden md:block" />
          SIH 2023 national winner. IEEE-published. Patent co-inventor.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-colors hover-glow"
          >
            See what I've built
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/10"
          >
            Say hello
          </a>
        </div>

        {/* Asymmetric Stats Row */}
        <div className="pt-4 grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Featured Stat Card */}
          <div className="md:col-span-2 glass p-5 rounded-xl border border-amber-500/25 bg-amber-500/[0.03] flex flex-col justify-center items-center text-center">
            <div className="text-4xl md:text-5xl font-black text-amber-400 leading-none mb-1">
              {STATS[0].number}
            </div>
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
              {STATS[0].label}
            </div>
            <div className="text-xs text-gray-400">{STATS[0].sub}</div>
          </div>

          {/* Secondary Stat Grid */}
          <div className="md:col-span-3 grid grid-cols-3 gap-px bg-white/[0.04] rounded-xl overflow-hidden border border-white/8">
            {STATS.slice(1).map((stat, i) => (
              <div
                key={i}
                className="bg-black/70 p-4 text-center hover:bg-white/[0.04] transition-colors duration-300 flex flex-col justify-center items-center"
              >
                <div className="text-2xl md:text-3xl font-black text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-xs font-semibold text-primary">{stat.label}</div>
                <div className="mt-0.5 text-[11px] text-gray-500 leading-snug">{stat.sub}</div>
              </div>
            ))}
          </div>
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
