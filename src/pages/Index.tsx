
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";
import { Brain, Code2, Users, Rocket, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ResumeModal from "@/components/ResumeModal";

const WhyHireMe = () => {
  const strengths = [
    {
      icon: <Brain className="text-primary w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Built multiple successful AI projects including a 98.21% accurate Deepfake Detection model.",
    },
    {
      icon: <Code2 className="text-primary w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies and frameworks, creating responsive and intuitive applications.",
    },
    {
      icon: <Rocket className="text-primary w-8 h-8" />,
      title: "Innovation & Problem Solving",
      description: "Smart India Hackathon winner, demonstrating ability to deliver innovative solutions under pressure.",
    },
    {
      icon: <Users className="text-primary w-8 h-8" />,
      title: "Team Collaboration",
      description: "Strong track record of working effectively in diverse teams and delivering successful projects.",
    },
  ];

  const valueProposition = [
    "Innovative problem-solver with a proven track record",
    "Strong foundation in both AI/ML and embedded systems",
    "Passionate about creating impactful technological solutions",
    "Quick learner with excellent adaptability to new technologies",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Why Hire Me?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A passionate technologist combining AI expertise with hands-on development skills to create innovative solutions.
          </p>
        </motion.div>

        {/* Value Proposition */}
        <div className="glass rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-heading font-bold mb-6">What Sets Me Apart</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {valueProposition.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-1" />
                <p className="text-gray-300">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Strengths */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {strength.icon}
              </div>
              <h3 className="font-heading font-semibold mb-2">{strength.title}</h3>
              <p className="text-sm text-gray-400">{strength.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how I can contribute to your team's success.
            </p>
            <ResumeModal />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <main className="bg-black text-white min-h-screen relative">
      {/* Animated background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:8rem_1px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:1px_8rem]"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhyHireMe />
        <Contact />
        <Toaster />
      </div>
    </main>
  );
};

export default Index;
