"use client";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // blokada scrolla
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV_Michal_Bialek.pdf";
    link.download = "CV_Michal_Bialek.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="absolute top-8 left-0 right-0 z-20 max-w-full flex items-center justify-between px-6">
      {/* Mobile burger (po lewej) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-[#715A5A]" />
        <span className="block w-6 h-0.5 bg-[#715A5A]" />
        <span className="block w-6 h-0.5 bg-[#715A5A]" />
      </button>

      {/* CV button (po prawej, tylko desktop) */}
      <button
        onClick={handleDownloadCV}
        className="setPointerOn px-4 py-2 border-2 rounded text-sm font-medium hover:bg-opacity-10 hover:bg-[#F8C471] transition-all duration-300 hover:bg-[#715A5A] hover:text-[#D3DAD9] hover:scale-105 hover:shadow-lg block"
        style={{
          borderColor: "#715A5A",
          color: "#715A5A",
          backgroundColor: "transparent",
        }}
      >
        Curriculum Vitae | CV
      </button>

      {/* Mobile full overlay menu */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
