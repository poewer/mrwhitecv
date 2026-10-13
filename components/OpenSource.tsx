"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

const ORG_URL = "https://github.com/worthmytime";
const BOARD_URL = "https://github.com/orgs/worthmytime/projects/1";

export default function OpenSource() {
  const { lang } = useLanguage();
  const t = translations[lang].openSourceSection;

  return (
    <section
      id="opensource"
      className="min-h-[80vh] px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-s2 text-ink relative flex flex-col justify-center"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-accent opacity-60" />
      <div className="absolute bottom-20 right-20 w-4 h-4 border border-accent rounded-full opacity-40" />

      <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-10">{t.sectionTitle}</h2>

      <motion.div
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-start max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Logo projektu */}
        <a
          href={ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
          aria-label={`${t.projectName} – ${t.viewOrg}`}
        >
          <Image
            src="/worthmytime.jpg"
            alt={`${t.projectName} logo`}
            width={144}
            height={144}
            className="rounded-2xl border-2 border-accent shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </a>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">{t.projectName}</h3>
            <p className="text-sm text-accent mt-1">{t.role}</p>
          </div>

          <p className="text-base leading-relaxed text-body">{t.description}</p>

          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-2">{t.techLabel}</p>
            <p className="text-sm text-body">{t.tech}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-3">{t.reposLabel}</p>
            <ul className="space-y-2">
              {t.repos.map((repo) => (
                <li key={repo.name} className="text-sm">
                  <a
                    href={`${ORG_URL}/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium hover:text-accent transition-colors"
                  >
                    <FaGithub size={16} /> {repo.name}
                  </a>
                  <span className="text-muted"> – {repo.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 border-2 border-accent text-accent rounded-lg font-medium
                hover:bg-accent hover:text-s1 transition-all duration-300"
            >
              <FaGithub size={18} /> {t.viewOrg}
            </a>
            <a
              href={BOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent underline underline-offset-4 transition-colors"
            >
              {t.join} ↗
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
