
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
                <source srcSet="/images/profile.webp" type="image/webp" />
                <img
                  src="/images/profile.jpg"
                  alt="D. Karthik Reddy"
                  className="w-full h-full object-cover object-top"
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

          <h2
            className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight"
            data-reveal
            data-delay="1"
          >
            I build things that work<br className="hidden md:block" /> — and actually ship.
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

          {/* Credential cards — asymmetric grid */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-4" data-reveal data-delay="4">
            <div className="sm:col-span-2 glass p-5 rounded-xl space-y-2 border-amber-500/25 bg-amber-500/[0.02] hover:border-amber-500/40 transition-colors duration-300">
              <Award className="text-amber-400" size={20} aria-hidden="true" />
              <h3 className="font-heading font-semibold text-sm text-white">Achievements</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                SIH 2023 National Winner · IEEE ICIIP 2025 Lead Author · Patent Co-Inventor
              </p>
            </div>

            <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="glass p-4 rounded-xl space-y-1.5 hover:border-white/20 transition-colors duration-300">
                <Book className="text-indigo-400" size={18} aria-hidden="true" />
                <h3 className="font-heading font-semibold text-xs text-white">Education</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  B.Tech ECE (8.97) · Minor in AI &amp; ML (8.5)
                  <br />
                  VNRVJIET · 2022 – May 2026
                </p>
              </div>

              <div className="glass p-4 rounded-xl space-y-1.5 hover:border-white/20 transition-colors duration-300">
                <FileText className="text-cyan-400" size={18} aria-hidden="true" />
                <h3 className="font-heading font-semibold text-xs text-white">Research &amp; IP</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  IEEE ICIIP 2025 (97.75% acc)
                  <br />
                  Patent: Acoustic rail defect detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
