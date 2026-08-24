import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#system", label: "ZAPR-system" },
  { href: "#kontakt", label: "Kontakt" },
];
type NavProps = {
  onOpenChat: () => void;
};

export function Nav({ onOpenChat }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-brand text-brand-foreground font-display text-lg">Z</span>
          <span className="font-display text-xl leading-none">
            ZAP <span className="text-muted-foreground">Rachunkowość</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <button
            onClick={onOpenChat}
            className="rounded-md bg-brand px-4 py-2 text-brand-foreground hover:bg-brand/90 transition"
          >
            Asystent AI
          </button>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col py-4 gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-2 text-muted-foreground">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}
