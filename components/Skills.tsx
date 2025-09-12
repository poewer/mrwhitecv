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
            { name: "Flask", icon: <SiFlask size={24} color="#ffffffff" /> },
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
                name: "n8n ",
                icon: <Image src="/n8n_icon.png" alt="n8n" width={32} height={32} />
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
            className="min-h-screen px-8 md:px-20 py-20 bg-[#3C3B44] text-white flex flex-col items-center justify-center relative"
        >
            {/* Ozdobne elementy w tle */}
            <div className="absolute top-10 left-12 w-4 h-4 rounded-full bg-[#F8C471] opacity-50 animate-pulse" />
            <div className="absolute top-24 right-16 w-3 h-3 border border-[#F8C471] rounded-full opacity-40" />
            <div className="absolute top-1/4 left-8 w-2 h-8 bg-white opacity-20 rounded-full" />
            
            {/* Większy element dekoracyjny - gear/cog */}
            <div className="absolute top-20 right-1/4 w-10 h-10 border border-[#F8C471] opacity-30 rotate-45">
                <div className="absolute inset-1 w-8 h-8 border border-white opacity-25 rotate-45" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#F8C471] rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-60" />
            </div>
            
            {/* Elementy symbolizujące kod/technologie */}
            <div className="absolute bottom-1/4 left-16 flex flex-col space-y-1 opacity-25">
                <div className="w-8 h-0.5 bg-[#F8C471] rounded-full" />
                <div className="w-6 h-0.5 bg-white rounded-full" />
                <div className="w-10 h-0.5 bg-[#F8C471] rounded-full" />
                <div className="w-4 h-0.5 bg-white rounded-full" />
            </div>
            
            {/* Binarne elementy (0 i 1) */}
            <div className="absolute top-1/3 right-10 opacity-20 font-mono text-sm">
                <div className="text-[#F8C471]">1</div>
                <div className="text-white mt-2">0</div>
                <div className="text-[#F8C471] mt-2">1</div>
            </div>
            
            {/* Hexagon pattern */}
            <div className="absolute bottom-1/3 right-1/4 opacity-20">
                <div className="w-6 h-6 border border-white transform rotate-45 relative">
                    <div className="absolute inset-1 border border-[#F8C471] rotate-45" />
                </div>
            </div>
            
            {/* Network/connection lines */}
            <div className="absolute top-1/2 left-4 opacity-15">
                <div className="w-12 h-0.5 bg-white rounded-full" />
                <div className="w-3 h-3 border border-[#F8C471] rounded-full mt-2" />
                <div className="w-8 h-0.5 bg-[#F8C471] rounded-full mt-2" />
            </div>
            
            {/* Małe kropki rozrzucone */}
            <div className="absolute bottom-20 left-1/3 w-1 h-1 rounded-full bg-[#F8C471] opacity-70" />
            <div className="absolute top-40 left-1/4 w-1 h-1 rounded-full bg-white opacity-50" />
            <div className="absolute bottom-32 right-1/3 w-1 h-1 rounded-full bg-[#F8C471] opacity-60" />
            <div className="absolute top-3/4 right-20 w-1 h-1 rounded-full bg-white opacity-40" />
            
            {/* Element przypominający terminal/console */}
            <div className="absolute bottom-16 right-12 w-8 h-6 border border-white opacity-15 rounded-sm">
                <div className="w-1 h-1 bg-[#F8C471] rounded-full mt-1 ml-1 animate-pulse" />
                <div className="w-4 h-0.5 bg-white opacity-50 rounded-full mt-1 ml-1" />
                <div className="w-3 h-0.5 bg-white opacity-30 rounded-full mt-0.5 ml-1" />
            </div>

            <h2 className="text-6xl font-bold mb-16 text-center text-white/70">
                Skills
            </h2>

            <div className="w-full flex flex-col gap-20">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="flex flex-row items-start gap-16 relative">
                        {/* Ozdobne elementy przy każdej kategorii */}
                        <div className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-[#F8C471] opacity-30" />
                        
                        {/* Category (lewa kolumna, bez animacji) */}
                        <h3 className="w-56 text-2xl font-semibold text-white/70 uppercase tracking-wider setPointerOn hover:text-white transition relative">
                            {category}
                            {/* Mała linia pod kategorią */}
                            <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#F8C471] opacity-40 rounded-full" />
                        </h3>

                        {/* Lista skilli (prawa kolumna, z animacją) */}
                        <motion.div
                            className="grid grid-cols-3 gap-x-16 gap-y-6 text-left flex-1 relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {/* Ozdobny element w prawym górnym rogu listy */}
                            <div className="absolute -top-2 -right-2 w-1 h-1 rounded-full bg-white opacity-40" />
                            
                            {items.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-3 text-lg hover:text-[#F8C471] transition justify-start setPointerOn"
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