
import { Code2, Brain, Settings, Globe, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  label: string;
  skills: string[];
  highlight: boolean;
  icon: LucideIcon;
  colSpan: number;
}

const CATEGORIES: Category[] = [
  {
    label: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"],
    highlight: true,
    icon: Code2,
    colSpan: 2,
  },
  {
    label: "CS Fundamentals",
    skills: [
      "DSA · 183 LeetCode",
      "OOP",
      "Complexity Analysis",
      "OS",
      "DBMS",
      "Computer Networks",
      "Distributed Systems",
    ],
    highlight: false,
    icon: Brain,
    colSpan: 1,
  },
  {
    label: "Software Eng.",
    skills: [
      "SDLC & Agile",
      "Unit / Functional Testing",
      "Debugging",
      "Code Reviews",
      "REST APIs",
      "Git / GitHub",
      "System Design",
    ],
    highlight: false,
    icon: Settings,
    colSpan: 1,
  },
  {
    label: "Web & Backend",
    skills: ["React", "FastAPI", "Node.js", "PostgreSQL", "OAuth 2.0", "Vercel"],
    highlight: false,
    icon: Globe,
    colSpan: 2,
  },
  {
    label: "AI / ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangGraph",
      "LangChain",
      "Scikit-learn",
      "Computer Vision",
    ],
    highlight: true,
    icon: Cpu,
    colSpan: 3,
  },
];

/* Maps numeric colSpan values to static Tailwind classes for PurgeCSS safety */
const colSpanClass = (span: number): string => {
  if (span === 2) return "md:col-span-2";
  if (span === 3) return "md:col-span-3";
  return "";
};

const Skills = () => (
  <section id="skills" className="py-24 bg-black">
    <div className="container mx-auto px-6">

      <p className="font-mono text-xs text-primary/70 mb-3" data-reveal>
        02.
      </p>
      <h2
        className="text-3xl md:text-4xl font-heading font-bold text-white mb-16"
        data-reveal
        data-delay="1"
      >
        Technical toolkit
      </h2>

      {/* Bento grid — highlighted categories span wider */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        data-reveal
        data-delay="2"
      >
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <div
              key={i}
              className={`${colSpanClass(cat.colSpan)} glass p-6 rounded-xl flex flex-col gap-4
                hover:-translate-y-1 transition-all duration-300 group cursor-default
                ${cat.highlight
                  ? "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(129,140,248,0.12)]"
                  : "hover:border-white/15"}`}
            >
              {/* Card header: icon + label */}
              <div className="flex items-center gap-3">
                <Icon
                  size={18}
                  className={
                    cat.highlight
                      ? "text-primary"
                      : "text-gray-500 group-hover:text-gray-400 transition-colors"
                  }
                  aria-hidden="true"
                />
                <h3 className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
                  {cat.label}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                      cat.highlight
                        ? "bg-primary/12 text-primary/90 border border-primary/20 group-hover:bg-primary/18"
                        : "bg-white/5 text-gray-300 border border-white/8 group-hover:border-white/15"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
