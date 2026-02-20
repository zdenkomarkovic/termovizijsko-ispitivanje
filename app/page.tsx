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
    "Termovizijsko ispitivanje u Kragujevcu – detekcija gubitaka toplote, vlage, curenja cevi i kontrola grejanja. Besplatna procena. Pozovite 24/7.",
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
