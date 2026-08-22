
import { Code2, Brain, Settings, Globe, Cpu, Layers } from "lucide-react";
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
    colSpan: 1,
  },
  {
    label: "Web & Development",
    skills: ["React", "FastAPI", "Node.js", "REST APIs", "PostgreSQL", "OAuth 2.0"],
    highlight: false,
    icon: Globe,
    colSpan: 1,
  },
  {
    label: "Tools & Practices",
    skills: [
      "Git & GitHub",
      "CI/CD (GitHub Actions)",
      "Unit Testing",
      "Code Review",
      "SDLC & Agile",
    ],
    highlight: false,
    icon: Settings,
    colSpan: 2,
  },
  {
    label: "Computer Science",
    skills: [
      "DSA (183 LeetCode)",
      "Object-Oriented Design (OOP)",
      "Complexity Analysis",
      "Algorithm Design",
      "System Design (learning)",
    ],
    highlight: false,
    icon: Brain,
    colSpan: 2,
  },
  {
    label: "Core CS",
    skills: [
      "Operating Systems (OS)",
      "DBMS",
      "Computer Networks",
      "Distributed Systems",
    ],
    highlight: false,
    icon: Layers,
    colSpan: 1,
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


      <h2
        className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-14"
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
                  ? "border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.10)]"
                  : "hover:border-white/15"}`}
            >
              {/* Card header: icon + label */}
              <div className="flex items-center gap-3">
                <Icon
                  size={18}
                  className={
                    cat.highlight
                      ? "text-amber-400"
                      : "text-gray-500 group-hover:text-gray-400 transition-colors"
                  }
                  aria-hidden="true"
                />
                <h3 className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
                  {cat.label}
                </h3>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2 items-center">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                      cat.highlight
                        ? "bg-amber-500/10 text-amber-200 border border-amber-500/20 hover:bg-amber-500/18 hover:border-amber-500/40 hover:text-amber-100"
                        : "bg-white/5 text-gray-300 border border-white/8 hover:bg-white/10 hover:border-white/20 hover:text-white"
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
