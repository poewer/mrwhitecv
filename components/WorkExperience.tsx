"use client";
import { useState } from "react";

type Experience = {
  company: string;
  role: string;
  period: string;
  details: string[];
};

const experiences: Experience[] = [
  {
    company: "Algoace",
    role: "Frontend Developer @ Algoace",
    period: "Remote | Jan 2021 – Jan 2022",
    details: [
      "Built responsive UI components with React and Tailwind.",
      "Collaborated closely with backend engineers to integrate APIs.",
      "Enhanced website performance and SEO.",
    ],
  },
  {
    company: "Upwork & Fiverr",
    role: "Freelance Developer",
    period: "Remote | 2020 – 2022",
    details: [
      "Delivered projects for international clients via Upwork & Fiverr.",
      "Developed custom full-stack solutions using React, Node.js, and Python.",
      "Built long-term client relationships by delivering high-quality results.",
    ],
  },
  {
    company: "Softstings",
    role: "React Native Developer @ Softstings",
    period: "Onsite | Feb 2022 – Nov 2023",
    details: [
      "Served as a Senior React Native Developer and Team Lead.",
      "Contributed to the development and leadership of the mobile app team.",
      "Guided and mentored team members, fostering collaboration and skill growth.",
      "Delivered high-quality and efficient mobile apps with React Native.",
      "Collaborated with cross-functional teams on impactful solutions.",
    ],
  },
];

export default function WorkExperience() {
  const [selected, setSelected] = useState<Experience>(experiences[2]); // domyślnie Softstings

  return (
    <section
      id="workexperience"
      className="min-h-screen px-8 md:px-20 py-20 bg-[#44444E] text-[#D3DAD9]"
    >
      <h2 className="text-4xl font-bold mb-10 text-[#00B8B8]">
        My Work Experiences
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Lewa lista firm */}
        <div className="md:w-1/4 border-l border-gray-600 pl-4 space-y-6">
          {experiences.map((exp) => (
            <button
              key={exp.company}
              onClick={() => setSelected(exp)}
              className={`block text-left transition-colors ${
                selected.company === exp.company
                  ? "text-[#00B8B8] font-semibold"
                  : "text-gray-400 hover:text-[#00B8B8]"
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
