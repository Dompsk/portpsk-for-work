import React, { useEffect, useRef, useState } from "react";
// 1. ✅ Import hooks จาก react-router-dom เข้ามาเพิ่ม
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // 2. ✅ ประกาศตัวแปรสำหรับเช็คหน้าและเปลี่ยนหน้า
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

  // 3. ✅ สร้างฟังก์ชันใหม่สำหรับจัดการการคลิกเมนู
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // ป้องกันการใส่ # ใน url อัตโนมัติ

    if (location.pathname === "/") {
      // === กรณีอยู่หน้า Home (หน้าหลัก) ===
      // ให้ทำเหมือนเดิมคือเลื่อน (Scroll) ไปหา
      if (targetId === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // === กรณีอยู่หน้าอื่น (เช่น หน้า Project Detail) ===
      // ให้สั่งย้ายหน้ากลับไป Home ก่อน
      navigate("/");

      // (Option) ถ้าอยากให้เด้งไปหา section นั้นๆ ด้วย ต้องหน่วงเวลานิดนึงเพื่อให้หน้า Home โหลดเสร็จก่อน
      if (targetId !== "Home") {
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // ถ้ากด Home ให้เด้งไปบนสุด
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
