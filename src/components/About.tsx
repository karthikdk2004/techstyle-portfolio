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

    // Initialize vanilla-tilt
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.1,
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image with Parallax & 3D Tilt */}
          <div className="lg:w-1/3">
            <div ref={parallaxRef} className="relative transition-transform duration-300 ease-out">
              <div
                ref={tiltRef}
                className="w-64 h-64 rounded-full overflow-hidden hover-glow transform-gpu"
              >
                <div className="relative w-full h-full group transition-all duration-300">
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full 
                                group-hover:bg-white/20 transition-all duration-300"></div>

                  {/* Profile image (Replace placeholder.svg with your actual image) */}
                  <img
                    src="/images/karthik-profile.jpg"  // Update this path
                    alt="D. Karthik Reddy"
                    className="w-full h-full object-cover transform transition-all duration-500 
                             group-hover:scale-110 z-10 relative"
                  />

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 
                                group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(255,87,34,0.3)] 
                                transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 space-y-6 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm <strong>Karthik</strong>, a passionate <strong>full-stack developer</strong> 
              currently pursuing a <strong>B.Tech in Electronics and Communication Engineering</strong> 
              at <strong>VNRVJIET</strong>. My focus is on building impactful web applications and 
              integrating AI-driven solutions into software systems.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I have experience in <strong>C++, JavaScript, React, Node.js</strong>, and I am actively improving 
              my backend development skills. Apart from software development, I am also involved in AI-based 
              projects such as <strong>seismic signal processing</strong> and <strong>UAV-based object detection</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              In my free time, I enjoy working on open-source projects, participating in hackathons, and 
              exploring new technologies.
            </p>

            {/* Achievements Section */}
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
