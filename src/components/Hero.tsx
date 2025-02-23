
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="glass-card p-8 md:p-12 text-center space-y-6 animate-fade-up max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 glass rounded-full mb-6">
            <span className="text-primary font-medium">Full-Stack Developer & AI/ML Researcher</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white">
            D. Karthik Reddy
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            I specialize in building AI-powered applications, scalable web solutions, and embedded systems. 
            Passionate about transforming ideas into impactful technology.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="glass px-8 py-3 text-white rounded-lg hover:bg-white/5 transition-all duration-300 font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="glass px-8 py-3 text-white rounded-lg hover:bg-white/5 transition-all duration-300 font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-float"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
