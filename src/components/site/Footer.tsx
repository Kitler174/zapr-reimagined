export function Footer() {
  return (
    <footer className="border-t border-border bg-brand text-brand-foreground">
      <div className="container-x py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-display text-2xl">ZAP Rachunkowość Sp. z o.o.</div>
          <p className="mt-3 opacity-80 max-w-xs">
            Od 1999 roku wspieramy małe i średnie firmy w księgowości, IT oraz wdrożeniach ZAPR-system.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3 opacity-70">Kontakt</div>
          <div>Krotoszyńska 35, 63-400 Ostrów Wielkopolski</div>
          <a href="mailto:zapr@zapr.pl" className="block hover:underline">zapr@zapr.pl</a>
          <a href="tel:+48627372658" className="block hover:underline">+48 (62) 73 72 658</a>
        </div>
        <div>
          <div className="font-medium mb-3 opacity-70">Dane rejestrowe</div>
          <div>KRS: 0000013624 • Sąd Rejonowy w Poznaniu, IX Wydział KRS</div>
          <div>NIP: 622-22-81-876</div>
          <div>Kapitał zakładowy: 50 000 zł</div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs opacity-70 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} ZAP Rachunkowość Sp. z o.o.</span>
          <span>Wszelkie prawa zastrzeżone.</span>
        </div>
      </div>
    </footer>
  );
}
