import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, Calculator, Cpu, LayoutDashboard, ShieldCheck, Clock, Award,
  MapPin, Mail, Phone, ChevronDown, CheckCircle2, Factory, Truck, Building2,
  Cloud, Server, Network, Sparkles, FileText, TrendingUp, Users, Lock,
} from "lucide-react";

import ksiegowiImg from "@/assets/ksiegowi.jpg";
import itImg from "@/assets/it-zespol.jpg";
import produkcjaImg from "@/assets/produkcja.jpg";
import konsultacjaImg from "@/assets/konsultacja.jpg";
import { posts } from "@/content/blog";

/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      <span className="h-px w-6 bg-brand" />
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-deep text-white">
      <img
        src={produkcjaImg}
        alt="Inżynier obsługujący system ERP na hali produkcyjnej"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f3b63] via-[#0f3b63]/90 to-[#0f3b63]/40" />
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Od 1999 roku • ERP, księgowość i IT
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl leading-[1.08] text-balance">
            System ERP, księgowość i opieka IT dla firm produkcyjnych i handlowych
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            ZAP Rachunkowość to autorski ZAPR-system klasy ERP, pełna obsługa księgowo-kadrowa
            i wsparcie informatyczne — w jednym zespole, z jednym punktem kontaktu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-brand-foreground transition hover:brightness-110">
              Umów bezpłatną konsultację <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#funkcje" className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 font-semibold transition hover:bg-white/10">
              Zobacz funkcje ERP
            </a>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { k: "25+", v: "lat na rynku" },
              { k: "17", v: "obszarów procesów" },
              { k: "100+", v: "funkcji ERP" },
              { k: "24/7", v: "asystent AI w helpdesku" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl text-gold">{s.k}</dt>
                <dd className="mt-1 text-xs text-white/70">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function TrustBar() {
  const items = [
    { icon: ShieldCheck, t: "Ubezpieczenie OC biura" },
    { icon: Award, t: "Certyfikaty księgowe od 2003 r." },
    { icon: Lock, t: "Zgodność z RODO i szyfrowane dane" },
    { icon: Clock, t: "Terminowość rozliczeń" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="container-x grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.t} className="flex items-center gap-3 text-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <i.icon className="h-4.5 w-4.5" />
            </span>
            <span className="font-medium">{i.t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function About() {
  return (
    <section id="o-nas" className="py-20 md:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src={ksiegowiImg}
            alt="Zespół księgowych ZAP Rachunkowość przy pracy"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-2xl shadow-elegant"
          />
          <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-brand px-6 py-5 text-brand-foreground shadow-card sm:block">
            <div className="text-3xl">1999</div>
            <div className="text-xs opacity-80">rok założenia spółki</div>
          </div>
        </div>
        <div>
          <Eyebrow>O nas</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">
            Ludzie, którzy znają liczby i technologie
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">ZAP Rachunkowość Sp. z o.o.</strong> powstała w 1999 roku
              w wyniku restrukturyzacji ZAP S.A., z myślą o małych i średnich firmach. Naszą misją jest
              wszechstronna i kompleksowa pomoc w rozwiązywaniu problemów z zakresu rachunkowości i informatyki.
            </p>
            <p>
              Zespół tworzą specjaliści z dziedziny rachunkowości i informatyki, którzy stosując najnowsze
              technologie wspierają użytkowników na co dzień — od księgowania dokumentu po sterowanie produkcją.
            </p>
            <p>
              Każdego klienta traktujemy indywidualnie. <strong className="text-foreground">Skuteczność
              i doświadczenie</strong> to nasze atuty.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: Users, t: "Dedykowany opiekun" },
              { icon: FileText, t: "Pełna dokumentacja" },
              { icon: TrendingUp, t: "Analizy i raporty" },
              { icon: CheckCircle2, t: "Aktualna wiedza podatkowa" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-2.5 text-sm">
                <f.icon className="h-4 w-4 shrink-0 text-brand" /> {f.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const services = [
  {
    id: "ksiegowosc",
    icon: Calculator,
    image: ksiegowiImg,
    title: "Księgowość i kadry",
    short: "Kompleksowa obsługa księgowa, kadrowa i płacowa spółek oraz jednoosobowych firm.",
    items: [
      "Prowadzenie ksiąg rachunkowych i podatkowych",
      "Podatkowa księga przychodów i rozchodów",
      "Doradztwo w organizacji systemów rachunkowych",
      "Analizy finansowo-ekonomiczne",
      "Pełna obsługa kadrowo-płacowa",
      "Rozliczenia z ZUS i sprawozdania GUS",
    ],
    note: "Obsługujemy spółki z o.o., akcyjne, jawne, cywilne oraz osoby fizyczne prowadzące działalność — na terenie całego kraju.",
  },
  {
    id: "system",
    icon: LayoutDashboard,
    image: produkcjaImg,
    title: "ZAPR-system (ERP)",
    short: "Autorski system ERP: produkcja, magazyn, sprzedaż, finanse i kadry w jednej bazie.",
    items: [
      "Kompleksowość funkcjonalna w jednej aplikacji",
      "Integracja danych wewnętrznych i zewnętrznych",
      "Elastyczna, skalowalna architektura",
      "Otwartość na nowe moduły i systemy zewnętrzne",
      "Zgodność z polskimi przepisami",
      "Automatyczne aktualizacje i zdalny dostęp",
    ],
    note: "Sprawdza się w produkcji zleceniowej, dystrybucji i handlu — także w przedsiębiorstwach wielozakładowych.",
  },
  {
    id: "it",
    icon: Cpu,
    image: itImg,
    title: "Usługi IT i helpdesk",
    short: "Pełna obsługa informatyczna firm — od helpdesku po wirtualizację serwerów.",
    items: [
      "Helpdesk dla użytkowników, także z asystentem AI",
      "Administracja serwerami Linux / Unix / Windows",
      "Wirtualizacja serwerów i kopie zapasowe",
      "Serwis sprzętu i oprogramowania",
      "Infrastruktura sieciowa i okablowanie strukturalne",
      "Strony WWW i integracje",
    ],
    note: "Reagujemy na awarie, modernizujemy sprzęt, instalujemy oprogramowanie i dostarczamy licencje.",
  },
];

export function Services() {
  const [active, setActive] = useState("ksiegowosc");
  const current = services.find((s) => s.id === active)!;
  return (
    <section id="uslugi" className="border-y border-border bg-brand-soft/50 py-20 md:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Co oferujemy</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">Trzy filary naszej działalności</h2>
          <p className="mt-4 text-muted-foreground">
            Wybierz obszar, aby poznać szczegółowy zakres usług.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {services.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`rounded-xl border p-6 text-left shadow-card transition ${
                  isActive ? "border-brand bg-card ring-2 ring-brand/40" : "border-border bg-card/70 hover:border-brand/40 hover:bg-card"
                }`}
              >
                <s.icon className={`h-7 w-7 ${isActive ? "text-brand" : "text-muted-foreground"}`} />
                <div className="mt-4 text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <div className="grid gap-0 md:grid-cols-2">
            <img
              src={current.image}
              alt={current.title}
              width={1280}
              height={960}
              loading="lazy"
              className="h-56 w-full object-cover md:h-full"
            />
            <div className="p-8 md:p-10">
              <h3 className="text-2xl">{current.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{current.note}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {current.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const moduleGroups = [
  {
    title: "Sprzedaż i handel",
    icon: TrendingUp,
    items: ["Sprzedaż B2B i B2C", "SPP — sprzedaż przez przedstawicieli", "KSeF — e-faktury", "JPK", "Polityka cenowa i upusty", "Sprzedaż mobilna", "Faktoring"],
  },
  {
    title: "Magazyn i logistyka",
    icon: Truck,
    items: ["WMS — zarządzanie magazynem", "Wiele lokalizacji i wycen (FIFO/LIFO)", "Inwentaryzacje ciągłe i okresowe", "Kontrola terminu przydatności", "Zaopatrzenie i ocena dostawców", "Analizy wiekowania zapasów"],
  },
  {
    title: "Produkcja",
    icon: Factory,
    items: ["BOM — struktura wyrobu", "Procesy technologiczne i marszruty", "Sterowanie produkcją QRM", "POLCA — przepływ międzykomórkowy", "OEE — efektywność maszyn", "Pomiary kontroli jakości", "Skład i wyroby gotowe"],
  },
  {
    title: "Finanse i analizy",
    icon: Calculator,
    items: ["Księga główna i rejestry VAT", "Budżetowanie kosztów i przychodów", "Analiza PARETO", "Rozrachunki, kompensaty, odsetki", "Środki trwałe i amortyzacja", "Banki i przelewy", "Sprawozdania i raporty"],
  },
  {
    title: "Kadry i płace",
    icon: Users,
    items: ["HR — ewidencja zatrudnienia", "RCP — rejestracja czasu pracy", "Płace: etat, godziny, akord, umowy", "Zasiłki i świadczenia ZUS", "Deklaracje Płatnik i PIT", "Szkolenia, badania, wyposażenie"],
  },
  {
    title: "Bezpieczeństwo i zgodność",
    icon: ShieldCheck,
    items: ["RODO — ochrona danych osobowych", "Uprawnienia i role użytkowników", "Historia zmian dokumentów", "Kopie zapasowe i odtwarzanie", "Zgodność z ustawą o rachunkowości"],
  },
];

export function ErpModules() {
  return (
    <section id="funkcje" className="py-20 md:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Funkcje systemu</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">
            Ponad 100 funkcji ERP w jednej, spójnej bazie danych
          </h2>
          <p className="mt-4 text-muted-foreground">
            Od e-faktur i JPK, przez magazyn WMS i sterowanie produkcją QRM/POLCA, po płace, HR i RODO.
            Moduły uruchamiamy etapami — dokładnie w kolejności, jakiej potrzebuje Państwa firma.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moduleGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-brand/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg">{g.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {g.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Industries() {
  const industries = [
    { icon: Factory, t: "Produkcja zleceniowa", d: "Wyceny, marszruty, rozliczanie zleceń i kontrola rentowności każdej partii." },
    { icon: Truck, t: "Dystrybucja i handel", d: "Magazyny wielolokalizacyjne, polityka cenowa, sprzedaż mobilna i B2B." },
    { icon: Building2, t: "Usługi i biura", d: "Pełna księgowość, kadry, płace oraz obsługa informatyczna biura." },
  ];
  const models = [
    { icon: Cloud, t: "Chmura (SaaS)", d: "System utrzymywany po naszej stronie, dostęp zdalny, aktualizacje w cenie." },
    { icon: Server, t: "On-premise", d: "Instalacja na serwerach klienta — pełna kontrola nad danymi." },
    { icon: Network, t: "Model hybrydowy", d: "Produkcja lokalnie, raportowanie i kopie w chmurze." },
  ];
  return (
    <section id="branze" className="border-y border-border bg-brand-deep py-20 text-white md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-6 bg-gold" /> Branże
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">Rozwiązania dopasowane do branży</h2>
          <div className="mt-6 space-y-4">
            {industries.map((i) => (
              <div key={i.t} className="flex gap-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <i.icon className="h-6 w-6 shrink-0 text-gold" />
                <div>
                  <div className="font-semibold">{i.t}</div>
                  <p className="mt-1 text-sm text-white/70">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-6 bg-gold" /> Wdrożenie
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">Trzy modele utrzymania systemu</h2>
          <div className="mt-6 space-y-4">
            {models.map((i) => (
              <div key={i.t} className="flex gap-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <i.icon className="h-6 w-6 shrink-0 text-gold" />
                <div>
                  <div className="font-semibold">{i.t}</div>
                  <p className="mt-1 text-sm text-white/70">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const systemFeatures = [
  { t: "Definiowanie struktury wyrobu i procesu technologicznego", d: "Rozbudowane moduły produkcyjne z drzewami technologicznymi. Każdy element posiada przypisane materiały, operacje, stanowiska, maszyny, narzędzia, czasy i stawki. Współpracuje z Autodesk, AutoCad i innymi (import/eksport tabliczek)." },
  { t: "Przyjmowanie zamówień od klientów", d: "Kontrola zasobów magazynowych i zdolności produkcyjnych już na etapie przyjęcia. Wielopoziomowe zatwierdzanie, harmonogramy fakturowania i wysyłek, ewidencja ofert." },
  { t: "Opracowywanie planów produkcji", d: "Plany na podstawie zamówień, planów sprzedaży i zapasów. Symulacje próbnych zleceń, optymalizacja wykorzystania zasobów, ocena rentowności." },
  { t: "Bilansowanie zasobów produkcyjnych", d: "Dokładne rozliczanie zasobów zużytych do produkcji w porównaniu z normami. Ewidencja braków, odpadów oraz rzeczywistych czasów wykonania operacji." },
  { t: "Planowanie i realizacja zaopatrzenia", d: "Bilans potrzeb materiałowych, śledzenie zamówień, ocena dostawców, planowanie zaopatrzenia na bazie prognoz sprzedaży." },
  { t: "Sterowanie zapasami i obsługa magazynu", d: "Wiele lokalizacji, metody wyceny (FIFO, LIFO, średnia, stała), inwentaryzacje ciągłe i okresowe, analizy wiekowania zapasów." },
  { t: "Obsługa klientów, należności i zobowiązań", d: "Rozbudowane analizy rozrachunków, wezwania, kompensaty, odsetki, potwierdzenia sald — z definiowalną postacią dokumentów." },
  { t: "Ewidencja środków trwałych i wyposażenia", d: "Automatyczne odpisy amortyzacyjne, kartoteki wypożyczeń narzędzi, plany napraw, inwentaryzacje." },
  { t: "Budżetowanie kosztów i przychodów", d: "Precyzyjne budżety na dowolnych poziomach planu kont. Bieżąca obserwacja realizacji i szybka reakcja na odchylenia." },
  { t: "Ewidencja i rozliczanie kosztów", d: "Automatyczna ewidencja na bazie dokumentów źródłowych. Bieżąca analiza kosztów bezpośrednich i pośrednich, rozliczenia miesięczne." },
  { t: "Obsługa sprzedaży", d: "Elastyczna polityka cenowa, tabele upustów, drukarki fiskalne, sprzedaż mobilna, automatyczne dekrety FK i rejestry VAT, VAT-UE." },
  { t: "Prowadzenie księgi głównej", d: "Automatyczne dekrety ze wszystkich modułów. Praca w kilku miesiącach księgowych, wielowalutowość, różnice kursowe." },
  { t: "Sprawozdania i analizy finansowe", d: "Sprawozdania GUS oraz dowolne raporty wewnętrzne. Porównania okresów i budżetów, eksport do arkusza kalkulacyjnego." },
  { t: "Ewidencja zatrudnienia", d: "Pełna historia zatrudnienia, kartoteki szkoleń, badań, wyposażenia. Obsługa pracowników poza Polską oraz zakładów pracy chronionej." },
  { t: "Ewidencja i rozliczanie czasu pracy", d: "Kalendarze, dzienniki pracownika, kartoteki urlopowe, integracja z czytnikami kart wejścia/wyjścia." },
  { t: "Rejestr i naliczanie świadczeń ZUS", d: "Pełna obsługa zasiłków chorobowych z uwzględnieniem aktualnych przepisów oraz wszystkich okresów zasiłkowych." },
  { t: "Naliczanie i ewidencja płac", d: "Stawka miesięczna, godzinowa, akord, umowy zlecenia i o dzieło. Automatyczne kartoteki, przelewy bankowe, deklaracje Płatnik, PIT-y." },
];

export function SystemSection() {
  return (
    <section id="system" className="py-20 md:py-24">
      <div className="container-x">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>Nasz produkt</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl text-balance">
              ZAPR-system — kompleksowe zarządzanie produkcją
            </h2>
          </div>
          <p className="text-muted-foreground">
            System klasy ERP zarządzający produkcją, dystrybucją i kosztami. Pomaga zdecydować:
            co produkować, ile, jakimi metodami i za pomocą jakich środków, aby wyniki ekonomiczne
            były optymalne. Komputer wspomaga człowieka — decyzję zawsze pozostawiamy człowiekowi.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Kompleksowość funkcjonalna",
            "Integracja danych i procesów",
            "Elastyczność funkcjonalna i strukturalna",
            "Otwarta, skalowalna architektura",
            "Zaawansowanie merytoryczne i technologiczne",
            "Zgodność z polskim prawem",
          ].map((c) => (
            <div key={c} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{c}</span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-xl">Wspierane procesy</h3>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {systemFeatures.map((f, i) => (
              <Disclosure key={f.t} title={f.t} index={i + 1}>
                <p className="leading-relaxed text-muted-foreground">{f.d}</p>
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclosure({ title, index, children }: { title: string; index: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-6 py-5 text-left transition hover:bg-brand-soft/60"
      >
        <span className="w-8 text-sm font-semibold text-brand">{String(index).padStart(2, "0")}</span>
        <span className="flex-1 font-medium">{title}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-6 pl-[4.5rem] text-sm">{children}</div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function CaseStudies() {
  const cases = [
    { branch: "Produkcja metalowa", title: "Skrócenie czasu realizacji zlecenia o 22%", d: "Wdrożenie modułów BOM, marszrut i sterowania QRM pozwoliło uporządkować przepływ zleceń między wydziałami.", img: produkcjaImg },
    { branch: "Dystrybucja", title: "Inwentaryzacja krótsza o 3 dni", d: "Magazyn WMS z lokalizacjami i skanerami kodów zastąpił arkusze — stan magazynu jest zgodny na bieżąco.", img: itImg },
    { branch: "Biuro rachunkowe", title: "Zamknięcie miesiąca w 4 dni zamiast 9", d: "Automatyczne dekrety z modułów sprzedaży i magazynu wyeliminowały ręczne przepisywanie dokumentów.", img: ksiegowiImg },
  ];
  return (
    <section id="wdrozenia" className="border-y border-border bg-brand-soft/50 py-20 md:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Wdrożenia</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">Efekty, które widać w liczbach</h2>
          <p className="mt-4 text-muted-foreground">
            Przykładowe rezultaty projektów prowadzonych przez nasz zespół wdrożeniowy.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <img src={c.img} alt={c.branch} width={1280} height={960} loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">{c.branch}</span>
                <h3 className="mt-2 text-lg leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function PriceCalculator() {
  const [form, setForm] = useState({ type: "spzoo", docs: 100, employees: 5, payroll: true });

  const price = useMemo(() => {
    const base = form.type === "spzoo" ? 900 : form.type === "kpir" ? 350 : 550;
    const docsCost = Math.max(0, form.docs - 20) * 3.5;
    const hrCost = form.payroll ? form.employees * 45 : 0;
    return Math.round((base + docsCost + hrCost) / 10) * 10;
  }, [form]);

  return (
    <section id="wycena" className="py-20 md:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Eyebrow>Kalkulator</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">Szacunkowa wycena obsługi księgowej</h2>
          <p className="mt-4 text-muted-foreground">
            Zaznacz formę prawną, liczbę dokumentów i pracowników — od razu zobaczysz orientacyjny
            miesięczny koszt. Ostateczna cena zależy od specyfiki firmy i ustalamy ją indywidualnie.
          </p>
          <img
            src={konsultacjaImg}
            alt="Konsultacja księgowa z klientem"
            width={1280}
            height={864}
            loading="lazy"
            className="mt-8 hidden rounded-2xl shadow-card lg:block"
          />
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
          <label className="block text-sm font-medium">Forma prowadzenia działalności</label>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              { v: "kpir", l: "KPiR" },
              { v: "ryczalt", l: "Ryczałt" },
              { v: "spzoo", l: "Pełne księgi" },
            ].map((o) => (
              <button
                key={o.v}
                onClick={() => setForm({ ...form, type: o.v })}
                className={`rounded-lg border px-3 py-2.5 text-sm transition ${
                  form.type === o.v ? "border-brand bg-brand/10 font-semibold text-brand" : "border-border hover:bg-muted"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>

          <label className="mt-6 block text-sm font-medium">
            Dokumenty miesięcznie: <span className="text-brand">{form.docs}</span>
          </label>
          <input
            type="range" min={10} max={600} step={10} value={form.docs}
            onChange={(e) => setForm({ ...form, docs: Number(e.target.value) })}
            className="mt-2 w-full accent-[var(--brand)]"
          />

          <label className="mt-6 block text-sm font-medium">
            Liczba pracowników: <span className="text-brand">{form.employees}</span>
          </label>
          <input
            type="range" min={0} max={100} step={1} value={form.employees}
            onChange={(e) => setForm({ ...form, employees: Number(e.target.value) })}
            className="mt-2 w-full accent-[var(--brand)]"
          />

          <label className="mt-6 flex items-center gap-3 text-sm">
            <input
              type="checkbox" checked={form.payroll}
              onChange={(e) => setForm({ ...form, payroll: e.target.checked })}
              className="h-4 w-4 accent-[var(--brand)]"
            />
            Obsługa kadrowo-płacowa
          </label>

          <div className="mt-8 rounded-xl bg-brand-deep p-6 text-white">
            <div className="text-xs uppercase tracking-wider opacity-70">Szacunkowy koszt miesięczny</div>
            <div className="mt-1 text-4xl">{price.toLocaleString("pl-PL")} zł netto</div>
            <a href="#kontakt" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              Poproś o dokładną ofertę <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function BlogTeaser() {
  return (
    <section id="wiedza" className="border-y border-border bg-brand-soft/50 py-20 md:py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>Baza wiedzy</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl text-balance">Blog ekspercki</h2>
            <p className="mt-4 text-muted-foreground">
              Zmiany w przepisach, nowe technologie i praktyka wdrożeń — prostym językiem.
            </p>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-brand hover:underline">
            Wszystkie artykuły <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-brand/50"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</span>
              <h3 className="mt-2 text-lg leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-4 text-xs text-muted-foreground">{p.date} • {p.readTime} czytania</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function AiHelp() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        <div className="grid md:grid-cols-2">
          <img src={itImg} alt="Zespół wsparcia IT" width={1280} height={960} loading="lazy" className="h-60 w-full object-cover md:h-full" />
          <div className="p-8 md:p-12">
            <Eyebrow>Nowość</Eyebrow>
            <h2 className="mt-4 text-3xl text-balance">Asystent AI w naszym helpdesku</h2>
            <p className="mt-4 text-muted-foreground">
              Na bazie wiedzy z serwisu help.zapr.pl uruchomiliśmy asystenta, który odpowiada na pytania
              o funkcje systemu naturalnym językiem — całą dobę. Sprawy wymagające człowieka trafiają
              prosto do konsultanta.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                "Odpowiedzi oparte wyłącznie na naszej dokumentacji",
                "Dostępny 24/7, także poza godzinami pracy biura",
                "Automatyczne przekazanie zgłoszenia do konsultanta",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Certificates() {
  const years = ["do 2019", "do 2018", "do 2013", "do 2010", "do 2007", "do 2003"];
  return (
    <section id="certyfikaty" className="border-y border-border bg-brand-soft/50 py-20 md:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <Eyebrow>Certyfikaty</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">Potwierdzone kompetencje od ponad dwóch dekad</h2>
          <p className="mt-4 text-muted-foreground">
            Posiadamy szereg certyfikatów potwierdzających uprawnienia do prowadzenia ksiąg rachunkowych
            oraz fachową obsługę naszych klientów.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {years.map((y) => (
            <div key={y} className="flex aspect-[3/4] flex-col items-center justify-center rounded-lg border border-border bg-card p-4 shadow-card">
              <Award className="h-8 w-8 text-gold" />
              <div className="mt-3 text-center text-sm font-semibold">Certyfikat</div>
              <div className="text-xs text-muted-foreground">{y}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function EuProject() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="grid items-start gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:p-10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand text-xl font-bold text-brand-foreground">EU</div>
          <div>
            <Eyebrow>Projekty unijne</Eyebrow>
            <h3 className="mt-3 text-xl md:text-2xl">
              „Opracowanie systemu Smart Work2B szansą na wzrost konkurencyjności ZAP Rachunkowość Sp. z o.o.”
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Projekt nr RPWP.01.02.00-30-0115/17-00, realizowany w ramach Osi Priorytetowej 1
              „Innowacyjna i konkurencyjna gospodarka”, Działanie 1.2 „Wzmocnienie potencjału innowacyjnego
              przedsiębiorstw Wielkopolski” Wielkopolskiego Regionalnego Programu Operacyjnego na lata 2014–2020.
            </p>
            <p className="mt-3 text-sm">
              Celem projektu jest opracowanie innowacyjnego systemu umożliwiającego kompleksowe monitorowanie
              prac produkcyjnych przedsiębiorstwa.
            </p>
            <div className="mt-4 flex flex-wrap gap-6 text-sm">
              <div><span className="text-muted-foreground">Wartość projektu: </span><strong>853 196,32 zł</strong></div>
              <div><span className="text-muted-foreground">Dofinansowanie UE: </span><strong className="text-brand">632 098,36 zł</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="bg-brand-deep py-20 text-white md:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-6 bg-gold" /> Kontakt
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl text-balance">Porozmawiajmy o Państwa firmie</h2>
          <p className="mt-4 max-w-md text-white/80">
            Napisz przez formularz albo zadzwoń — umówimy bezpłatną konsultację i pokażemy system na żywo.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gold" />
              <div><div className="font-semibold">Nasze biuro</div><div className="text-white/80">Krotoszyńska 35, 63-400 Ostrów Wielkopolski</div></div>
            </div>
            <div className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 text-gold" />
              <a href="mailto:zapr@zapr.pl" className="hover:underline">zapr@zapr.pl</a>
            </div>
            <div className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 text-gold" />
              <a href="tel:+48627372658" className="hover:underline">+48 (62) 73 72 658</a>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/15 p-5">
            <div className="mb-3 font-semibold">Godziny urzędowania</div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Poniedziałek – Piątek", "7:30 – 15:30"],
                  ["Sobota", "dzień wolny"],
                  ["Niedziela", "dzień wolny"],
                ].map(([d, h]) => (
                  <tr key={d} className="border-t border-white/10 first:border-0">
                    <td className="py-2 text-white/80">{d}</td>
                    <td className="py-2 text-right">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl bg-white p-8 text-foreground shadow-elegant"
        >
          <h3 className="text-xl">Formularz kontaktowy</h3>
          <p className="mt-1 text-sm text-muted-foreground">Odpowiadamy w ciągu jednego dnia roboczego.</p>
          <div className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Imię i nazwisko" name="name" />
              <Field label="Firma" name="company" required={false} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="E-mail" name="email" type="email" />
              <Field label="Telefon" name="phone" type="tel" required={false} />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="topic">Czego dotyczy zapytanie</label>
              <select id="topic" name="topic" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm">
                <option>Obsługa księgowa</option>
                <option>ZAPR-system (ERP)</option>
                <option>Usługi IT / helpdesk</option>
                <option>Inne</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="message">Wiadomość</label>
              <textarea id="message" name="message" rows={4} required className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm" />
            </div>
            <label className="flex items-start gap-2.5 text-xs text-muted-foreground">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[var(--brand)]" />
              Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na zapytanie (RODO).
            </label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-brand-foreground transition hover:brightness-110">
              {sent ? "Dziękujemy — odezwiemy się!" : "Wyślij zapytanie"} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
