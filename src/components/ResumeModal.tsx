
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
import { toast } from "sonner";

const ResumeModal = () => {
  const handleDownload = () => {
    // In a real implementation, this would be a link to your actual resume PDF
    const resumeUrl = "karthikdk2004/techstyle-portfolio/Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "KarthikReddy_Resume.pdf";
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
      <DialogContent className="max-w-3xl bg-background/95 backdrop-blur">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Professional Journey</DialogTitle>
        </DialogHeader>
        
        {/* Timeline */}
        <div className="mt-6 space-y-8">
          <div className="space-y-6">
            {/* Education Timeline */}
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <h3 className="font-heading text-lg">Education</h3>
              <div className="mt-4 space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold">B.Tech in Electronics and Communication</h4>
                  <p className="text-sm text-gray-400">VNRVJIET • 2020 - Present</p>
                  <p className="mt-2 text-sm">CGPA: 9.00/10.0</p>
                </div>
              </div>
            </div>

            {/* Achievements Timeline */}
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <h3 className="font-heading text-lg">Key Achievements</h3>
              <div className="mt-4 space-y-4">
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold">Smart India Hackathon 2023 Winner</h4>
                  <p className="text-sm text-gray-400">Ministry of Defence</p>
                  <p className="mt-2 text-sm">Developed an AI-powered solution for defense applications</p>
                </div>
              </div>
            </div>

            {/* Skills Timeline */}
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
              <h3 className="font-heading text-lg">Technical Skills</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold">Frontend Development</h4>
                  <p className="text-sm text-gray-400">React, Next.js, TypeScript</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <h4 className="font-semibold">Backend Development</h4>
                  <p className="text-sm text-gray-400">Node.js, Python, Supabase</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-6 flex justify-end">
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
