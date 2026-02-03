import React from "react";
import "./Home.css";
import { Link } from "react-router-dom"; // นำเข้า Link

const Home = () => {
  return (
    <section id="Home" className="section1">
      <h1>
        Build and collect experiences UX UI Design , Frontend , Backend and Data
        Analytics
      </h1>

      <h3>Minimal , User-Friendly Design , Explore my work and experiences.</h3>

      <div className="button-container">
        <a href="#project" className="project-button">
          View Project
        </a>
        <Link to="/resume" className="project-button resume-button">
          Resume
        </Link>
      </div>
    </section>
  );
};

export default Home;
