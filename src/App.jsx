import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components เดิม
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import DescProject from "./components/project/Descproject"; 
import Project from "./components/project/Project";

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
            </main>
          </>
        }
      />

       <Route path="/Project/:id" element={<DescProject />} /> 

       <Route path="/resume" element={<Resume />} />

    </Routes>
  );
};

export default App;
