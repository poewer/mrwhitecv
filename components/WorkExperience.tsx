"use client";
import { useState } from "react";
import { start } from "repl";

type Experience = {
    company: string;
    role: string;
    period: string;
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
].sort((a, b) => b.startDate.localeCompare(a.startDate));;


export default function WorkExperience() {
    const [selected, setSelected] = useState<Experience>(experiences[2]); // domyślnie Softstings

    return (
        <section
            id="workexperience"
            className="min-h-screen px-8 md:px-20 py-20 bg-[#44444E] text-[#D3DAD9]"
        >
            <h2 className="text-4xl font-bold mb-10 text-[#F8C471]">
                My Work Experiences
            </h2>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Lewa lista firm */}
                <div className="md:w-1/4 border-l border-gray-600 pl-4 space-y-6">
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
                <div className="md:w-3/4">
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
