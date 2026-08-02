import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/categories/raw-quartz")({
  head: () => ({
    meta: [
      { title: "Raw Quartz Aggregate from Egypt — 45µm to 1200µm | Nile Stone Exports" },
      {
        name: "description",
        content:
          "High-purity Egyptian raw quartz aggregate (SiO₂ > 99.5%) in four particle grades: 45µm, 100–300µm, 300–700µm, 700–1200µm. Full ICP analysis and grain distribution.",
      },
      { property: "og:title", content: "Raw Quartz Aggregate from Egypt — 45µm to 1200µm" },
      { property: "og:description", content: "Four grades of high-purity Egyptian quartz for glass, ceramics, and engineered stone." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://nile-exports.lovable.app/categories/raw-quartz" },
    ],
    links: [{ rel: "canonical", href: "https://nile-exports.lovable.app/categories/raw-quartz" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Raw Quartz Aggregate (SiO₂ > 99.5%)",
          category: "Industrial Minerals",
          brand: { "@type": "Brand", name: "Nile Stone Exports" },
          countryOfOrigin: "EG",
          description:
            "Egyptian high-purity raw quartz from Mount Kamiliya, Ain Sokhna, in four particle grades for glass, ceramics, and engineered stone.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Categories", path: "/categories" },
            { name: "Raw Quartz Aggregate", path: "/categories/raw-quartz" },
          ]),
        ),
      },
    ],
  }),
  component: RawQuartzPage,
});

type Grade = {
  code: string;
  range: string;
  sio2: string;
  L: string;
  keySpecs: { name: string; value: string }[];
  distribution?: { size: string; pct: string }[];
};

const grades: Grade[] = [
  {
    code: "45 µm",
    range: "45 micron (powder)",
    sio2: "99.5%",
    L: "93.5+",
    keySpecs: [
      { name: "Al₂O₃", value: "0.1853" },
      { name: "Fe₂O₃", value: "0.0313" },
      { name: "CaO", value: "0.003" },
      { name: "Na₂O", value: "0.0189" },
      { name: "K₂O", value: "0.0183" },
      { name: "MgO", value: "0.0136" },
      { name: "MnO (PPM)", value: "11.1" },
      { name: "Li₂O (PPM)", value: "40.9" },
      { name: "CuO (PPM)", value: "3.9" },
      { name: "NiO (PPM)", value: "7.4" },
      { name: "TiO₂ (PPM)", value: "14.0" },
    ],
  },
  {
    code: "100 – 300 µm",
    range: "100 to 300 micron",
    sio2: "99.7%",
    L: "87+",
    keySpecs: [
      { name: "Al₂O₃", value: "0.0344" },
      { name: "Fe₂O₃", value: "0.0043" },
      { name: "CaO", value: "0.0925" },
      { name: "Na₂O", value: "0.0063" },
      { name: "K₂O", value: "0.0051" },
      { name: "MgO", value: "0.0033" },
      { name: "MnO (PPM)", value: "1.3" },
      { name: "Cr₂O₃ (PPM)", value: "0.9" },
      { name: "Li₂O (PPM)", value: "4.5" },
      { name: "TiO₂ (PPM)", value: "13.7" },
    ],
    distribution: [
      { size: "< 100 µm", pct: "8%" },
      { size: "100 – 300 µm", pct: "88%" },
      { size: "> 300 µm", pct: "4%" },
    ],
  },
  {
    code: "300 – 700 µm",
    range: "300 to 700 micron",
    sio2: "99.7%",
    L: "85+",
    keySpecs: [
      { name: "Al₂O₃", value: "0.0436" },
      { name: "Fe₂O₃", value: "0.0059" },
      { name: "CaO", value: "0.0146" },
      { name: "Na₂O", value: "0.0159" },
      { name: "K₂O", value: "0.0077" },
      { name: "MgO", value: "0.0058" },
      { name: "MnO (PPM)", value: "1.5" },
      { name: "Li₂O (PPM)", value: "5.8" },
      { name: "TiO₂ (PPM)", value: "14.0" },
    ],
    distribution: [
      { size: "< 300 µm", pct: "8%" },
      { size: "300 – 700 µm", pct: "88%" },
      { size: "> 700 µm", pct: "4%" },
    ],
  },
  {
    code: "700 – 1200 µm",
    range: "700 to 1200 micron",
    sio2: "99.7%",
    L: "83+",
    keySpecs: [
      { name: "Al₂O₃", value: "0.0282" },
      { name: "Fe₂O₃", value: "0.004" },
      { name: "CaO", value: "0.0067" },
      { name: "Na₂O", value: "0.0051" },
      { name: "K₂O", value: "0.0043" },
      { name: "MgO", value: "0.0028" },
      { name: "MnO (PPM)", value: "0.9" },
      { name: "Li₂O (PPM)", value: "1.3" },
      { name: "TiO₂ (PPM)", value: "7.8" },
    ],
    distribution: [
      { size: "< 700 µm", pct: "8%" },
      { size: "700 – 1200 µm", pct: "88%" },
      { size: "> 1200 µm", pct: "4%" },
    ],
  },
];

function RawQuartzPage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <>
      <section className="py-20 border-b border-border">
        <div className="container-x">
          <span className="badge-gold">02 · {isAr ? "المنتج الثاني" : "Category Two"}</span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] max-w-3xl">
            {isAr ? "الكوارتز الخام عالي النقاء" : "High-Purity Raw Quartz"}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {isAr
              ? "مصدر مصري من جبل كامليا — العين السخنة. نقاء SiO₂ يتجاوز ٩٩٫٥٪ في أربع مقاسات لصناعات الزجاج والسيراميك والكوارتز المصنّع."
              : "Sourced from Mount Kamiliya in Ain Sokhna, Egypt. SiO₂ purity above 99.5% across four grades for glass, ceramic, and engineered-stone industries."}
          </p>

          <div className="mt-10 grid sm:grid-cols-4 gap-4">
            {grades.map((g) => (
              <a key={g.code} href={`#grade-${g.code.replace(/\s/g, "")}`} className="border-t border-gold/40 pt-3 hover:border-gold transition">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Grade</div>
                <div className="mt-1 font-display text-xl">{g.code}</div>
                <div className="mt-2 text-xs text-gold">SiO₂ {g.sio2}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Grade details */}
      <section className="py-16">
        <div className="container-x space-y-16">
          {grades.map((g, idx) => (
            <motion.div
              key={g.code}
              id={`grade-${g.code.replace(/\s/g, "")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-[1fr_1.5fr] gap-10 rounded-2xl bg-card border border-border p-8 md:p-10"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-gold">Grade {String(idx + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-4xl">{g.code}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.range}</p>

                <dl className="mt-8 grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-gold pl-3 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-3">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">SiO₂</dt>
                    <dd className="font-display text-2xl mt-1">{g.sio2}</dd>
                  </div>
                  <div className="border-l-2 border-gold pl-3 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-3">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">L (color)</dt>
                    <dd className="font-display text-2xl mt-1">{g.L}</dd>
                  </div>
                </dl>

                {g.distribution && (
                  <div className="mt-8">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      {isAr ? "توزيع الحبيبات" : "Grain distribution"}
                    </div>
                    <ul className="space-y-2 text-sm">
                      {g.distribution.map((d) => (
                        <li key={d.size} className="flex items-center justify-between border-b border-border/60 pb-1.5">
                          <span className="text-muted-foreground">{d.size}</span>
                          <span className="font-medium">{d.pct}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-gold mb-4">ICP Analysis</div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {g.keySpecs.map((s) => (
                    <div key={s.name} className="flex items-center justify-between border-b border-border/60 py-2">
                      <span className="text-muted-foreground">{s.name}</span>
                      <span className="font-mono">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-xs text-muted-foreground">
                  Source: EGY QUARTZ (Quartz Production Complex), Wadi Om Atla — Kamiliya Mountain, Ain Sokhna, Suez, Egypt.
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-x text-center">
          <a
            href="mailto:export@nilestone.example?subject=Raw%20Quartz%20Datasheet%20Request"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
          >
            <Download className="h-4 w-4" />
            {isAr ? "اطلب داتا شيت كاملة PDF" : "Request full PDF datasheet"}
          </a>
        </div>
      </section>
    </>
  );
}
