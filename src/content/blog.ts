export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "ksef-2026-jak-sie-przygotowac",
    title: "KSeF — jak przygotować firmę do obowiązkowych e-faktur",
    excerpt:
      "Krajowy System e-Faktur zmienia sposób wystawiania i odbierania faktur. Podpowiadamy, od czego zacząć i jak ZAPR-system wspiera ten proces.",
    date: "2026-02-10",
    category: "Podatki",
    readTime: "6 min",
    body: [
      "Krajowy System e-Faktur (KSeF) to centralna platforma, przez którą przechodzą faktury ustrukturyzowane. Dla przedsiębiorcy oznacza to zmianę obiegu dokumentów: faktura nie jest już wysyłana mailem, lecz przekazywana do systemu i tam udostępniana odbiorcy.",
      "Przygotowanie warto zacząć od inwentaryzacji: kto w firmie wystawia faktury, w jakich programach, jakie są typy dokumentów (sprzedaż krajowa, WDT, korekty, zaliczki). Drugim krokiem jest uporządkowanie danych kontrahentów i pozycji sprzedaży — KSeF jest wrażliwy na kompletność danych.",
      "W ZAPR-system moduł sprzedaży generuje dokumenty w strukturze wymaganej przez KSeF, automatycznie tworzy dekrety w księdze głównej oraz rejestry VAT. Dzięki temu wysyłka faktury i jej ujęcie w księgach to jedna operacja, a nie dwa osobne procesy.",
      "Nasi księgowi pomagają klientom przejść ten proces kompleksowo: od analizy obiegu dokumentów, przez konfigurację systemu, po szkolenie zespołu i wsparcie w pierwszych miesiącach pracy na nowych zasadach.",
    ],
  },
  {
    slug: "jpk-i-automatyzacja-raportowania",
    title: "JPK bez stresu — automatyzacja raportowania podatkowego",
    excerpt:
      "Pliki JPK generowane wprost z ksiąg to mniej pracy ręcznej i mniej korekt. Pokazujemy, jak to wygląda w praktyce.",
    date: "2026-01-22",
    category: "Podatki",
    readTime: "4 min",
    body: [
      "Jednolity Plik Kontrolny wymaga spójności danych między ewidencją sprzedaży, zakupów i księgą główną. Najwięcej błędów powstaje tam, gdzie dane przepisywane są ręcznie między arkuszami a programem księgowym.",
      "Rozwiązaniem jest jedna baza danych. W ZAPR-system dokument źródłowy jest ewidencjonowany raz, a rejestry VAT i dekrety powstają automatycznie. Generowanie JPK sprowadza się do wskazania okresu i weryfikacji raportu kontrolnego.",
      "Efektem jest krótszy czas zamknięcia miesiąca i mniejsza liczba korekt — a dla zespołu księgowego więcej czasu na analizy zamiast na przepisywanie danych.",
    ],
  },
  {
    slug: "ai-w-helpdesku-zapr",
    title: "Sztuczna inteligencja w naszym helpdesku",
    excerpt:
      "Asystent AI odpowiada na pytania o funkcje systemu na podstawie naszej bazy wiedzy — całą dobę, a trudniejsze sprawy przekazuje konsultantowi.",
    date: "2026-01-08",
    category: "Technologie",
    readTime: "5 min",
    body: [
      "W serwisie help.zapr.pl zebraliśmy lata doświadczeń z wdrożeń: opisy modułów, instrukcje operacji, odpowiedzi na powtarzające się pytania użytkowników.",
      "Na tej bazie wiedzy działa nasz asystent AI. Użytkownik pyta naturalnym językiem — na przykład „jak wystawić korektę do faktury zaliczkowej” — i otrzymuje odpowiedź opartą wyłącznie na naszej dokumentacji, a nie na przypadkowych treściach z internetu.",
      "Asystent rozpoznaje też sytuacje, w których potrzebny jest człowiek: zgłoszenia awarii, sprawy wymagające dostępu do danych klienta czy zmiany konfiguracji trafiają bezpośrednio do konsultanta.",
      "Dzięki temu proste pytania rozwiązywane są natychmiast, a nasz zespół może skupić się na wdrożeniach i sprawach wymagających wiedzy eksperckiej.",
    ],
  },
  {
    slug: "qrm-polca-oee-sterowanie-produkcja",
    title: "QRM, POLCA i OEE — nowoczesne sterowanie produkcją",
    excerpt:
      "Skrócenie czasu przepływu zlecenia przez zakład to najszybsza droga do wzrostu rentowności. Wyjaśniamy trzy pojęcia, które za tym stoją.",
    date: "2025-12-03",
    category: "Produkcja",
    readTime: "7 min",
    body: [
      "QRM (Quick Response Manufacturing) koncentruje się na skracaniu czasu przepływu zlecenia przez cały zakład, a nie na maksymalnym obciążeniu pojedynczych maszyn. W produkcji zleceniowej i małoseryjnej daje to lepsze efekty niż klasyczne planowanie pod wykorzystanie zasobów.",
      "POLCA to mechanizm sterowania przepływem między komórkami produkcyjnymi. Zlecenie rusza dalej dopiero wtedy, gdy kolejna komórka ma zdolność, by je przyjąć — dzięki temu nie rośnie produkcja w toku.",
      "OEE (Overall Equipment Effectiveness) mierzy realną efektywność maszyn: dostępność, wydajność i jakość. Pomiary prowadzone wprost ze stanowisk pokazują, gdzie naprawdę tracimy czas.",
      "ZAPR-system łączy te trzy perspektywy z ewidencją kosztów i księgowością, więc decyzje produkcyjne widać od razu w wynikach finansowych.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
