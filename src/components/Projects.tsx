
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  result: string;
  techStack: string[];
  year: string;
  badge: string;
  badgeClass: string;
  liveUrl: string | null;
  metrics: string[];
  terminal: string[] | null;
}

const FEATURED: Project[] = [
  {
    title: "AI GitHub PR Reviewer",
    description:
      "Most code review tools surface lint warnings. I wanted one that reads a PR like a senior engineer — understanding context, spotting logic issues, explaining the why behind every comment.",
    result:
      "Analysed the Facebook React repo (31k★) in 8.3 seconds. 16 production fixes committed with documented Git history.",
    techStack: ["Python", "FastAPI", "React", "REST APIs", "Git", "Unit Testing", "Agile"],
    year: "2025",
    badge: "LIVE",
    badgeClass: "bg-green-500/15 text-green-400 border border-green-500/25",
    liveUrl: "https://ai-pr-reviewer-eta.vercel.app",
    metrics: [
      "8.3 s — Facebook React (31k★) reviewed end-to-end",
      "16 production fixes · documented Git history",
      "Requirements → Vercel deployment, zero manual infra",
    ],
    terminal: [
      "$ ai-reviewer --repo facebook/react --pr 28741",
      "",
      "  Scanning 247 files...",
      "",
      "  ✓  Architecture analysis     2.1s",
      "  ✓  Logic review              3.8s",
      "  ✓  Style suggestions         1.1s",
      "  ✓  Test coverage check       1.3s",
      "",
      "  3 suggestions  ·  0 critical issues",
      "  ⚡ Completed in 8.3s",
    ],
  },
  {
    title: "AI Email Agent",
    description:
      "Email automation tools either do too little (templates) or too much (send without review). I built a human-in-the-loop agent: it drafts intelligently, then waits for your approval before touching an inbox.",
    result:
      "7 REST endpoints, under 10 s end-to-end, full OOP architecture with persistent state and audit logging.",
    techStack: ["Python", "FastAPI", "React", "REST APIs", "SQL", "Git", "Unit Testing"],
    year: "2025",
    badge: "LIVE",
    badgeClass: "bg-green-500/15 text-green-400 border border-green-500/25",
    liveUrl: "https://ai-email-agent-alpha.vercel.app",
    metrics: [
      "7 REST endpoints · modular OOP architecture",
      "< 10 s end-to-end · human-in-loop validation",
      "Persistent state, input validation, audit logging",
    ],
    terminal: [
      "$ email-agent run --mode supervised",
      "",
      "  Parsing context...            OK",
      "  Generating draft response...  OK",
      "  ⏸  Awaiting your approval",
      "",
      "  Subject: Re: Engineering Role",
      "  Confidence: 97%  ·  Draft ready",
      "",
      "  [Approve]  [Edit]  [Discard]",
      "  ↳ Audit log updated",
    ],
  },
];

const SECONDARY: Project[] = [
  {
    title: "Ensemble Vision Transformers — GI Disease Classification",
    description:
      "Multi-model ensemble with automated evaluation pipelines, validated across 8,000 endoscopic images. Outperforms single-model baselines by 4.2%. Lead author, accepted at IEEE ICIIP 2025.",
    result: "97.75% accuracy · +4.2% over baselines · IEEE ICIIP 2025",
    techStack: ["Python", "PyTorch", "Scikit-learn", "C++", "SQL", "Git"],
    year: "2025",
    badge: "IEEE ICIIP 2025",
    badgeClass: "bg-blue-500/15 text-blue-400 border border-blue-500/25",
    liveUrl: null,
    metrics: [
      "97.75% classification accuracy",
      "+4.2% over single-model baselines",
      "Lead author · peer-reviewed",
    ],
    terminal: null,
  },
  {
    title: "UAV Magnetic Anomaly Detection — SIH 2023",
    description:
      "Led a cross-functional team building a real-time embedded system for the Ministry of Defence. Won 1st place nationally among 1M+ participants.",
    result: "40% detection improvement · 25% more flight time · 1st / 1M+",
    techStack: ["Python", "C", "C++", "Embedded Systems", "Real-Time Systems", "Git"],
    year: "2023",
    badge: "🏆 SIH 2023",
    badgeClass: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/25",
    liveUrl: null,
    metrics: [
      "1st place · 1M+ national participants",
      "40% detection accuracy improvement",
      "25% drone flight time increase",
    ],
    terminal: null,
  },
  {
    title: "AI Acoustic Rail Defect Detection",
    description:
      "Co-invented an AI-based acoustic monitoring system for real-time rail defect detection using edge AI and signal processing. Patent filed with the Indian Patent Office.",
    result: "Patent co-inventor · real-time edge AI · rail safety domain",
    techStack: ["Python", "Edge AI", "Signal Processing", "Embedded Systems", "C++"],
    year: "2025",
    badge: "Patent Filed",
    badgeClass: "bg-purple-500/15 text-purple-400 border border-purple-500/25",
    liveUrl: null,
    metrics: [
      "Patent filed — Indian Patent Office",
      "Real-time edge AI processing",
      "Rail safety domain",
    ],
    terminal: null,
  },
];

const TerminalPane = ({ lines, liveUrl }: { lines: string[]; liveUrl: string }) => (
  <div className="flex flex-col h-full rounded-xl overflow-hidden border border-white/8 bg-[#060A14] font-mono text-[13px] leading-relaxed">
    {/* Chrome bar */}
    <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/6 shrink-0">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
      </div>
      <span className="ml-2 text-xs text-gray-600 truncate">
        {liveUrl.replace("https://", "")}
      </span>
    </div>

    {/* Terminal content */}
    <div className="flex-1 p-5 space-y-0.5 overflow-hidden">
      {lines.map((line, i) => {
        if (line === "") return <div key={i} className="h-3" />;

        const isCommand = line.startsWith("$");
        const isSuccess = line.trim().startsWith("✓");
        const isWaiting = line.trim().startsWith("⏸");
        const isResult  = line.trim().startsWith("⚡") || line.trim().startsWith("↳");

        return (
          <div
            key={i}
            className={
              isCommand
                ? "text-primary font-semibold"
                : isSuccess
                ? "text-green-400"
                : isWaiting
                ? "text-yellow-400"
                : isResult
                ? "text-primary/70"
                : "text-gray-500"
            }
          >
            {line}
          </div>
        );
      })}
      {/* Blinking cursor */}
      <div className="flex items-center gap-1 text-gray-600 mt-1">
        <span>$</span>
        <span className="w-2 h-4 bg-primary/50 animate-terminal-blink" aria-hidden="true" />
      </div>
    </div>
  </div>
);

const FeaturedCard = ({ project }: { project: Project }) => (
  <article className="glass rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 group" data-reveal>
    <div className="grid md:grid-cols-5 gap-0">
      {/* Text */}
      <div className="md:col-span-3 p-8 flex flex-col space-y-5">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.badgeClass}`}>
            {project.badge}
          </span>
          <span className="text-xs text-gray-600">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-200 leading-snug">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="px-4 py-3 bg-white/[0.03] rounded-xl border border-white/6">
          <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Result</p>
          <p className="text-sm text-gray-300 leading-relaxed">{project.result}</p>
        </div>

        <ul className="space-y-1.5">
          {project.metrics.map((m) => (
            <li key={m} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-primary/8 text-primary/75 rounded-full text-xs border border-primary/12">
              {t}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <div className="pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors hover-glow"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Live demo
            </a>
          </div>
        )}
      </div>

      {/* Terminal preview */}
      {project.terminal && project.liveUrl && (
        <div className="md:col-span-2 p-4 flex">
          <div className="w-full">
            <TerminalPane lines={project.terminal} liveUrl={project.liveUrl} />
          </div>
        </div>
      )}
    </div>
  </article>
);

const SecondaryCard = ({ project, delay }: { project: Project; delay: string }) => (
  <article
    className="glass rounded-xl p-6 flex flex-col space-y-4 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 group"
    data-reveal
    data-delay={delay}
  >
    <div className="flex justify-between items-center">
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${project.badgeClass}`}>
        {project.badge}
      </span>
      <span className="text-xs text-gray-600">{project.year}</span>
    </div>

    <h3 className="font-bold text-white group-hover:text-primary transition-colors duration-200 leading-snug text-base">
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

    <ul className="space-y-1.5">
      {project.metrics.map((m) => (
        <li key={m} className="flex items-center gap-2 text-xs text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" aria-hidden="true" />
          {m}
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-1.5 pt-1">
      {project.techStack.map((t) => (
        <span key={t} className="px-2 py-0.5 bg-primary/8 text-primary/70 rounded-full text-xs border border-primary/12">
          {t}
        </span>
      ))}
    </div>
  </article>
);

const Projects = () => (
  <section id="projects" className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3" data-reveal>
        Work
      </p>
      <h2 className="text-3xl md:text-4xl font-black text-white mb-4" data-reveal data-delay="1">
        Featured projects
      </h2>
      <p className="text-gray-500 mb-16 max-w-xl text-sm leading-relaxed" data-reveal data-delay="2">
        Two live AI applications you can open right now, IEEE-published research, a national
        hackathon win, and a filed patent — each built end-to-end with a clear problem and
        measurable outcome.
      </p>

      <div className="space-y-6 mb-10">
        {FEATURED.map((p) => (
          <FeaturedCard key={p.title} project={p} />
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {SECONDARY.map((p, i) => (
          <SecondaryCard key={p.title} project={p} delay={String(i + 1)} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
