import React, { useState } from "react";
import Certificatedata, { sortedCertificate } from "./Certificatedata";

const CATEGORIES = ["All", ...new Set(Certificatedata.map((c) => c.category))];

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? sortedCertificate
      : sortedCertificate.filter((c) => c.category === activeFilter);

  return (
    <section id="Certificate" className="pt-[80px] pb-[80px] px-[8%] min-h-[80vh] bg-white text-[#111]">
      {/* Header */}
      <p className="text-center font-fontstyle text-[13px] tracking-[4px] uppercase text-[#888] mb-[6px]">
        What I've earned
      </p>
      <h2 className="text-center text-[40px] font-[400] tracking-[2px] uppercase m-[0_0_10px_0] text-[#111]">
        My Certificates
      </h2>
      <span className="block w-[40px] h-[3px] bg-[#111] mx-auto mb-[40px]" />

      {/* Filter */}
      <div className="flex justify-center gap-[10px] mb-[48px] flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`px-[22px] py-[8px] rounded-full border-[1.5px] border-[#ccc] bg-transparent text-[#444] font-fontstyle text-[13px] tracking-[1px] cursor-pointer transition-all duration-200 hover:border-[#111] hover:text-[#111] ${
              activeFilter === cat ? "bg-[#111] !text-black !border-[#111]" : ""
            }`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[28px]">
        {filtered.length > 0 ? (
          filtered.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              className="border border-[#e8e8e8] rounded-[4px] overflow-hidden bg-white transition-all duration-[250ms] ease-in-out cursor-pointer no-underline text-inherit block hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-[3px]"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-[160px] object-cover block bg-[#f5f5f5]"
                loading="lazy"
              />
              <div className="p-[16px_18px_20px]">
                <span className="inline-block text-[11px] tracking-[1.5px] uppercase text-[#888] bg-[#f3f3f3] px-[10px] py-[3px] rounded-full mb-[10px] font-fontstyle">
                  {cert.category}
                </span>
                <h3 className="text-[16px] font-bold text-[#111] m-[0_0_6px_0] leading-[1.3]">
                  {cert.title}
                </h3>
                <p className="text-[13px] text-[#666] m-[0_0_14px_0] leading-[1.5]">
                  {cert.description}
                </p>
                <div className="flex justify-between items-center border-t border-[#f0f0f0] pt-[10px]">
                  <span className="text-[12px] text-[#999] font-fontstyle">{cert.issuer}</span>
                  <span className="text-[12px] text-[#bbb] font-fontstyle">{cert.date}</span>
                </div>
              </div>
            </a>
          ))
        ) : (
          <p className="text-center text-[#bbb] text-[15px] py-[60px] col-span-full">
            No certificates in this category yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Certificates;
