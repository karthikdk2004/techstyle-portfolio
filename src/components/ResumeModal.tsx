
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
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

      {/*
        Override shadcn defaults:
        - p-0 replaces p-6 (we handle padding per-zone)
        - flex flex-col replaces grid (needed for sticky header/footer + scrollable body)
        - max-h-[90vh] caps height so body can scroll instead of clipping
      */}
      <DialogContent className="max-w-3xl bg-background/95 backdrop-blur p-0 flex flex-col max-h-[90vh]">

        {/* Sticky header — never scrolls away */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/8 shrink-0">
          <DialogTitle className="text-2xl font-heading">
            D. Karthik Reddy — Resume
          </DialogTitle>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">

          {/* Education */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <h3 className="font-heading text-lg">Education</h3>
            <div className="mt-4 space-y-3">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">B.Tech — Electronics &amp; Communication Engineering</h4>
                <p className="text-sm text-gray-400">
                  VNR Vignana Jyothi Institute of Engineering &amp; Technology, Hyderabad
                </p>
                <p className="text-sm text-gray-400">2022 – May 2026</p>
                <p className="mt-2 text-sm">CGPA: 8.97 / 10.0 · Minor in AI &amp; ML (CGPA 8.5)</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <h3 className="font-heading text-lg">Key Achievements</h3>
            <div className="mt-4 space-y-3">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">Smart India Hackathon 2023 — National Winner</h4>
                <p className="text-sm text-gray-400">Ministry of Defence track · 1M+ national participants</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">IEEE ICIIP 2025 — Lead Author</h4>
                <p className="text-sm text-gray-400">
                  Ensemble Vision Transformers for GI Disease Classification · 97.75% accuracy
                </p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">Patent Co-Inventor</h4>
                <p className="text-sm text-gray-400">
                  AI-based acoustic real-time rail defect detection system · Indian Patent Office
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0" />
            <h3 className="font-heading text-lg">Technical Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">Languages</h4>
                <p className="text-sm text-gray-400">Python, C, C++, JavaScript, SQL, HTML, CSS</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">Web &amp; Backend</h4>
                <p className="text-sm text-gray-400">React, FastAPI, Node.js, PostgreSQL, OAuth 2.0</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">AI / ML</h4>
                <p className="text-sm text-gray-400">PyTorch, TensorFlow, LangGraph, LangChain, Scikit-learn</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold">Engineering</h4>
                <p className="text-sm text-gray-400">SDLC, Agile, Unit Testing, REST APIs, Git, Code Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky footer — download button stays pinned at bottom */}
        <div className="px-6 pb-6 pt-4 border-t border-white/8 flex justify-end shrink-0">
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
