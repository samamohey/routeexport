import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import slab1 from "@/assets/quartz-slabs-1.jpg";
import slab2 from "@/assets/quartz-slabs-2.jpg";
import slab3 from "@/assets/quartz-slabs-3.jpg";
import kitchen from "@/assets/kitchen-quartz.jpg";
import { useI18n } from "@/lib/i18n";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";

export const Route = createFileRoute("/categories/quartz-slabs")({
  head: () => ({
    meta: [
      { title: "Engineered Quartz Slabs from Egypt | Nile Stone" },
      {
        name: "description",
        content:
          "Egyptian engineered quartz slabs for countertops, floors, and cladding. Jumbo 330×165cm and 310×152cm. Thickness 15/20/30mm. Polished and matte finishes.",
      },
      { property: "og:title", content: "Engineered Quartz Slabs from Egypt | Nile Stone" },
      { property: "og:description", content: "The original Egyptian quartz surface: 15/20/30mm slabs in seamless jumbo sizes." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://nile-exports.lovable.app/categories/quartz-slabs" },
    ],
    links: [{ rel: "canonical", href: "https://nile-exports.lovable.app/categories/quartz-slabs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "EGY QUARTZ Engineered Slabs",
          category: "Engineered Stone",
          brand: { "@type": "Brand", name: "EGY QUARTZ" },
          countryOfOrigin: "EG",
          description:
            "Engineered quartz slabs made in Egypt, over 90% natural quartz mineral. Standard 327×161cm, jumbo 330×165cm, extra 310×152cm; 15/20/30mm.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Categories", path: "/categories" },
            { name: "Quartz Slabs", path: "/categories/quartz-slabs" },
          ]),
        ),
      },
    ],
  }),
  component: QuartzSlabsPage,
});

const collections = [
  { name: "Terra Series", code: "4535 Terre Grey", img: slab1, tone: "Warm grey with soft veining" },
  { name: "Signature Whites", code: "White Marble Look", img: slab2, tone: "Crisp whites with dramatic veins" },
  { name: "Natural Tones", code: "Beige & Sand", img: slab3, tone: "Earthy neutrals inspired by nature" },
];

const features = [
  "Seamless designs · high hygiene",
  "Slab sizes cut precisely to project spec",
  "Slab sizes: 327 × 161 cm (standard)",
  "Jumbo slab: 330 × 165 cm",
  "Extra slab: 310 × 152 cm",
  "Thickness: 15 / 20 / 30 mm",
  "Surface: Polished · Matte",
  "Over 90% natural quartz mineral",
];

const applications = [
  "Wall cladding",
  "Countertops",
  "Kitchen islands",
  "Flooring",
  "Staircases",
  "Backsplashes",
  "Tables",
  "Interior decoration",
];

const comparison = [
  { name: "Scratch resistance", quartz: true, granite: true, laminate: false, acrylic: false },
  { name: "Flexural strength", quartz: true, granite: false, laminate: false, acrylic: false },
  { name: "Chemical resistance", quartz: true, granite: false, laminate: false, acrylic: true },
  { name: "Non-porous", quartz: true, granite: false, laminate: false, acrylic: true },
  { name: "Stain proof", quartz: true, granite: false, laminate: true, acrylic: true },
  { name: "Hygienic surface", quartz: true, granite: false, laminate: false, acrylic: true },
  { name: "Heat resistance", quartz: true, granite: true, laminate: false, acrylic: false },
  { name: "Color stability", quartz: true, granite: false, laminate: true, acrylic: true },
];

function QuartzSlabsPage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <img src={kitchen} alt="" aria-hidden="true" width={1600} height={1067} loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="container-x">
          <Breadcrumbs
            items={[
              { label: isAr ? "الرئيسية" : "Home", to: "/" },
              { label: isAr ? "المنتجات" : "Categories", to: "/categories" },
              { label: isAr ? "ألواح الكوارتز" : "Quartz Slabs" },
            ]}
          />
          <span className="badge-gold">03 · EGY QUARTZ</span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            {isAr ? "الكوارتز المصنّع — السطح المصري الأصلي." : "The original Egyptian quartz surface."}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {isAr
              ? "ألواح كوارتز مصنّعة تجمع صلابة الكوارتز الطبيعي مع أحدث تقنيات التصنيع لتقديم ألوان وأنماط راقية للمشاريع السكنية والفندقية."
              : "Engineered quartz slabs that unite the toughness of natural quartz with the latest manufacturing technology — elegant colors and patterns for residential and hospitality projects."}
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-gold">Collections</span>
              <h2 className="mt-2 font-display text-4xl">{isAr ? "المجموعات الرئيسية" : "Signature collections"}</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden bg-card border border-border"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={c.img} alt={`${c.name} — ${c.tone} Egyptian engineered quartz slab`} width={800} height={1000} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-gold">{c.code}</div>
                  <h3 className="mt-2 font-display text-2xl">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.tone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Applications */}
      <section className="py-16">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl bg-ink text-cream p-10">
            <div className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
              {isAr ? "المواصفات" : "Slab specifications"}
            </div>
            <h3 className="font-display text-3xl text-cream">
              {isAr ? "أحجام تسمح بتصاميم كبيرة بلا فواصل." : "Sizes that allow seamless, large-format designs."}
            </h3>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-cream/85">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold mb-4">{isAr ? "التطبيقات" : "Applications"}</div>
            <h3 className="font-display text-3xl">
              {isAr ? "على كل سطح تلمسه الحياة." : "On every surface life touches."}
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {applications.map((a) => (
                <div key={a} className="rounded-lg border border-border bg-card px-4 py-3 text-sm">{a}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.22em] text-gold mb-3">{isAr ? "مقارنة" : "Comparison"}</div>
          <h2 className="font-display text-4xl mb-8">
            {isAr ? "لماذا الكوارتز المصنّع؟" : "Why engineered quartz?"}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left rtl:text-right px-6 py-4 font-medium">Property</th>
                  <th className="px-6 py-4 font-medium text-gold">EGY Quartz</th>
                  <th className="px-6 py-4 font-medium text-muted-foreground">Granite</th>
                  <th className="px-6 py-4 font-medium text-muted-foreground">Laminate</th>
                  <th className="px-6 py-4 font-medium text-muted-foreground">Acrylic</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.name} className="border-t border-border">
                    <td className="px-6 py-4 text-left rtl:text-right">{row.name}</td>
                    <Cell v={row.quartz} highlight />
                    <Cell v={row.granite} />
                    <Cell v={row.laminate} />
                    <Cell v={row.acrylic} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

function Cell({ v, highlight }: { v: boolean; highlight?: boolean }) {
  return (
    <td className="px-6 py-4 text-center">
      {v ? (
        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${highlight ? "bg-gold text-ink" : "bg-primary/10 text-primary"}`}>
          <Check className="h-3.5 w-3.5" />
        </span>
      ) : (
        <span className="text-muted-foreground/40">—</span>
      )}
    </td>
  );
}
