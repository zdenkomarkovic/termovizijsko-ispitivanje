import { SITE_PHONE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="pocetna"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Pozadina sa thermal efektom */}
      <div className="absolute inset-0 bg-[#0d1117]">
        {/* Radijalni gradijent - narandžasti sjaj */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(249, 115, 22, 0.12) 0%, rgba(249, 115, 22, 0.04) 40%, transparent 70%)",
          }}
        />
        {/* Drugi sjaj dole desno */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(251, 146, 60, 0.06) 0%, transparent 60%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Sadržaj */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Tekst */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Kragujevac i Šumadijski okrug • Kontakt 24/7
            </div>

            {/* Glavni naslov */}
            <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Termovizijsko
              <br />
              <span className="text-orange-500 thermal-glow-text">ispitivanje</span>
            </h1>

            {/* Podnaslov */}
            <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl text-gray-400 mb-4">
              Otkrijte nevidljive probleme vašeg objekta kamerom koja vidi toplotu. Brzo, precizno i bez
              rušenja.
            </p>

            <p className="animate-fade-in-up animate-delay-200 text-base text-gray-400 mb-10">
              Detekcija gubitaka toplote, vlage, curenja instalacija, kontrola grejanja i
              hidroizolacije.
            </p>

            {/* CTA dugmadi */}
            <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#usluge"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all duration-200 text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                Pogledajte usluge
              </a>
              <a
                href={`tel:${SITE_PHONE}`}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/40 text-white font-semibold rounded-xl transition-all duration-200 text-base hover:-translate-y-0.5"
              >
                Pozovite: {SITE_PHONE}
              </a>
            </div>
          </div>

          {/* Slika */}
          <div className="animate-fade-in-up animate-delay-300 w-full lg:w-[440px] shrink-0">
            <div className="relative rounded-2xl overflow-hidden border border-orange-500/25 shadow-2xl shadow-orange-500/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Pukla%20cev%20u%20zidu/IMG_5016.webp"
                alt="Termovizijski snimak – pukla cev u zidu"
                className="w-full h-auto object-cover"
                width={600}
                height={750}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs text-white/55 font-mono">
                  Pukla cev u zidu — termovizijska detekcija
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up animate-delay-400 mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
          {[
            { value: "10+", label: "Usluga" },
            { value: "24/7", label: "Dostupnost" },
            { value: "034", label: "Kragujevac" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 p-4 rounded-xl bg-white/3 border border-white/5"
            >
              <span className="text-2xl font-bold text-orange-400">{stat.value}</span>
              <span className="text-xs text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indikator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs">Skrolujte</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
