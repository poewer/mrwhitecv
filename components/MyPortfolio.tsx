import Image from "next/image";

export default function MyProfile() {
  return (
    <section
      id="myprofile"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 bg-[#37353E] text-[#D3DAD9]"
    >
      {/* Tekst */}
      <div className="flex-1 max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">My Portfolio</h2>
        <p className="text-lg leading-relaxed mb-4">
          Greetings, I’m Muhammad Aamir Malik, a seasoned mobile app developer
          with over 3 years of experience in the dynamic IT industry. My
          expertise lies in crafting cutting-edge, full-stack mobile and hybrid
          applications for Android and iOS platforms, utilizing the power of
          React Native.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I take immense pride in my work, striving to develop applications that
          are not only efficient but also user-friendly, catering to the diverse
          needs of clients globally.
        </p>
        <p className="text-lg leading-relaxed">
          Having successfully delivered projects to satisfied clients worldwide,
          I’ve gained valuable experience collaborating with individuals from
          various cultures. My journey has taken me from local software houses
          to platforms like Fiverr and Upwork, eventually leading me to work
          with international companies.
        </p>
      </div>

      {/* Zdjęcie */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 md:ml-12 relative">
        <div className="relative w-64 h-72">
          <Image
            src="/linkedin_mb_cv-rmbg.png"
            alt="Michał Białek"
            layout="fill"
            objectFit="cover"
            className="rounded shadow-lg"
          />
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#D3DAD9] rounded"></div>
        </div>
      </div>
    </section>
  );
}
