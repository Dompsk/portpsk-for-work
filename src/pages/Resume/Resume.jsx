import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { resumeData } from "./Resumedata";
import Navbar from "../../components/navbar/Navbar";

const Resume = () => {
  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <Navbar />
      <div className="bg-[#f7f7f7] min-h-screen pt-[80px] pb-[60px] print:bg-white print:p-0">

        {/* Export Button */}
        <div className="max-w-[860px] mx-auto mb-[20px] px-[20px] flex justify-end print:hidden">
          <button onClick={handlePrint} className="bg-[#111] text-white border-none px-[24px] py-[10px] rounded-full text-[13px] tracking-[1px] uppercase font-fontstyle cursor-pointer transition-colors duration-200 hover:bg-[#333]">
            ↓ Export PDF
          </button>
        </div>

        {/* Paper */}
        <div ref={contentRef} className="max-w-[860px] mx-auto px-[60px] py-[52px] bg-white text-[#111] font-sans leading-[1.6] border border-[#e8e8e8] print:border-none print:p-0 print:max-w-full print:shadow-none">

          {/* HEADER */}
          <header className="border-b-2 border-[#111] pb-[20px] mb-[28px]">
            <h1 className="text-[34px] font-[800] tracking-[1px] m-[0_0_10px_0] text-[#111]">{resumeData.header.name}</h1>
            <div className="flex flex-wrap gap-x-[20px] gap-y-[6px] text-[13px] text-[#555]">
              <span>{resumeData.header.phone}</span>
              <span>{resumeData.header.email}</span>
              {resumeData.header.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" rel="noreferrer" className="text-[#555] underline underline-offset-2">
                  {link.label}
                </a>
              ))}
              <span>{resumeData.header.location}</span>
            </div>
          </header>

          {/* OBJECTIVE */}
          <section className="mb-[28px]">
            <div className="text-[11px] font-[700] tracking-[3px] uppercase text-[#888] mb-[14px] pb-[6px] border-b border-[#eee] font-fontstyle">Objective</div>
            <p className="text-[14px] text-[#444] text-justify m-0">{resumeData.objective}</p>
          </section>

          {/* WORK EXPERIENCE */}
          <section className="mb-[28px]">
            <div className="text-[11px] font-[700] tracking-[3px] uppercase text-[#888] mb-[14px] pb-[6px] border-b border-[#eee] font-fontstyle">Work Experience</div>
            {resumeData.experience.map((job, i) => (
              <div key={i} className="mb-[20px]">
                <div className="flex justify-between items-start mb-[4px]">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-[700] text-[15px] text-[#111]">
                      {job.role}
                      <span className="inline-block text-[11px] font-[400] text-[#888] bg-[#f3f3f3] px-[10px] py-[2px] rounded-full tracking-[0.5px] ml-[8px] font-fontstyle">{job.type}</span>
                    </span>
                    <span className="text-[13px] text-[#555]">{job.company}</span>
                  </div>
                  <span className="text-[12px] text-[#aaa] whitespace-nowrap font-fontstyle">{job.date}</span>
                </div>
                <ul className="mt-[8px] mb-0 pl-[18px] list-disc">
                  {job.points.map((point, j) => (
                    <li key={j} className="text-[13.5px] text-[#444] mb-[4px] leading-[1.55]">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* TECHNOLOGIES */}
          <section className="mb-[28px]">
            <div className="text-[11px] font-[700] tracking-[3px] uppercase text-[#888] mb-[14px] pb-[6px] border-b border-[#eee] font-fontstyle">Technologies &amp; Languages</div>
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[14px]">
              <div>
                <h4 className="text-[13px] m-[0_0_4px_0] font-[700] text-[#111]">Programming Languages</h4>
                <p className="text-[13px] m-0 text-[#555]">{resumeData.skills.languages}</p>
              </div>
              <div>
                <h4 className="text-[13px] m-[0_0_4px_0] font-[700] text-[#111]">Frameworks / Libraries</h4>
                <p className="text-[13px] m-0 text-[#555]">{resumeData.skills.frameworks}</p>
              </div>
              <div>
                <h4 className="text-[13px] m-[0_0_4px_0] font-[700] text-[#111]">Databases</h4>
                <p className="text-[13px] m-0 text-[#555]">{resumeData.skills.databases}</p>
              </div>
              <div>
                <h4 className="text-[13px] m-[0_0_4px_0] font-[700] text-[#111]">Cloud</h4>
                <p className="text-[13px] m-0 text-[#555]">{resumeData.skills.cloud}</p>
              </div>
              <div>
                <h4 className="text-[13px] m-[0_0_4px_0] font-[700] text-[#111]">AI</h4>
                <p className="text-[13px] m-0 text-[#555]">{resumeData.skills.ai}</p>
              </div>
              <div>
                <h4 className="text-[13px] m-[0_0_4px_0] font-[700] text-[#111]">DevOps</h4>
                <p className="text-[13px] m-0 text-[#555]">{resumeData.skills.devops}</p>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mb-[28px]">
            <div className="text-[11px] font-[700] tracking-[3px] uppercase text-[#888] mb-[14px] pb-[6px] border-b border-[#eee] font-fontstyle">Education</div>
            {resumeData.education.map((edu, i) => (
              <div key={i} className="mb-[14px]">
                <div className="flex justify-between items-start mb-[4px]">
                  <span className="font-[700] text-[15px] text-[#111]">{edu.degree}</span>
                  <span className="text-[12px] text-[#aaa] whitespace-nowrap font-fontstyle">{edu.date}</span>
                </div>
                <p className="text-[13.5px] m-[2px_0] text-[#444]">
                  {edu.school}{" "}
                  <span style={{ color: "#aaa", fontSize: "12px" }}>
                    {edu.status}
                  </span>
                </p>
                <div className="mt-[6px] text-[13px] text-[#666]">
                  <strong>Courseworks: </strong>
                  {edu.coursework}
                </div>
              </div>
            ))}
          </section>

        </div>
      </div>
    </>
  );
};

export default Resume;
