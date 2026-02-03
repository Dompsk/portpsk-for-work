import React, { useEffect, useRef, useState } from "react";
// Import hooks จาก react-router-dom
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // ประกาศตัวแปรสำหรับเช็คหน้าและเปลี่ยนหน้า
  const location = useLocation();
  const navigate = useNavigate();

  const shrinkThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (navbarRef.current) {
        if (scrollY > shrinkThreshold) {
          navbarRef.current.classList.add("shrunken");
        } else {
          navbarRef.current.classList.remove("shrunken");
        }
      }
      if (scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ฟังก์ชันสำหรับจัดการการคลิกเมนูในหน้า Home (Scroll)
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); 

    if (location.pathname === "/") {
      // === กรณีอยู่หน้า Home (หน้าหลัก) ===
      if (targetId === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // === กรณีอยู่หน้าอื่น ===
      // ย้ายกลับไป Home ก่อน แล้วค่อยเลื่อน
      navigate("/");
      if (targetId !== "Home") {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <div className="logo" onClick={(e) => handleNavClick(e, "Home")}>
          Psk
        </div>

        <ul className="nav-links">
          <li>
            <a href="#Home" onClick={(e) => handleNavClick(e, "Home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#About" onClick={(e) => handleNavClick(e, "About")}>
              About
            </a>
          </li>
          <li>
            <a href="#Project" onClick={(e) => handleNavClick(e, "Project")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Certificate" onClick={(e) => handleNavClick(e, "Certificate")}>
              Certificates
            </a>
          </li>
          
          <li>
            <a 
              href="/resume" 
              onClick={(e) => {
                e.preventDefault(); 
                navigate("/resume");    // 1. เปลี่ยนหน้า
                window.scrollTo(0, 0);  // 2. สั่งให้เด้งไปบนสุดทันที
              }}
            >
              Resume
            </a>
          </li>

          {/* <li>
            <a href="#Contact" onClick={(e) => handleNavClick(e, "Contact")}>
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;