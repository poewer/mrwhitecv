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
      className="min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-s2 text-ink relative flex flex-col justify-center"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 right-16 w-3 h-3 rounded-full bg-accent opacity-60" />
      <div className="absolute bottom-20 left-10 w-4 h-4 border border-accent rounded-full opacity-30" />
      <div className="absolute top-1/2 right-8 w-2 h-16 bg-ink opacity-10 rounded-full" />

      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-10 text-accent">{t.aboutTitle}</h2>

          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Lewa kolumna — tekst */}
            <div className="md:w-3/5 space-y-5">
              <p className="text-base sm:text-lg leading-relaxed">{t.aboutIntro}</p>
              <p className="text-base sm:text-lg leading-relaxed text-body">{t.aboutApproach}</p>

              <ul className="space-y-3 pt-2">
                {t.aboutValues.map((val, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-body">
                    <span className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
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
                  className="border border-line rounded-xl px-8 py-6 text-center hover:border-accent transition-colors"
                >
                  <p className="text-5xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm text-muted uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
