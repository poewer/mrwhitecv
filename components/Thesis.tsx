"use client";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

const PDF_PATH = "/inz.pdf";

export default function Thesis() {
  const { lang } = useLanguage();
  const t = translations[lang].thesisSection;

  return (
    <section
      id="thesis"
      className="min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-[#37353E] text-[#D3DAD9] relative"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 right-16 w-3 h-3 rounded-full bg-[#F8C471] opacity-60" />
      <div className="absolute bottom-24 left-20 w-4 h-4 border border-[#F8C471] rounded-full opacity-40" />
      <div className="absolute top-1/3 right-10 w-2 h-12 bg-[#D3DAD9] opacity-20 rounded-full" />

      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Lewa kolumna — opis */}
        <motion.div
          className="md:w-2/5 flex flex-col gap-6 justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-[#F8C471]">{t.sectionTitle}</h2>

          <div className="space-y-1 text-sm text-gray-400">
            <p><span className="text-[#F8C471]">{t.type}</span></p>
            <p>{t.faculty}</p>
            <p>{t.spec}</p>
            <p>{t.university}</p>
            <p>{t.year}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#F8C471] mb-2">{t.titleLabel}</p>
            <p className="text-base leading-relaxed font-medium">{t.title}</p>
          </div>

          <div>
            <p className="text-base leading-relaxed text-gray-300">{t.description}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#F8C471] mb-2">{t.techLabel}</p>
            <p className="text-sm text-gray-300">{t.tech}</p>
          </div>

          <a
            href={PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-sky-400 hover:text-sky-300 transition-colors underline underline-offset-4"
          >
            {t.viewPdf} ↗
          </a>
        </motion.div>

        {/* Prawa kolumna — PDF viewer */}
        <motion.div
          className="md:w-3/5 hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <iframe
            src={PDF_PATH}
            className="w-full rounded-lg border border-gray-600 shadow-lg"
            style={{ height: "90vh" }}
            title="Engineering Thesis PDF"
          />
        </motion.div>
      </div>
    </section>
  );
}
