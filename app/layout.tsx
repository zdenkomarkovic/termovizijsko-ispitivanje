import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

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
    "Kragujevac",
    "Šumadija",
    "energetska efikasnost",
    "detekcija vlage",
    "gubitak toplote",
    "termokamera",
    "infracrveno snimanje",
    "podno grejanje",
    "hidroizolacija",
  ],
  authors: [{ name: "Lazar Vlahović" }],
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
