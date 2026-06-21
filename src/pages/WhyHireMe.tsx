
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

const CREDENTIALS = [
  {
    label: "SIH 2023 — National Winner",
    detail: "Ministry of Defence track · 1M+ national participants · Government of India",
    stat: "1st",
  },
  {
    label: "IEEE ICIIP 2025 — Lead Author",
    detail: "Ensemble Vision Transformers for GI disease classification · peer-reviewed",
    stat: "97.75%",
  },
  {
    label: "Patent Co-Inventor",
    detail: "AI-based acoustic real-time rail defect detection · Indian Patent Office",
    stat: "Filed",
  },
  {
    label: "2 Live AI Applications",
    detail: "AI GitHub PR Reviewer · AI Email Agent · both deployed on Vercel",
    stat: "Live",
  },
];

const SKILLS = [
  { area: "Languages", items: "Python · C · C++ · JavaScript · SQL" },
  { area: "AI / ML", items: "PyTorch · TensorFlow · LangGraph · LangChain · Scikit-learn · Computer Vision" },
  { area: "Web & Backend", items: "FastAPI · React · Node.js · PostgreSQL · OAuth 2.0 · REST APIs" },
  { area: "Engineering", items: "SDLC · Agile · Unit Testing · Debugging · Code Reviews · Git" },
  { area: "CS Fundamentals", items: "DSA (183 LeetCode) · OOP · OS · DBMS · Computer Networks · Distributed Systems" },
];

const WhyHireMe = () => (
  <div className="min-h-screen bg-black text-white">
    <Navigation />

    <main id="main-content" className="pt-24 pb-0">
      {/* Header */}
      <section className="py-16 container mx-auto px-6 max-w-3xl text-center">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Credentials</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          What I bring to the table.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Final-year B.Tech ECE graduate (CGPA&nbsp;8.97) with a Minor in AI&nbsp;&amp;&nbsp;ML —
          IEEE-published, national hackathon winner, patent co-inventor, and two deployed AI
          applications you can open right now.
        </p>
      </section>

      {/* Achievement wall */}
      <section className="border-y border-white/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {CREDENTIALS.map((c, i) => (
            <div
              key={i}
              className="bg-black px-6 py-10 text-center hover:bg-white/[0.04] transition-colors group"
            >
              <div className="text-4xl font-black text-white group-hover:text-primary transition-colors mb-3 leading-none">
                {c.stat}
              </div>
              <div className="text-sm font-semibold text-primary mb-1.5">{c.label}</div>
              <div className="text-xs text-gray-600 leading-relaxed">{c.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="py-16 container mx-auto px-6 max-w-3xl">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-8">Education</h2>
        <div className="glass rounded-xl p-6 space-y-1">
          <h3 className="font-bold text-white text-lg">
            B.Tech — Electronics & Communication Engineering
          </h3>
          <p className="text-gray-400 text-sm">
            VNR Vignana Jyothi Institute of Engineering & Technology, Hyderabad
          </p>
          <p className="text-gray-500 text-sm">2022 – May 2026</p>
          <p className="text-primary text-sm font-medium pt-1">
            CGPA: 8.97 / 10.0 · Minor in AI & ML (CGPA 8.5)
          </p>
        </div>
      </section>

      {/* Technical skills */}
      <section className="py-8 container mx-auto px-6 max-w-3xl">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-8">
          Technical skills
        </h2>
        <div className="space-y-4">
          {SKILLS.map((s, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-2 py-4 border-b border-white/5 last:border-0">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider sm:w-40 shrink-0">
                {s.area}
              </span>
              <span className="text-sm text-gray-300">{s.items}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-6 max-w-3xl text-center space-y-6">
        <h2 className="text-2xl font-black text-white">Ready to work together?</h2>
        <p className="text-gray-400">
          Open to Software Development Engineer, AI Engineer, Data Analyst, and Data Scientist roles.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/karthik-reddy-devireddy-ab6927260/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Linkedin size={18} aria-hidden="true" />
            Connect on LinkedIn
          </a>
          <a
            href="mailto:karthikreddy1420@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/10"
          >
            <Mail size={18} aria-hidden="true" />
            Send email
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ExternalLink size={16} aria-hidden="true" />
            View portfolio
          </a>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default WhyHireMe;
