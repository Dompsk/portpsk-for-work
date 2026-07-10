import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [isShrunken, setIsShrunken] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const shrinkThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsShrunken(scrollY > shrinkThreshold);
      setShowScrollBtn(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      if (targetId === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
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

  // Base Tailwind classes for the navigation links
  const linkBaseClasses = `
    text-white no-underline font-fontstyle uppercase tracking-[1px] relative 
    transition-colors duration-300 whitespace-nowrap hover:text-[#cecece]
    after:content-[''] after:absolute after:bottom-1 after:left-3.5 after:right-3.5 
    after:h-[2px] after:bg-white after:scale-x-0 after:origin-left 
    after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100
    max-md:text-[12px] max-md:px-2 max-md:py-1.5 max-md:tracking-[0.5px]
  `;

  const linkActiveClasses = isShrunken
    ? "text-[17.5px] px-5 py-1.5"
    : "text-[20px] px-[18px] py-2";

  const linkClasses = `${linkBaseClasses} ${linkActiveClasses}`;

  return (
    <>
      <nav
        className={`bg-[#111] fixed top-0 left-0 w-full shadow-[0_2px_5px_rgba(255,255,255,0.1)] z-50 transition-all duration-300 flex justify-between items-center box-border ${
          isShrunken ? "py-2.5 px-10 max-md:px-5" : "py-4.5 px-10 max-md:px-5"
        }`}
      >
        <div
          className="text-white font-bold no-underline transition-all duration-300 font-fontstyle shrink-0 cursor-pointer hover:text-white text-[28px] max-md:text-[22px]"
          onClick={(e) => handleNavClick(e, "Home")}
        >
          Psk
        </div>

        <ul className="list-none flex items-center p-0 m-0 flex-1 justify-center gap-0">
          <li>
            <a
              href="#Home"
              onClick={(e) => handleNavClick(e, "Home")}
              className={linkClasses}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              onClick={(e) => handleNavClick(e, "About")}
              className={linkClasses}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Project"
              onClick={(e) => handleNavClick(e, "Project")}
              className={linkClasses}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Certificate"
              onClick={(e) => handleNavClick(e, "Certificate")}
              className={linkClasses}
            >
              Certificates
            </a>
          </li>
          {/* <li>
            <Link to="/Resume" className={linkClasses}>
              Resume
            </Link>
          </li> */}
        </ul>
      </nav>
      {/* Scroll Top Button - Kept for reference but not currently visible based on state hook logic previously present but omitted from render */}
    </>
  );
};

export default Navbar;
