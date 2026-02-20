import { SITE_INSTAGRAM } from "@/lib/constants";

const whatIsItems = [
  {
    question: "Šta je termovizijska kamera?",
    answer:
      "Termovizijska (infracrvena) kamera detektuje toplotno zračenje koje emituju svi objekti. Za razliku od klasičnih kamera, ona prikazuje razlike u temperaturi u obliku slike – toplija mesta su svetlija, hladnija tamnija.",
  },
  {
    question: "Kako funkcioniše ispitivanje?",
    answer:
      "Stručnjak prolazi kroz objekat sa termovizijskom kamerom i snima sve površine. Software zatim analizira slike i identifikuje anomalije u temperaturi koje mogu ukazivati na gubitke toplote, vlagu, curenja ili kvarove.",
  },
  {
    question: "Kada se koristi termovizija?",
    answer:
      "Idealno vreme za ispitivanje toplotnih gubitaka je zima (razlika temperature unutra/napolju minimum 10°C). Za vlagu i instalacije – tokom cele godine. Pre kupovine nekretnine preporučujemo zimski period.",
  },
  {
    question: "Da li je potrebno rušenje ili kopanje?",
    answer:
      "Ne. Termovizijsko ispitivanje je potpuno neinvazivna metoda – bez rušenja, bušenja ili kopanja. Kamera 'vidi' kroz zidove, podove i plafone i otkriva probleme nevidljive golim okom.",
  },
];

export default function About() {
  return (
    <>
      {/* Šta je termovizija */}
      <section id="sta-je-termovizija" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Leva strana */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                Edukacija
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Šta je termovizijsko ispitivanje?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Termovizijsko ispitivanje je savremena, neinvazivna dijagnostička metoda koja
                koristi infracrvenu kameru za vizualizaciju toplotnog zračenja. Svaki objekat
                emituje toplotu – kamera to prikazuje kao obojenu sliku, gde svaka boja predstavlja
                određenu temperaturu.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Na taj način otkrivamo probleme koji su nevidljivi golim okom: mesta gubitka
                toplote, vlagu u zidovima, curenja instalacija, kvarove grejnih sistema i mnogo više
                – bez ikakvog oštećenja objekta.
              </p>

              {/* Vizuelni prikaz spektra */}
              <div className="p-4 rounded-xl bg-white border border-gray-200">
                <p className="text-xs text-gray-600 mb-3 uppercase tracking-widest">
                  Termovizijski spektar temperatura
                </p>
                <div
                  className="h-6 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(90deg, #0a0a3e, #0033cc, #00cccc, #00cc00, #cccc00, #ff6600, #ff0000, #ffffff)",
                  }}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>Hladno</span>
                  <span>Toplo</span>
                  <span>Vruće</span>
                </div>
              </div>
            </div>

            {/* Desna strana - Q&A */}
            <div className="space-y-4">
              {whatIsItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-gray-200 hover:border-orange-500/20 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold text-sm mb-2">{item.question}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O nama */}
      <section id="o-nama" className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Leva - info kartice */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    ),
                    label: "Lokacija",
                    value: "Kragujevac",
                    sub: "i Šumadijski okrug",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    ),
                    label: "Osnovano",
                    value: "2025.",
                    sub: "godina",
                  },
                  {
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    label: "Dostupnost",
                    value: "24/7",
                    sub: "Kontakt",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-gray-200 flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-900 font-bold text-xl">{item.value}</p>
                      <p className="text-gray-600 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instagram */}
              <a
                href={SITE_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-white font-medium text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md hover:shadow-lg self-start"
                style={{
                  background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)",
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Zapratite nas @termovizija034
              </a>
            </div>

            {/* Desna - tekst */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                Ko smo mi
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                O kompaniji <span className="text-orange-500">Termovizija 034</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="text-gray-900 font-semibold">Termovizija 034</span> je kompanija
                  osnovana 2025. godine u Kragujevcu sa jasnim ciljem – unapređenje energetske
                  efikasnosti objekata i podizanje kvaliteta boravka u njima.
                </p>
                <p>
                  Koristimo profesionalnu termovizijsku opremu i stručno znanje kako bismo
                  vlasnicima objekata pružili jasnu i pouzdanu sliku stanja njihovog objekta – pre
                  nego što manji problemi prerastu u skupe popravke.
                </p>
                <p>
                  Pokrivamo Kragujevac i ceo Šumadijski okrug, a dostupni smo za kontakt{" "}
                  <span className="text-orange-400 font-medium">24/7</span> – jer znamo da hitne
                  situacije ne biraju vreme.
                </p>
              </div>

              {/* Mission */}
              <div className="mt-8 p-5 rounded-xl bg-orange-500/5 border border-orange-500/15">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="text-orange-400 font-semibold">Naša misija:</span> Svakom
                    vlasniku objekta pružiti transparentne i pouzdane informacije o stanju
                    nekretnine, uz pomoć najsavremenije termovizijske tehnologije.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
