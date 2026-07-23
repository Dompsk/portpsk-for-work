/* eslint-disable react-hooks/static-components */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Projectdata from '../Project/Projectdata';
import { useLanguage } from '../../context/LanguageContext';

const Descproject = () => {
  const { language, t } = useLanguage();
  const { id } = useParams();
  const project = Projectdata.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen text-[1.2rem] text-[#888] font-fontstyle">
          Project not found.
        </div>
      </>
    );
  }

  const actionBtnClass =
    'inline-block py-[10px] px-[24px] border border-[#111] bg-transparent text-[#111] no-underline text-[0.85rem] font-bold uppercase tracking-[1.5px] transition-all duration-300 cursor-pointer hover:bg-[#111] hover:text-white hover:-translate-y-[2px]';
  const boxClass = 'bg-white p-[20px] rounded-[12px] border border-[#e8e8e8]';
  const headingClass = 'font-fontstyle text-[0.65rem] font-bold mb-[8px] tracking-[3px] text-[#111] uppercase mt-0';
  const accentClass = 'w-[22px] h-[2px] bg-[#111] mb-[14px]';
  const pillClass =
    'font-fontstyle text-[0.78rem] text-[#444] bg-[#f5f5f5] border border-[#e4e4e4] px-[11px] py-[4px] rounded-full tracking-[0.5px]';

  const SidebarContent = () => (
    <div className="flex flex-col gap-[14px]">
      {/* Row 1: Categories + Language */}
      <div className="grid grid-cols-2 gap-[14px]">
        <div className={boxClass}>
          <h3 className={headingClass}>Categories</h3>
          <div className={accentClass}></div>
          <ul className="list-none p-0 m-0">
            {(project.categories || [project.category]).map((cat, i) => (
              <li key={i} className="font-fontstyle py-[8px] border-b border-[#f0f0f0] text-[#555] text-[0.82rem] last:border-b-0">
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {project.languages?.length > 0 && (
          <div className={boxClass}>
            <h3 className={headingClass}>Language</h3>
            <div className={accentClass}></div>
            <div className="flex flex-wrap gap-[6px]">
              {project.languages.map((lang, i) => (
                <span key={i} className={pillClass}>{lang}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Row 2: Framework & Lib */}
      {project.frameworks?.length > 0 && (
        <div className={boxClass}>
          <h3 className={headingClass}>Framework & Lib</h3>
          <div className={accentClass}></div>
          <div className="flex flex-wrap gap-[6px]">
            {project.frameworks.map((fw, i) => (
              <span key={i} className={pillClass}>{fw}</span>
            ))}
          </div>
        </div>
      )}

      {/* Row 3: Tools */}
      {project.tools?.length > 0 && (
        <div className={boxClass}>
          <h3 className={headingClass}>Tools</h3>
          <div className={accentClass}></div>
          <div className="flex flex-wrap gap-[6px]">
            {project.tools.map((tool, i) => (
              <span key={i} className={pillClass}>{tool}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />

      <div className="max-w-[1200px] mx-auto px-[20px] sm:px-[32px] pt-[120px] sm:pt-[140px] pb-[80px] min-h-[80vh]">

        {/* ── Desktop (lg+): side-by-side ── */}
        <div className="hidden lg:flex gap-[48px] items-start">

          {/* Left */}
          <div className="flex-1 min-w-0 -mt-[40px]">
            <h1 className="font-fontstyle text-[2.6rem] font-[400] text-[#111] mb-[28px] tracking-[1px] uppercase leading-[1.2]">
              {project.title}
            </h1>

            <div className="w-full mb-[36px] rounded-[14px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.06)] bg-[#f5f5f5] flex justify-center items-center">
              <img src={project.image} alt={project.title}
                className="w-full max-h-[420px] object-contain block transition-transform duration-300 hover:scale-[1.02]" />
            </div>

            <p className="font-fontstyle text-[1rem] leading-[1.85] text-[#555] mb-[36px]">
              {language === "th" ? project.descriptionTh : project.description}
            </p>

            <div className="flex gap-[16px]">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className={actionBtnClass}>{t.detail.demo}</a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className={actionBtnClass}>{t.detail.github}</a>
              )}
            </div>
          </div>

          {/* Right Sidebar — fixed 320px */}
          <div className="w-[320px] shrink-0 sticky top-[100px]">
            <SidebarContent />
          </div>
        </div>

        {/* ── iPad (md–lg): content top, sidebar below as 2-col grid ── */}
        <div className="hidden md:block lg:hidden">
          {/* Main content */}
          <div className="mb-[40px]">
            <h1 className="font-fontstyle text-[2.2rem] font-[400] text-[#111] mb-[24px] tracking-[1px] uppercase leading-[1.2]">
              {project.title}
            </h1>
            <div className="w-full mb-[28px] rounded-[12px] overflow-hidden shadow-[0_10px_24px_rgba(0,0,0,0.06)] bg-[#f5f5f5] flex justify-center items-center">
              <img src={project.image} alt={project.title}
                className="w-full max-h-[360px] object-contain block" />
            </div>
            <p className="font-fontstyle text-[1rem] leading-[1.85] text-[#555] mb-[28px]">
              {language === "th" ? project.descriptionTh : project.description}
            </p>
            <div className="flex gap-[16px]">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className={actionBtnClass}>{t.detail.demo}</a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className={actionBtnClass}>{t.detail.github}</a>
              )}
            </div>
          </div>

          {/* Tech info — stretched full width below */}
          <div className="border-t border-[#f0f0f0] pt-[32px]">
            <p className="font-fontstyle text-[0.65rem] tracking-[3px] uppercase text-[#aaa] mb-[20px]">Tech Stack</p>
            <SidebarContent />
          </div>
        </div>

        {/* ── Mobile (< md): fully stacked ── */}
        <div className="block md:hidden">
          <h1 className="font-fontstyle text-[1.8rem] font-[400] text-[#111] mb-[20px] tracking-[1px] uppercase leading-[1.2]">
            {project.title}
          </h1>
          <div className="w-full mb-[24px] rounded-[10px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.06)] bg-[#f5f5f5] flex justify-center items-center">
            <img src={project.image} alt={project.title}
              className="w-full max-h-[220px] object-contain block" />
          </div>
          <p className="font-fontstyle text-[0.95rem] leading-[1.85] text-[#555] mb-[24px]">
            {language === "th" ? project.descriptionTh : project.description}
          </p>
          <div className="flex gap-[12px] mb-[36px]">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className={actionBtnClass}>{t.detail.demo}</a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className={actionBtnClass}>{t.detail.github}</a>
            )}
          </div>

          {/* Tech info stacked */}
          <div className="border-t border-[#f0f0f0] pt-[28px]">
            <p className="font-fontstyle text-[0.65rem] tracking-[3px] uppercase text-[#aaa] mb-[16px]">Tech Stack</p>
            <SidebarContent />
          </div>
        </div>

        <div className="mt-14 border-t border-[#e8e8e8] pt-8 text-center">
          <p className="mb-4 font-fontstyle text-lg text-[#333]">{t.detail.contact}</p>
          <a href="mailto:dompsk2547@gmail.com" className={actionBtnClass}>{t.detail.contactButton}</a>
        </div>
      </div>
    </>
  );
};

export default Descproject;
