
const CATEGORIES = [
  {
    label: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "SQL", "HTML", "CSS"],
    highlight: true,
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
  },
  {
    label: "Web & Backend",
    skills: ["React", "FastAPI", "Node.js", "PostgreSQL", "OAuth 2.0", "Vercel"],
    highlight: false,
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
  },
];

const Skills = () => (
  <section id="skills" className="py-24 bg-black">
    <div className="container mx-auto px-6">

      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3" data-reveal>
        Skills
      </p>
      <h2
        className="text-3xl md:text-4xl font-black text-white mb-16"
        data-reveal
        data-delay="1"
      >
        Technical toolkit
      </h2>

      <div className="glass rounded-2xl overflow-hidden divide-y divide-white/5" data-reveal data-delay="2">
        {CATEGORIES.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-6 py-5 hover:bg-white/[0.03] transition-colors duration-200 group"
          >
            {/* Category label */}
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider sm:w-36 shrink-0 group-hover:text-primary/70 transition-colors duration-200">
              {cat.label}
            </span>

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
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
