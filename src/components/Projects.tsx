
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Projects = () => {
  const projects = [
    {
      title: "Deepfake Detection Using SqueezeNet",
      description: "Built a deepfake detection model with 98.21% accuracy using PyTorch.",
      techStack: ["AI/ML", "Computer Vision", "Deep Learning"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Drone-Based Magnetic Sensing System",
      description: "Engineered an AI-powered drone-based anomaly detection system with a 40% accuracy improvement.",
      techStack: ["Embedded Systems", "IoT", "LoRa"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI-based Acoustic Wave Monitoring System",
      description: "Developed an AI-driven railway defect detection system achieving 90% accuracy using signal processing techniques.",
      techStack: ["AI/ML", "Signal Processing"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    tiltRefs.current.forEach((element) => {
      if (element) {
        VanillaTilt.init(element, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.05,
        });
      }
    });

    return () => {
      tiltRefs.current.forEach((element) => {
        if (element) {
          (element as any)?.vanillaTilt?.destroy();
        }
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div 
        className="container mx-auto px-6"
        data-scroll
        data-scroll-speed="0.2"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (tiltRefs.current[index] = el)}
              className="glass rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group transform-gpu"
            >
              <div className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
