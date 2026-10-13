"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/utils/translations";
import {
  SiJavascript, SiReact, SiNextdotjs, SiPython, SiNodedotjs, SiPostgresql,
  SiDocker, SiKubernetes, SiGit, SiGithub, SiRedis, SiElastic,
  SiHtml5, SiSanic, SiFlask, SiRabbitmq, SiTypescript, SiCss3, SiGithubactions,
  SiTemporal, SiOpenai, SiGooglegemini, SiClaude, SiGooglecloud, SiRancher,
  SiArgo, SiGitlab, SiGrafana, SiPytest, SiPostman, SiScrapy
} from "react-icons/si";
import {
  LuStar, LuPlug, LuBoxes, LuNetwork, LuWind, LuRoute, LuBot, LuMessageSquareText,
  LuTags, LuDatabase, LuKeyRound, LuZap, LuFileText, LuTerminal
} from "react-icons/lu";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const skills = {
    Backend: [
      { name: "Python", icon: <SiPython size={24} color="#3776ab" /> },
      { name: "Sanic", icon: <SiSanic size={24} color="#3776ab" /> },
      { name: "Flask", icon: <SiFlask size={24} color="currentColor" /> },
      { name: "Starlette", icon: <LuStar size={24} className="text-muted" /> },
      { name: "Node.js", icon: <SiNodedotjs size={24} color="#68a063" /> },
      { name: "SOAP / REST", icon: <LuPlug size={24} className="text-muted" /> },
      { name: "Microservices", icon: <LuBoxes size={24} className="text-muted" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq size={24} color="#ff6600" /> },
      { name: "Temporal", icon: <SiTemporal size={24} color="currentColor" /> },
    ],
    Frontend: [
      { name: "Next.js", icon: <SiNextdotjs size={24} color="currentColor" /> },
      { name: "JavaScript", icon: <SiJavascript size={24} color="#f7df1e" /> },
      { name: "React", icon: <SiReact size={24} color="#61dafb" /> },
      { name: "TypeScript", icon: <SiTypescript size={24} color="#3178c6" /> },
      { name: "HTML", icon: <SiHtml5 size={24} color="#e34f26" /> },
      { name: "CSS", icon: <SiCss3 size={24} color="#1572b6" /> },
    ],
    Integrations: [
      { name: "n8n", icon: <Image src="/n8n_icon.png" alt="n8n" width={24} height={24} /> },
      { name: "IBM App Connect Enterprise", icon: <LuNetwork size={24} className="text-muted" /> },
    ],
    LLMs: [
      { name: "ChatGPT", icon: <SiOpenai size={24} color="currentColor" /> },
      { name: "Gemini", icon: <SiGooglegemini size={24} color="#8e75b2" /> },
      { name: "Claude", icon: <SiClaude size={24} color="#d97757" /> },
      { name: "Mistral", icon: <LuWind size={24} className="text-muted" /> },
      { name: "LiteLLM", icon: <LuRoute size={24} className="text-muted" /> },
      { name: "AI agents", icon: <LuBot size={24} className="text-muted" /> },
      { name: "Prompt engineering", icon: <LuMessageSquareText size={24} className="text-muted" /> },
      { name: "Data classification & extraction", icon: <LuTags size={24} className="text-muted" /> },
    ],
    Database: [
      { name: "PostgreSQL", icon: <SiPostgresql size={24} color="#336791" /> },
      { name: "Elasticsearch", icon: <SiElastic size={24} color="#005571" /> },
      { name: "Redis", icon: <SiRedis size={24} color="#d82c20" /> },
      { name: "AlloyDB", icon: <SiGooglecloud size={24} color="#4285f4" /> },
      { name: "SQL", icon: <LuDatabase size={24} className="text-muted" /> },
    ],
    DevOps: [
      { name: "Docker", icon: <SiDocker size={24} color="#2496ed" /> },
      { name: "Kubernetes", icon: <SiKubernetes size={24} color="#326ce5" /> },
      { name: "Git", icon: <SiGit size={24} color="#f34f29" /> },
      { name: "GitHub", icon: <SiGithub size={24} color="currentColor" /> },
      { name: "GitHub Actions", icon: <SiGithubactions size={24} color="#2088ff" /> },
      { name: "K3s", icon: <SiRancher size={24} color="#0075a8" /> },
      { name: "Argo CD / GitOps", icon: <SiArgo size={24} color="#ef7b4d" /> },
      { name: "GitLab CI/CD", icon: <SiGitlab size={24} color="#fc6d26" /> },
      { name: "Key Vault", icon: <LuKeyRound size={24} className="text-muted" /> },
      { name: "Grafana", icon: <SiGrafana size={24} color="#f46800" /> },
    ],
    Testing: [
      { name: "Unit testing", icon: <SiPytest size={24} color="#0a9edc" /> },
      { name: "Integration testing", icon: <SiPostman size={24} color="#ff6c37" /> },
    ],
    Other: [
      { name: "Automation", icon: <LuZap size={24} className="text-muted" /> },
      { name: "Technical documentation", icon: <LuFileText size={24} className="text-muted" /> },
      { name: "Web scraping", icon: <SiScrapy size={24} color="#60a839" /> },
      { name: "ESQL", icon: <LuTerminal size={24} className="text-muted" /> },
    ],
  };

  return (
    <section
      id="skills"
      className="px-4 sm:px-8 md:px-20 py-12 sm:py-16 bg-s3 text-strong flex flex-col items-center relative"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-strong/70">
        {t.skillsTitle}
      </h2>

      {/* Kategoria = kolumna (nagłówek), technologie wypisane jedna pod drugą */}
      <motion.div
        className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0, margin: "0px 0px 20% 0px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="min-w-0">
            <h3 className="text-xs font-semibold text-accent uppercase tracking-widest pb-2 mb-3 border-b border-line">
              {t.skillsCategories[category as keyof typeof t.skillsCategories] || category}
            </h3>

            <ul className="space-y-2">
              {items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 text-sm hover:text-accent transition-colors
                    [&>svg]:w-4 [&>svg]:h-4 [&>svg]:shrink-0 [&>img]:w-4 [&>img]:h-4 [&>span:first-child]:text-base [&>span:first-child]:leading-none"
                >
                  {skill.icon}
                  <span className="min-w-0 break-words">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
