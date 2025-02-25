
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { tsParticles } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        return "Good Morning! Welcome to my portfolio ☀️";
      } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon! Welcome to my portfolio 🌅";
      } else if (hour >= 17 && hour < 22) {
        return "Good Evening! Let's build something amazing 🌙";
      } else {
        return "Hello! Thanks for visiting my portfolio ✨";
      }
    };

    setGreeting(getGreeting());
  }, []);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      
      await tsParticles.load("tsparticles", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#FF5722"
          },
          links: {
            enable: true,
            distance: 150,
            color: "#FF5722",
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            },
            bounce: false,
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          }
        },
        detectRetina: true
      });
    };

    initParticles();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-secondary overflow-hidden">
      <div id="tsparticles" className="absolute inset-0 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-6 neon-border">
            <span className="text-primary font-medium">Full-Stack Developer & AI/ML Researcher</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white">
            D. Karthik Reddy
          </h1>

          {/* Time-based Greeting */}
          <p className="text-xl text-white/90 animate-fade-up">{greeting}</p>
          
          <div className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto h-20">
            <Typewriter
              options={{
                strings: [
                  "Building AI-powered applications",
                  "Creating scalable web solutions",
                  "Developing embedded systems",
                  "Transforming ideas into reality"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30
              }}
            />
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-lg hover-glow font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-medium neon-border"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-float z-10"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
