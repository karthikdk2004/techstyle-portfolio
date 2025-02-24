import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Who Am I?</h2>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Profile and Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="w-full md:w-1/3"
          >
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden shadow-lg">
              <img src="/profile.jpg" alt="Karthik" className="w-full h-full object-cover" />
            </div>
            <p className="text-center text-gray-600 mt-4 text-lg">
              Passionate about **full-stack development** and AI-powered applications.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="w-full md:w-2/3"
          >
            <div className="space-y-6">
              {[
                {
                  icon: <GraduationCap size={28} className="text-primary" />,
                  title: "Education",
                  desc: "B.Tech in Electronics & Communication Engineering at VNRVJIET (CGPA: 9.00)",
                  year: "2022 - 2026"
                },
                {
                  icon: <Briefcase size={28} className="text-primary" />,
                  title: "Achievements",
                  desc: "Winner of Smart India Hackathon 2023 for drone-based sensing system.",
                  year: "2023"
                },
                {
                  icon: <Code size={28} className="text-primary" />,
                  title: "Projects",
                  desc: "Built multiple web applications & AI-powered tools.",
                  year: "Ongoing"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-3 bg-primary text-white rounded-full">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
