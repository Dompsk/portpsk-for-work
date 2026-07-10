import React from "react";
import TechStack from "../../components/TechStack/Techstack";

const Education = () => {
  return (
    <section id="About" className="pt-[100px] pb-[80px] px-[8%] max-md:px-[5%] bg-white text-[#111]">
      <h2 className="font-fontstyle text-[32px] font-[800] tracking-[3px] uppercase border-b-2 border-[#111] pb-2 mb-[40px] inline-block">
        ABOUT
      </h2>

      {/* 2-column layout: Left = intro + education | Right = TechStack */}
      <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[50px] max-[900px]:gap-[32px] items-start">

        {/* ===== LEFT COLUMN ===== */}
        <div className="flex flex-col gap-[36px]">

          {/* Intro text */}
          <div className="p-[22px_24px] bg-[#fafafa] border border-[#e8e8e8] rounded-[10px] transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:border-[#ccc]">
            <p className="text-[0.95rem] leading-[1.8] text-[#333] m-0 font-fontstyle">
              Hello! I'm <span className="font-bold bg-gradient-to-r from-slate-600 to-blue-900 bg-clip-text text-transparent">Phongsakon Charanrak</span>, a
              Computer Science student at{" "}
              <span className="font-bold bg-gradient-to-r from-slate-600 to-blue-900 bg-clip-text text-transparent">Prince of Songkla University</span>. This
              website showcases the projects I've developed and the skills. <br />
              I'm passionate about building practical solutions with interests in
              <span className="font-semibold bg-gradient-to-r from-[#9c8411] to-blue-900 bg-clip-text text-transparent"> Web Developer</span>,
              <span className="font-semibold bg-gradient-to-r from-[#9c8411] to-blue-900 bg-clip-text text-transparent"> Software Developer</span>. <br />
              I'm always eager to learn new technologies and grow as a developer.
            </p>
          </div>

          {/* Education Timeline */}
          <section className="mt-0">
            <div className="flex items-center mb-[16px]">
              <h3 className="text-[1rem] font-bold text-[#111] m-0 tracking-[1px] uppercase font-fontstyle">
                ( Education )
              </h3>
            </div>

            <ol className="list-none relative m-0 pl-[30px] before:content-[''] before:absolute before:top-[10px] before:left-[14px] before:w-[2px] before:h-[55%] before:bg-[#ccc] before:z-0">
              <li className="relative mb-[32px] last:mb-0 before:content-[''] before:absolute before:left-[-22px] before:top-[3px] before:w-[14px] before:h-[14px] before:bg-white before:border-2 before:border-[#aaa] before:rounded-full before:z-10">
                <h4 className="text-[1rem] font-bold m-[0_0_4px_0] text-[#111] font-fontstyle">
                  Prince of Songkla University, Hat Yai Campus
                </h4>
                <span className="text-[0.85rem] text-[#888] block mb-[6px] font-fontstyle">
                  2023 — 2025 ( currently ) · Major : Computer Science
                </span>
                <p className="text-[0.9rem] text-[#555] leading-[1.6] m-0 font-fontstyle">
                  Studying core computer science subjects and developing
                  programming skills.
                  Interested in software development and data science.
                </p>
              </li>

              <li className="relative mb-[32px] last:mb-0 before:content-[''] before:absolute before:left-[-22px] before:top-[3px] before:w-[14px] before:h-[14px] before:bg-white before:border-2 before:border-[#aaa] before:rounded-full before:z-10">
                <h4 className="text-[1rem] font-bold m-[0_0_4px_0] text-[#111] font-fontstyle">
                  Kanchanapisek Wittayalai Surat Thani School
                </h4>
                <span className="text-[0.85rem] text-[#888] block mb-[6px] font-fontstyle">
                  2017 — 2023
                </span>
                <p className="text-[0.9rem] text-[#555] leading-[1.6] m-0 font-fontstyle">
                  Studied in the Science and Mathematics program under the SMTE
                  project, focusing on advanced coursework in physics, chemistry,
                  biology, and mathematics.
                </p>
              </li>
            </ol>
          </section>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="sticky top-[80px] max-[900px]:static">
          <TechStack />
        </div>

      </div>
    </section>
  );
};

export default Education;
