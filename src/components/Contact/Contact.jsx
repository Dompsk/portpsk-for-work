import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const contact = t.contact;
  return (
    <section id="Contact" className="bg-[#111] px-[8%] py-[80px] text-white">
      <div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-[600px]"><p className="mb-3 font-fontstyle text-[11px] uppercase tracking-[3px] text-[#aaa]">{contact.eyebrow}</p><h2 className="m-0 text-[clamp(30px,4vw,48px)] font-semibold leading-tight">{contact.title}</h2><p className="mb-0 mt-4 font-fontstyle leading-7 text-[#c7c7c7]">{contact.body}</p></div>
        <div className="flex flex-wrap gap-3 md:justify-end"><a href="mailto:dompsk2547@gmail.com" className="rounded-full bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-[1px] text-[#111] transition hover:-translate-y-0.5">{contact.email}</a><Link to="/resume" className="rounded-full border border-[#666] px-5 py-3 text-[13px] font-bold uppercase tracking-[1px] text-white transition hover:border-white">{contact.resume}</Link></div>
      </div>
      <div className="mx-auto mt-9 flex max-w-[1000px] flex-wrap gap-x-6 gap-y-3 border-t border-[#333] pt-5 font-fontstyle text-sm text-[#c7c7c7]"><a className="transition hover:text-white" href="https://www.linkedin.com/in/phongsakon/" target="_blank" rel="noreferrer">{contact.links.linkedin}</a><a className="transition hover:text-white" href="https://github.com/Dompsk" target="_blank" rel="noreferrer">{contact.links.github}</a><a className="transition hover:text-white" href="mailto:dompsk2547@gmail.com">dompsk2547@gmail.com</a></div>
    </section>
  );
};

export default Contact;
