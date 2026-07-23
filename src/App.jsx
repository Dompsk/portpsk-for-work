import React from "react";
import { Routes, Route } from 'react-router-dom';

// Reusable Components
import Navbar from "./components/navbar/Navbar";
// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Certificates from "./pages/Certificates/Certificates";
import DescProject from "./pages/ProjectDetail/Descproject";
import Resume from "./pages/Resume/Resume";
import AllProjects from "./pages/Project/AllProjects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Routes>
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
              <section id="Certificate">
                <Certificates />
              </section>
              <Contact />
            </main>
          </>
        }
      />

      <Route path="/projects" element={<AllProjects />} />
      <Route path="/Project/:id" element={<DescProject />} />

      <Route path="/Resume" element={<Resume />} />

    </Routes>
  );
};

export default App;
