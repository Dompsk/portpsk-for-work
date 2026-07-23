import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom"; // นำเข้า Link

const Home = () => {
  const { t } = useLanguage();
  const btnClass = "px-[22px] py-[10px] text-[13px] cursor-pointer uppercase tracking-[1px] rounded-full bg-white text-[#111] border-[1.5px] border-[#111] transition-all duration-[250ms] ease-in-out no-underline font-bold font-fontstyle whitespace-nowrap hover:bg-[#111] hover:text-white hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]";

  return (
    <section 
      id="Home" 
      className="pt-[80px] pb-[80px] px-[8%] max-md:px-[5%] min-h-screen flex flex-col justify-center items-center bg-white"
    >
      <h1 className="text-[clamp(28px,5vw,60px)] block pb-2 mb-2 font-bold font-sans text-center text-[#111] leading-[1.2] max-w-[900px]">
        {t.home.title}
      </h1>

      <h3 className="text-[clamp(14px,2vw,22px)] pb-[5px] mt-3 text-center text-[#888] font-fontstyle">
        {t.home.subtitle}
      </h3>

      <div className="flex justify-center flex-wrap mt-8 gap-[14px]">
        <a href="#project" className={btnClass}>
          {t.home.projects}
        </a>
        <a href="#Contact" className={btnClass}>{t.home.contact}</a>
      </div>
    </section>
  );
};

export default Home;
