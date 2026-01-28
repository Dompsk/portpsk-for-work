import React from "react";
import { Routes, Route } from "react-router-dom"; // 1. เพิ่ม import นี้

//Components เดิม
import navbar from "./components/navbar/navbar.jsx";
import home from "./components/home/home.jsx";
import about from "./components/about/about.jsx";
import project from "./components/project/project.jsx";
import descproject from "./components/project/descproject.jsx"; //
const App = () => {
  return (
    <Routes>
      {/* === เส้นทางที่ 1: หน้าหลัก (Landing Page) === */}
      {/* เมื่อเข้าเว็บมาเฉยๆ (path="/") ให้แสดง Navbar, Home, About, Project ตามลำดับเดิม */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main>
              <section id="Home">
                <Home />
              </section>
              <section id="About">
                <About />
              </section>
              <section id="Project">
                <Project />
              </section>
            </main>
          </>
        }
      />

      <Route path="/Project/:id" element={<DescProject />} />
    </Routes>
  );
};

export default App;
