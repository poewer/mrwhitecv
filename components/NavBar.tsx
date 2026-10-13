"use client";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import { NAV_SECTIONS } from "@/utils/navSections";

export default function NavBar() {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const cvFile = lang === "pl" ? "pl_michal_bialek_cv.pdf" : "en_michal_bialek_cv.pdf";
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Podświetlana jest zawsze dokładnie jedna sekcja: ostatnia, której góra minęła próg (35% wysokości ekranu)
  useEffect(() => {
    const update = () => {
      const threshold = window.innerHeight * 0.35;
      let current = "";
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 md:left-20 right-0 z-30 h-14 bg-s1/90 backdrop-blur border-b border-line
          flex items-center justify-between px-4 sm:px-6"
      >
        {/* Burger (telefon) */}
        <button
          aria-label={t.nav.openMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-ink rounded" />
          <span className="block w-6 h-0.5 bg-ink rounded" />
          <span className="block w-6 h-0.5 bg-ink rounded" />
        </button>

        {/* Linki (komputer) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-3">
          {NAV_SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-2 lg:px-3 py-2 text-sm transition-colors duration-200 hover:text-accent
                ${active === id ? "text-accent font-semibold" : "text-ink"}`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
        <a
          href={`/${cvFile}`}
          download={cvFile}
          className="px-3 py-1.5 border border-accent text-accent rounded text-xs sm:text-sm font-medium
            hover:bg-accent hover:text-s1 transition-colors duration-200"
        >
          <span aria-hidden="true">⬇ </span>
          {t.nav.cv}
        </a>

        <button
          onClick={toggleLanguage}
          className="cursor-pointer px-3 py-1.5 border border-line rounded text-xs sm:text-sm text-ink
            hover:text-accent hover:border-accent transition-colors duration-200"
        >
          {lang === "pl" ? "🇬🇧 EN" : "🇵🇱 PL"}
        </button>
        </div>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
