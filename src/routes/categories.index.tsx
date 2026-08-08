import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import quartzSlab from "@/assets/quartz-slabs-1.jpg";
import factory from "@/assets/factory-2.jpg";
import marble from "@/assets/factory-1.jpg";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/categories/")({
  head: () => ({
    meta: [
      { title: "Product Categories | Nile Stone Exports" },
      {
        name: "description",
        content:
          "Browse Nile Stone Exports' three Egyptian export categories: marble slab alternatives, high-purity raw quartz aggregate, and engineered EGY QUARTZ slabs.",
      },
      { property: "og:title", content: "Product Categories | Nile Stone Exports" },
      { property: "og:description", content: "Three curated categories of Egyptian building surfaces for global projects." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nile-exports.lovable.app/categories" },
    ],
    links: [{ rel: "canonical", href: "https://nile-exports.lovable.app/categories" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://nile-exports.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Categories", item: "https://nile-exports.lovable.app/categories" },
          ],
        }),
      },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  const { lang, t } = useI18n();
  const isAr = lang === "ar";

  const categories = [
    {
      to: "/categories/marble-alternatives",
      title: t("cat.marble.title"),
      desc: t("cat.marble.desc"),
      img: marble,
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
  ] as const;

  return (
    <section className="py-20">
      <div className="container-x">
        <span className="badge-gold">{isAr ? "الفئات" : "Categories"}</span>
        <h1 className="mt-6 font-display text-5xl md:text-6xl max-w-3xl leading-[1.05]">
          {isAr ? "ثلاث فئات نُصدّرها بثقة." : "Three categories we export with confidence."}
        </h1>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/60 transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={c.img} alt={`${c.title} exported from Egypt`} width={800} height={600} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 font-display text-cream/90 text-lg bg-ink px-3 py-1 rounded-full">{c.tag}</div>
              </div>
              <div className="p-7">
                <h2 className="font-display text-2xl">{c.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                  {isAr ? "عرض التفاصيل" : "View details"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
