
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built and deployed personal website to showcase resume and technical portfolio with responsive design using custom CSS, hosted on Vercel.",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      year: "2025",
      type: "Frontend Project"
    },
    {
      title: "Travel Expense Tracker Web App - \"Wayfare Wallet\"",
      description: "Designed an interactive web application for logging, categorizing, and tracking expenses with dynamic DOM updates and form validation.",
      techStack: ["HTML", "CSS", "JavaScript"],
      year: "2025",
      type: "Frontend Project"
    },
    {
      title: "Gastrointestinal Disease Classification using Vision Transformers",
      description: "Trained a MaxViT transformer model on KVASIR v2 to classify 8 GI tract conditions from endoscopic images. Achieved high accuracy using data augmentation.",
      techStack: ["MaxViT", "Python", "Computer Vision", "AI/ML"],
      year: "2025",
      type: "Research Project"
    },
    {
      title: "Smart India Hackathon - Magnetic Sensing Drone",
      description: "Led UAV-based solution improving magnetic detection by 40%, with 95% accurate data logging. Reduced flight power usage by 25%, solved 7 system bugs during finals.",
      techStack: ["Python", "Embedded Systems", "IoT", "UAV"],
      year: "2023",
      type: "Hackathon Winner"
    },
    {
      title: "AI-Based Acoustic Monitoring System",
      description: "Developed rail track monitoring using acoustic waves with 90% accuracy. Processed 500K+ samples in real-time via AI-based edge processing.",
      techStack: ["Edge AI", "Embedded", "Signal Processing"],
      year: "2025",
      type: "Patent Published"
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
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 ml-2">{project.year}</span>
                </div>
                <div className="mb-3">
                  <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                    {project.type}
                  </span>
                </div>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
