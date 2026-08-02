import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import factory from "@/assets/factory-1.jpg";
import kitchen from "@/assets/kitchen-quartz.jpg";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nile Stone Exports — Registered Egyptian Export House" },
      {
        name: "description",
        content:
          "Nile Stone Exports is a registered Egyptian trade house exporting marble alternatives, raw quartz, and engineered quartz slabs. Certified factories, transparent logistics.",
      },
      { property: "og:title", content: "About Nile Stone Exports — Registered Egyptian Export House" },
      { property: "og:description", content: "Registered with the Egyptian Export Council. Curated factories, transparent logistics, worldwide shipping." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nile-exports.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://nile-exports.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <>
      <section className="pt-20 pb-16">
        <div className="container-x max-w-4xl">
          <span className="badge-gold">{isAr ? "من نحن" : "About Us"}</span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05]">
            {isAr
              ? "شركة تصدير مصرية تعمل بشفافية وحرفية."
              : "An Egyptian export house built on transparency and craft."}
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            {isAr
              ? "نحن شركة تصدير متخصصة في منتجات البناء والتشطيبات المصرية عالية الجودة. نمثّل مصانع مصرية مختارة بعناية، ونتولى نيابةً عن عملائنا كامل عملية التصدير — من الفحص والتوثيق إلى الشحن الدولي — لضمان وصول المنتج بأعلى مواصفات وأقل وقت."
              : "We are an export house dedicated to premium Egyptian building materials. We represent hand-selected Egyptian manufacturers and handle the entire export cycle on behalf of our clients — inspection, documentation, and international shipping — so that every product arrives at spec and on schedule."}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={factory}
            alt="Egyptian stone factory floor operated by Nile Stone Exports partners"
            width={800} height={600} loading="lazy" decoding="async" className="rounded-2xl aspect-[4/3] object-cover w-full"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            src={kitchen}
            alt="Finished Egyptian quartz surface installed on a kitchen countertop"
            width={800} height={600} loading="lazy" decoding="async" className="rounded-2xl aspect-[4/3] object-cover w-full md:mt-16"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid md:grid-cols-3 gap-10">
          {[
            {
              title: isAr ? "التوثيق الرسمي" : "Officially Registered",
              body: isAr
                ? "مسجّلون لدى هيئة تنمية الصادرات المصرية، ونعمل بشهادات منشأ وفواتير معتمدة لكل شحنة."
                : "Registered with the Egyptian Export Council. Every shipment leaves with certified origin documents and audited invoices.",
            },
            {
              title: isAr ? "جودة مختارة" : "Curated Quality",
              body: isAr
                ? "لا نصدّر إلا من مصانع أثبتنا جودتها بأنفسنا. فحص ما قبل الشحن حاضر في كل طلبية."
                : "We only ship from factories we've personally audited. Pre-shipment inspection is standard on every order.",
            },
            {
              title: isAr ? "لوجستيات مرنة" : "Flexible Logistics",
              body: isAr
                ? "شحن FOB أو CIF من موانئ الإسكندرية ودمياط والسخنة، مع دعم متعدد اللغات."
                : "FOB or CIF shipping from Alexandria, Damietta, and Sokhna ports, backed by a multilingual export desk.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-card border border-border p-8">
              <div className="h-10 w-10 rounded-full bg-gold/10 hairline-gold flex items-center justify-center text-gold font-display">◆</div>
              <h3 className="mt-5 font-display text-2xl">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
