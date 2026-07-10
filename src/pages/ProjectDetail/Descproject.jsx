import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Projectdata from '../Project/Projectdata';

const Descproject = () => {
  const { id } = useParams();
  const project = Projectdata.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '150px 20px', textAlign: 'center', fontSize: '1.5rem' }}>
          Project not found.
        </div>
      </>
    );
  }

  const actionBtnClass = "inline-block py-[12px] px-[30px] border border-[#111] bg-transparent text-[#111] no-underline text-[0.95rem] font-bold uppercase tracking-[1.5px] transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#111] hover:text-white hover:-translate-y-[2px] hover:shadow-[0_6px_15px_rgba(0,0,0,0.1)]";

  return (
    <>
      <Navbar />

      <div className="flex max-md:flex-col gap-[60px] items-start max-w-[1100px] mx-auto pt-[140px] max-md:pt-[100px] px-[20px] pb-[80px] min-h-[80vh]">
        
        {/* Left Content */}
        <div className="-mt-[50px] flex-[3] relative max-md:-mt-0">
          <h1 className="font-fontstyle text-[2.8rem] font-[400] text-[#111] mb-[30px] tracking-[1px] uppercase">
            {project.title}
          </h1>
          
          <div className="w-full h-[300px] max-sm:h-[200px] mb-[40px] rounded-[15px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover block transition-transform duration-300 ease-in-out hover:scale-[1.02]"
            />
          </div>

          <div className="font-fontstyle text-[1.1rem] leading-[1.8] text-[#555] mb-[40px]">
            <p>{project.description}</p>
          </div>

          <div className="flex gap-[20px] mt-[20px]">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className={actionBtnClass}>
                Demo
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className={actionBtnClass}>
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex-[1] max-md:w-full sticky top-[100px] max-md:static flex flex-col gap-[40px]">
          
          {/* Box 1: Categories */}
          <div className="bg-[#fafafa] p-[30px] rounded-[10px] border-2 border-[#fafafa] shadow-[0_25px_20px_rgba(0,0,0,0.05)]">
            <h3 className="font-fontstyle text-[1.2rem] font-bold mb-[10px] tracking-[2px] text-[#111] mt-0">
              CATEGORIES
            </h3>
            <div className="w-[40px] h-[3px] bg-[#111] mb-[25px]"></div>
            <ul className="list-none p-0 m-0">
              {project.categories ? (
                project.categories.map((cat, index) => (
                  <li key={index} className="font-fontstyle py-[12px] px-0 border-b border-[#eee] text-[#555] text-[1rem] last:border-b-0">
                    {cat}
                  </li>
                ))
              ) : (
                <li className="font-fontstyle py-[12px] px-0 border-b border-[#eee] text-[#555] text-[1rem] last:border-b-0">
                  {project.category}
                </li>
              )}
            </ul>
          </div>

          {/* Box 2: Languages & Tools */}
          <div className="bg-[#fafafa] p-[30px] rounded-[10px] border-2 border-[#fafafa] shadow-[0_25px_20px_rgba(0,0,0,0.05)]">
            <h3 className="font-fontstyle text-[1.2rem] font-bold mb-[10px] tracking-[2px] text-[#111] mt-0">
              LANGUAGES & TOOLS
            </h3>
            <div className="w-[40px] h-[3px] bg-[#111] mb-[25px]"></div>
            <ul className="list-none p-0 m-0">
              {project.tools ? (
                 project.tools.map((tool, index) => (
                   <li key={index} className="font-fontstyle py-[12px] px-0 border-b border-[#eee] text-[#555] text-[1rem] last:border-b-0">
                     {tool}
                   </li>
                 ))
              ) : (
                 <li className="font-fontstyle py-[12px] px-0 border-b border-[#eee] text-[#555] text-[1rem] last:border-b-0">
                   -
                 </li>
              )}
            </ul>
          </div>

        </div>

      </div>
    </>
  );
};

export default Descproject;
