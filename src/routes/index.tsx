import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe2, Award, Truck } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import quartzSlab from "@/assets/quartz-slabs-1.jpg";
import factory from "@/assets/factory-2.jpg";
import marblePanels from "@/assets/factory-1.jpg";
import fertilizers from "@/assets/fertilizers-1.jpg";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Egyptian Stone Exporter | Nile Stone Exports" },
      {
        name: "description",
        content:
          "Registered Egyptian exporter of marble alternatives, raw quartz, and engineered quartz slabs. FOB/CIF worldwide.",
      },
      { property: "og:title", content: "Egyptian Stone Exporter | Nile Stone Exports" },
      {
        property: "og:description",
        content: "Registered Egyptian exporter of marble alternatives, raw quartz, and engineered quartz slabs. FOB/CIF worldwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nile-exports.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://nile-exports.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nile Stone Exports",
          url: "https://nile-exports.lovable.app",
          inLanguage: ["en", "ar"],
        }),
      },
    ],
  }),
  component: HomePage,
});

const trustSignals = [
  { icon: ShieldCheck, label: "Egyptian Export Council", value: "Registered" },
  { icon: Globe2, label: "Countries served", value: "20+" },
  { icon: Award, label: "Years in industry", value: "6+" },
  { icon: Truck, label: "Container logistics", value: "FOB / CIF" },
];

function HomePage() {
  const { lang, t } = useI18n();
  const isAr = lang === "ar";

  const categories = [
    {
      to: "/categories/marble-alternatives",
      title: t("cat.marble.title"),
      desc: t("cat.marble.desc"),
      img: marblePanels,
      tag: "01",
    },
    {
      to: "/categories/raw-quartz",
      title: t("cat.raw.title"),
      desc: t("cat.raw.desc"),
      img: quartzSlab,
      tag: "02",
    },
    {
      to: "/categories/quartz-slabs",
      title: t("cat.slab.title"),
      desc: t("cat.slab.desc"),
      img: factory,
      tag: "03",
    },
    {
      to: "/categories/fertilizers",
      title: t("cat.fert.title"),
      desc: t("cat.fert.desc"),
      img: fertilizers,
      tag: "04",
    },
  ] as const;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroKitchen}
            alt="Modern kitchen finished with Egyptian engineered quartz slabs"
            width={1600}
            height={1067}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="container-x pt-24 pb-28 md:pt-36 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="badge-gold">{t("brand.tagline")}</span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
              {isAr ? (
                <>حجارة مصر <span className="text-gradient-gold">إلى العالم.</span></>
              ) : (
                <>Egyptian stone, <span className="text-gradient-gold">exported worldwide.</span></>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              {isAr
                ? "شركة تصدير مصرية موثّقة تقدّم منتجات بناء مختارة بعناية — بدائل ألواح الرخام، الكوارتز الخام، وألواح الكوارتز المصنّعة — لعملائنا حول العالم."
                : "A registered Egyptian export house delivering hand-picked building surfaces — marble slab alternatives, raw quartz aggregate, and engineered quartz slabs — to clients across the globe."}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/categories" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition">
                {t("cta.explore")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm hover:bg-primary/5 transition">
                {t("cta.contact")}
              </Link>
            </div>
          </motion.div>

          {/* Trust bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 border-t border-border/70 pt-4"
              >
                <s.icon className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  <div className="font-display text-2xl mt-1">{s.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-gold">Our Categories</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                {isAr ? "ثلاث فئات من الجودة العالية" : "Three categories, one standard of quality"}
              </h2>
            </div>
            <div className="hidden md:block gold-rule flex-1 mb-4 ml-8" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((c, i) => (
              <motion.div
                key={c.to}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  to={c.to}
                  className="group block h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/60 transition"
                  style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.02)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={c.img}
                      alt={`${c.title} exported from Egypt by Nile Stone Exports`}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 font-display text-cream/90 text-lg bg-ink px-3 py-1 rounded-full">
                      {c.tag}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl">{c.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                      {isAr ? "عرض التفاصيل" : "View details"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-ink text-cream">
        <div className="container-x grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-gold">Why Nile Stone</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-cream">
              {isAr ? "شركة مصرية موثوقة تُصدّر بمعايير عالمية." : "A trusted Egyptian house exporting to global standards."}
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed">
              {isAr
                ? "نعمل مع مصانع مصرية مختارة، ونتولى التوثيق والفحص والشحن الدولي بأعلى مستويات الشفافية. كل شحنة مرفقة بشهادات المطابقة وتقارير الجودة."
                : "We partner with vetted Egyptian factories and handle documentation, inspection, and international freight with full transparency. Every shipment ships with conformity certificates and quality reports."}
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/80">
              {[
                isAr ? "شهادات المنشأ ومطابقة المواصفات" : "Certificates of origin & conformity",
                isAr ? "فحص ما قبل الشحن (Pre-shipment inspection)" : "Independent pre-shipment inspection",
                isAr ? "شحن FOB / CIF إلى معظم الموانئ" : "FOB / CIF shipping to most seaports",
                isAr ? "دعم متعدد اللغات لعملاء التصدير" : "Multilingual export desk",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-6 bg-gold" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={factory} alt="Nile Stone Exports partner factory floor in Ain Sokhna, Egypt" width={800} height={1000} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-x-6 bottom-6 bg-cream/95 text-ink rounded-xl p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Facility</div>
              <div className="font-display text-xl mt-1">Ain Sokhna · Suez Governorate</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
