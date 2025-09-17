"use client";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer
      id="contact"
      className="w-full min-h-[400px] flex flex-col justify-center items-center text-center 
                 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24
                 bg-[#37353E] text-[#D3DAD9] relative border-t border-[#2E2D35]
                 overflow-hidden"
    >
      {/* Główna zawartość */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <span className="inline-block text-[#F8C471] mb-2 sm:mb-3 text-sm sm:text-base font-medium">
          {t.footerGetInTouch}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                       mb-4 sm:mb-6 leading-tight">
          {t.footerTitle}
        </h2>

        <p className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto
                     text-sm sm:text-base md:text-lg 
                     mb-6 sm:mb-8 lg:mb-10 text-[#D3DAD9]/80 leading-relaxed">
          {t.footerDescription}
        </p>

        <a
          href="mailto:michal.bialek@opoczta.pl"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 
                     border-2 border-[#F8C471] text-[#F8C471] rounded-lg
                     text-sm sm:text-base font-medium
                     hover:bg-[#F8C471] hover:text-[#37353E] 
                     focus:bg-[#F8C471] focus:text-[#37353E] focus:outline-none focus:ring-2 focus:ring-[#F8C471]/50
                     transition-all duration-300 hover:scale-105 active:scale-95
                     cursor-pointer"
        >
          {t.footerButton}
        </a>
      </div>

      {/* Elementy ozdobne - pozycjonowane absolutnie z lepszą kontrolą */}
      <div className="absolute top-8 sm:top-12 left-1/4 sm:left-1/3 
                     w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#F8C471] opacity-80" />
      <div className="absolute top-16 sm:top-24 right-1/5 sm:right-1/4 
                     w-3 h-3 sm:w-4 sm:h-4 border border-[#F8C471] rounded-full opacity-60" />
      <div className="absolute bottom-8 sm:bottom-12 left-1/5 
                     w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-[#F8C471] opacity-40" />
    </footer>
  );
}