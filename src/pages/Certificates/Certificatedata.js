import certBmc from "../../assets/cert/Certificate-BMC.pdf";
import certMkd from "../../assets/cert/Certificate-MKD1001-TH.pdf";
import dataAnalyGs from "../../assets/cert/Data analy in ggsheet.png";
import dtExcel from "../../assets/cert/dt in excel.png";
import faGs from "../../assets/cert/fa in ggsheet.png";
import interSql from "../../assets/cert/intermediate sql.png";

const Certificatedata = [
  {
    id: 1,
    title: "Business Model Canvas",
    category: "Business",
    image: certBmc,
    description: "เรียนรู้การวางแผนธุรกิจด้วยเครื่องมือ BMC",
    date: "Nov 2025"
  },
  {
    id: 2,
    title: "Marketing for Entrepreneurs",
    category: "Business",
    image: certMkd,
    description: "กลยุทธ์การตลาดสำหรับผู้ประกอบการ",
    date: "Nov 2025"
  },
  {
    id: 3,
    title: "Data analysis in Googlesheet",
    category: "Data Analysis",
    image: dataAnalyGs,
    description: "เจาะลึกเรื่อง Deep Learning และการสร้าง Model",
    date: "Dec 2025"
  },
  {
    id: 4,
    title: "Data Analysis in Excel",
    category: "Data Analysis",
    image: dtExcel,
    description: "การวิเคราะห์ข้อมูลด้วย Excel และ Power Query",
    date: "Dec 2025"
  },
 {
    id: 5,
    title: "Financial Analysis in Googlesheet",
    category: "Data Analysis",
    image: faGs,
    description: "การวิเคราะห์ข้อมูลด้วย Google Sheets และ Power Query",
    date: "Dec 2025"
  },
 {
    id: 6,
    title: "Intermediate SQL",
    category: "Data Analysis",
    image: interSql,
    description: "การใช้งาน SQL ระดับกลาง",
    date: "Jan 2026"
  }
];

export default Certificatedata;
