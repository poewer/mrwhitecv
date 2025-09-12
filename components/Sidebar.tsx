import Image from "next/image";
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function SideElements() {
  return (
    <>
      {/* Lewy sidebar */}
      <div
        className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-6 shadow-md z-10"
        style={{ backgroundColor: "#37353E" }} // kolor z palety
      >
        {/* Avatar */}
        <div className="mb-auto ">
          <Image
            src="/linkedin_mb_cv-rmbg.png"
            alt="Michał Białek"
            width={70}
            height={70}
            className="rounded-full  border-2 border-[#F8C471] shadow-md"
          />
        </div>

        {/* Ikony społecznościowe */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-6 mb-6">
            <a
              href="#"
              className="text-[#D3DAD9] hover:text-[#F8C471] transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="#"
              className="text-[#D3DAD9] hover:text-[#F8C471] transition-colors duration-300"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="#"
              className="text-[#D3DAD9] hover:text-[#F8C471] transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              className="text-[#D3DAD9] hover:text-[#F8C471] transition-colors duration-300"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              className="text-[#D3DAD9] hover:text-[#F8C471] transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Pionowa linia */}
          <div className="w-px h-20" style={{ backgroundColor: "#D3DAD9" }}></div>
        </div>
      </div>

      {/* Wersja mobilna */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 border-t p-4 z-10"
        style={{ backgroundColor: "#37353E", borderColor: "#715A5A" }}
      >
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-[#D3DAD9] hover:text-[#E74C3C] transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="#"
            className="text-[#D3DAD9] hover:text-[#E74C3C] transition-colors duration-300"
          >
            <FaYoutube size={22} />
          </a>
          <a
            href="#"
            className="text-[#D3DAD9] hover:text-[#E74C3C] transition-colors duration-300"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="#"
            className="text-[#D3DAD9] hover:text-[#E74C3C] transition-colors duration-300"
          >
            <FaTwitter size={22} />
          </a>
          <a
            href="#"
            className="text-[#D3DAD9] hover:text-[#E74C3C] transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </>
  );
}
