import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Termovizijsko ispitivanje Kragujevac",
  description:
    "Profesionalno termovizijsko ispitivanje u Kragujevcu i Šumadijskom okrugu. Detekcija gubitaka toplote, vlage, curenja instalacija i kontrola grejanja. Kontakt 24/7.",
  image: "/opengraph-image",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />

        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
