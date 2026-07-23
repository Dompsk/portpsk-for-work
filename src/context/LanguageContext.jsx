/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const LanguageContext = createContext();

export const copy = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", certificates: "Certificates", resume: "Resume" },
    home: { title: "Build and collect experiences in Software and Web Development", subtitle: "Minimal, user-friendly design. Explore my work and experience.", projects: "View projects", contact: "Let's work together" },
    projects: { title: "Projects", intro: "Explore my recent work and experiences.", more: "See more", read: "Read more", caseStudy: "View case study" },
    contact: { eyebrow: "Available for opportunities", title: "Let's build something useful.", body: "I'm open to internships, junior developer roles, and collaborative projects.", email: "Email me", resume: "Download CV", links: { linkedin: "LinkedIn", github: "GitHub" } },
    detail: { demo: "Demo", github: "GitHub", contact: "Have a project in mind? Let's talk.", contactButton: "Contact me" },
    about: { title: "About", intro: "Hello! I'm Phongsakon Charanrak, a Computer Science student at Prince of Songkla University. This website showcases the projects I've developed and the skills I use. I'm passionate about building practical web solutions.", education: "Education" },
  },
  th: {
    nav: { home: "หน้าแรก", about: "เกี่ยวกับ", projects: "ผลงาน", certificates: "ใบประกาศ", resume: "เรซูเม่" },
    home: { title: "สร้างและเก็บเกี่ยวประสบการณ์ด้านซอฟต์แวร์และเว็บดีเวลลอปเมนต์", subtitle: "ดีไซน์เรียบง่าย ใช้งานสะดวก มาดูผลงานและประสบการณ์ของผม", projects: "ดูผลงาน", contact: "ร่วมงานกัน" },
    projects: { title: "ผลงาน", intro: "สำรวจผลงานและประสบการณ์ล่าสุดของผม", more: "ดูทั้งหมด", read: "อ่านเพิ่มเติม", caseStudy: "ดูรายละเอียด" },
    contact: { eyebrow: "พร้อมรับโอกาสใหม่", title: "มาสร้างสิ่งที่มีประโยชน์ร่วมกัน", body: "ผมเปิดรับโอกาสฝึกงาน ตำแหน่ง Junior Developer และโปรเจกต์ที่ได้ร่วมพัฒนาด้วยกัน", email: "ส่งอีเมล", resume: "ดาวน์โหลด CV", links: { linkedin: "LinkedIn", github: "GitHub" } },
    detail: { demo: "เดโม", github: "GitHub", contact: "มีโปรเจกต์ที่อยากทำไหม? มาคุยกัน", contactButton: "ติดต่อผม" },
    about: { title: "เกี่ยวกับผม", intro: "สวัสดีครับ ผมพงศกร จารัญรักษ์ นักศึกษาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยสงขลานครินทร์ เว็บไซต์นี้รวบรวมผลงานที่ผมพัฒนาและทักษะที่ใช้ ผมสนใจการสร้างเว็บที่ช่วยแก้ปัญหาได้จริง", education: "การศึกษา" },
  },
};

export const LanguageProvider = ({ children }) => {
  const language = "en";
  return <LanguageContext.Provider value={{ language, t: copy[language] }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
