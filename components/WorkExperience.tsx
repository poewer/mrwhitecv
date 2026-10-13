"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

type Experience = {
  company: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string;
  url?: string;
  note?: string; // opcjonalna etykieta, np. "contract" / "part-time" przy równoległych zleceniach
  details: string[];
};

const CURRENT = "9999-12-31";

// "Warsaw | Oct 2025 – Apr 2026" -> { city: "Warsaw", dates: "Oct 2025 – Apr 2026" }
function splitPeriod(period: string) {
  const [city, ...rest] = period.split(" | ");
  return rest.length ? { city, dates: rest.join(" | ") } : { city: "", dates: city };
}

export default function WorkExperience() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // Od najstarszego (lewa strona) do najnowszego (prawa strona)
  const experiences: Experience[] = useMemo(
    () => [...t.experiences].sort((a, b) => a.startDate.localeCompare(b.startDate) || a.endDate.localeCompare(b.endDate)),
    [t.experiences]
  );

  // Domyślnie otwarte jest najnowsze stanowisko
  const [selected, setSelected] = useState(experiences.length - 1);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const firstRender = useRef(true);

  // Na wąskich ekranach ustaw oś tak, by wybrane stanowisko było na środku.
  // Przewijamy tylko sam pasek osi (nie całą stronę), a przy pierwszym wyświetleniu bez animacji.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const node = nodeRefs.current[selected];
    if (!scroller || !node) return;

    const left = node.offsetLeft - (scroller.clientWidth - node.offsetWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, left), behavior: firstRender.current ? "auto" : "smooth" });
    firstRender.current = false;
  }, [selected, lang]);

  const last = experiences.length - 1;
  const exp = experiences[Math.min(selected, last)];
  const { city, dates } = splitPeriod(exp.period);

  const goPrev = () => setSelected((s) => Math.max(0, s - 1));
  const goNext = () => setSelected((s) => Math.min(last, s + 1));

  const arrowClass =
    "flex items-center justify-center w-10 h-10 rounded-full border border-line text-lg cursor-pointer " +
    "hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-default " +
    "disabled:hover:border-line disabled:hover:text-ink";

  return (
    <section
      id="workexperience"
      className="min-h-[70vh] px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-s4 text-ink relative"
    >
      {/* Dekoracje */}
      <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-accent opacity-60" />
      <div className="absolute top-28 right-20 w-4 h-4 border border-accent rounded-full opacity-40" />
      <div className="absolute top-1/4 right-10 w-2 h-12 bg-ink opacity-20 rounded-full" />

      <h2 className="text-4xl font-bold mb-10 text-accent">{t.workExpTitle}</h2>

      {/* Oś czasu: od lewej (najstarsze) do prawej (najnowsze) */}
      <div className="relative -mx-4 sm:mx-0">
        {/* Podpowiedź przewijania na telefonie: przyciemnione krawędzie */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-s4 to-transparent z-20 md:hidden" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-s4 to-transparent z-20 md:hidden" />

      <div
        ref={scrollerRef}
        className="relative overflow-x-auto pb-4 px-4 sm:px-0 snap-x snap-mandatory scroll-px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex min-w-max md:min-w-0">
          {experiences.map((e, i) => {
            const isSelected = i === selected;
            const isCurrent = e.endDate === CURRENT;
            const { dates: nodeDates } = splitPeriod(e.period);

            return (
              <button
                key={e.startDate}
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelected(i)}
                className="group relative flex-1 min-w-[130px] md:min-w-0 snap-center flex flex-col items-center px-1.5 pt-1 pb-2 cursor-pointer focus:outline-none"
              >
                {/* Linia osi (pierwszy i ostatni element mają tylko połowę) */}
                <span
                  className="absolute top-[14px] h-0.5 bg-line"
                  style={{ left: i === 0 ? "50%" : 0, right: i === experiences.length - 1 ? "50%" : 0 }}
                />

                {/* Kropka */}
                <span
                  className={`relative z-10 block rounded-full border-2 border-s4 transition-all duration-300
                    ${isSelected ? "w-6 h-6 ring-2 ring-accent" : "w-5 h-5 group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-accent"}
                    ${isCurrent ? "bg-accent" : "bg-placeholder"}`}
                />

                <span
                  className={`mt-3 text-sm font-semibold text-center transition-colors
                    ${isSelected ? "text-accent" : "text-ink group-hover:text-accent"}`}
                >
                  {e.company}
                </span>
                <span className="mt-0.5 text-xs text-body text-center leading-snug line-clamp-2">{e.role}</span>
                <span className="mt-0.5 text-xs text-muted text-center leading-snug">{nodeDates}</span>
                {e.note && (
                  <span className="mt-1 px-1.5 py-0.5 rounded-full border border-line text-[10px] text-muted leading-none">
                    {e.note}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      </div>

      {/* Nawigacja: poprzednie / następne stanowisko */}
      <div className="mt-4 w-full flex items-center justify-between">
        <button type="button" onClick={goPrev} disabled={selected <= 0} aria-label={t.experienceNav.prev} className={arrowClass}>
          ‹
        </button>
        <span className="text-sm text-muted tabular-nums">
          {selected + 1} / {experiences.length}
        </span>
        <button type="button" onClick={goNext} disabled={selected >= last} aria-label={t.experienceNav.next} className={arrowClass}>
          ›
        </button>
      </div>

      {/* Szczegóły wybranego stanowiska (na telefonie można przesuwać palcem w lewo/prawo) */}
      <div className="mt-4 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={exp.startDate}
            className="border border-line rounded-xl p-4 sm:p-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) goNext();
              else if (info.offset.x > 60) goPrev();
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="text-xl font-semibold">
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h3>
              <span className="text-sm text-muted shrink-0">
                {city && `${city} | `}
                {dates}
                {exp.url && (
                  <>
                    {" | "}
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:opacity-80 transition-opacity"
                    >
                      LinkedIn
                    </a>
                  </>
                )}
              </span>
            </div>

            <p className="text-accent text-sm font-medium mb-3">{exp.role}</p>

            <ul className="space-y-1.5 list-disc pl-4 text-sm text-body">
              {exp.details.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
