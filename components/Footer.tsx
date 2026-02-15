import Image from "next/image";
import { SITE_EMAIL, SITE_INSTAGRAM, SITE_PHONE } from "@/lib/constants";

const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#sta-je-termovizija", label: "Šta je termovizija" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

const serviceLinks = [
  "Gubitak toplote",
  "Vlaga i kondenzacija",
  "Podno grejanje",
  "Industrijski sistemi",
  "Pregled pre kupovine",
  "Hidroizolacija",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0d13] border-t border-[#21262d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Kolona 1 - Logo i opis */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Termovizija 034"
                width={320}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Profesionalno termovizijsko ispitivanje u Kragujevcu i Šumadijskom okrugu. Osnovano
              2025. godine.
            </p>
            {/* Instagram */}
            <a
              href={SITE_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-orange-400 transition-all text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @termovizija034
            </a>
          </div>

          {/* Kolona 2 - Navigacija */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigacija
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolona 3 - Usluge */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Usluge
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#usluge"
                    className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolona 4 - Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Telefon</p>
                <a
                  href={`tel:${SITE_PHONE}`}
                  className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium"
                >
                  {SITE_PHONE}
                </a>
                <p className="text-gray-400 text-xs mt-0.5">24/7</p>
              </li>
              <li>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-orange-400 hover:text-orange-300 transition-colors text-sm break-all"
                >
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Lokacija</p>
                <p className="text-gray-400 text-sm">
                  Kragujevac,
                  <br />
                  Šumadijski okrug
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Dno footera */}
        <div className="border-t border-[#21262d] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {year} Termovizija 034. Sva prava zadržana.</p>
          <div className="flex flex-col sm:items-end gap-1">
            <p className="text-gray-500 text-xs">
              Izrada sajta:{" "}
              <a
                href="https://manikamwebsolutions.com/sr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Manikam Web Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
