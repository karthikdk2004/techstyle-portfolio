import React from "react";
import profileImg from "../assets/profile.png"; // Add your profile image in the assets folder
import { FaAward, FaBook, FaRunning } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Particle Background */}
      <div id="particles-js"></div>

      <div className="about-container">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={profileImg} alt="Profile" />
        </div>

        {/* About Text */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p>
            Hello! I'm <span className="highlight">Karthik</span>, a passionate{" "}
            <span className="highlight">full-stack developer</span> currently pursuing a{" "}
            <strong>B.Tech in Electronics and Communication Engineering</strong> at{" "}
            <strong>VNRVJIET</strong>. My focus is on building impactful web applications and
            integrating AI-driven solutions into software systems.
          </p>

          {/* Cards Section */}
          <div className="about-cards">
            <div className="card">
              <FaAward className="icon" />
              <h3>Achievements</h3>
              <p>Winner of Smart India Hackathon 2023 (Ministry of Defence)</p>
            </div>

            <div className="card">
              <FaBook className="icon" />
              <h3>Education</h3>
              <p>B.Tech in ECE (CGPA: 9.00/10.0)</p>
            </div>

            <div className="card">
              <FaRunning className="icon" />
              <h3>Interests</h3>
              <p>Cricket, Badminton & Cycling enthusiast</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
