
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import Lottie from "lottie-react";
import resumeAnimation from "../assets/resume-animation.json";
import { motion } from "framer-motion";

const ResumeModal = () => {
  const highlights = [
    "Smart India Hackathon 2023 Winner - Ministry of Defence Project",
    "Full Stack Development with React, Node.js, and Python",
    "AI/ML Research in Deepfake Detection",
    "Drone-based Sensing Systems Development",
    "Team Leadership & Project Management"
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="glass-card group">
          <FileText className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="glass sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading mb-4">Professional Journey</DialogTitle>
          <div className="w-32 h-32 mx-auto">
            <Lottie animationData={resumeAnimation} loop={true} />
          </div>
        </DialogHeader>
        <DialogDescription>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Key Highlights</h3>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>
            <Button className="w-full" onClick={() => window.open('/resume.pdf', '_blank')}>
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </Button>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
