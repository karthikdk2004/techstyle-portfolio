
import { Book, Award, FileText } from "lucide-react";
import ResumeModal from "./ResumeModal";

const About = () => (
  <section id="about" className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* Profile photo */}
        <div className="lg:w-1/3 flex justify-center" data-reveal>
          <div className="relative">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10 transition-transform duration-500 hover:scale-[1.03]">
              <picture>
                <source srcSet="/lovable-uploads/profile.webp" type="image/webp" />
                <img
                  src="/lovable-uploads/186269f6-e5db-4723-a35f-5e9e55246ca3.png"
                  alt="D. Karthik Reddy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="256"
                  height="256"
                />
              </picture>
            </div>
            <div
              className="absolute -inset-4 rounded-2xl -z-10 opacity-30"
              style={{ background: "radial-gradient(ellipse, rgba(129,140,248,0.4), transparent 70%)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-2/3 space-y-6">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest" data-reveal>
            About
          </p>
          <h2
            className="text-3xl md:text-4xl font-black text-white leading-tight"
            data-reveal
            data-delay="1"
          >
            Building software that<br className="hidden md:block" /> works in the real world.
          </h2>

          <p
            className="text-gray-400 leading-relaxed text-base max-w-xl"
            data-reveal
            data-delay="2"
          >
            Final-year B.Tech Electronics &amp; Communication Engineering graduate (May 2026,
            CGPA&nbsp;8.97) with a Minor in AI&nbsp;&amp;&nbsp;ML (CGPA&nbsp;8.5) from VNR Vignana
            Jyothi Institute of Engineering &amp; Technology, Hyderabad. I focus on building
            reliable, scalable, maintainable software — two of my AI applications are live and
            publicly accessible right now. IEEE-published author, patent co-inventor, and national
            winner of Smart India Hackathon&nbsp;2023 (Ministry of Defence, 1M+ participants).
          </p>

          <div className="pt-2" data-reveal data-delay="3">
            <ResumeModal />
          </div>

          {/* Credential cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4" data-reveal data-delay="4">
            <div className="glass p-5 rounded-xl space-y-2 hover:border-white/20 transition-colors duration-300">
              <Award className="text-primary" size={20} aria-hidden="true" />
              <h3 className="font-semibold text-sm text-white">Achievements</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                SIH 2023 National Winner · IEEE ICIIP 2025 Lead Author · Patent Co-Inventor
              </p>
            </div>

            <div className="glass p-5 rounded-xl space-y-2 hover:border-white/20 transition-colors duration-300">
              <Book className="text-primary" size={20} aria-hidden="true" />
              <h3 className="font-semibold text-sm text-white">Education</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                B.Tech ECE, CGPA 8.97 · Minor in AI &amp; ML (CGPA 8.5)
                <br />
                VNRVJIET, Hyderabad · 2022 – May 2026
              </p>
            </div>

            <div className="glass p-5 rounded-xl space-y-2 hover:border-white/20 transition-colors duration-300">
              <FileText className="text-primary" size={20} aria-hidden="true" />
              <h3 className="font-semibold text-sm text-white">Research &amp; IP</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                IEEE ICIIP 2025 — 97.75% GI classification accuracy.
                Patent: AI acoustic rail defect detection (Indian Patent Office).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
