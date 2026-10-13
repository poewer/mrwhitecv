"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const EMAIL = "michal.bialek@opoczta.pl";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [copied, setCopied] = useState(false);

  // Kopiowanie adresu, bo nie każdy ma skonfigurowanego klienta poczty dla mailto
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const input = document.createElement("textarea");
      input.value = EMAIL;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="w-full flex flex-col items-center text-center bg-s2 text-ink relative border-t border-line overflow-hidden"
    >
      {/* Kontakt */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <span className="inline-block text-accent mb-2 sm:mb-3 text-sm sm:text-base font-medium">
          {t.footerGetInTouch}
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          {t.footerTitle}
        </h2>

        <p className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-ink/80 leading-relaxed">
          {t.footerDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block px-6 sm:px-8 py-3 border-2 border-accent text-accent rounded-lg
                       text-sm sm:text-base font-medium
                       hover:bg-accent hover:text-s1
                       focus:bg-accent focus:text-s1 focus:outline-none focus:ring-2 focus:ring-accent/50
                       transition-all duration-300 cursor-pointer"
          >
            {t.footerButton}
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="px-6 sm:px-8 py-3 border-2 border-line rounded-lg text-sm sm:text-base font-medium text-ink
                       hover:border-accent hover:text-accent transition-all duration-300 cursor-pointer"
          >
            {copied ? t.footerCopied : t.footerCopy}
          </button>
        </div>

        {/* Sam adres widoczny zawsze */}
        <p className="mt-5 text-sm sm:text-base text-body select-all">{EMAIL}</p>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? t.footerCopied : ""}
        </span>
      </div>

      {/* Dolny pasek: © i ikony */}
      <div className="w-full border-t border-line px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} Michał Białek. {t.footerRights}
        </p>

        <div className="flex items-center gap-5 text-body">
          <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">
            {EMAIL}
          </a>
          <Link
            href="https://github.com/poewer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/michal-bialek-a48891267/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/bial_y_czak/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-accent transition-colors"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
