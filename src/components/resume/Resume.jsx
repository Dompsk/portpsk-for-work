import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { resumeData } from "./Resumedata";
import Navbar from '../navbar/Navbar';
import "./Resume.css";

const Resume = () => {
  const contentRef = useRef(null);
  const handlePrint = useReactToPrint({ contentRef });

  // State: เก็บ Index ของงานที่ถูกเลือก (เริ่มต้นเลือกทั้งหมด)
  const [selectedJobs, setSelectedJobs] = useState([]);

  // useEffect: กำหนดค่าเริ่มต้นให้เลือกทุกงานตอนโหลดครั้งแรก
  useEffect(() => {
    const allJobIndices = resumeData.experience.map((_, index) => index);
    setSelectedJobs(allJobIndices);
  }, []);

  // Function: สลับสถานะการเลือก (Toggle)
  const toggleJob = (index) => {
    if (selectedJobs.includes(index)) {
      setSelectedJobs(selectedJobs.filter((i) => i !== index)); // เอาออก
    } else {
      setSelectedJobs([...selectedJobs, index].sort((a, b) => a - b)); // เพิ่มและเรียงลำดับ
    }
  };

  return (
    <>
      <Navbar />
      <div className="resume-page-wrapper">
        
        {/* === ส่วนที่ 1: Resume Container (ตรงกลาง/ซ้าย) === */}
        <div className="resume-preview-section">
            <div className="export-btn-container">
                <button onClick={handlePrint} className="export-btn">
                Export PDF
                </button>
            </div>

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
                </div>
                </header>

                {/* OBJECTIVE */}
                <section className="resume-section">
                <div className="section-title">OBJECTIVE</div>
                <p className="objective-text">{resumeData.objective}</p>
                </section>

                {/* WORK EXPERIENCE (แสดงเฉพาะที่ถูกติ๊ก) */}
                <section className="resume-section">
                <div className="section-title">WORK EXPERIENCE</div>
                {resumeData.experience.map((job, index) => {
                    // เช็คว่า Index นี้ถูกเลือกหรือไม่? ถ้าไม่ ก็ไม่แสดง (return null)
                    if (!selectedJobs.includes(index)) return null;

                    return (
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
                    );
                })}
                </section>

                {/* TECHNOLOGIES */}
                <section className="resume-section">
                <div className="section-title">TECHNOLOGIES AND LANGUAGES</div>
                <div className="skills-grid">
                    <div className="skill-category"><h4>Programming Languages</h4><p>{resumeData.skills.languages}</p></div>
                    <div className="skill-category"><h4>Frameworks / Libraries</h4><p>{resumeData.skills.frameworks}</p></div>
                    <div className="skill-category"><h4>Databases</h4><p>{resumeData.skills.databases}</p></div>
                    <div className="skill-category"><h4>Cloud</h4><p>{resumeData.skills.cloud}</p></div>
                    <div className="skill-category"><h4>Analytic Tools</h4><p>{resumeData.skills.analytic}</p></div>
                    <div className="skill-category"><h4>Tools</h4><p>{resumeData.skills.tools}</p></div>
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

        {/* === ส่วนที่ 2: Sidebar ควบคุม (ฝั่งขวา) === */}
        <div className="sidebar-controls">
            <div className="sidebar-box">
                <h3>Select Content</h3>
                <p className="sidebar-desc">Include in Main Resume</p>
                <div className="control-group">
                    <h4>Work Experience</h4>
                    {resumeData.experience.map((job, index) => (
                        <label key={index} className={`control-item ${selectedJobs.includes(index) ? 'active' : ''}`}>
                            <input 
                                type="checkbox" 
                                checked={selectedJobs.includes(index)} 
                                onChange={() => toggleJob(index)}
                            />
                            <div className="control-text">
                                <span className="control-role">{job.role}</span>
                                <span className="control-company">{job.company}</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </>
  );
};

export default Resume;