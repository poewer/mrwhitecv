import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SideElements() {
  return (
    <>
      {/* Lewy sidebar */}
      <div
        className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-6 shadow-md z-10"
        style={{ backgroundColor: "#37353E" }}
      >
        {/* Avatar */}
        <div className="mb-auto">
          <Image
            src="/linkedin_mb_cv-rmbg.png"
            alt="Michał Białek"
            width={70}
            height={70}
            className="rounded-full border-2 border-[#F8C471] shadow-md"
          />
        </div>

        {/* Ikony społecznościowe */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-6 mb-6">
            <Link
              href="https://github.com/poewer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3DAD9] hover:text-[#F8C471] transition-colors duration-300"
            >
              <FaGithub size={22} />
            </Link>

            <Link
              href="https://www.instagram.com/bial_y_czak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3DAD9] hover:text-[#F8C471] transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/michal-bialek-a48891267/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D3DAD9] hover:text-[#F8C471] transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </Link>
          </div>

          {/* Pionowa linia */}
          <div className="w-px h-20" style={{ backgroundColor: "#D3DAD9" }}></div>
        </div>
      </div>
    </>
  );
}
