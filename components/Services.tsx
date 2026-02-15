import Link from "next/link";

const services = [
  {
    id: 1,
    slug: "toplota",
    title: "Detekcija gubitaka toplote",
    description:
      "Otkrivamo tačna mesta gde vaša kuća ili zgrada gubi toplotu i energiju, pomažući vam da smanjite troškove grejanja.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M8 4.5l1.5 2.5M16 4.5L14.5 7" stroke="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 2,
    slug: "vlaga",
    title: "Otkrivanje vlage, kondenzacije i buđi",
    description:
      "Precizno lociramo problematična mesta vlage i kondenzacije koja su nevidljiva golim okom, pre nego što uzrokuju ozbiljne štete.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-7.5 8.25-7.5 12a7.5 7.5 0 0015 0c0-3.75-7.5-12-7.5-12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 14.25a2.25 2.25 0 004.5 0" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 3,
    slug: "stolarija",
    title: "Provera kvaliteta ugradnje stolarije",
    description:
      "Proveravamo da li su prozori i vrata pravilno ugrađeni i zaptiveni – detektujemo propuste hladnog vazduha i toplotne mostove.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" />
        <path strokeLinecap="round" d="M3 9h18M12 9v12" opacity="0.5" />
        <path strokeLinecap="round" d="M7.5 15h1.5M15 15h1.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 4,
    slug: "grejanje",
    title: "Kontrola podnog i zidnog grejanja",
    description:
      "Vizualizujemo raspored cevi podnog i zidnog grejanja, proveravamo ravnomernost grejanja i otkrivamo eventualne kvarove.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M3 14h18M7 10c0-2 2-4 4-4s4 2 4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 10c0-1 .5-2 1.5-2.5" opacity="0.5" />
        <path strokeLinecap="round" d="M3 6h4M17 6h4" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 5,
    slug: "masine",
    title: "Kontrola mašinskih i industrijskih sistema",
    description:
      "Preventivno nadziremo stanje mašina, elektromotora, panela i industrijske opreme – otkrivamo pregrejane tačke pre kvara.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    slug: "pregled",
    title: "Pregled objekta pre kupovine ili renoviranja",
    description:
      "Sveobuhvatni termovizijski pregled pre kupovine ili renoviranja – saznajte tačno stanje objekta i izbegnite neugodna iznenađenja.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 11.5l1.5 1.5 2.5-2.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 7,
    slug: "curenja",
    title: "Detekcija curenja u vodovodnim instalacijama",
    description:
      "Bez kopanja i rušenja, lociramo tačno mesto curenja u vodovodnim i grejnim instalacijama – štedimo vam vreme i novac.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V9a6 6 0 0112 0v4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13.5v4M10.5 19.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5" opacity="0.5" />
        <circle cx="12" cy="21" r="0.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 8,
    slug: "odvodi",
    title: "Ispitivanje odvoda",
    description:
      "Termovizijskim pregledom proveravamo stanje odvoda i kanalizacijskih instalacija, otkrivamo blokade i curenja.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" opacity="0.5" />
        <path strokeLinecap="round" d="M12 12v-4M12 12l3 3M12 12l-3 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 9,
    slug: "cevi",
    title: "Pronalazak cevi u podu ili zidu",
    description:
      "Pronalazimo skrivene cevi, instalacije i kanale u podovima i zidovima – brzo i bez ikakvih oštećenja.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="8" width="20" height="8" rx="2" />
        <path strokeLinecap="round" d="M6 12h12" opacity="0.5" />
        <path strokeLinecap="round" d="M2 5l3 3M22 5l-3 3M2 19l3-3M22 19l-3-3" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 10,
    slug: "hidroizolacija",
    title: "Ispitivanje hidroizolacije",
    description:
      "Proveravamo integritet hidroizolacije na krovovima, terasama, podrumima i bazenima – lociramo probleme pre velikih šteta.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="usluge" className="py-20 sm:py-28 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Zaglavlje */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Šta radimo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Naše usluge
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Termovizijska kamera vidi ono što ljudsko oko ne može. Koristimo je
            za brzo i precizno dijagnostikovanje problema u objektima.
          </p>
        </div>

        {/* Grid usluga */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/usluge#${service.slug}`}
              className="group relative p-6 rounded-2xl bg-[#161b22] border border-[#21262d] hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5 block"
            >
              {/* Broj */}
              <span className="absolute top-4 right-4 text-xs font-mono text-gray-600 group-hover:text-orange-800 transition-colors">
                {String(service.id).padStart(2, "0")}
              </span>

              {/* Ikonica */}
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500/15 group-hover:border-orange-500/40 transition-all">
                {service.icon}
              </div>

              {/* Naslov */}
              <h3 className="text-white font-semibold text-base mb-2 leading-snug pr-6">
                {service.title}
              </h3>

              {/* Opis */}
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {service.description}
              </p>

              <span className="text-xs text-orange-400/70 group-hover:text-orange-400">
                Saznajte više →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            Zatražite besplatnu procenu
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
