"use client";
import HeaderSection from "./HeaderSection";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Main() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main
      className="pl-4 md:pl-16 flex flex-col items-start justify-center min-h-screen relative overflow-hidden w-full"
      style={{ backgroundColor: "#D3DAD9" }}
    >
      {/* Organiczne kształty w tle */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Duży żółty kształt */}
        <div
          className="absolute -top-20 -left-32 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-90"
          style={{
            backgroundColor: "#F4D03F",
            clipPath: "ellipse(70% 60% at 30% 40%)",
            transform: "rotate(-15deg)",
          }}
        ></div>

        {/* Średni kształt */}
        <div
          className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-80"
          style={{
            backgroundColor: "#F7DC6F",
            clipPath: "ellipse(80% 50% at 60% 30%)",
            transform: "rotate(25deg)",
          }}
        ></div>

        {/* Dodatkowy kształt w prawym górnym rogu */}
        <div
          className="absolute -top-10 right-0 w-32 h-32 md:w-48 md:h-48 opacity-70"
          style={{
            backgroundColor: "#F8C471",
            clipPath: "ellipse(60% 80% at 80% 20%)",
            borderRadius: "50%",
          }}
        ></div>
      </div>

      {/* Sekcja nagłówkowa */}
      <HeaderSection />

      {/* Główna zawartość */}
      <div className="relative z-10 p-6 md:p-12 max-w-3xl md:max-w-4xl">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          style={{ color: "#37353E" }}
        >
          {t.greeting} <br />
          <span className="block">{t.name}</span>
        </h1>

        <h2
          className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold"
          style={{ color: "#E74C3C" }}
        >
          {t.role}
          <span
            className="inline-block ml-2 text-sm sm:text-base md:text-lg"
            style={{
              color: "#E74C3C",
              fontFamily: "monospace",
              letterSpacing: "2px",
            }}
          >
            {t.subtitle}
          </span>
        </h2>

        <p
          className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed"
          style={{ color: "#44444E" }}
        >
          {t.description}
        </p>

        <button
          className="mt-8 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 border-2 rounded text-base sm:text-lg font-medium transition-all duration-300 hover:bg-[#715A5A] hover:text-[#D3DAD9] hover:scale-105 hover:shadow-lg"
          style={{
            borderColor: "#715A5A",
            color: "#715A5A",
            backgroundColor: "transparent",
          }}
        >
          {t.contact}
        </button>
      </div>

      {/* Dodatkowe efekty wizualne */}
      <div
        className="absolute bottom-16 right-10 w-2 h-2 rounded-full opacity-60"
        style={{ backgroundColor: "#E74C3C" }}
      ></div>
      <div
        className="absolute bottom-24 right-20 w-1 h-1 rounded-full opacity-40"
        style={{ backgroundColor: "#37353E" }}
      ></div>
    </main>
  );
}
