
import { Book, Award, UserCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import ResumeModal from "./ResumeModal";

const About = () => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3">
            <div ref={tiltRef} className="relative transform-gpu transition-all duration-500 hover:scale-105">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 glass">
                <img
                  src="/lovable-uploads/186269f6-e5db-4723-a35f-5e9e55246ca3.png"
                  alt="D. Karthik Reddy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I am an Electronics and Communication Engineering student at VNRVJIET with a passion for AI, 
              full-stack development, and embedded systems. I have worked on deepfake detection, drone-based sensing, 
              and AI-driven monitoring systems. I love solving real-world problems using a blend of software and 
              hardware technologies.
            </p>

            {/* Resume Preview */}
            <div className="mt-6">
              <ResumeModal />
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass p-6 rounded-xl space-y-3">
                <Award className="text-primary" size={24} />
                <h3 className="font-heading font-semibold">Achievements</h3>
                <p className="text-sm text-gray-400">Winner of Smart India Hackathon 2023 (Ministry of Defence)</p>
              </div>

              <div className="glass p-6 rounded-xl space-y-3">
                <Book className="text-primary" size={24} />
                <h3 className="font-heading font-semibold">Education</h3>
                <p className="text-sm text-gray-400">B.Tech in Electronics and Communication (CGPA: 9.00/10.0)</p>
              </div>

              <div className="glass p-6 rounded-xl space-y-3">
                <UserCircle2 className="text-primary" size={24} />
                <h3 className="font-heading font-semibold">Interests</h3>
                <p className="text-sm text-gray-400">Cricket, Badminton & Cycling enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
