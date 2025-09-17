"use client";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white">
      {/* Close button */}
      <button
        className="absolute top-6 right-6 text-3xl font-bold text-white"
        onClick={onClose}
      >
        ✕
      </button>

      <nav className="flex flex-col space-y-16 text-xl">
        <Link
          href="https://github.com/poewer"
          target="_blank"
          className="flex items-center gap-3 hover:text-[#F8C471] transition"
          onClick={onClose}
        >
          <FaGithub size={26} /> GitHub
        </Link>

        <Link
          href="https://www.instagram.com/bial_y_czak/"
          target="_blank"
          className="flex items-center gap-3 hover:text-[#F8C471] transition"
          onClick={onClose}
        >
          <FaInstagram size={26} /> Instagram
        </Link>

        <Link
          href="https://www.linkedin.com/in/michal-bialek-a48891267/"
          target="_blank"
          className="flex items-center gap-3 hover:text-[#F8C471] transition"
          onClick={onClose}
        >
          <FaLinkedin size={26} /> LinkedIn
        </Link>
      </nav>
    </div>
  );
}
