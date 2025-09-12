export default function HeaderSection() {
  return (
    <header className="absolute top-8 right-8 z-20 max-w-full">
      <button 
        className="setPointerOn px-4 py-2 border-2 rounded text-sm font-medium hover:bg-opacity-10 hover:bg-[#F8C471] transition-all duration-300 hover:bg-[#715A5A] hover:text-[#D3DAD9] hover:scale-105 hover:shadow-lg"
        style={{
            borderColor: "#715A5A",
            color: "#715A5A",
            backgroundColor: "transparent",
          }}
      >
        Curriculum Vitae | CV
      </button>
    </header>
  );
}
