export default function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-[#37353E] text-[#D3DAD9] relative"
    >
      <span className="text-[#F8C471] mb-2">Get in touch</span>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Let’s Work Together
      </h2>
      <p className="max-w-2xl text-lg mb-8 text-[#D3DAD9]/80">
        I’m open for new opportunities – especially ambitious or large projects.
        However, my inbox is always open. Whether you have a question or just
        want to say hi, I’ll try my best to get back to you!
      </p>
      <a
        href="mailto:michal.bialek@opoczta.pl"
        className="px-6 py-3 border-2 border-[#F8C471] text-[#F8C471] rounded hover:bg-[#F8C471] hover:text-[#37353E] transition-all"
      >
        Say Hello
      </a>

      {/* mała ozdobna kropka */}
      <div className="absolute top-10 left-1/3 w-3 h-3 rounded-full bg-[#F8C471]" />
      <div className="absolute top-20 right-1/4 w-4 h-4 border border-[#F8C471] rounded-full" />
    </footer>
  );
}
