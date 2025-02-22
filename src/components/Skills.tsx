
import { Code, Brain, CircuitBoard, Tool } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" size={24} />,
      skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "SQL", "MATLAB"],
    },
    {
      title: "AI/ML",
      icon: <Brain className="text-primary" size={24} />,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", "Deep Learning"],
    },
    {
      title: "Embedded Systems",
      icon: <CircuitBoard className="text-primary" size={24} />,
      skills: ["Raspberry Pi", "Arduino", "LoRa", "GPS Neo-6M", "Magnetometers"],
    },
    {
      title: "Tools",
      icon: <Tool className="text-primary" size={24} />,
      skills: ["AutoCAD", "MATLAB", "NI Multisim", "Xilinx Design Suite", "Linux", "Git"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:bg-white/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="font-heading font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
