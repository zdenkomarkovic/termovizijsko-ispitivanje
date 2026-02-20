import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_PHONE, SITE_EMAIL } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Termovizija 034 | Termovizijsko ispitivanje Kragujevac",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "termovizija",
    "termovizijsko ispitivanje",
    "termovizijska kamera",
    "Kragujevac",
    "Šumadija",
    "energetska efikasnost",
    "detekcija vlage",
    "gubitak toplote",
    "toplotni mostovi",
    "termokamera",
    "infracrveno snimanje",
    "podno grejanje",
    "zidno grejanje",
    "hidroizolacija",
    "curenje cevi",
    "detekcija curenja",
    "vlaga u zidovima",
    "buđ detekcija",
    "energetski audit",
    "pregled objekta",
  ],
  authors: [{ name: "Lazar Vlahović" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Termovizija 034 | Termovizijsko ispitivanje Kragujevac",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#lokalbiznis`,
  name: "Termovizija 034",
  url: SITE_URL,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/logo.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kragujevac",
    addressRegion: "Šumadijski okrug",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.0128,
    longitude: 20.9114,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Kragujevac",
    },
    {
      "@type": "AdministrativeArea",
      name: "Šumadijski okrug",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Termovizijske usluge",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Detekcija gubitaka toplote" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Otkrivanje vlage, kondenzacije i buđi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Provera kvaliteta ugradnje stolarije" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kontrola podnog i zidnog grejanja" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Detekcija curenja u vodovodnim instalacijama" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ispitivanje odvoda" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pronalazak cevi u podu ili zidu" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ispitivanje hidroizolacije" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pregled objekta pre kupovine ili renoviranja" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kontrola mašinskih i industrijskih sistema" } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/termovizija034",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.className}>
      <body>
        <JsonLd data={localBusinessSchema} />
        {children}
      </body>
    </html>
  );
}
