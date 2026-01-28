import React from "react";
import "./About.css";
import "./Education.css";
import TechStack from "./Techstack"; // 1. อย่าลืม import ไฟล์ที่เพิ่งสร้าง

const Education = () => {
  return (
    <section id="About" className="section timeline-section">
      <h2>ABOUT</h2>
      <div className="introduce-container">
        <div className="introduce">
          <p>
            Hello! I'm <span className="highlight">Phongsakon Charanrak</span>, a
            Computer Science student at{" "}
            <span className="highlight">Prince of Songkla University</span>. This
            website showcases the projects I’ve developed and the skills. <br />
            I’m passionate about building practical
            solutions with interests in <br />
            <span className="text-accent"> web development</span>,
            <span className="text-accent"> data analysis</span>, 
            <span className="text-accent"> software engineering</span>. <br />
            I’m always eager to learn new technologies and grow as a developer.
          </p>
        </div>
        <TechStack />
      </div>
      {/* Grid Wrapper: แบ่งซ้ายขวาตรงนี้ */}
      <div className="about-content-wrapper">
        
        {/* ซ้าย: Education Timeline */}
        <section className="timeline">
          <div className="title-wrapper">
            <h3 className="h3">( Education )</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Prince of Songkla University, Hat Yai Campus
              </h4>
              <span>2023 — 2025 ( currently ) Major : Computer Science</span>
              <p className="timeline-text">
                Studying core computer science subjects and developing
                programming skills.
                <br />
                Interested in software development and data science.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Kanchanapisek Wittayalai Surat Thani School
              </h4>
              <span>2017 — 2023</span>
              <p className="timeline-text">
                Studied in the Science and Mathematics program under the SMTE
                project,
                <br />
                focusing on advanced coursework in physics, chemistry, biology,
                and mathematics.
              </p>
            </li>
          </ol>
        </section>
      </div>
    </section>
  );
};

export default Education;