import { SITE_EMAIL, SITE_INSTAGRAM, SITE_PHONE } from "@/lib/constants";
import ContactForm from "./ContactForm";

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Telefon",
    value: SITE_PHONE,
    href: `tel:${SITE_PHONE}`,
    note: "Kontakt 24/7",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
    note: "Odgovaramo brzo",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Lokacija",
    value: "Kragujevac i Šumadija",
    href: null,
    note: "Dolazimo na adresu",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: "Instagram",
    value: "@termovizija034",
    href: SITE_INSTAGRAM,
    note: "Pratite nas",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Zaglavlje */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            Dostupni 24/7
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kontaktirajte nas
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Imate pitanje ili želite da zakažete pregled? Pišite nam ili
            pozovite – odgovaramo brzo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Leva strana - kontakt info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Kontakt kartica - Lazar */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-lg">
                  LV
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Lazar Vlahović</p>
                  <p className="text-gray-600 text-sm">Osnivač, Termovizija 034</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 mb-4" />
              <div className="space-y-3">
                {contactItems.map((item, idx) => {
                  const isInstagram = item.label === "Instagram";
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      {isInstagram ? (
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white"
                          style={{ background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)" }}
                        >
                          {item.icon}
                        </div>
                      ) : (
                        <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 flex-shrink-0">
                          {item.icon}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-xs text-gray-600 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm font-medium transition-colors truncate block"
                            style={isInstagram
                              ? { background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }
                              : { color: "#fb923c" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-700">{item.value}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dostupnost badge */}
            <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/15 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-green-400 text-sm font-medium">
                  Dostupni 24/7
                </p>
                <p className="text-gray-600 text-xs">
                  Pozovite u bilo koje doba
                </p>
              </div>
            </div>
          </div>

          {/* Desna strana - forma */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-gray-900 font-semibold text-lg mb-6">
                Pošaljite upit
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
