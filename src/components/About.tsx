import React, { useEffect, useRef } from "react";
import profileImg from "karthikdk2004/techstyle-portfolio/src/assets/profile.jpg";
import { FaAward, FaBook, FaRunning } from "react-icons/fa";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div id="particles-js"></div>

      <div className="about-container">
        <div className="profile-image">
          <img src={profileImg} alt="Profile" />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p>
            Hello! I'm <span className="highlight">Karthik</span>, a passionate{" "}
            <span className="highlight">full-stack developer</span> currently pursuing a{" "}
            <strong>B.Tech in Electronics and Communication Engineering</strong> at{" "}
            <strong>VNRVJIET</strong>. My focus is on building impactful web applications and
            integrating AI-driven solutions into software systems.
          </p>

          <div className="about-cards">
            <div className="card">
              <FaAward className="icon" />
              <h3>Achievements</h3>
              <p>Winner of Smart India Hackathon 2023</p>
            </div>

            <div className="card">
              <FaBook className="icon" />
              <h3>Education</h3>
              <p>B.Tech in ECE (CGPA: 9.00/10.0)</p>
            </div>

            <div className="card">
              <FaRunning className="icon" />
              <h3>Interests</h3>
              <p>Cricket, Badminton & Cycling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
