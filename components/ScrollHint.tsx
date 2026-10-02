"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export default function ScrollHint() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [hidden, setHidden] = useState(false);

  // Podpowiedź znika, gdy użytkownik zacznie przewijać
  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#myprofile"
      aria-label={t.scrollHint}
      className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2
        text-[#715A5A] transition-opacity duration-500 hover:opacity-100
        ${hidden ? "opacity-0 pointer-events-none" : "opacity-80"}`}
    >
      <span className="text-xs sm:text-sm font-medium tracking-widest uppercase">{t.scrollHint}</span>

      {/* Mysz z kółkiem i pulsującym pierścieniem */}
      <span className="relative flex items-center justify-center">
        <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full border-2 border-[#715A5A] opacity-30" />
        <span className="relative flex h-10 w-6 sm:h-12 sm:w-7 justify-center rounded-full border-2 border-[#715A5A] pt-2">
          <span className="motion-safe:animate-bounce block h-2 w-1 rounded-full bg-[#715A5A]" />
        </span>
      </span>

      <svg
        className="motion-safe:animate-bounce h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  );
}
