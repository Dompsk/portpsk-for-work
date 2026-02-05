// Certificate.jsx
import React, { useRef, useState, useEffect } from "react";
import "./Certificate.css";
import { cerData } from "./CerData"; 
import Navbar from "../navbar/Navbar";

const Certificate = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const allCategories = ["All", ...new Set(cerData.map((item) => item.category))];

  // Filter
  const filteredData =
    selectedCategory === "All"
      ? cerData
      : cerData.filter((item) => item.category === selectedCategory);

  return (
    <>
    <Navbar />
   
    <section id="Certificate" className="certificate-section">
      <div className="container">
        <h2 className="section-title">My Certificates</h2>
        <p className="section-subtitle"></p>

        {/* --- ส่วนปุ่มเลือกหมวดหมู่ --- */}
        <div className="filter-container">
          {allCategories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- ส่วนแสดงการ์ดรายการ --- */}
        <div className="certificate-grid">
          {filteredData.map((item) => (
            <div key={item.id} className="cer-card">
              <div className="cer-img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cer-content">
                <span className="cer-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="cer-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* กรณีไม่มีข้อมูลในหมวดนั้น */}
        {filteredData.length === 0 && (
          <p className="no-data">No certificates found in this category.</p>
        )}
      </div>
    </section>
    </>
  );
};

export default Certificate;