import React from "react";
import "./Home.css";

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
        <a href="#Resume" className="project-button resume-button">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
