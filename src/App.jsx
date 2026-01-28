import React from "react";
import { Routes, Route } from "react-router-dom"; // 1. เพิ่ม import นี้

//Components เดิม
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
          </>
        }
      />

     {/* <Route path="/Project/:id" element={<DescProject />} /> */}
    </Routes>
  );
};

export default App;
