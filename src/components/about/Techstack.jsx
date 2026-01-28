import React from 'react'
import "./Techstack.css";

const TechStack = () => {
  return (
    <div className="techstack-container">
      
      {/* --- Skills Section --- */}
      <div className="skill">
        <div className="title-wrapper">
            <h3 className="h3">( Skills )</h3>
        </div>
        
        <div className="skill-container">
          {/* Front-end */}
          <div className="skill-category">
            <h4>Programing lang</h4>
            <ul className="skill-list">
              <li className="skill-item">HTML/CSS</li>
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">Python</li>
              <li className="skill-item">PHP</li>
            </ul>
          </div>

          {/* Back-end */}
          <div className="skill-category">
            <h4>Framework&Library</h4>
            <ul className="skill-list">
              <li className="skill-item">React</li>
              <li className="skill-item">Boostrap</li>
              <li className="skill-item">Tailwind</li>

            </ul>
          </div>

        </div>
      </div>
      {/* --- Database Section --- */}
      <section className="tools-section">
        <div className="title-wrapper">
            <h3 className="h3">( Database )</h3>
         </div>
        <div className="tool-container">
    
          <ul className="tool-list">
            <li className="tool-item">MySQL</li>
            <li className="tool-item">PostgreSQL</li>
            <li className="tool-item">Supabase</li>
            <li className="tool-item">Oracle Database</li>
          </ul>
        </div>
      </section>

      {/* --- Tools Section --- */}
      <section className="tools-section">
         <div className="title-wrapper">
            <h3 className="h3">( Tools )</h3>
         </div>
        <div className="tool-container">
          <ul className="tool-list">
            <li className="tool-item">Git&GitHub</li>
            <li className="tool-item">Excel&Power bi</li>
            <li className="tool-item">Sourcetree</li>
            <li className="tool-item">Kaggle</li>
            <li className="tool-item">Colab</li>
            <li className="tool-item">Figma</li>
            <li className="tool-item">Canva</li>
          </ul>
        </div>
      </section>

    </div>
  )
}

export default TechStack