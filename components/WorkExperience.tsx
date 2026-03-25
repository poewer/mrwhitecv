"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

type Experience = {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  url?: string;
  details: string[];
};

export default function WorkExperience() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const experiences: Experience[] = useMemo(
    () => [...t.experiences].sort((a, b) => b.endDate.localeCompare(a.endDate) || b.startDate.localeCompare(a.startDate)),
    [t.experiences]
  );

  return (
    <section
      id="workexperience"
      className="min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-[#44444E] text-[#D3DAD9] relative"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-[#F8C471] opacity-60" />
      <div className="absolute top-28 right-20 w-4 h-4 border border-[#F8C471] rounded-full opacity-40" />
      <div className="absolute top-1/4 right-10 w-2 h-12 bg-[#D3DAD9] opacity-20 rounded-full" />

      <h2 className="text-4xl font-bold mb-12 text-[#F8C471]">{t.workExpTitle}</h2>

      <div className="relative max-w-3xl">
        {/* Linia osi czasu */}
        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gray-600" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.startDate}
              className="relative pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            >
              {/* Kropka na osi */}
              <div className={`absolute left-0.5 top-1.5 w-5 h-5 rounded-full border-2 border-[#44444E] ${exp.endDate === "9999-12-31" ? "bg-[#F8C471]" : "bg-gray-500"}`} />

              {/* Karta */}
              <div className="border border-gray-600 rounded-xl p-5 hover:border-[#F8C471]/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-xl font-semibold">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F8C471] transition-colors"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <span className="text-sm text-gray-400 shrink-0">
                    {exp.period}
                    {exp.url && (
                      <>
                        {" | "}
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          LinkedIn
                        </a>
                      </>
                    )}
                  </span>
                </div>

                <p className="text-[#F8C471] text-sm font-medium mb-3">{exp.role}</p>

                <ul className="space-y-1.5 list-disc pl-4 text-sm text-gray-300">
                  {exp.details.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
