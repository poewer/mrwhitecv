"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MyProfile() {
  return (
    <section
      id="myprofile"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 bg-[#37353E] text-[#D3DAD9] relative"
    >
      {/* Ozdobne elementy w tle */}
      <div className="absolute top-16 left-10 w-2 h-2 rounded-full bg-[#F8C471]" />
      <div className="absolute top-32 right-16 w-3 h-3 border border-[#F8C471] rounded-full opacity-60" />
      <div className="absolute bottom-40 left-1/4 w-4 h-4 rotate-45 border-t-2 border-r-2 border-[#F8C471] opacity-40" />
      <div className="absolute bottom-24 right-1/3 w-1 h-8 bg-[#D3DAD9] opacity-30" />
      <div className="absolute top-1/2 left-8 w-6 h-1 bg-[#F8C471] opacity-50 rounded-full" />
      
      {/* Większy element dekoracyjny - koło z linią */}
      <div className="absolute top-20 right-1/4 w-12 h-12 border border-[#D3DAD9] rounded-full opacity-20">
        <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#F8C471] transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
      </div>
      
      {/* Małe kropki rozrzucone */}
      <div className="absolute bottom-1/3 left-12 w-1 h-1 rounded-full bg-[#F8C471] opacity-70" />
      <div className="absolute top-3/4 right-20 w-1 h-1 rounded-full bg-[#D3DAD9] opacity-50" />

      {/* Tekst z animacją */}
      <motion.div
        className="flex-1 max-w-2xl "
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-6 text-[#F8C471]">My Portfolio</h2>

        <p className="text-lg leading-relaxed mb-4">
          Greetings, I&apos;m Michał, a Python developer specializing in system
          integration, automation, and workflow design. I build scalable services and
          microservices with Python, create custom workflows in n8n,
          and integrate advanced solutions such as Microsoft Graph API and LLM-based
          automation.
        </p>

        <p className="text-lg leading-relaxed">
          My background includes large-scale integration projects with IBM App Connect
          Enterprise (ESQL), working with SOAP, REST, and queuing systems. I&apos;m also
          experienced in databases (PostgreSQL, Elasticsearch, Redis), Docker, and
          testing. I enjoy collaborating with teams and clients to deliver robust,
          results-oriented solutions tailored to business needs.
        </p>
      </motion.div>

      {/* Zdjęcie */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 md:ml-12 relative">
        {/* Dodatkowe ozdobne elementy wokół zdjęcia */}
        <div className="absolute -top-4 -right-4 w-6 h-6 border-2 border-[#F8C471] rounded-full opacity-40" />
        <div className="absolute -bottom-6 -left-6 w-3 h-3 bg-[#F8C471] rounded-full opacity-60" />
        
        <div className="relative w-64 h-72">
          {/* Prostokąt w tle - przesunięty w prawo i w dół */}
          <div className="absolute w-full h-full bg-[#F8C471] rounded-lg translate-x-6 translate-y-6 z-0"></div>

          {/* Zdjęcie */}
          <Image
            src="/linkedin_mb_cv-rmbg.png"
            alt="Michał Białek"
            fill
            className="rounded-lg shadow-lg object-cover relative z-10"
          />

          {/* Ramka - na wierzchu */}
          <div className="absolute inset-0 w-full h-full border-2 border-[#D3DAD9] rounded-lg z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}