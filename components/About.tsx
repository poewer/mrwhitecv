"use client";
import Image from "next/image";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function About({ activity }: { activity?: ReactNode }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="about"
      className="px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-s2 text-ink relative flex flex-col justify-center"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 right-16 w-3 h-3 rounded-full bg-accent opacity-60" />
      <div className="absolute bottom-20 left-10 w-4 h-4 border border-accent rounded-full opacity-30" />
      <div className="absolute top-1/2 right-8 w-2 h-16 bg-ink opacity-10 rounded-full" />

      <div className="w-full">
        <h2 className="text-4xl font-bold mb-10 text-accent">{t.aboutTitle}</h2>

        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
          {/* Lewa kolumna — tekst */}
          <motion.div
            className="md:w-3/5 space-y-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0, margin: "0px 0px 20% 0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
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
          </motion.div>

          {/* Prawa kolumna — zdjęcie, statystyki, aktywność na GitHubie */}
          <motion.div
            className="md:w-2/5 flex flex-col items-center gap-8 min-w-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0, margin: "0px 0px 20% 0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-4 h-4 border-2 border-accent rounded-full opacity-40" />
              <div className="absolute -bottom-4 -left-4 w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full opacity-60" />

              <div className="relative w-36 h-44 sm:w-40 sm:h-52 md:w-44 md:h-56">
                <div className="absolute w-full h-full bg-accent rounded-lg translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 z-0" />
                <Image
                  src="/linkedin_profile.jpg"
                  alt="Michał Białek"
                  fill
                  className="rounded-lg shadow-lg object-cover object-[66%_45%] relative z-10"
                />
                <div className="absolute inset-0 w-full h-full border-2 border-ink rounded-lg z-20 pointer-events-none" />
              </div>
            </div>

            {/* Statystyki w jednym rzędzie */}
            <div className="w-full max-w-lg grid grid-cols-3 gap-3">
              {t.aboutStats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-line rounded-xl px-2 py-4 text-center hover:border-accent transition-colors"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-accent leading-none mb-1">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {activity && <div className="w-full max-w-lg relative z-10">{activity}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
