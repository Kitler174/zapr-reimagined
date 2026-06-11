import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import {
  Hero, About, Services, SystemSection, Certificates, EuProject, Contact,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZAP Rachunkowość Sp. z o.o. — Księgowość, IT i ZAPR-system" },
      {
        name: "description",
        content:
          "Od 1999 roku oferujemy kompleksową obsługę księgową, usługi IT oraz autorski system ERP ZAPR-system dla małych i średnich firm w całej Polsce.",
      },
      { property: "og:title", content: "ZAP Rachunkowość — Księgowość, IT i ZAPR-system" },
      { property: "og:description", content: "Wszechstronna obsługa rachunkowo-informatyczna oraz autorski system zarządzania produkcją." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <SystemSection />
        <Certificates />
        <EuProject />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
