"use client";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

const SECTIONS = [
  "myprofile",
  "about",
  "workexperience",
  "skills",
  "thesis",
  "n8ncourse",
  "contact",
] as const;

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="fixed inset-0 bg-menu z-50 flex flex-col items-center justify-center text-strong overflow-y-auto py-16">
      {/* Close button */}
      <button
        aria-label={t.nav.closeMenu}
        className="absolute top-6 right-6 text-3xl font-bold text-strong cursor-pointer"
        onClick={onClose}
      >
        ✕
      </button>

      <nav className="flex flex-col items-center space-y-5 text-xl">
        {SECTIONS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="hover:text-accent transition"
            onClick={onClose}
          >
            {t.nav[id]}
          </a>
        ))}
      </nav>

      <div className="w-16 h-px bg-line my-10" />

      <div className="flex flex-col space-y-8 text-lg">
        <Link
          href="https://github.com/poewer"
          target="_blank"
          className="flex items-center gap-3 hover:text-accent transition"
          onClick={onClose}
        >
          <FaGithub size={24} /> GitHub
        </Link>

        <Link
          href="https://www.instagram.com/bial_y_czak/"
          target="_blank"
          className="flex items-center gap-3 hover:text-accent transition"
          onClick={onClose}
        >
          <FaInstagram size={24} /> Instagram
        </Link>

        <Link
          href="https://www.linkedin.com/in/michal-bialek-a48891267/"
          target="_blank"
          className="flex items-center gap-3 hover:text-accent transition"
          onClick={onClose}
        >
          <FaLinkedin size={24} /> LinkedIn
        </Link>
      </div>
    </div>
  );
}
