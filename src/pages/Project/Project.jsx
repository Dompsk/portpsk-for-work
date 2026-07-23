import React from 'react';
import { Link } from 'react-router-dom';
import Projectdata, { sortedProjects } from './Projectdata';
import { useLanguage } from '../../context/LanguageContext';

const Project = () => {
  const { language, t } = useLanguage();
  return (
    <section id="project" className="pt-[80px] pb-[80px] px-[8%] bg-[#f9f9f9] font-fontstyle">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] max-md:text-[2.2rem] font-[700] uppercase tracking-[2px] mb-[10px] relative inline-block text-[#111] font-fontstyle after:content-[''] after:block after:w-[60px] after:h-[4px] after:bg-black after:mt-[10px]">
          {t.projects.title}
        </h2>
        <p className="text-[1.1rem] text-[#666] mb-[20px] -mt-[5px]">{t.projects.intro}</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] max-md:grid-cols-1 gap-[30px]">
          {sortedProjects.slice(0, 4).map((project) => (
            <Link to={project.link} className="bg-white rounded-[16px] overflow-hidden no-underline text-inherit shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] flex flex-col border border-transparent hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#eee] group" key={project.id}>
              
              <div className="w-full h-[160px] overflow-hidden relative">
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-[160px] object-cover transition-transform duration-[600ms] ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <span className="text-white border border-white px-[20px] py-[10px] rounded-[30px] font-bold tracking-[1px] uppercase text-[0.9rem] bg-[rgba(0,0,0,0.5)]">
                      {t.projects.caseStudy}
                    </span>
                </div>
              </div>

              <div className="p-[25px] grow flex flex-col">
                <div className="text-[0.85rem] text-[#888] mb-[12px] font-medium tracking-[0.5px]">
                  <span className="category">{project.category}</span>
                  <span className="mx-[8px] text-[#ccc]">•</span>
                  <span className="date">{project.date}</span>
                </div>
                
                <h3 className="text-[1.5rem] font-bold text-black m-[0_0_12px_0] leading-[1.3]">{project.title}</h3>
                <p className="text-[1rem] text-[#555] leading-[1.6] -mt-[5px] mb-[5px] line-clamp-3">{language === "th" ? project.descriptionTh : project.description}</p>
                
                <div className="mt-auto border-t border-[#f0f0f0] pt-[15px]">
                   <span className="text-[0.9rem] font-bold uppercase text-black font-fontstyle transition-all duration-300 ease-in-out group-hover:text-[#555] group-hover:tracking-[1px]">
                     {t.projects.read} &rarr;
                   </span>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-[40px] text-center">
          <Link to="/projects" className="inline-block px-[32px] py-[12px] bg-white border border-[#111] text-[#111] rounded-full font-fontstyle font-bold tracking-[1px] hover:bg-[#111] hover:text-white transition-colors duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
            {t.projects.more}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
