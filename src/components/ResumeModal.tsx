
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, ExternalLink, Mail, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const ResumeModal = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/D_Karthik_Reddy_Resume.pdf";
    link.download = "D_Karthik_Reddy_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Resume download started!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="glass-card group">
          <BookOpen className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
          View Resume
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-background/95 backdrop-blur p-0 flex flex-col max-h-[90vh]">
        {/* Sticky header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 pt-6 pb-4 border-b border-white/10 shrink-0 gap-2">
          <div>
            <DialogTitle className="text-2xl font-heading font-bold text-white">
              D. Karthik Reddy
            </DialogTitle>
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mt-1">
              <a href="mailto:karthikreddy1420@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Mail size={12} /> karthikreddy1420@gmail.com
              </a>
              <span>•</span>
              <a href="https://linkedin.com/in/karthik-reddy" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Linkedin size={12} /> linkedin.com/in/karthik-reddy
              </a>
              <span>•</span>
              <a href="https://github.com/karthikdk2004" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Github size={12} /> github.com/karthikdk2004
              </a>
            </div>
          </div>
          <Button onClick={handleDownload} size="sm" className="neon-border self-start sm:self-auto">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* Summary */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Summary</h3>
            <div className="mt-3 glass p-4 rounded-lg">
              <p className="text-sm text-gray-300 leading-relaxed">
                Final-year B.Tech graduate (May 2026, <span className="text-white font-semibold">CGPA: 8.97</span>) and aspiring <span className="text-white font-semibold">Software Engineer</span> with strong foundations in data structures, algorithms, object-oriented design, and full-stack development. Proficient in <span className="text-white font-semibold">Python, C, C++, JavaScript, and SQL</span> with 183 LeetCode problems solved. Built and deployed multiple production-grade applications with REST APIs, automated testing, and CI/CD. IEEE-published author, patent co-inventor, and Smart India Hackathon 2023 national winner. Passionate about building reliable, scalable software that solves real-world problems.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Education</h3>
            <div className="mt-3 glass p-4 rounded-lg space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h4 className="font-semibold text-white">VNR Vignana Jyothi Institute of Engineering and Technology</h4>
                <span className="text-xs text-gray-400">Hyderabad, India</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-gray-300">
                <p>B.Tech in Electronics &amp; Communication Engineering <span className="text-primary font-medium">| CGPA: 8.97</span> · Minor in AI &amp; ML <span className="text-primary font-medium">| CGPA: 8.5</span></p>
                <span className="text-xs text-gray-400">2022 – May 2026</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Projects</h3>
            <div className="mt-3 space-y-4">
              {/* Project 1 */}
              <div className="glass p-5 rounded-lg space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-white text-base">AI GitHub PR Reviewer</h4>
                    <a href="https://ai-pr-reviewer-eta.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">2026</span>
                </div>
                <p className="text-xs text-primary/80 font-mono">Python | FastAPI | React | REST APIs | Git | CI/CD | Unit Testing</p>
                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1.5 leading-relaxed">
                  <li>Designed and built a <strong className="text-white">full-stack application</strong> with a 5-stage backend processing pipeline – architected with object-oriented design, REST API endpoints, rate limiting, and structured error handling deployed to production.</li>
                  <li>Implemented <strong className="text-white">automated testing, debugging, and code reviews</strong>; applied 16 production hardening fixes with descriptive Git commit history and CI/CD auto-deployment on every push.</li>
                  <li>Analyzed a real <strong className="text-white">Facebook React codebase (31k stars) in 8.3 seconds</strong>, identifying 6 accurate issues with file-level precision – demonstrating ability to build performant, scalable software.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="glass p-5 rounded-lg space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-white text-base">AI Email Agent</h4>
                    <a href="https://ai-email-agent-alpha.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">2026</span>
                </div>
                <p className="text-xs text-primary/80 font-mono">Python | FastAPI | React | REST APIs | SQL | Git | Unit Testing</p>
                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1.5 leading-relaxed">
                  <li>Architected a <strong className="text-white">scalable backend system</strong> with object-oriented design – 7 REST endpoints, persistent SQL state management, rate limiting, input validation, and full audit logging.</li>
                  <li>Built <strong className="text-white">4 independently testable processing modules</strong> communicating through shared state, enabling fault isolation; applied unit testing and structured debugging throughout development.</li>
                  <li>Delivered <strong className="text-white">end-to-end processing under 10 seconds</strong> with a responsive React frontend and human-in-the-loop validation; deployed full-stack with CI/CD automation.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="glass p-5 rounded-lg space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-semibold text-white text-base">UAV Magnetic Anomaly Detection – Smart India Hackathon 2023</h4>
                  <span className="text-xs text-gray-400 font-mono">2023</span>
                </div>
                <p className="text-xs text-primary/80 font-mono">Python | C | C++ | Embedded Systems | Real-Time Systems | Algorithm Design</p>
                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1.5 leading-relaxed">
                  <li>Led a cross-functional team to design and deliver a <strong className="text-white">real-time embedded software system</strong> for the Ministry of Defence – managed requirements, system design, and delivery under tight national hackathon constraints.</li>
                  <li>Wrote <strong className="text-white">low-level C and C++ algorithms</strong> for real-time sensor data acquisition; performed complexity analysis to optimize processing pipelines for real-time performance constraints.</li>
                  <li>Achieved <strong className="text-white">40% improvement in detection accuracy</strong> and <strong className="text-white">25% increase in drone flight time</strong>; awarded <strong className="text-white">1st place at Smart India Hackathon 2023</strong>, Ministry of Defence track – 1M+ participants nationwide.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div className="glass p-5 rounded-lg space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-semibold text-white text-base">Ensemble Vision Transformers – GI Disease Classification</h4>
                  <span className="text-xs text-gray-400 font-mono">2025</span>
                </div>
                <p className="text-xs text-primary/80 font-mono">Python | PyTorch | C++ | Algorithm Design | Scikit-learn | Git</p>
                <ul className="list-disc list-inside text-xs text-gray-300 space-y-1.5 leading-relaxed">
                  <li>Designed a <strong className="text-white">multi-model ensemble algorithm</strong> combining 3 vision transformers via a logistic regression meta-classifier; performed complexity and tradeoff analysis across accuracy, latency, and cost on 8,000 images.</li>
                  <li>Achieved <strong className="text-white">97.75% accuracy</strong>, outperforming single-model baselines by 4.2%; research accepted at <strong className="text-white">IEEE ICIIP 2025</strong> – peer-reviewed international conference.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Technical Skills</h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Languages</h4>
                <p className="text-xs text-gray-300">Python, C, C++, JavaScript, SQL, HTML, CSS</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Computer Science</h4>
                <p className="text-xs text-gray-300">Data Structures &amp; Algorithms (183 LeetCode), Object-Oriented Design &amp; Programming, Complexity Analysis, Algorithm Design, System Design (learning)</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Web &amp; Development</h4>
                <p className="text-xs text-gray-300">React, FastAPI, Node.js, REST APIs, PostgreSQL, OAuth 2.0</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Tools &amp; Practices</h4>
                <p className="text-xs text-gray-300">Git, GitHub, CI/CD (GitHub Actions), Unit Testing, Code Review, SDLC, Agile</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">Core CS</h4>
                <p className="text-xs text-gray-300">Operating Systems, DBMS, Computer Networks, Distributed Systems fundamentals</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1">AI / ML</h4>
                <p className="text-xs text-gray-300">PyTorch, TensorFlow, LangGraph, LangChain, Scikit-learn, Computer Vision</p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider">Achievements</h3>
            <div className="mt-3 space-y-3">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-sm">IEEE Publication (ICIIP 2025)</h4>
                <p className="text-xs text-gray-300 mt-0.5">Lead author – Vision Transformers achieving 97.75% accuracy on GI disease classification; peer-reviewed international conference</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-sm">Smart India Hackathon 2023 – National Winner</h4>
                <p className="text-xs text-gray-300 mt-0.5">Ministry of Defence track; 40% detection accuracy improvement, 25% flight time increase; 1M+ participants nationwide</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-white text-sm">Patent Filed</h4>
                <p className="text-xs text-gray-300 mt-0.5">Co-inventor of AI-based acoustic real-time rail defect detection system for predictive maintenance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky footer */}
        <div className="px-6 pb-6 pt-4 border-t border-white/10 flex justify-end shrink-0">
          <Button onClick={handleDownload} className="neon-border">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;

