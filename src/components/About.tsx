
import { Book, Award, UserCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.2;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image with Parallax */}
          <div className="lg:w-1/3">
            <div ref={parallaxRef} className="relative transition-transform duration-300 ease-out">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 hover-glow">
                <img
                  src="/placeholder.svg"
                  alt="D. Karthik Reddy"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Content with Slide-up Animation */}
          <div className="lg:w-2/3 space-y-6 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I am an Electronics and Communication Engineering student at VNRVJIET with a passion for AI, 
              full-stack development, and embedded systems. I have worked on deepfake detection, drone-based sensing, 
              and AI-driven monitoring systems. I love solving real-world problems using a blend of software and 
              hardware technologies.
            </p>

            {/* Achievements with Staggered Animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass p-6 rounded-xl space-y-3 transform hover:scale-105 transition-all duration-300 card-3d">
                <Award className="text-primary animate-float" size={24} />
                <h3 className="font-heading font-semibold">Achievements</h3>
                <p className="text-sm text-gray-400">Winner of Smart India Hackathon 2023 (Ministry of Defence)</p>
              </div>

              <div className="glass p-6 rounded-xl space-y-3 transform hover:scale-105 transition-all duration-300 card-3d">
                <Book className="text-primary animate-float" size={24} />
                <h3 className="font-heading font-semibold">Education</h3>
                <p className="text-sm text-gray-400">B.Tech in Electronics and Communication (CGPA: 9.00/10.0)</p>
              </div>

              <div className="glass p-6 rounded-xl space-y-3 transform hover:scale-105 transition-all duration-300 card-3d">
                <UserCircle2 className="text-primary animate-float" size={24} />
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
