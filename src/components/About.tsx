import { Book, Award, UserCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const About = () => {
  const parallaxRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.2;
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    // Initialize VanillaTilt
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.1
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (tiltRef.current) {
        // @ts-ignore - vanilla-tilt adds this property
        tiltRef.current.vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image with Parallax & Tilt Effect */}
          <div className="lg:w-1/3 relative">
            <div ref={parallaxRef} className="relative transition-transform duration-300 ease-out perspective">
              <div 
                ref={tiltRef}
                className="w-64 h-64 rounded-full overflow-hidden transform-gpu shadow-lg border border-primary/40"
              >
                <div className="relative w-full h-full group transition-all duration-300">
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full 
                                group-hover:bg-white/20 transition-all duration-300"></div>
                  
                  {/* Profile Image */}
                  <img
                    src="/placeholder.svg"
                    alt="D. Karthik Reddy"
                    className="w-full h-full object-cover transform transition-all duration-500 
                             group-hover:scale-110 z-10 relative"
                  />
                  
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 
                                group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(255,87,34,0.3)] 
                                transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section with Fixes */}
          <div className="lg:w-2/3 space-y-6 relative z-10 text-white text-opacity-90">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
            <p className="leading-relaxed">
              Hello! I'm <strong>Karthik</strong>, a passionate <strong>full-stack developer</strong> 
              currently pursuing a <strong>B.Tech in Electronics and Communication Engineering</strong> 
              at <strong>VNRVJIET</strong>. My focus is on building impactful web applications and 
              integrating AI-driven solutions into software systems.
            </p>

            {/* Achievements Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass p-6 rounded-xl space-y-3 transform hover:scale-105 transition-all duration-300">
                <Award className="text-primary animate-float" size={24} />
                <h3 className="font-heading font-semibold">Achievements</h3>
                <p className="text-sm text-gray-300">Winner of Smart India Hackathon 2023 (Ministry of Defence)</p>
              </div>

              <div className="glass p-6 rounded-xl space-y-3 transform hover:scale-105 transition-all duration-300">
                <Book className="text-primary animate-float" size={24} />
                <h3 className="font-heading font-semibold">Education</h3>
                <p className="text-sm text-gray-300">B.Tech in Electronics and Communication (CGPA: 9.00/10.0)</p>
              </div>

              <div className="glass p-6 rounded-xl space-y-3 transform hover:scale-105 transition-all duration-300">
                <UserCircle2 className="text-primary animate-float" size={24} />
                <h3 className="font-heading font-semibold">Interests</h3>
                <p className="text-sm text-gray-300">Cricket, Badminton & Cycling enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Fix - Ensures Text Visibility */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </section>
  );
};

export default About;
