"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

const THESIS_PDF = "/inz.pdf";
const N8N_PDF = "/n8n.pdf";

function TechChips({ tech }: { tech: string }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.split(",").map((item) => (
        <span key={item} className="px-2.5 py-1 rounded-full border border-line text-xs text-body">
          {item.trim()}
        </span>
      ))}
    </div>
  );
}

function PdfLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-sm text-accent hover:opacity-80 transition-opacity underline underline-offset-4"
    >
      {label} ↗
    </a>
  );
}

export default function Education() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const thesis = t.thesisSection;
  const n8n = t.n8nSection;
  const [n8nOpen, setN8nOpen] = useState(false);

  const cardMotion = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0, margin: "0px 0px 20% 0px" },
    transition: { duration: 0.4, ease: "easeOut" as const, delay },
  });

  return (
    <section
      id="education"
      className="px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-s1 text-ink relative"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 right-16 w-3 h-3 rounded-full bg-accent opacity-60" />
      <div className="absolute bottom-24 left-20 w-4 h-4 border border-accent rounded-full opacity-40" />

      <h2 className="text-4xl font-bold mb-10 text-accent">{t.educationTitle}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-w-6xl">
        {/* Praca inżynierska */}
        <motion.article className="border border-line rounded-xl p-5 sm:p-6 flex flex-col gap-4" {...cardMotion(0)}>
          <div>
            <h3 className="text-2xl font-semibold">{thesis.sectionTitle}</h3>
            <p className="text-sm text-accent mt-1">
              {thesis.type} · {thesis.year}
            </p>
            <p className="text-xs text-muted mt-1">
              {thesis.spec} · {thesis.university}
            </p>
          </div>

          <p className="text-sm font-medium italic text-body">{thesis.title}</p>
          <p className="text-sm leading-relaxed text-body">{thesis.description}</p>

          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-2">{thesis.techLabel}</p>
            <TechChips tech={thesis.tech} />
          </div>

          <div className="mt-auto pt-1">
            <PdfLink href={THESIS_PDF} label={thesis.viewPdf} />
          </div>
        </motion.article>

        {/* Kurs n8n */}
        <motion.article className="border border-line rounded-xl p-5 sm:p-6 flex flex-col gap-4" {...cardMotion(0.1)}>
          <div>
            <h3 className="text-2xl font-semibold">{n8n.sectionTitle}</h3>
            <p className="text-sm text-accent mt-1">{n8n.subtitle}</p>
          </div>

          <p className="text-sm leading-relaxed text-body">{n8n.summary}</p>

          {n8nOpen && (
            <div className="space-y-3">
              {n8n.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setN8nOpen((v) => !v)}
            aria-expanded={n8nOpen}
            className="self-start text-sm text-body hover:text-accent transition-colors underline underline-offset-4 cursor-pointer"
          >
            {n8nOpen ? n8n.readLess : n8n.readMore}
          </button>

          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-2">{n8n.techLabel}</p>
            <TechChips tech={n8n.tech} />
          </div>

          <div className="mt-auto pt-1">
            <PdfLink href={N8N_PDF} label={n8n.viewPdf} />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
