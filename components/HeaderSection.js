"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import { useLanguage } from "@/context/LanguageContext";

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Michal_Bialek.pdf";
    link.download = "CV_Michal_Bialek.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="absolute top-8 left-0 right-0 w-full z-20 max-w-full px-6 flex items-center justify-between">
      {/* Burger (LEWO) */}
      <button
        aria-label="Open menu"
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 setPointerOn
                   transition-transform duration-200 active:scale-95"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="block w-7 h-0.5 bg-[#715A5A] rounded" />
        <span className="block w-7 h-0.5 bg-[#715A5A] rounded" />
        <span className="block w-7 h-0.5 bg-[#715A5A] rounded" />
      </button>

      {/* PRAWA STRONA: CV + EN/PL */}
      <div className="flex items-center gap-3 ml-auto">
        <button
          onClick={handleDownloadCV}
          className="setPointerOn px-4 py-2 border-2 rounded text-xs sm:text-sm font-medium
                     transition-all duration-300 hover:bg-[#715A5A] hover:text-[#D3DAD9]
                     hover:scale-105 hover:shadow-lg"
          style={{ borderColor: "#715A5A", color: "#715A5A", backgroundColor: "transparent" }}
        >
          Curriculum Vitae | CV
        </button>

        <button
          onClick={toggleLanguage}
          className="setPointerOn flex items-center gap-2 px-3 py-2 border-2 rounded text-xs sm:text-sm font-medium
             transition-all duration-300 hover:bg-[#715A5A] hover:text-[#D3DAD9]
             hover:scale-105 hover:shadow-lg"
          style={{
            borderColor: "#715A5A",
            color: "#715A5A",
            backgroundColor: "transparent",
          }}
        >
          {lang === "pl" ? (
            <>
              <span role="img" aria-label="UK flag">🇬🇧</span> EN
            </>
          ) : (
            <>
              <span role="img" aria-label="Polish flag">🇵🇱</span> PL
            </>
          )}
        </button>

      </div>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
