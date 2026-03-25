"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { translations } from "@/utils/translations";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-[#D3DAD9] placeholder-gray-500 focus:outline-none focus:border-[#F8C471] transition-colors";

  return (
    <section
      id="contact"
      className="min-h-screen px-4 sm:px-8 md:px-20 py-16 sm:py-20 bg-[#37353E] text-[#D3DAD9] relative flex flex-col justify-center"
    >
      {/* Dekoracje */}
      <div className="absolute top-16 left-1/3 w-2 h-2 rounded-full bg-[#F8C471] opacity-70" />
      <div className="absolute bottom-20 right-1/4 w-3 h-3 border border-[#F8C471] rounded-full opacity-40" />

      <div className="max-w-2xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold mb-3 text-[#F8C471]">{t.contactTitle}</h2>
          <p className="text-gray-400 mb-10">{t.contactSubtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">{t.contactName}</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={t.contactNamePlaceholder}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">{t.contactEmail}</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t.contactEmailPlaceholder}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">{t.contactMessage}</label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder={t.contactMessagePlaceholder}
                className={inputClass + " resize-none"}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 border-2 border-[#F8C471] text-[#F8C471] rounded-lg font-medium hover:bg-[#F8C471] hover:text-[#37353E] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? t.contactSending : t.contactSend}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center">{t.contactSuccess}</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">{t.contactError}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
