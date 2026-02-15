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
      <section id="sta-je-termovizija" className="py-20 sm:py-28 bg-[#0a0d13]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Leva strana */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                Edukacija
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Šta je termovizijsko ispitivanje?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Termovizijsko ispitivanje je savremena, neinvazivna dijagnostička
                metoda koja koristi infracrvenu kameru za vizualizaciju
                toplotnog zračenja. Svaki objekat emituje toplotu – kamera to
                prikazuje kao obojenu sliku, gde svaka boja predstavlja
                određenu temperaturu.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Na taj način otkrivamo probleme koji su nevidljivi golim okom:
                mesta gubitka toplote, vlagu u zidovima, curenja instalacija,
                kvarove grejnih sistema i mnogo više – bez ikakvog oštećenja
                objekta.
              </p>

              {/* Vizuelni prikaz spektra */}
              <div className="p-4 rounded-xl bg-[#161b22] border border-[#21262d]">
                <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest">
                  Termovizijski spektar temperatura
                </p>
                <div
                  className="h-6 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(90deg, #0a0a3e, #0033cc, #00cccc, #00cc00, #cccc00, #ff6600, #ff0000, #ffffff)",
                  }}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-400">
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
                  className="p-5 rounded-xl bg-[#161b22] border border-[#21262d] hover:border-orange-500/20 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O nama */}
      <section id="o-nama" className="py-20 sm:py-28 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Leva - info kartice */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: "Lokacija",
                  value: "Kragujevac",
                  sub: "i Šumadijski okrug",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  ),
                  label: "Osnovano",
                  value: "2025.",
                  sub: "godina",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Dostupnost",
                  value: "24/7",
                  sub: "Kontakt",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  ),
                  label: "Oprema",
                  value: "Pro",
                  sub: "termokamera",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#161b22] border border-[#21262d] flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-white font-bold text-xl">{item.value}</p>
                    <p className="text-gray-400 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desna - tekst */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                Ko smo mi
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                O kompaniji{" "}
                <span className="text-orange-500">Termovizija 034</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  <span className="text-white font-semibold">Termovizija 034</span>{" "}
                  je kompanija osnovana 2025. godine u Kragujevcu sa jasnim
                  ciljem – unapređenje energetske efikasnosti objekata i
                  podizanje kvaliteta boravka u njima.
                </p>
                <p>
                  Koristimo profesionalnu termovizijsku opremu i stručno znanje
                  kako bismo vlasnicima objekata pružili jasnu i pouzdanu sliku
                  stanja njihovog objekta – pre nego što manji problemi prerastu
                  u skupe popravke.
                </p>
                <p>
                  Pokrivamo Kragujevac i ceo Šumadijski okrug, a dostupni smo
                  za kontakt{" "}
                  <span className="text-orange-400 font-medium">24/7</span> –
                  jer znamo da hitne situacije ne biraju vreme.
                </p>
              </div>

              {/* Mission */}
              <div className="mt-8 p-5 rounded-xl bg-orange-500/5 border border-orange-500/15">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <span className="text-orange-400 font-semibold">Naša misija:</span>{" "}
                    Svakom vlasniku objekta pružiti transparentne i pouzdane
                    informacije o stanju nekretnine, uz pomoć najsavremenije
                    termovizijske tehnologije.
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
