"use client";
import { useState } from "react";

type Experience = {
    company: string;
    role: string;
    period: string;
    startDate: string;
    details: string[];
};

const experiences: Experience[] = [
    {
        company: "IBPM 2025 - present",
        role: "Software Engineer",
        period: "Warsaw | Oct 2022 – present",
        startDate: "2025-09-09",
        details: [
            "Specialized in data processing and workflow automation.",
            "Designed and maintained complex workflows in n8n to integrate multiple systems and services.",
            "Developed microservices and backend services in Python (Sanic, Flask) to support automation pipelines.",
            "Worked with APIs, queuing systems, and enterprise integration patterns.",
            "Ensured scalability and reliability of workflows through testing, debugging, and optimization.",
            "Collaborated with cross-functional teams to deliver robust and maintainable integration solutions.",
        ],
    },
    {
        company: "Agentic 2025 - 2025",
        role: "n8n & Python Developer",
        period: "Warsaw | Feb 2025 – Oct 2025",
        startDate: "2025-02-01",
        details: [
            "Created and optimized workflows in n8n.",
            "Integrated with various services including Microsoft Graph API.",
            "Prepared prompts and adapted LLMs for classification and data extraction.",
            "Implemented logic in Python and JavaScript for workflow data processing.",
            "Developed microservices supporting communication with n8n (e.g., text-to-document service, email handling).",
        ],
    },
    {
        company: "IBPM 2024 - 2025",
        role: "Python Developer",
        period: "Warsaw | Mar 2024 – Feb 2025",
        startDate: "2024-01-01",
        details: [
            "Developed services and microservices in Python (Sanic) with data processing libraries.",
            "Worked with queuing systems and ESB to automate business processes.",
            "Managed and integrated databases: PostgreSQL, Elasticsearch, Redis.",
            "Implemented containerization using Docker, version control with Git, and Linux terminal operations.",
            "Performed debugging, testing, and wrote unit tests for applications.",
        ],
    },
    {
        company: "IBPM 2022 - 2024",
        role: "ESB Developer / Integration Developer",
        period: "Warsaw | Jul 2022 – Feb 2024",
        startDate: "2022-10-01",
        details: [
            "Developed and maintained flows in IBM App Connect Enterprise Toolkit 12 (ESQL).",
            "Built integrations based on SOAP, REST, and queuing systems.",
            "Worked extensively with XML/XSD for data transformations.",
            "Debugged and tested scalable integration flows.",
            "Collaborated with architects, prepared documentation, and implemented performance and security best practices.",
            "Worked with Git in a Scrum team and communicated directly with clients.",
        ],
    },
].sort((a, b) => b.startDate.localeCompare(a.startDate));

export default function WorkExperience() {
    const [selected, setSelected] = useState<Experience>(experiences[2]); // domyślnie trzecia pozycja

    return (
        <section
            id="workexperience"
            className="min-h-screen px-8 md:px-20 py-20 bg-[#44444E] text-[#D3DAD9] relative"
        >
            {/* Ozdobne elementy w tle */}
            <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-[#F8C471] opacity-60" />
            <div className="absolute top-28 right-20 w-4 h-4 border border-[#F8C471] rounded-full opacity-40" />
            <div className="absolute top-1/4 left-10 w-2 h-12 bg-[#D3DAD9] opacity-20 rounded-full" />
            
            {/* Większy element dekoracyjny - hexagon */}
            <div className="absolute top-16 right-1/3 w-8 h-8 border border-[#F8C471] opacity-30 rotate-45">
                <div className="absolute inset-2 border border-[#D3DAD9] opacity-50" />
            </div>
            
            {/* Elementy związane z technologią/kodem */}
            <div className="absolute bottom-1/3 right-12 flex space-x-1 opacity-30">
                <div className="w-2 h-2 bg-[#F8C471] rounded-full" />
                <div className="w-2 h-2 bg-[#D3DAD9] rounded-full" />
                <div className="w-2 h-2 bg-[#F8C471] rounded-full" />
            </div>
            
            {/* Linie symbolizujące kod/integracje */}
            <div className="absolute top-1/2 left-6 w-8 h-0.5 bg-[#F8C471] opacity-40 rounded-full" />
            <div className="absolute top-1/2 left-6 w-4 h-0.5 bg-[#D3DAD9] opacity-50 rounded-full mt-2" />
            <div className="absolute top-1/2 left-6 w-6 h-0.5 bg-[#F8C471] opacity-30 rounded-full mt-4" />
            
            {/* Ozdobne kropki rozrzucone */}
            <div className="absolute bottom-20 left-1/4 w-1 h-1 rounded-full bg-[#F8C471] opacity-70" />
            <div className="absolute bottom-32 right-1/4 w-1 h-1 rounded-full bg-[#D3DAD9] opacity-50" />
            <div className="absolute top-3/4 left-1/3 w-1 h-1 rounded-full bg-[#F8C471] opacity-60" />
            
            {/* Element przypominający flowchart/diagram */}
            <div className="absolute bottom-1/4 right-16 opacity-20">
                <div className="w-6 h-3 border border-[#D3DAD9] rounded-sm mb-1" />
                <div className="w-0.5 h-3 bg-[#D3DAD9] mx-auto mb-1" />
                <div className="w-4 h-3 border border-[#F8C471] rounded-sm mx-auto" />
            </div>

            <h2 className="text-4xl font-bold mb-10 text-[#F8C471]">
                My Work Experiences
            </h2>

            <div className="flex flex-col md:flex-row gap-12 relative">
                {/* Lewa lista firm */}
                <div className="md:w-1/4 border-l border-gray-600 pl-4 space-y-6 relative">
                    {/* Dodatkowe ozdobne elementy przy liście firm */}
                    {/* <div className="absolute -left-2 top-4 w-2 h-2 rounded-full bg-[#F8C471] opacity-50" />
                    <div className="absolute -left-3 top-20 w-1 h-1 rounded-full bg-[#D3DAD9] opacity-60" /> */}
                    
                    {experiences.map((exp) => (
                        <button
                            key={exp.company}
                            onClick={() => setSelected(exp)}
                            className={`setPointerOn block text-left transition-colors ${selected.company === exp.company
                                    ? "text-[#F8C471] font-semibold"
                                    : "text-gray-400 hover:text-[#F8C471]"
                                }`}
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                {/* Prawa część z opisem */}
                <div className="md:w-3/4 relative">
                    {/* Ozdobne elementy przy opisie */}
                    <div className="absolute -top-4 -right-4 w-3 h-3 border border-[#F8C471] rounded-full opacity-30" />
                    <div className="absolute top-8 -right-2 w-1 h-6 bg-[#D3DAD9] opacity-25 rounded-full" />
                    
                    <h3 className="text-2xl font-semibold mb-2">{selected.role}</h3>
                    <p className="text-gray-400 mb-6">{selected.period}</p>

                    <ul className="space-y-3 list-disc pl-5 text-lg">
                        {selected.details.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}