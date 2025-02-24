import React from "react";
import { motion } from "framer-motion";
import { Award, Book, UserCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-100 to-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/background-effect.svg" 
          alt="Background Effect" 
          className="w-full h-full opacity-70 object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="lg:w-1/3 relative"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border border-gray-300">
              <img 
                src="/profile.jpg" 
                alt="D. Karthik Reddy" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="lg:w-2/3 space-y-6 text-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">About Me</h2>
            <p className="leading-relaxed text-gray-600 text-lg">
              Hello! I'm <strong className="text-black">Karthik</strong>, a passionate <strong className="text-black">full-stack developer</strong> currently pursuing a <strong>B.Tech in Electronics and Communication Engineering</strong> at <strong>VNRVJIET</strong>. 
              My focus is on building impactful web applications and integrating AI-driven solutions into software systems.
            </p>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { 
                  icon: <Award size={32} className="text-black" />, 
                  title: "Achievements", 
                  desc: "Winner of Smart India Hackathon 2023" 
                },
                { 
                  icon: <Book size={32} className="text-black" />, 
                  title: "Education", 
                  desc: "B.Tech in ECE (CGPA: 9.00)" 
                },
                { 
                  icon: <UserCircle2 size={32} className="text-black" />, 
                  title: "Interests", 
                  desc: "Cricket, Badminton & Cycling" 
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-white border border-gray-300 shadow-lg"
                >
                  {item.icon}
                  <h3 className="font-heading font-semibold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
