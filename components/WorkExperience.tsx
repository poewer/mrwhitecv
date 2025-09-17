"use client";
import { useState } from "react";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

type Experience = {
  company: string;
  role: string;
  period: string;
  startDate: string;
  details: string[];
};

export default function WorkExperience() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // sortujemy wg daty
  const experiences: Experience[] = [...t.experiences].sort(
    (a, b) => b.startDate.localeCompare(a.startDate)
  );

  // domyślnie bierzemy najnowsze doświadczenie (zamiast "3-ciej pozycji")
  const [selected, setSelected] = useState<Experience>(experiences[0]);

  return (
    <section
      id="workexperience"
      className="min-h-screen px-8 md:px-20 py-20 bg-[#44444E] text-[#D3DAD9] relative"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-[#F8C471] opacity-60" />
      <div className="absolute top-28 right-20 w-4 h-4 border border-[#F8C471] rounded-full opacity-40" />
      <div className="absolute top-1/4 left-10 w-2 h-12 bg-[#D3DAD9] opacity-20 rounded-full" />

      <h2 className="text-4xl font-bold mb-10 text-[#F8C471]">
        {t.workExpTitle}
      </h2>

      <div className="flex flex-col md:flex-row gap-12 relative">
        {/* Lewa lista firm */}
        <div className="md:w-1/4 border-l border-gray-600 pl-4 space-y-6 relative">
          {experiences.map((exp) => (
            <button
              key={exp.company}
              onClick={() => setSelected(exp)}
              className={`setPointerOn block text-left transition-colors ${
                selected.company === exp.company
                  ? "text-[#F8C471] font-semibold"
                  : "text-gray-400 hover:text-[#F8C471]"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Prawa część */}
        <div className="md:w-3/4 relative">
          <h3 className="text-2xl font-semibold mb-2">{selected.role}</h3>
          <p className="text-gray-400 mb-6">{selected.period}</p>

          <ul className="space-y-3 list-disc pl-5 text-lg">
            {selected.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
