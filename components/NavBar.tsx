"use client";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export const NAV_SECTIONS = [
  "myprofile",
  "about",
  "workexperience",
  "skills",
  "thesis",
  "n8ncourse",
  "contact",
] as const;

export default function NavBar() {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Pasek pojawia się po przewinięciu poza hero
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Podświetlenie aktualnej sekcji
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 md:left-20 right-0 z-30 h-14 bg-s1/90 backdrop-blur border-b border-line
          flex items-center justify-between px-4 sm:px-6 transition-all duration-300
          ${visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
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

        <button
          onClick={toggleLanguage}
          className="cursor-pointer px-3 py-1.5 border border-line rounded text-xs sm:text-sm text-ink
            hover:text-accent hover:border-accent transition-colors duration-200"
        >
          {lang === "pl" ? "🇬🇧 EN" : "🇵🇱 PL"}
        </button>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
