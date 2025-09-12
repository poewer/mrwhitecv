import HeaderSection from "./HeaderSection";

export default function Main() {
    return (
        <main
            className="pl-16 flex flex-col items-start justify-center min-h-screen relative overflow-hidden w-full"
            style={{ backgroundColor: "#D3DAD9" }}
        >
            {/* Organiczne kształty w tle */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Duży żółty kształt */}
                <div
                    className="absolute -top-20 -left-32 w-96 h-96 rounded-full opacity-90"
                    style={{
                        backgroundColor: "#F4D03F",
                        clipPath: "ellipse(70% 60% at 30% 40%)",
                        transform: "rotate(-15deg)",
                    }}
                ></div>

                {/* Średni kształt */}
                <div
                    className="absolute top-32 left-20 w-64 h-64 rounded-full opacity-80"
                    style={{
                        backgroundColor: "#F7DC6F",
                        clipPath: "ellipse(80% 50% at 60% 30%)",
                        transform: "rotate(25deg)",
                    }}
                ></div>

                {/* Mały akcent */}
                {/* <div
                    className="absolute top-16 left-16 w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#E74C3C" }}
                ></div> */}

                {/* Dodatkowy kształt w prawym górnym rogu */}
                <div
                    className="absolute -top-10 right-0 w-48 h-48 opacity-70"
                    style={{
                        backgroundColor: "#F8C471",
                        clipPath: "ellipse(60% 80% at 80% 20%)",
                        borderRadius: "50%",
                    }}
                ></div>
            </div>

            {/* Sekcja nagłówkowa (przycisk CV) */}
            <HeaderSection />

            {/* Główna zawartość */}
            <div className="relative z-10 p-12 max-w-4xl">
                <h1
                    className="text-6xl font-bold leading-tight"
                    style={{ color: "#37353E" }}
                >
                    G'day, I'm <br />
                    <span className="block">Michał Białek,</span>
                </h1>

                <h2
                    className="mt-6 text-2xl font-semibold"
                    style={{ color: "#E74C3C" }}
                >
                    Software Engineer
                    <span
                        className="inline-block ml-2"
                        style={{
                            fontSize: "1.2rem",
                            color: "#E74C3C",
                            fontFamily: "monospace",
                            letterSpacing: "2px",
                        }}
                    >
                        (Python Developer)
                    </span>
                </h2>

                <p
                    className="mt-8 text-lg max-w-2xl leading-relaxed"
                    style={{ color: "#44444E" }}
                >
                    I specialize in Python development, building microservices, integrating with language models, as well as process automation and web scraping. I also work extensively with n8n, creating custom plugins, expanding the architecture with new nodes, and improving existing solutions. Additionally, I support clients during the planning stage of implementations and product development, tailoring solutions to their needs and requirements.
                </p>

                <button
                    className="mt-10 px-8 py-3 border-2 rounded text-lg font-medium transition-all duration-300 hover:bg-[#715A5A] hover:text-[#D3DAD9] hover:scale-105 hover:shadow-lg setPointerOn"
                    style={{
                        borderColor: "#715A5A",
                        color: "#715A5A",
                        backgroundColor: "transparent",
                    }}
                >
                    Contact me!
                </button>
            </div>

            {/* Dodatkowe efekty wizualne */}
            <div
                className="absolute bottom-20 right-20 w-2 h-2 rounded-full opacity-60"
                style={{ backgroundColor: "#E74C3C" }}
            ></div>
            <div
                className="absolute bottom-32 right-32 w-1 h-1 rounded-full opacity-40"
                style={{ backgroundColor: "#37353E" }}
            ></div>
        </main>
    );
}
