import React, { useEffect } from "react";
import Particles from "particles.js";

const About = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        color: { value: "#ff6600" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 2 },
        line_linked: {
          enable: true,
          distance: 120,
          color: "#ff6600",
          opacity: 0.3,
          width: 1,
        },
        move: { speed: 2 },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } },
      },
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div id="particles-js"></div>
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
            <i className="icon">🏅</i>
            <h3>Achievements</h3>
            <p>Winner of Smart India Hackathon 2023 (Ministry of Defence)</p>
          </div>

          <div className="card">
            <i className="icon">📚</i>
            <h3>Education</h3>
            <p>B.Tech in ECE (CGPA: 9.00/10.0)</p>
          </div>

          <div className="card">
            <i className="icon">⚽</i>
            <h3>Interests</h3>
            <p>Cricket, Badminton & Cycling enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
