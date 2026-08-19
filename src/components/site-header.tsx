import { Link } from "@tanstack/react-router";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/categories", label: t("nav.categories") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          <BrandLogo className="h-9 w-9 shrink-0" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide">ROUTE EXPORT</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Egypt · Export House</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="relative text-sm tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "en" ? "AR" : "EN"}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition"
          >
            {t("cta.contact")}
          </Link>
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm"
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="text-left py-2 text-xs uppercase tracking-widest text-muted-foreground"
            >
              <Globe className="inline h-3.5 w-3.5 mr-2" />
              {lang === "en" ? "العربية" : "English"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
