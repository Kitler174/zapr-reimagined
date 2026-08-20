import { useState } from "react";
import {
  ArrowRight, Calculator, Cpu, LayoutDashboard, ShieldCheck, Clock, Award,
  MapPin, Mail, Phone, ChevronDown, CheckCircle2
} from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="bg-hero">
      <div className="container-x pt-20 pb-24 md:pt-28 md:pb-32 grid gap-10 md:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Od 1999 roku zaufany partner biznesu
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-balance">
            Księgowość, IT i system <span className="italic text-brand">ZAPR</span> pod jednym dachem.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
            ZAP Rachunkowość Sp. z o.o. to wszechstronna, kompleksowa pomoc w rozwiązywaniu
            problemów z zakresu rachunkowości i informatyki — poparta ponad dwiema dekadami doświadczenia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#uslugi" className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-brand-foreground shadow-elegant hover:opacity-90 transition">
              Zobacz nasze usługi <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 hover:bg-muted transition">
              Umów spotkanie
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "25+", v: "lat doświadczenia" },
              { k: "100%", v: "poufność danych" },
              { k: "ERP", v: "własny system" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl text-brand">{s.k}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>ZAPR-system</span>
              <span className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-destructive/60" />
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="h-2 w-2 rounded-full bg-brand/60" />
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { l: "Zlecenie #2024/438", v: "W realizacji", c: "bg-gold/20 text-foreground" },
                { l: "Faktura FV/12/2024", v: "Wystawiona", c: "bg-brand/15 text-brand" },
                { l: "Magazyn — stan", v: "Aktualny", c: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" },
                { l: "Płace listopad", v: "Naliczone", c: "bg-brand/15 text-brand" },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2.5 text-sm">
                  <span>{r.l}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs ${r.c}`}>{r.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
              {["Produkcja", "FK", "Kadry"].map((m) => (
                <div key={m} className="rounded-md bg-muted py-3 text-muted-foreground">{m}</div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden md:block rounded-xl border border-border bg-card p-4 shadow-card text-xs max-w-[200px]">
            <div className="font-display text-base">Wykres Gantta</div>
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 rounded-full bg-muted"><div className="h-full w-3/4 rounded-full bg-brand" /></div>
              <div className="h-1.5 rounded-full bg-muted"><div className="h-full w-1/2 rounded-full bg-gold" /></div>
              <div className="h-1.5 rounded-full bg-muted"><div className="h-full w-2/3 rounded-full bg-brand/70" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="o-nas" className="py-24 border-t border-border">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">O nas</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            Wieloletnie doświadczenie, najnowsze technologie.
          </h2>
        </div>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">ZAP Rachunkowość Sp. z o.o.</strong> powstała w 1999 roku
            w wyniku restrukturyzacji ZAP S.A. z myślą o małych i średnich firmach. Naszą misją jest wszechstronna
            oraz kompleksowa pomoc w rozwiązywaniu problemów z zakresu rachunkowości i informatyki.
          </p>
          <p>
            Nasz zespół tworzą wysokiej klasy specjaliści z dziedziny rachunkowości i informatyki,
            którzy stosując najnowsze technologie informatyczne wspierają użytkowników przy napotykaniu problemów.
          </p>
          <p>
            Profesjonalny i zgrany zespół naszej firmy zapewni Państwu terminową i na najwyższym poziomie obsługę.
            <strong className="text-foreground"> Skuteczność i doświadczenie</strong> to nasze atuty.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: ShieldCheck, t: "Pełna poufność" },
              { icon: Award, t: "Ubezpieczenie OC" },
              { icon: Clock, t: "Terminowość" },
              { icon: CheckCircle2, t: "Aktualna wiedza" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-3 text-sm text-foreground">
                <f.icon className="h-4 w-4 text-brand" /> {f.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    id: "ksiegowosc",
    icon: Calculator,
    title: "Księgowość i rachunkowość",
    short: "Kompleksowa obsługa księgowa, kadrowa i płacowa dla spółek oraz osób fizycznych.",
    items: [
      "Prowadzenie ksiąg rachunkowych i podatkowych",
      "Podatkowa księga przychodów i rozchodów",
      "Doradztwo w zakresie organizacji systemów rachunkowych",
      "Analizy finansowo-ekonomiczne",
      "Pełna obsługa kadrowo-płacowa",
      "Obsługa podatkowa i ZUS należności pracowniczych",
      "Rozliczenia z ZUS-em i sprawozdania GUS",
    ],
    note: "Obsługujemy spółki z o.o., akcyjne, jawne, cywilne oraz osoby fizyczne prowadzące działalność — na terenie całego kraju.",
  },
  {
    id: "system",
    icon: LayoutDashboard,
    title: "ZAPR-system",
    short: "Autorski system ERP — zarządzanie produkcją, dystrybucją i kosztami w jednej bazie danych.",
    items: [
      "Kompleksowość funkcjonalna w jednej aplikacji",
      "Integracja danych wewnętrznych i zewnętrznych",
      "Elastyczna, skalowalna architektura",
      "Otwartość na nowe moduły i systemy zewnętrzne",
      "Zgodność z polskimi przepisami (ustawa o rachunkowości)",
      "Praca w środowisku Windows / Linux / UNIX",
      "Automatyczne aktualizacje i zdalny dostęp",
    ],
    note: "Zbudowany w PowerBuilder z bazą SYBASE. Sprawdza się w produkcji zleceniowej, dystrybucji i handlu — w przedsiębiorstwach wielozakładowych.",
  },
  {
    id: "it",
    icon: Cpu,
    title: "Informatyka / IT",
    short: "Pełna obsługa informatyczna firm — od helpdesku po wirtualizację serwerów.",
    items: [
      "Przetwarzanie i naprawa baz danych",
      "Doradztwo, wdrożenia i szkolenia",
      "Serwis sprzętu i oprogramowania",
      "Wirtualizacja serwerów",
      "Helpdesk dla użytkowników w biurze",
      "Administracja serwerami Linux / Unix / Windows",
      "Infrastruktura sieciowa i okablowanie strukturalne",
      "Strony WWW — wizytówki i rozbudowane serwisy",
    ],
    note: "Reagujemy na awarie, potrzeby modernizacji sprzętu, instalację oprogramowania i dostarczanie nowych licencji.",
  },
];

export function Services() {
  const [active, setActive] = useState("ksiegowosc");
  const current = services.find((s) => s.id === active)!;
  return (
    <section id="uslugi" className="py-24 bg-brand-soft/40 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Co oferujemy</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            Trzy filary naszej działalności.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wybierz obszar, aby poznać szczegółowy zakres usług. Każdy klient jest dla nas indywidualnym partnerem.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {services.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`text-left rounded-xl border p-6 transition shadow-card ${
                  isActive
                    ? "border-brand bg-card ring-1 ring-brand"
                    : "border-border bg-card/60 hover:bg-card hover:border-brand/40"
                }`}
              >
                <s.icon className={`h-7 w-7 ${isActive ? "text-brand" : "text-muted-foreground"}`} />
                <div className="mt-4 font-display text-xl">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
          <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
            <div>
              <current.icon className="h-10 w-10 text-brand" />
              <h3 className="mt-4 font-display text-3xl">{current.title}</h3>
              <p className="mt-3 text-muted-foreground">{current.note}</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {current.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="system" className="py-24">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Nasz produkt</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl text-balance">
              ZAPR-system — kompleksowe zarządzanie produkcją.
            </h2>
          </div>
          <p className="text-muted-foreground">
            System klasy ERP zarządzający produkcją, dystrybucją i kosztami. Umożliwia decyzje:
            co produkować, ile, jakimi metodami i za pomocą jakich środków — aby wyniki ekonomiczne były optymalne.
            Komputer wspomaga człowieka, decyzję zawsze pozostawiamy człowiekowi.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Kompleksowość funkcjonalna",
            "Integracja danych i procesów",
            "Elastyczność funkcjonalna i strukturalna",
            "Otwarta, skalowalna architektura",
            "Zaawansowanie merytoryczne i technologiczne",
            "Zgodność z polskim prawem",
          ].map((c) => (
            <div key={c} className="rounded-lg border border-border bg-card p-4 text-sm flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
              <span>{c}</span>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl mb-4">Wspierane procesy</h3>
          <div className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
            {systemFeatures.map((f, i) => (
              <Disclosure key={f.t} title={f.t} index={i + 1}>
                <p className="text-muted-foreground leading-relaxed">{f.d}</p>
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
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-muted/50 transition"
      >
        <span className="font-display text-sm text-muted-foreground w-8">{String(index).padStart(2, "0")}</span>
        <span className="flex-1 font-medium">{title}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-6 pl-[4.5rem] text-sm">{children}</div>}
    </div>
  );
}

export function Certificates() {
  const years = ["do 2019", "do 2018", "do 2013", "do 2010", "do 2007", "do 2003"];
  return (
    <section id="certyfikaty" className="py-24 bg-brand-soft/40 border-y border-border">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Certyfikaty</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            Potwierdzone kompetencje od ponad dwóch dekad.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Posiadamy szereg certyfikatów potwierdzających uprawnienia do prowadzenia ksiąg rachunkowych
            oraz fachową obsługę naszych klientów.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {years.map((y) => (
            <div key={y} className="aspect-[3/4] rounded-lg border border-border bg-card flex flex-col items-center justify-center p-4 shadow-card">
              <Award className="h-8 w-8 text-gold" />
              <div className="mt-3 font-display text-sm text-center">Certyfikat</div>
              <div className="text-xs text-muted-foreground">{y}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EuProject() {
  return (
    <section className="py-20 border-t border-border">
      <div className="container-x">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 grid gap-6 md:grid-cols-[auto_1fr] items-start">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand text-brand-foreground font-display text-xl">EU</div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Projekty unijne</p>
            <h3 className="mt-2 font-display text-2xl md:text-3xl">
              „Opracowanie systemu Smart Work2B szansą na wzrost konkurencyjności ZAP Rachunkowość Sp. z o.o.”
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Projekt nr RPWP.01.02.00-30-0115/17-00, realizowany w ramach Osi Priorytetowej 1
              „Innowacyjna i konkurencyjna gospodarka”, Działanie 1.2 „Wzmocnienie potencjału innowacyjnego
              przedsiębiorstw Wielkopolski” Wielkopolskiego Regionalnego Programu Operacyjnego na lata 2014–2020.
            </p>
            <p className="mt-3 text-sm">
              Celem projektu jest opracowanie innowacyjnego systemu umożliwiającego kompleksowe monitorowanie
              prac produkcyjnych przedsiębiorstwa. Efektem jest zwiększenie zakresu rozwiązań dotyczących
              wsparcia optymalizacji efektywności zarządzania produkcją.
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

export function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-brand text-brand-foreground">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest opacity-70">Kontakt</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
            Porozmawiajmy o Państwa firmie.
          </h2>
          <p className="mt-4 opacity-80 max-w-md">
            Skontaktuj się z nami przez formularz lub zadzwoń w celu natychmiastowego uzyskania
            informacji bądź umówienia spotkania.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex gap-3"><MapPin className="h-5 w-5 mt-0.5" />
              <div><div className="font-medium">Nasze biuro</div><div className="opacity-80">Krotoszyńska 35, 63-400 Ostrów Wielkopolski</div></div>
            </div>
            <div className="flex gap-3"><Mail className="h-5 w-5 mt-0.5" />
              <a href="mailto:zapr@zapr.pl" className="hover:underline">zapr@zapr.pl</a>
            </div>
            <div className="flex gap-3"><Phone className="h-5 w-5 mt-0.5" />
              <a href="tel:+48627372658" className="hover:underline">+48 (62) 73 72 658</a>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/15 p-5">
            <div className="font-display text-lg mb-3">Godziny urzędowania</div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Poniedziałek – Piątek", "7:30 – 15:30"],
                  ["Sobota", "dzień wolny"],
                  ["Niedziela", "dzień wolny"],
                ].map(([d, h]) => (
                  <tr key={d} className="border-t border-white/10 first:border-0">
                    <td className="py-2 opacity-80">{d}</td>
                    <td className="py-2 text-right">{h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
