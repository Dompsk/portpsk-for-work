import uhosnetImg from "../../assets/picWork/Uhosnet.png";
import lmsTeamNoti from "../../assets/picWork/lmsTeamNoti.png";
const Projectdata = [
  {
    id: 1,
    title: "Poolongtai",
    category: "Design Travel Website",
    categories: ["Ui design", "Frontend", "Backend"],
    languages: ["PHP", "HTML", "CSS"],
    frameworks: ["Bootstrap"],
    tools: ["Figma"],
    date: "Jan 27, 2024",
    sortDate: new Date("2024-01-27"),
    description: "Website recommending tourism in the southern region of Thailand. This platform helps users discover hidden gems and plan their trips effectively.",
    descriptionTh: "เว็บไซต์แนะนำการท่องเที่ยวภาคใต้ ช่วยให้ผู้ใช้ค้นพบสถานที่น่าสนใจและวางแผนการเดินทางได้สะดวกขึ้น",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop",
    link: "/project/1",
    demoLink: "#",
    githubLink: "https://github.com/Dompsk/Poolongtai_"
  },
  {
    id: 2,
    title: "Rubber Buying Shop",
    category: "Rubber latex purchasing system",
    categories: ["System Design", "Fullstack"],
    languages: ["PHP"],
    frameworks: ["Bootstrap"],
    tools: ["MySQL"],
    date: "March 11, 2024",
    sortDate: new Date("2024-03-11"),
    description: "Our rubber latex purchasing system helps local farmers sell fresh latex quickly and transparently with real-time price tracking.",
    descriptionTh: "ระบบรับซื้อน้ำยางพาราที่ช่วยให้เกษตรกรขายน้ำยางสดได้รวดเร็ว โปร่งใส และติดตามราคาแบบเรียลไทม์",
    image: "https://images.unsplash.com/photo-1707050682544-64b31983cc09?q=80&w=1170&auto=format&fit=crop",
    link: "/project/2",
    demoLink: "https://rubberfarm.free.nf/",
    githubLink: "https://github.com/Dompsk/Farm_Rubber"
  },
  {
    id: 3,
    title: "Published Articles PSU",
    category: "Publication Teacher",
    categories: ["ERD design", "Database Center", "Fullstack", "UI/UX Design"],
    languages: ["PHP", "HTML", "CSS", "JavaScript"],
    frameworks: ["Bootstrap"],
    tools: ["Figma", "Draw.io", "Supabase"],
    date: "Sep 25, 2025",
    sortDate: new Date("2025-09-25"),
    description: "This publication system was developed to collect published works of lecturers at Prince of Songkhla University.",
    descriptionTh: "ระบบรวบรวมผลงานตีพิมพ์ของอาจารย์มหาวิทยาลัยสงขลานครินทร์ เพื่อจัดเก็บ ค้นหา และเผยแพร่ข้อมูลได้อย่างเป็นระบบ",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop",
    link: "/project/3",
    demoLink: "",
    githubLink: "https://github.com/Dompsk/pub_teacher"
  },
  {
    id: 4,
    title: "Camera Detect Object",
    category: "AI / Computer Vision",
    categories: ["AI", "Python"],
    languages: ["Python"],
    frameworks: ["YOLOv11n", "OpenCV"],
    tools: ["Jupyter Notebook", "Roboflow"],
    date: "August 25, 2025",
    sortDate: new Date("2025-08-25"),
    description: "A scanning system quickly reads a product instantly and displays its details on screen using computer vision.",
    descriptionTh: "ระบบสแกนสินค้าโดยใช้คอมพิวเตอร์วิทัศน์ เพื่อตรวจจับวัตถุและแสดงรายละเอียดบนหน้าจอได้ทันที",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop",
    link: "/project/4",
    demoLink: "",
    githubLink: ""
  },
  {
    id: 5,
    title: "UhosNet90th Conference Website",
    category: "Website",
    categories: ["UI/UX Design", "Fullstack"],
    languages: ["JavaScript"],
    frameworks: ["Vue3", "Tailwind CSS", "Nest.js"],
    tools: ["Figma", "Postman"],
    date: "16 April, 2026",
    sortDate: new Date("2026-04-16"),
    description: "Website for the 90th UhosNet conference at Prince of Songkhla University.",
    descriptionTh: "เว็บไซต์สำหรับงานประชุม UhosNet ครั้งที่ 90 ของมหาวิทยาลัยสงขลานครินทร์",
    image: uhosnetImg,
    link: "/project/5",
    demoLink: "",
    githubLink: ""
  },
  {
    id: 6,
    title: "Psu Notification !",
    category: "Website",
    categories: ["UI/UX Design", "Fullstack"],
    languages: ["JavaScript"],
    frameworks: ["Vue3", "Tailwind CSS", "Nest.js"],
    tools: ["Figma", "Postman", "Render", "Vercel", "Docker", "SourceTree"],
    date: "25 June, 2026",
    sortDate: new Date("2026-06-25"),
    description: "A system that can automatically send notifications to LMS PSU when the date of the publication has expired.",
    descriptionTh: "ระบบส่งการแจ้งเตือนไปยัง LMS PSU โดยอัตโนมัติเมื่อรายการประกาศใกล้หรือหมดอายุ",
    image: lmsTeamNoti,
    link: "/project/6",
    demoLink: "https://psu-lms-team.vercel.app/",
    githubLink: "https://github.com/Dompsk/Psu-LmsTeam"
  },
];

// เรียงลำดับจากใหม่ → เก่า อัตโนมัติ
export const sortedProjects = [...Projectdata].sort(
  (a, b) => b.sortDate - a.sortDate
);

export default Projectdata;
