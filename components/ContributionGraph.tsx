"use client";
import { useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";

export type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const LEVEL_CLASSES = [
  "bg-s4",
  "bg-accent/30",
  "bg-accent/50",
  "bg-accent/75",
  "bg-accent",
];

type Props = {
  user: string;
  total: number;
  contributions: Contribution[];
};

export default function ContributionGraph({ user, total, contributions }: Props) {
  const { lang } = useLanguage();
  const t = translations[lang].githubActivity;
  const locale = lang === "pl" ? "pl-PL" : "en-US";

  // Układ w tygodniach (kolumny od niedzieli do soboty) + etykiety miesięcy
  const { weeks, months } = useMemo(() => {
    const weeks: (Contribution | null)[][] = [];
    let week: (Contribution | null)[] = [];

    contributions.forEach((c, i) => {
      const day = new Date(`${c.date}T00:00:00`).getDay();
      if (i === 0) week = Array(day).fill(null);
      week.push(c);
      if (day === 6) {
        weeks.push(week);
        week = [];
      }
    });
    if (week.length) weeks.push(week);

    const months: { index: number; label: string }[] = [];
    let lastMonth = -1;
    weeks.forEach((w, index) => {
      const first = w.find(Boolean);
      if (!first) return;
      const d = new Date(`${first.date}T00:00:00`);
      if (d.getMonth() !== lastMonth) {
        lastMonth = d.getMonth();
        months.push({ index, label: d.toLocaleDateString(locale, { month: "short" }) });
      }
    });

    return { weeks, months };
  }, [contributions, locale]);

  const tooltip = (c: Contribution) => {
    const date = new Date(`${c.date}T00:00:00`).toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return c.count === 0 ? `${t.none} – ${date}` : `${c.count} ${t.contributions} – ${date}`;
  };

  return (
    <section
      id="github"
      className="px-4 sm:px-8 md:px-20 pb-16 sm:pb-20 pt-0 bg-s2 text-ink relative"
    >
      <motion.div
        className="max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="border-t border-line pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 mb-5">
            <h3 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
              <FaGithub size={22} /> {t.title}
            </h3>
            {total > 0 && (
              <p className="text-sm text-muted">
                <span className="text-accent font-semibold">{total.toLocaleString(locale)}</span>{" "}
                {t.totalLabel}
              </p>
            )}
          </div>

          {weeks.length > 0 ? (
            <>
              <div className="overflow-x-auto pb-2">
                <div className="inline-block min-w-max">
                  {/* Miesiące */}
                  <div
                    className="grid text-xs text-muted mb-1"
                    style={{ gridTemplateColumns: `repeat(${weeks.length}, 13px)` }}
                  >
                    {months.map((m) => (
                      <span key={m.index} style={{ gridColumnStart: m.index + 1 }}>
                        {m.label}
                      </span>
                    ))}
                  </div>

                  {/* Siatka aktywności */}
                  <div
                    className="grid gap-[3px]"
                    style={{
                      gridTemplateRows: "repeat(7, 10px)",
                      gridAutoFlow: "column",
                      gridAutoColumns: "10px",
                    }}
                  >
                    {weeks.map((w, wi) =>
                      Array.from({ length: 7 }, (_, di) => {
                        const c = w[di];
                        return c ? (
                          <div
                            key={`${wi}-${di}`}
                            title={tooltip(c)}
                            className={`rounded-[2px] ${LEVEL_CLASSES[c.level]}`}
                          />
                        ) : (
                          <div key={`${wi}-${di}`} />
                        );
                      })
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
                <a
                  href={`https://github.com/${user}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-accent underline underline-offset-4 transition-colors"
                >
                  {t.profile} ↗
                </a>

                <div className="flex items-center gap-1 text-xs text-muted">
                  <span className="mr-1">{t.less}</span>
                  {LEVEL_CLASSES.map((cls, i) => (
                    <span key={i} className={`w-[10px] h-[10px] rounded-[2px] ${cls}`} />
                  ))}
                  <span className="ml-1">{t.more}</span>
                </div>
              </div>
            </>
          ) : (
            <a
              href={`https://github.com/${user}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent underline underline-offset-4 transition-colors"
            >
              {t.unavailable} ↗
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
