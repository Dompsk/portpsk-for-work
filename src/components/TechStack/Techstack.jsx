import React from 'react'

const TechStack = () => {
  const sectionClass = "flex flex-col gap-[16px]";
  const h3Class = "text-[1.2rem] font-semibold text-black m-0";
  const cardClass = "bg-white border border-[#e0e0e0] rounded-[10px] p-[20px] shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-[3px] hover:border-black";
  const h4Class = "text-[0.95rem] font-bold mb-[12px] border-b border-[#eee] pb-[6px]";
  const skillListClass = "list-none p-0 m-0 flex flex-col gap-[8px]";
  const skillItemClass = "text-[0.85rem] text-[#444] flex items-center before:content-['•'] before:text-[#01189e] before:mr-[8px] before:font-bold";
  
  const toolListClass = "list-none p-0 m-0 flex flex-wrap gap-[10px]";
  const toolItemClass = "bg-[#f3f3f3] px-[14px] py-[6px] rounded-[20px] text-[0.8rem] text-[#333] transition-all duration-200 hover:bg-[#01189e] hover:text-white hover:scale-105";

  return (
    <div className="font-fontstyle flex flex-col gap-[36px]">
      
      {/* --- Skills Section --- */}
      <section className={sectionClass}>
        <h3 className={h3Class}>( Skills )</h3>
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-[16px]">
          {/* Front-end */}
          <div className={cardClass}>
            <h4 className={h4Class}>Programing lang</h4>
            <ul className={skillListClass}>
              <li className={skillItemClass}>HTML/CSS/JaveScript</li>
              <li className={skillItemClass}>Python</li>
              <li className={skillItemClass}>PHP</li>
              <li className={skillItemClass}>Java</li>
            </ul>
          </div>

          {/* Back-end */}
          <div className={cardClass}>
            <h4 className={h4Class}>Framework&Library</h4>
            <ul className={skillListClass}>
              <li className={skillItemClass}>React</li>
              <li className={skillItemClass}>Vue3</li>
              <li className={skillItemClass}>Boostrap</li>
              <li className={skillItemClass}>Tailwind</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Database Section --- */}
      <section className={sectionClass}>
        <h3 className={h3Class}>( Database )</h3>
        <div className={cardClass}>
          <ul className={toolListClass}>
            <li className={toolItemClass}>MySQL</li>
            <li className={toolItemClass}>Firebase</li>
            <li className={toolItemClass}>Supabase</li>
            <li className={toolItemClass}>Oracle Database</li>
          </ul>
        </div>
      </section>

      {/* --- Tools Section --- */}
      <section className={sectionClass}>
        <h3 className={h3Class}>( Tools )</h3>
        <div className={cardClass}>
          <ul className={toolListClass}>
            <li className={toolItemClass}>Git&GitHub</li>
            <li className={toolItemClass}>Excel&Power bi</li>
            <li className={toolItemClass}>Sourcetree</li>
            <li className={toolItemClass}>Kaggle</li>
            <li className={toolItemClass}>Colab</li>
            <li className={toolItemClass}>Figma</li>
            <li className={toolItemClass}>Canva</li>
          </ul>
        </div>
      </section>

    </div>
  )
}

export default TechStack
