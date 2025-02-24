
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "2023",
    title: "Smart India Hackathon Winner",
    description: "Led a team to victory in SIH 2023, developing an AI-powered solution for the Ministry of Defence."
  },
  {
    date: "2022",
    title: "Research Project Lead",
    description: "Spearheaded research in deepfake detection using advanced computer vision techniques."
  },
  {
    date: "2021",
    title: "Full Stack Development",
    description: "Developed multiple web applications using React, Node.js, and modern cloud technologies."
  }
];

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-heading text-center mb-12" data-aos="fade-up">Career Journey</h2>
      <div className="relative container mx-auto px-6">
        <div className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-primary/30 h-full"></div>
        
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative mb-12 ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className={`glass-card p-6 ${index % 2 === 0 ? 'ml-12' : 'mr-12'} hover:scale-105 transition-transform duration-300`}>
              <span className="absolute top-6 -left-3 w-6 h-6 rounded-full bg-primary/20 border border-primary/50"></span>
              <div className="text-sm text-primary mb-2">{item.date}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
