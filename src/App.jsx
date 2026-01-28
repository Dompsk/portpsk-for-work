import React from "react";
import { Routes, Route } from "react-router-dom"; // 1. เพิ่ม import นี้

//Components เดิม
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

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
            </main>
          </>
        }
      />

      {/* <Route path="/Project/:id" element={<DescProject />} /> */}
    </Routes>
  );
};

export default App;
