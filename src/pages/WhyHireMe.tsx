
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Award, Brain, Code2, Users, Rocket, CheckCircle2, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const WhyHireMe = () => {
  const navigate = useNavigate();

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

  const achievements = [
    "🏆 Winner of Smart India Hackathon 2023 (Ministry of Defence)",
    "🤖 Developed AI-based Acoustic Wave Monitoring System (90% accuracy)",
    "🚀 Created Drone-Based Magnetic Sensing System (40% accuracy improvement)",
    "💡 Built Multiple Full-Stack Web Applications",
  ];

  const valueProposition = [
    "Innovative problem-solver with a proven track record",
    "Strong foundation in both AI/ML and embedded systems",
    "Passionate about creating impactful technological solutions",
    "Quick learner with excellent adaptability to new technologies",
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Why Hire Me?
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A passionate technologist combining AI expertise with hands-on development skills to create innovative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-gradient-to-b from-black to-secondary">
          <div className="container mx-auto px-6">
            <div className="glass rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold mb-6">What Sets Me Apart</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {valueProposition.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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

            {/* Key Achievements */}
            <div className="glass rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-bold mb-6">Key Achievements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-lg"
                  >
                    <Award className="text-primary shrink-0" />
                    <p className="text-gray-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-heading font-bold">Ready to Work Together?</h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Let's connect and discuss how I can contribute to your team's success.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => window.open("https://www.linkedin.com/in/karthik-reddy-devi-reddy-ab6927260/", "_blank")}
                  className="gap-2 hover-glow"
                >
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </Button>
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline"
                  className="gap-2 hover-glow"
                >
                  <Mail size={20} />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhyHireMe;
