"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiPython,
    SiNodedotjs,
    SiPostgresql,
    SiDocker,
    SiKubernetes,
    SiGit,
    SiGithub,
    SiLinux,
    SiRedis,
    SiElastic,
    SiHtml5,
    SiSanic,
    SiFlask,
    SiRabbitmq,
    SiTypescript,
    SiCss3
} from "react-icons/si";

export default function Skills() {
    const skills = {
        Backend: [
            { name: "Python", icon: <SiPython size={24} color="#3776ab" /> },
            { name: "Sanic", icon: <SiSanic size={24} color="#3776ab" /> },
            { name: "Flask", icon: <SiFlask size={24} color="#ffffff" /> },
            { name: "Node.js", icon: <SiNodedotjs size={24} color="#68a063" /> },
            { name: "SOAP / REST", icon: <span className="text-lg">🌐</span> },
            { name: "Microservices", icon: <span className="text-lg">⚙️</span> },
            { name: "Message Queues", icon: <SiRabbitmq size={24} color="#ff6600" /> },
        ],
        Frontend: [
            { name: "Next.js", icon: <SiNextdotjs size={24} color="white" /> },
            { name: "JavaScript", icon: <SiJavascript size={24} color="#f7df1e" /> },
            { name: "React", icon: <SiReact size={24} color="#61dafb" /> },
            { name: "TypeScript", icon: <SiTypescript size={24} color="#3178c6" /> },
            { name: "HTML", icon: <SiHtml5 size={24} color="#e34f26" /> },
            { name: "CSS", icon: <SiCss3 size={24} color="#1572b6" /> },
        ],
        Integrations: [
            {
                name: "n8n",
                icon: <Image src="/n8n_icon.png" alt="n8n" width={24} height={24} />
            },
            { name: "IBM App Connect Enterprise", icon: <span className="text-lg">💡</span> },
            { name: "SOAP / REST APIs", icon: <span className="text-lg">🔌</span> },
            { name: "Message Queues", icon: <span className="text-lg">📬</span> },
        ],
        LLMs: [
            { name: "ChatGPT", icon: <span className="text-lg">🤖</span> },
            { name: "Gemini", icon: <span className="text-lg">✨</span> },
            { name: "Claude", icon: <span className="text-lg">💡</span> },
            { name: "Mistral", icon: <span className="text-lg">🌪️</span> },
            { name: "Prompt engineering", icon: <span className="text-lg">📝</span> },
            { name: "Data classification & extraction", icon: <span className="text-lg">📊</span> },
        ],
        Database: [
            { name: "PostgreSQL", icon: <SiPostgresql size={24} color="#336791" /> },
            { name: "Elasticsearch", icon: <SiElastic size={24} color="#005571" /> },
            { name: "Redis", icon: <SiRedis size={24} color="#d82c20" /> },
            { name: "SQL", icon: <span className="text-lg">🗄️</span> },
        ],
        DevOps: [
            { name: "Docker", icon: <SiDocker size={24} color="#2496ed" /> },
            { name: "Kubernetes", icon: <SiKubernetes size={24} color="#326ce5" /> },
            { name: "Git", icon: <SiGit size={24} color="#f34f29" /> },
            { name: "GitHub", icon: <SiGithub size={24} color="white" /> },
            { name: "Linux (terminal)", icon: <SiLinux size={24} color="#FCC624" /> },
        ],
        Other: [
            { name: "Automation", icon: <span className="text-lg">⚡</span> },
            { name: "Debugging & Testing", icon: <span className="text-lg">🧪</span> },
            { name: "Technical documentation", icon: <span className="text-lg">📑</span> },
            { name: "Data scraping", icon: <span className="text-lg">🕷️</span> },
            { name: "ESQL", icon: <span className="text-lg">∑</span> },
        ],
    };

    return (
        <section
            id="skills"
            className="min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-[#3C3B44] text-white flex flex-col items-center justify-center relative"
        >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-10 sm:mb-16 text-center text-white/70">
                Skills
            </h2>

            <div className="w-full flex flex-col gap-12 md:gap-20">
                {Object.entries(skills).map(([category, items]) => (
                    <div
                        key={category}
                        className="flex flex-col md:flex-row items-start md:gap-16 gap-8 relative"
                    >
                        {/* Kategoria */}
                        <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-white/70 uppercase tracking-wider mb-4 md:mb-0 w-full md:w-56">
                            {category}
                            <div className="w-8 h-0.5 bg-[#F8C471] opacity-40 rounded-full mt-1" />
                        </h3>

                        {/* Lista */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6 flex-1"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {items.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-3 text-base sm:text-lg hover:text-[#F8C471] transition"
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>

    );
}
