import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-32 bg-ink">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-wide text-cream">ROUTE EXPORT</div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold mt-2">{t("brand.tagline")}</div>
          <p className="mt-6 max-w-md text-sm text-cream/70 leading-relaxed">
            Verified Egyptian exporter of premium building surfaces — marble slab alternatives,
            raw quartz, and engineered quartz slabs. Registered with the Egyptian Export Council.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/" className="hover:text-gold">{t("nav.home")}</Link></li>
            <li><Link to="/about" className="hover:text-gold">{t("nav.about")}</Link></li>
            <li><Link to="/categories" className="hover:text-gold">{t("nav.categories")}</Link></li>
            <li><Link to="/contact" className="hover:text-gold">{t("nav.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>Cairo · Ain Sokhna, Egypt</li>
            <li>export@routeexport.example</li>
            <li>+20 (0) 155 996 7556</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Route Export. {t("footer.rights")}</div>
          <div className="uppercase tracking-[0.22em] text-gold/70">Registered — Egyptian Export Council</div>
        </div>
      </div>
    </footer>
  );
}
