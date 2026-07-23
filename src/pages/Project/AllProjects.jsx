import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Projectdata, { sortedProjects } from './Projectdata';
import { useLanguage } from '../../context/LanguageContext';

const AllProjects = () => {
  const { language, t } = useLanguage();
  // เลื่อนกลับไปด้านบนสุดเวลาเปิดหน้านี้
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-[100px] pb-[80px] px-[8%] bg-[#f9f9f9] min-h-screen font-fontstyle">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[40px] max-md:text-[2.5rem] font-[800] uppercase tracking-[2px] mb-[10px] text-[#111]">
            {t.projects.title}
          </h1>
          <p className="text-[1.1rem] text-[#666] mb-[40px]">
            {t.projects.intro}
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] max-md:grid-cols-1 gap-[30px]">
            {sortedProjects.map((project) => (
              <Link to={project.link} className="bg-white rounded-[16px] overflow-hidden no-underline text-inherit shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] flex flex-col border border-transparent hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-[#eee] group" key={project.id}>
                
                <div className="w-full h-[160px] overflow-hidden relative">
                  <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[600ms] ease-in-out group-hover:scale-110" />
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
        </div>
      </div>
    </>
  );
};

export default AllProjects;
