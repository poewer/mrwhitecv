"use client";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-[#2E2D35] text-[#D3DAD9] relative flex flex-col justify-center"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 right-16 w-3 h-3 rounded-full bg-[#F8C471] opacity-60" />
      <div className="absolute bottom-20 left-10 w-4 h-4 border border-[#F8C471] rounded-full opacity-30" />
      <div className="absolute top-1/2 right-8 w-2 h-16 bg-[#D3DAD9] opacity-10 rounded-full" />

      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-10 text-[#F8C471]">{t.aboutTitle}</h2>

          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Lewa kolumna — tekst */}
            <div className="md:w-3/5 space-y-5">
              <p className="text-base sm:text-lg leading-relaxed">{t.aboutIntro}</p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">{t.aboutApproach}</p>

              <ul className="space-y-3 pt-2">
                {t.aboutValues.map((val, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-gray-300">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#F8C471] shrink-0" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prawa kolumna — statystyki */}
            <div className="md:w-2/5 flex flex-col justify-center gap-6">
              {t.aboutStats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-gray-600 rounded-xl px-8 py-6 text-center hover:border-[#F8C471] transition-colors"
                >
                  <p className="text-5xl font-bold text-[#F8C471] mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
