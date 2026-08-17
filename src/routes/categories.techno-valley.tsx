import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, Sprout, ShieldCheck, FlaskConical, Headphones } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";
import heroImg from "@/assets/techno-valley-1.jpg";
import profileAsset from "@/assets/techno-valley-profile.pdf.asset.json";

export const Route = createFileRoute("/categories/techno-valley")({
  head: () => ({
    meta: [
      { title: "Fertilizers & Crop Protection | Nile Stone" },
      {
        name: "description",
        content:
          "Egyptian ISO-certified fertilizers and crop protection: water-soluble NPK grades, potassium sulphate, MAP, humic and fulvic acids, chelated micronutrients and bio-stimulants.",
      },
      { property: "og:title", content: "Fertilizers & Crop Protection | Nile Stone" },
      {
        property: "og:description",
        content: "ISO-certified Egyptian fertilizers, micronutrients and bio-stimulants prepared for export.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://nile-exports.lovable.app/categories/techno-valley" },
    ],
    links: [{ rel: "canonical", href: "https://nile-exports.lovable.app/categories/techno-valley" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Egyptian Fertilizers & Crop Protection Inputs",
          category: "Agricultural Inputs",
          brand: { "@type": "Brand", name: "Nile Stone Exports" },
          countryOfOrigin: "EG",
          description:
            "ISO 9001 and ISO 14001 certified Egyptian fertilizers, water-soluble NPK grades, micronutrient chelates, bio-stimulants and crop protection products for export markets.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Categories", path: "/categories" },
            { name: "Fertilizers & Crop Protection", path: "/categories/techno-valley" },
          ]),
        ),
      },
    ],
  }),
  component: TechnoValleyPage,
});

type Item = { name: string; spec?: string; use: { en: string; ar: string } };
type Group = { title: { en: string; ar: string }; intro: { en: string; ar: string }; items: Item[] };

const groups: Group[] = [
  {
    title: { en: "Water-Soluble NPK", ar: "أسمدة NPK كاملة الذوبان" },
    intro: {
      en: "Fully soluble compound grades for drip, sprinkler and foliar fertigation across every growth stage.",
      ar: "درجات مركّبة كاملة الذوبان للتنقيط والرش والتغذية الورقية في كل مراحل النمو.",
    },
    items: [
      { name: "NPK 19-19-19", spec: "19 – 19 – 19", use: { en: "Balanced nutrition for all stages.", ar: "تغذية متوازنة لكل المراحل." } },
      { name: "NPK 20-20-20", spec: "20 – 20 – 20", use: { en: "High-solubility balanced feed.", ar: "تركيبة متوازنة عالية الذوبان." } },
      { name: "NPK 10-50-10", spec: "10 – 50 – 10", use: { en: "Rooting, flowering and fruit set.", ar: "التجذير والإزهار والعقد." } },
      { name: "NPK 6-6-43", spec: "6 – 6 – 43", use: { en: "Fruit sizing and colouring.", ar: "تكبير الثمار وتحسين اللون." } },
      { name: "NPK 9-0-40", spec: "9 – 0 – 40", use: { en: "Potassium-led productive stage.", ar: "مرحلة إنتاج بقيادة البوتاسيوم." } },
      { name: "NPK 0-0-50", spec: "0 – 0 – 50", use: { en: "Pure potassium top-up.", ar: "دعم بوتاسي خالص." } },
      { name: "Techno Valley 20-20-20", spec: "20 – 20 – 20", use: { en: "Multi-purpose bucket pack.", ar: "عبوة متعددة الأغراض." } },
      { name: "Techno Valley 10-40-10", spec: "10 – 40 – 10", use: { en: "Phosphorus push after planting.", ar: "دفعة فوسفور بعد الزراعة." } },
      { name: "Techno Valley 5-5-40", spec: "5 – 5 – 40", use: { en: "Late-season potassium feed.", ar: "تغذية بوتاسية في نهاية الموسم." } },
    ],
  },
  {
    title: { en: "Granular & Bagged Grades", ar: "الأسمدة المحبّبة والمعبأة" },
    intro: {
      en: "Bagged compound and straight fertilizers for soil application on open-field and reclaimed land.",
      ar: "أسمدة مركّبة وفردية معبأة للإضافة الأرضية في الحقل المفتوح والأراضي المستصلحة.",
    },
    items: [
      { name: "Techno Valley 12-12-36", spec: "12 – 12 – 36", use: { en: "Potassium-rich productive blend.", ar: "خليط إنتاجي غني بالبوتاسيوم." } },
      { name: "Techno Valley 34-10-10", spec: "34 – 10 – 10", use: { en: "High nitrogen for vegetative growth.", ar: "نيتروجين عالٍ للنمو الخضري." } },
      { name: "Techno Valley 18-18-5", spec: "18 – 18 – 5", use: { en: "Starter blend for early stages.", ar: "خليط بادئ للمراحل المبكرة." } },
      { name: "Techno Valley 12-12-17", spec: "12 – 12 – 17", use: { en: "General field maintenance feed.", ar: "تغذية عامة لصيانة المحصول." } },
      { name: "Potassium Sulphate", spec: "0 – 0 – 50", use: { en: "Chloride-free potassium source.", ar: "مصدر بوتاسيوم خالٍ من الكلور." } },
      { name: "MAP", spec: "12 – 61 – 0", use: { en: "Mono-ammonium phosphate for rooting.", ar: "فوسفات أحادي الأمونيوم للتجذير." } },
      { name: "Andol 5%", spec: "Soil amendment", use: { en: "Soil treatment additive.", ar: "مُحسِّن ومعالج للتربة." } },
      { name: "Mix Fert Plus", spec: "Compound mix", use: { en: "Complete multi-nutrient blend.", ar: "خليط متكامل متعدد العناصر." } },
    ],
  },
  {
    title: { en: "Liquid Formulations", ar: "التركيبات السائلة" },
    intro: {
      en: "Concentrated liquid fertilizers and correctors for foliar programmes and injection systems.",
      ar: "أسمدة سائلة مركّزة ومصححات للرش الورقي وأنظمة الحقن.",
    },
    items: [
      { name: "Techno Valley Cal", spec: "Calcium", use: { en: "Firmer fruit, less cracking and blossom-end rot.", ar: "صلابة الثمار وتقليل التشقق وعفن الطرف الزهري." } },
      { name: "Techno Valley Amino", spec: "Amino acids", use: { en: "Stress recovery and faster nutrient uptake.", ar: "تجاوز الإجهاد وتسريع امتصاص العناصر." } },
      { name: "Techno Valley Phos", spec: "Phosphorus", use: { en: "Root and flower stimulation.", ar: "تنشيط الجذور والإزهار." } },
      { name: "Techno Valley Pota Setrite", spec: "Potassium citrate", use: { en: "Most absorbable potassium form.", ar: "أسرع صور البوتاسيوم امتصاصاً." } },
      { name: "Techno Valley Cayto", spec: "Cytokinin blend", use: { en: "Cell division and uniform fruit set.", ar: "انقسام الخلايا وانتظام العقد." } },
      { name: "Valley Sal", spec: "Salinity corrector", use: { en: "Helps crops tolerate saline soil and water.", ar: "يساعد المحصول على تحمّل ملوحة التربة والمياه." } },
      { name: "Techno Valley Mix", spec: "Multi-element liquid", use: { en: "Corrects several deficiencies at once.", ar: "يعالج عدة نواقص في وقت واحد." } },
    ],
  },
  {
    title: { en: "Micronutrients & Bio-stimulants", ar: "العناصر الصغرى والمحفزات الحيوية" },
    intro: {
      en: "Chelated micro-elements, humic substances and algae-based stimulants that raise yield and quality.",
      ar: "عناصر صغرى مخلّبية ومواد هيوميك ومحفزات من مستخلص الطحالب لرفع الإنتاج والجودة.",
    },
    items: [
      { name: "Techno Valley Humic", spec: "Humic acid", use: { en: "Soil structure and nutrient retention.", ar: "تحسين بناء التربة والاحتفاظ بالعناصر." } },
      { name: "Techno Valley Fulvic", spec: "Fulvic acid", use: { en: "Carrier that boosts element uptake.", ar: "ناقل يرفع كفاءة امتصاص العناصر." } },
      { name: "Techno Valley Iron", spec: "Chelated Fe", use: { en: "Prevents and treats iron chlorosis.", ar: "الوقاية من اصفرار نقص الحديد وعلاجه." } },
      { name: "Techno Valley Zinc", spec: "Chelated Zn", use: { en: "Growth hormone formation.", ar: "تكوين هرمونات النمو." } },
      { name: "Techno Valley Manganese", spec: "Chelated Mn", use: { en: "Enzyme activity and photosynthesis.", ar: "نشاط الإنزيمات والتمثيل الضوئي." } },
      { name: "Algae-X", spec: "Seaweed extract", use: { en: "Natural stimulant for vigour and stress tolerance.", ar: "محفز طبيعي للحيوية وتحمّل الإجهاد." } },
      { name: "Flower-Up", spec: "Flowering booster", use: { en: "More flowers and better fruit set.", ar: "زيادة الإزهار وتحسين العقد." } },
      { name: "Mix Fert", spec: "Micro-element mix", use: { en: "Balanced micronutrient correction.", ar: "تصحيح متوازن للعناصر الصغرى." } },
    ],
  },
];

const strengths = [
  {
    icon: Sprout,
    en: { t: "Own manufacturing", d: "Fertilizers produced and packed on modern production lines in Sadat City, Menoufia." },
    ar: { t: "تصنيع ذاتي", d: "أسمدة تُنتج وتُعبأ على خطوط إنتاج حديثة بمدينة السادات — المنوفية." },
  },
  {
    icon: ShieldCheck,
    en: { t: "ISO 9001 & ISO 14001", d: "Certified quality and environmental management across production." },
    ar: { t: "ISO 9001 و ISO 14001", d: "شهادات لإدارة الجودة والبيئة على مراحل الإنتاج." },
  },
  {
    icon: FlaskConical,
    en: { t: "Crop protection", d: "Pesticide range that controls pests with minimal environmental impact." },
    ar: { t: "وقاية المحاصيل", d: "مجموعة مبيدات تكافح الآفات بأقل أثر بيئي." },
  },
  {
    icon: Headphones,
    en: { t: "Agronomy support", d: "Technical guidance on product selection and application programmes." },
    ar: { t: "دعم فني زراعي", d: "إرشاد فني لاختيار المنتج وبرامج التطبيق." },
  },
];

function TechnoValleyPage() {
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
              { label: isAr ? "الأسمدة ووقاية المحاصيل" : "Fertilizers & Crop Protection" },
            ]}
          />
          <span className="badge-gold">05 · {isAr ? "المنتج الخامس" : "Category Five"}</span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] max-w-3xl">
            {isAr ? "الأسمدة ووقاية المحاصيل" : "Fertilizers & Crop Protection"}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {isAr
              ? "خط إنتاج مصري معتمد بشهادات ISO لأسمدة ذائبة ومحبّبة، مصححات سائلة، عناصر صغرى مخلّبية ومحفزات حيوية — مع مبيدات زراعية، وكل ذلك مجهّز للتصدير بشهادات تحليل ومنشأ."
              : "An ISO-certified Egyptian production line covering soluble and granular fertilizers, liquid correctors, chelated micronutrients and bio-stimulants — alongside crop protection products, all prepared for export with analysis and origin certificates."}
          </p>

          <div className="mt-10 grid sm:grid-cols-4 gap-4">
            {strengths.map((s) => {
              const Icon = s.icon;
              const c = isAr ? s.ar : s.en;
              return (
                <div key={c.t} className="border-t border-gold/40 pt-3">
                  <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                  <div className="mt-2 font-display text-lg leading-tight">{c.t}</div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-border">
            <img
              src={heroImg}
              alt="Egyptian fertilizer sacks and liquid formulations palletised for export"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x space-y-16">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="text-xs uppercase tracking-[0.22em] text-gold">
                Group {String(idx + 1).padStart(2, "0")}
              </div>
              <h2 className="mt-3 font-display text-4xl">{isAr ? g.title.ar : g.title.en}</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {isAr ? g.intro.ar : g.intro.en}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p) => (
                  <div key={p.name} className="rounded-2xl bg-card border border-border p-6 hover:border-gold/60 transition">
                    <h3 className="font-display text-xl leading-tight">{p.name}</h3>
                    {p.spec && <div className="mt-4 font-mono text-lg text-gold">{p.spec}</div>}
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {isAr ? p.use.ar : p.use.en}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="container-x text-center">
          <p className="text-sm text-muted-foreground mb-6">
            {isAr ? "بروفايل الشركة الكامل بالمنتجات والاعتمادات (PDF)" : "Full company profile with products and certifications (PDF)"}
          </p>
          <a
            href={profileAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            download="techno-valley-profile.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {isAr ? "تحميل البروفايل" : "Download company profile"}
          </a>
        </div>
      </section>
    </>
  );
}
