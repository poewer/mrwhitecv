"use client";
import ScrollHint from "./ScrollHint";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Main() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="pl-4 md:pl-16 pt-14 flex flex-col items-start justify-center min-h-screen relative overflow-hidden w-full bg-s1 text-ink">
      {/* Organiczne kształty w tle (akcent z niską przezroczystością) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-32 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent opacity-[0.14]"
          style={{ clipPath: "ellipse(70% 60% at 30% 40%)", transform: "rotate(-15deg)" }}
        />
        <div
          className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent opacity-[0.10]"
          style={{ clipPath: "ellipse(80% 50% at 60% 30%)", transform: "rotate(25deg)" }}
        />
        <div
          className="absolute -top-10 right-0 w-32 h-32 md:w-48 md:h-48 bg-accent opacity-[0.12]"
          style={{ clipPath: "ellipse(60% 80% at 80% 20%)", borderRadius: "50%" }}
        />
      </div>

      {/* Główna zawartość */}
      <div className="relative z-10 p-6 md:p-12 max-w-3xl md:max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-strong">
          {t.greeting} <br />
          <span className="block">{t.name}</span>
        </h1>

        <h2 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-accent">
          {t.role}
          {t.subtitle && (
            <span
              className="inline-block ml-2 text-sm sm:text-base md:text-lg"
              style={{ fontFamily: "monospace", letterSpacing: "2px" }}
            >
              {t.subtitle}
            </span>
          )}
        </h2>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-body">{t.description}</p>

        <a
          href="#contact"
          className="inline-block mt-8 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 border-2 border-accent text-accent rounded
            text-base sm:text-lg font-medium transition-all duration-300
            hover:bg-accent hover:text-s1 hover:scale-105 hover:shadow-lg"
        >
          {t.contact}
        </a>
      </div>

      <ScrollHint />
    </main>
  );
}
