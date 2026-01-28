// src/components/ProjectSection/ProjectSection.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // อย่าลืม npm install react-router-dom
import Projectdata from './Projectdata'; // path ไปยังไฟล์ data
import './Project.css';

const Project = () => {
  return (
    <section id="project" className="project-section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>
        <p className="section-subtitle">Explore my recent work and experiences.</p>

        <div className="project-grid">
          {Projectdata.map((project) => (
            <Link to={project.link} className="project-card" key={project.id}>
              
              <div className="card-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="card-overlay">
                    <span>View Case Study</span>
                </div>
              </div>

              <div className="card-content">
                <div className="card-meta">
                  <span className="category">{project.category}</span>
                  <span className="separator">•</span>
                  <span className="date">{project.date}</span>
                </div>
                
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                
                <div className="card-footer">
                   <span className="read-more">Read more &rarr;</span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;