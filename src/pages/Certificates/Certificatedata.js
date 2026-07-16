import certBmc from "../../assets/cert/Certificate-BMC.jpg";
import certMkd from "../../assets/cert/Certificate-MKD1001-TH.jpg";
import dataAnalyGs from "../../assets/cert/Data analy in ggsheet.png";
import dtExcel from "../../assets/cert/dt in excel.png";
import faGs from "../../assets/cert/fa in ggsheet.png";
import interSql from "../../assets/cert/intermediate sql.png";
import inturnPSU from "../../assets/cert/internE-cerPSU.jpg"

const Certificatedata = [
  {
    id: 1,
    title: "Business Model Canvas",
    category: "Business",
    image: certBmc,
    description: "เรียนรู้การวางแผนธุรกิจด้วยเครื่องมือ BMC",
    date: "Nov 2025",
    sortDate: new Date("2025-11-01"),
  },
  {
    id: 2,
    title: "Marketing for Entrepreneurs",
    category: "Business",
    image: certMkd,
    description: "กลยุทธ์การตลาดสำหรับผู้ประกอบการ",
    date: "Nov 2025",
    sortDate: new Date("2025-11-01"),
  },
  {
    id: 3,
    title: "Data analysis in Googlesheet",
    category: "Data Analysis",
    image: dataAnalyGs,
    description: "เจาะลึกเรื่อง Deep Learning และการสร้าง Model",
    date: "Dec 2025",
    sortDate: new Date("2025-12-01"),
  },
  {
    id: 4,
    title: "Data Analysis in Excel",
    category: "Data Analysis",
    image: dtExcel,
    description: "การวิเคราะห์ข้อมูลด้วย Excel และ Power Query",
    date: "Dec 2025",
    sortDate: new Date("2025-12-01"),
  },
  {
    id: 5,
    title: "Financial Analysis in Googlesheet",
    category: "Data Analysis",
    image: faGs,
    description: "การวิเคราะห์ข้อมูลด้วย Google Sheets และ Power Query",
    date: "Dec 2025",
    sortDate: new Date("2025-12-01"),
  },
  {
    id: 6,
    title: "Intermediate SQL",
    category: "Data Analysis",
    image: interSql,
    description: "การใช้งาน SQL ระดับกลาง",
    date: "Jan 2026",
    sortDate: new Date("2026-01-01"),
  },
  {
    id: 7,
    title: " PSU Internships",
    category: "Intern",
    image: inturnPSU,
    description: "การฝึกงานโปรเจค Uhosnet ภายในคณะแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์",
    date: "16 March - 12 June 2026",
    sortDate: new Date("2026-03-16"),
  },
];

export const sortedCertificate = [...Certificatedata].sort(
  (a, b) => b.sortDate - a.sortDate
);

export default Certificatedata;
