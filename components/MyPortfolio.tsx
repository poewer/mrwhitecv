"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function MyProfile() {

    const { lang } = useLanguage();
    const t = translations[lang];

  return (
    <section
      id="myprofile"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
             px-4 sm:px-8 md:px-20 pt-20 sm:pt-24 md:pt-0 
             bg-[#37353E] text-[#D3DAD9] relative"
    >
      {/* Dekoracje w tle */}
      <div className="absolute top-16 left-6 w-2 h-2 rounded-full bg-[#F8C471]" />
      <div className="absolute top-32 right-10 w-2 h-2 sm:w-3 sm:h-3 border border-[#F8C471] rounded-full opacity-60" />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 sm:w-4 sm:h-4 rotate-45 border-t-2 border-r-2 border-[#F8C471] opacity-40" />
      <div className="absolute bottom-20 right-1/4 w-0.5 h-6 sm:h-8 bg-[#D3DAD9] opacity-30" />
      <div className="absolute top-1/2 left-4 w-4 h-1 bg-[#F8C471] opacity-50 rounded-full" />
      <div className="absolute top-20 right-1/4 w-8 h-8 sm:w-12 sm:h-12 border border-[#D3DAD9] rounded-full opacity-20">
        <div className="absolute top-1/2 left-1/2 w-4 h-0.5 sm:w-6 bg-[#F8C471] transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
      </div>

      {/* Tekst */}
      <motion.div
        className="flex-1 max-w-xl mt-12 sm:mt-16 md:mt-0 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#F8C471]">
          {t.portfolioTitle}
        </h2>

        <p className="text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
          {t.portfolioP1}
        </p>

        <p className="text-base sm:text-lg leading-relaxed">
          {t.portfolioP2}
        </p>
      </motion.div>

      {/* Zdjęcie */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0 md:ml-12 relative">
        {/* Dekoracje */}
        <div className="absolute -top-3 -right-3 w-4 h-4 border-2 border-[#F8C471] rounded-full opacity-40" />
        <div className="absolute -bottom-4 -left-4 w-2 h-2 sm:w-3 sm:h-3 bg-[#F8C471] rounded-full opacity-60" />

        <div className="relative w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80">
          {/* Prostokąt w tle */}
          <div className="absolute w-full h-full bg-[#F8C471] rounded-lg translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 z-0"></div>

          {/* Zdjęcie */}
          <Image
            src="/linkedin_mb_cv-rmbg.png"
            alt="Michał Białek"
            fill
            className="rounded-lg shadow-lg object-cover relative z-10"
          />

          {/* Ramka */}
          <div className="absolute inset-0 w-full h-full border-2 border-[#D3DAD9] rounded-lg z-20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
