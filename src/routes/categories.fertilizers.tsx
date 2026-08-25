import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, Leaf } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import fertilizersImg from "@/assets/fertilizers-1.jpg";
import catalogAsset from "@/assets/alsafwa-fertilizers-catalog.pdf.asset.json";

export const Route = createFileRoute("/categories/fertilizers")({
  head: () => ({
    meta: [
      { title: "Egyptian Agricultural Fertilizers | Route Export" },
      {
        name: "description",
        content:
          "Export-grade Egyptian water-soluble NPK fertilizers and micronutrient chelates: 19-19-19, 20-20-20, 12-50-12, 6-6-43, potassium citrate, humic acid and more.",
      },
      { property: "og:title", content: "Egyptian Agricultural Fertilizers | Route Export" },
      {
        property: "og:description",
        content:
          "Water-soluble NPK blends, potassium citrate and chelated micronutrients produced in Egypt for export.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://routeexport.lovable.app/categories/fertilizers" },
    ],
    links: [{ rel: "canonical", href: "https://routeexport.lovable.app/categories/fertilizers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Egyptian Water-Soluble NPK Fertilizers",
          category: "Agricultural Fertilizers",
          brand: { "@type": "Brand", name: "Route Export" },
          countryOfOrigin: "EG",
          description:
            "Water-soluble NPK fertilizer blends, potassium citrate formulations and chelated micronutrients manufactured in Egypt for agricultural export markets.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Categories", path: "/categories" },
            { name: "Agricultural Fertilizers", path: "/categories/fertilizers" },
          ]),
        ),
      },
    ],
  }),
  component: FertilizersPage,
});

type Product = {
  name: string;
  npk: string;
  extra?: string;
  use: { en: string; ar: string };
};

type Line = {
  line: string;
  intro: { en: string; ar: string };
  products: Product[];
};

const lines: Line[] = [
  {
    line: "Golden Range",
    intro: {
      en: "Balanced, fully water-soluble blends for the vegetative and productive stages of field, vegetable and fruit crops.",
      ar: "تركيبات متوازنة كاملة الذوبان لمراحل النمو الخضري والإثمار لمحاصيل الحقل والخضر والفاكهة.",
    },
    products: [
      {
        name: "Golden Plant",
        npk: "19 – 19 – 19",
        extra: "MgO 0.5%",
        use: {
          en: "Balanced NPK with magnesium for chlorophyll formation and stronger photosynthesis.",
          ar: "تركيبة متوازنة مع الماغنسيوم لتكوين الكلوروفيل وزيادة كفاءة التمثيل الضوئي.",
        },
      },
      {
        name: "Leaf Pro",
        npk: "19 – 19 – 19",
        extra: "S 4.8%",
        use: {
          en: "Sulphur-enriched blend for leafy vegetables, onion, garlic and forage crops.",
          ar: "تركيبة غنية بالكبريت للخضر الورقية والبصل والثوم ومحاصيل العلف.",
        },
      },
      {
        name: "High Twenty",
        npk: "20 – 20 – 20",
        use: {
          en: "High-solubility balanced feed for all irrigation systems and foliar spraying.",
          ar: "تركيبة متوازنة عالية الذوبان لجميع نظم الري والرش الورقي.",
        },
      },
      {
        name: "Nitro Safwa",
        npk: "19 – 10 – 10",
        extra: "+ TE",
        use: {
          en: "High-nitrogen formula with trace elements for rapid vegetative growth.",
          ar: "تركيبة عالية النيتروجين مع العناصر الصغرى لدفع النمو الخضري السريع.",
        },
      },
      {
        name: "Golden Mark",
        npk: "10 – 50 – 10",
        use: {
          en: "High phosphorus for root establishment, flowering and fruit set.",
          ar: "نسبة فوسفور عالية لتقوية الجذور ودعم الإزهار والعقد.",
        },
      },
      {
        name: "Bono Mix",
        npk: "5 – 5 – 43",
        use: {
          en: "High potassium for fruit sizing, tubers and bulbs.",
          ar: "نسبة بوتاسيوم عالية لتكبير الثمار والدرنات والأبصال.",
        },
      },
      {
        name: "Safo Potas 45",
        npk: "0 – 0 – 45",
        extra: "Potassium citrate",
        use: {
          en: "Citrate potassium — the most absorbable form, ideal under stress conditions.",
          ar: "بوتاسيوم سيترات — أسرع صور البوتاسيوم امتصاصاً ومثالي في ظروف الإجهاد.",
        },
      },
    ],
  },
  {
    line: "Alsafwa Saif",
    intro: {
      en: "Water-soluble fertilizer series for ground application, drip and sprinkler systems.",
      ar: "سلسلة أسمدة ذائبة في الماء للإضافة الأرضية وأنظمة التنقيط والرش.",
    },
    products: [
      {
        name: "Alsafwa Saif 19-19-19",
        npk: "19 – 19 – 19",
        use: { en: "Balanced growth across all stages.", ar: "نمو متوازن في جميع المراحل." },
      },
      {
        name: "Alsafwa Saif 20-20-20",
        npk: "20 – 20 – 20",
        use: { en: "High-solubility balanced feed.", ar: "تركيبة متوازنة عالية الذوبان." },
      },
      {
        name: "Alsafwa Saif 19-15-15",
        npk: "19 – 15 – 15",
        use: {
          en: "High nitrogen for vegetative build-up.",
          ar: "نيتروجين عالٍ لبناء المجموع الخضري.",
        },
      },
      {
        name: "Alsafwa Saif 12-50-12",
        npk: "12 – 50 – 12",
        use: {
          en: "Root activation, flowering and fruit set.",
          ar: "تنشيط الجذور والإزهار والعقد.",
        },
      },
      {
        name: "Alsafwa Saif 6-6-43",
        npk: "6 – 6 – 43",
        use: {
          en: "Productive stage — size, hardness and colour.",
          ar: "مرحلة الإنتاج — الحجم والصلابة والتلوين.",
        },
      },
      {
        name: "Alsafwa Saif 0-0-45",
        npk: "0 – 0 – 45",
        extra: "Potassium citrate",
        use: { en: "Fast-response potassium source.", ar: "مصدر بوتاسيوم سريع الاستجابة." },
      },
      {
        name: "Alsafwa Saif 11-0-45",
        npk: "11 – 0 – 45",
        use: { en: "Fruit growth and sugar accumulation.", ar: "نمو الثمار وزيادة نسبة السكريات." },
      },
    ],
  },
  {
    line: "Alsafwa Fert",
    intro: {
      en: "High-purity soluble NPK grades for professional fertigation programmes.",
      ar: "درجات NPK ذائبة عالية النقاء لبرامج التسميد الاحترافية.",
    },
    products: [
      {
        name: "Safwa Fert 19-19-19",
        npk: "19 – 19 – 19",
        use: { en: "All-stage balanced nutrition.", ar: "تغذية متوازنة لكل المراحل." },
      },
      {
        name: "Safwa Fert 20-20-20",
        npk: "20 – 20 – 20",
        use: { en: "Balanced, highly soluble.", ar: "متوازن وعالي الذوبان." },
      },
      {
        name: "Safwa Fert 19-15-15",
        npk: "19 – 15 – 15",
        use: { en: "Nitrogen-led vegetative growth.", ar: "نمو خضري بقيادة النيتروجين." },
      },
      {
        name: "Safwa Fert 6-6-43",
        npk: "6 – 6 – 43",
        use: { en: "Potassium-rich productive feed.", ar: "تغذية إنتاجية غنية بالبوتاسيوم." },
      },
      {
        name: "Safwa Fert 0-0-45",
        npk: "0 – 0 – 45",
        extra: "Potassium citrate",
        use: { en: "Sizing and quality improvement.", ar: "تكبير الثمار وتحسين الجودة." },
      },
      {
        name: "Safwa Fert 11-0-45",
        npk: "11 – 0 – 45",
        use: { en: "Fruit filling and colouring.", ar: "امتلاء الثمار وتحسين اللون." },
      },
    ],
  },
  {
    line: "Alsafwa Dury",
    intro: {
      en: "Soluble NPK grades formulated for all irrigation systems and foliar use.",
      ar: "درجات NPK ذائبة مُصاغة لجميع نظم الري والاستخدام الورقي.",
    },
    products: [
      {
        name: "Alsafwa Dury 19-19-19",
        npk: "19 – 19 – 19",
        use: { en: "Balanced base fertilizer.", ar: "سماد أساسي متوازن." },
      },
      {
        name: "Alsafwa Dury 20-20-20",
        npk: "20 – 20 – 20",
        use: { en: "Balanced high-solubility grade.", ar: "درجة متوازنة عالية الذوبان." },
      },
      {
        name: "Alsafwa Dury 19-15-15",
        npk: "19 – 15 – 15",
        use: { en: "Vegetative growth support.", ar: "دعم النمو الخضري." },
      },
      {
        name: "Alsafwa Dury 12-50-12",
        npk: "12 – 50 – 12",
        use: { en: "Rooting, flowering and fruit set.", ar: "التجذير والإزهار والعقد." },
      },
      {
        name: "Alsafwa Dury 6-6-43",
        npk: "6 – 6 – 43",
        use: { en: "Productive-stage potassium.", ar: "بوتاسيوم لمرحلة الإنتاج." },
      },
      {
        name: "Alsafwa Dury 11-0-45",
        npk: "11 – 0 – 45",
        extra: "49% potassium citrate variant",
        use: { en: "Rapid potassium uptake.", ar: "امتصاص سريع للبوتاسيوم." },
      },
    ],
  },
  {
    line: "Trikal & Mixes",
    intro: {
      en: "Concentrated liquid and specialty blends for foliar programmes.",
      ar: "تركيبات سائلة ومركّزة متخصصة لبرامج الرش الورقي.",
    },
    products: [
      {
        name: "Trikal 25-18-25",
        npk: "25 – 18 – 25",
        extra: "S 6.5%",
        use: { en: "Concentrated balanced foliar feed.", ar: "تغذية ورقية مركّزة متوازنة." },
      },
      {
        name: "Trikal 6-43-6",
        npk: "6 – 43 – 6",
        use: {
          en: "Phosphorus push for rooting and flowering.",
          ar: "دفعة فوسفور للتجذير والإزهار.",
        },
      },
      {
        name: "Twenty Mix",
        npk: "20 – 20 – 20",
        use: { en: "Balanced multi-purpose mix.", ar: "خليط متوازن متعدد الأغراض." },
      },
      {
        name: "Bono Mix (High P)",
        npk: "4 – 44 – 4",
        use: { en: "Flowering and fruit-set booster.", ar: "منشّط الإزهار والعقد." },
      },
    ],
  },
];

type Specialty = { name: string; composition: string; use: { en: string; ar: string } };

const specialties: Specialty[] = [
  {
    name: "Humi Plus",
    composition: "Humic 32.5% · Fulvic 4% · Fe 0.8%",
    use: {
      en: "Soil conditioning and nutrient uptake.",
      ar: "تحسين التربة ورفع كفاءة امتصاص العناصر.",
    },
  },
  {
    name: "Multi Element",
    composition: "Chelated micro-element mix",
    use: { en: "Corrects multiple deficiencies at once.", ar: "يعالج نقص عدة عناصر في وقت واحد." },
  },
  {
    name: "Elite Fero",
    composition: "Chelated iron",
    use: { en: "Prevents and treats iron chlorosis.", ar: "الوقاية من اصفرار نقص الحديد وعلاجه." },
  },
  {
    name: "Safcon Zinc 6% / 13%",
    composition: "Chelated zinc",
    use: { en: "Zinc supply for growth hormones.", ar: "إمداد الزنك اللازم لهرمونات النمو." },
  },
  {
    name: "Elite Manganese 14%",
    composition: "Chelated manganese",
    use: { en: "Supports enzymes and photosynthesis.", ar: "يدعم الإنزيمات والتمثيل الضوئي." },
  },
  {
    name: "Mini Copper 6%",
    composition: "Copper",
    use: {
      en: "Strengthens tissues and disease tolerance.",
      ar: "يقوّي الأنسجة ويرفع تحمّل الأمراض.",
    },
  },
  {
    name: "Safo Calboro",
    composition: "Calcium + Boron",
    use: {
      en: "Fruit firmness and reduced flower drop.",
      ar: "صلابة الثمار وتقليل تساقط الأزهار.",
    },
  },
  {
    name: "Ultra Roots",
    composition: "Root stimulant blend",
    use: {
      en: "Accelerates root development after planting.",
      ar: "يسرّع نمو الجذور بعد الزراعة.",
    },
  },
  {
    name: "Safo Sal",
    composition: "N 6% · Fulvic 15% · CaO 12%",
    use: {
      en: "Helps crops handle saline soils.",
      ar: "يساعد المحاصيل على تحمّل الأراضي الملحية.",
    },
  },
  {
    name: "Fort K",
    composition: "Potassium concentrate",
    use: { en: "Late-season potassium top-up.", ar: "دعم بوتاسي في مراحل الإنتاج المتأخرة." },
  },
  {
    name: "Top Form",
    composition: "Liquid growth formula",
    use: { en: "General-purpose growth support.", ar: "دعم عام للنمو." },
  },
  {
    name: "Safo Potas 15",
    composition: "K₂O 15%",
    use: { en: "Light potassium maintenance dose.", ar: "جرعة بوتاسيوم خفيفة للصيانة." },
  },
];

function FertilizersPage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <>
      <section className="py-20 border-b border-border">
        <div className="container-x">
          <Breadcrumbs
            items={[
              { label: isAr ? "الرئيسية" : "Home", to: "/" },
              { label: isAr ? "المنتجات" : "Categories", to: "/categories" },
              { label: isAr ? "الأسمدة الزراعية" : "Agricultural Fertilizers" },
            ]}
          />
          <span className="badge-gold">04 · {isAr ? "المنتج الرابع" : "Category Four"}</span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] max-w-3xl">
            {isAr ? "الأسمدة الزراعية المصرية" : "Egyptian Agricultural Fertilizers"}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {isAr
              ? "أسمدة مركّبة كاملة الذوبان (NPK)، وبوتاسيوم سيترات، وعناصر صغرى مخلّبية — مُصنّعة في مصر ومجهّزة للتصدير بالحاويات مع شهادات التحليل والمنشأ."
              : "Fully water-soluble NPK compounds, potassium citrate grades and chelated micronutrients — manufactured in Egypt and prepared for container export with analysis and origin certificates."}
          </p>

          <div className="mt-10 grid sm:grid-cols-4 gap-4">
            {lines.map((l) => (
              <a
                key={l.line}
                href={`#line-${l.line.replace(/[^a-zA-Z]/g, "")}`}
                className="border-t border-gold/40 pt-3 hover:border-gold transition"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Line</div>
                <div className="mt-1 font-display text-xl">{l.line}</div>
                <div className="mt-2 text-xs text-gold">
                  {l.products.length} {isAr ? "منتج" : "products"}
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-border">
            <img
              src={fertilizersImg}
              alt="Water-soluble Egyptian NPK fertilizer bags palletised for export"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product lines */}
      <section className="py-16">
        <div className="container-x space-y-16">
          {lines.map((l, idx) => (
            <motion.div
              key={l.line}
              id={`line-${l.line.replace(/[^a-zA-Z]/g, "")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-xs uppercase tracking-[0.22em] text-gold">
                Line {String(idx + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-3 font-display text-4xl">{l.line}</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {isAr ? l.intro.ar : l.intro.en}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {l.products.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-2xl bg-card border border-border p-6 hover:border-gold/60 transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl leading-tight">{p.name}</h3>
                      <Leaf className="h-4 w-4 text-gold shrink-0 mt-1" />
                    </div>
                    <div className="mt-4 font-mono text-lg text-gold">{p.npk}</div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      N – P₂O₅ – K₂O
                    </div>
                    {p.extra && <div className="mt-2 text-xs text-muted-foreground">{p.extra}</div>}
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {isAr ? p.use.ar : p.use.en}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Specialty & micronutrients */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold">Line 06</div>
            <h2 className="mt-3 font-display text-4xl">
              {isAr ? "العناصر الصغرى والمنتجات المتخصصة" : "Micronutrients & Specialty Products"}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">
              {isAr
                ? "مخلّبات ومحفزات نمو تُستخدم مع برامج التسميد لعلاج نقص العناصر ورفع جودة المحصول."
                : "Chelates and biostimulants used alongside fertigation programmes to correct deficiencies and lift crop quality."}
            </p>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr className="text-start">
                    <th scope="col" className="px-5 py-3 text-start font-medium">
                      {isAr ? "المنتج" : "Product"}
                    </th>
                    <th scope="col" className="px-5 py-3 text-start font-medium">
                      {isAr ? "التركيب" : "Composition"}
                    </th>
                    <th scope="col" className="px-5 py-3 text-start font-medium">
                      {isAr ? "الاستخدام" : "Use"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specialties.map((s) => (
                    <tr key={s.name} className="border-t border-border/60">
                      <td className="px-5 py-3 font-medium">{s.name}</td>
                      <td className="px-5 py-3 text-muted-foreground">{s.composition}</td>
                      <td className="px-5 py-3 text-muted-foreground">
                        {isAr ? s.use.ar : s.use.en}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container-x text-center">
          <p className="text-sm text-muted-foreground mb-6">
            {isAr
              ? "الكتالوج الكامل بالتركيبات ومعدلات الاستخدام (PDF)"
              : "Full catalogue with compositions and dosage rates (PDF)"}
          </p>
          <a
            href={catalogAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            download="alsafwa-fertilizers-catalog.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
          >
            <Download className="h-4 w-4" />
            {isAr ? "تحميل كتالوج الأسمدة" : "Download fertilizer catalogue"}
          </a>
        </div>
      </section>
    </>
  );
}
