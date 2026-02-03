import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { resumeData } from "./Resumedata"; // Import ข้อมูล
import "./Resume.css"; // Import CSS

const Resume = () => {
  // สร้าง Ref เพื่อระบุส่วนที่จะ Print
  const contentRef = useRef(null);
  
  // เรียกใช้ Hook สำหรับ Print
  const handlePrint = useReactToPrint({
      contentRef
  });

  return (
    <div style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", padding: "20px" }}>
      
      {/* ส่วนนี้จะแสดงแค่ปุ่ม Export */}
      <div className="export-btn-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <button onClick={handlePrint} className="export-btn">
          Export selected PDF
        </button>
      </div>

      {/* ส่วนกระดาษ Resume ที่จะ Print */}
      <div ref={contentRef} className="resume-container">
        
        {/* HEADER */}
        <header className="resume-header">
          <h1>{resumeData.header.name}</h1>
          <div className="contact-info">
            <span>{resumeData.header.phone}</span>
            <span>{resumeData.header.email}</span>
            {resumeData.header.links.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
            <span>{resumeData.header.location}</span>
          </div>
        </header>

        {/* OBJECTIVE */}
        <section className="resume-section">
          <div className="section-title">OBJECTIVE</div>
          <p className="objective-text">{resumeData.objective}</p>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="resume-section">
          <div className="section-title">WORK EXPERIENCE</div>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="job-item">
              <div className="job-header">
                <span className="job-role">
                  {job.role} <span style={{fontWeight: 'normal', color: '#666'}}>— {job.type}</span> <br/>
                  <span className="job-company">{job.company}</span>
                </span>
                <span className="job-date">{job.date}</span>
              </div>
              <ul className="job-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* TECHNOLOGIES */}
        <section className="resume-section">
          <div className="section-title">TECHNOLOGIES AND LANGUAGES</div>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <p>{resumeData.skills.languages}</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks / Libraries</h4>
              <p>{resumeData.skills.frameworks}</p>
            </div>
            <div className="skill-category">
              <h4>Databases</h4>
              <p>{resumeData.skills.databases}</p>
            </div>
            <div className="skill-category">
              <h4>Cloud</h4>
              <p>{resumeData.skills.cloud}</p>
            </div>
            <div className="skill-category">
              <h4>AI</h4>
              <p>{resumeData.skills.ai}</p>
            </div>
            <div className="skill-category">
              <h4>DevOps</h4>
              <p>{resumeData.skills.devops}</p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="resume-section">
          <div className="section-title">EDUCATION</div>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="edu-item">
               <div className="job-header">
                <span className="job-role">{edu.degree}</span>
                <span className="job-date">{edu.date}</span>
              </div>
              <p>{edu.school} <span style={{color:'#777'}}>{edu.status}</span></p>
              <div className="edu-coursework">
                <strong>Related Courseworks:</strong> {edu.coursework}
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
};

export default Resume;