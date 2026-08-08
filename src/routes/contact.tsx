import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nile Stone Exports | Export Enquiries" },
      {
        name: "description",
        content:
          "Contact Nile Stone Exports for quotes, samples, and shipping enquiries. Our export desk replies within 24 hours in English and Arabic.",
      },
      { property: "og:title", content: "Contact Nile Stone Exports | Export Enquiries" },
      { property: "og:description", content: "Contact Nile Stone Exports for quotes, samples, and shipping enquiries. Our export desk replies within 24 hours in English and Arabic." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nile-exports.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://nile-exports.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Nile Stone Exports",
          url: "https://nile-exports.lovable.app/contact",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";
  const [form, setForm] = useState({ name: "", email: "", country: "", product: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isAr ? "تم إرسال طلبك بنجاح — سنعاود التواصل خلال 24 ساعة." : "Enquiry sent — we'll reply within 24 hours.");
    setForm({ name: "", email: "", country: "", product: "", message: "" });
  };

  return (
    <section className="py-20">
      <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <span className="badge-gold">{isAr ? "تواصل معنا" : "Get in touch"}</span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
            {isAr ? "اطلب عرض سعر أو استفسر عن أي منتج." : "Request a quote or ask about any product."}
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            {isAr
              ? "فريق التصدير لدينا يردّ خلال 24 ساعة عمل مع تفاصيل التسعير، المقاسات المتاحة، ومدة الشحن إلى ميناء بلدك."
              : "Our export desk replies within 24 business hours with pricing, available specs, and lead time to your port."}
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-full hairline-gold flex items-center justify-center text-gold shrink-0"><Mail className="h-4 w-4" /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{isAr ? "البريد الإلكتروني" : "Email"}</div>
                <a href="mailto:export@nilestone.example" className="font-display text-lg hover:text-gold">export@nilestone.example</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-full hairline-gold flex items-center justify-center text-gold shrink-0"><Phone className="h-4 w-4" /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{isAr ? "الهاتف / واتساب" : "Phone / WhatsApp"}</div>
                <a href="tel:+201559967556" className="font-display text-lg hover:text-gold" dir="ltr">+20 (0) 155 996 7556</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-full hairline-gold flex items-center justify-center text-gold shrink-0"><MapPin className="h-4 w-4" /></span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{isAr ? "العنوان" : "Address"}</div>
                <div className="font-display text-lg">{isAr ? "القاهرة · العين السخنة، مصر" : "Cairo · Ain Sokhna, Egypt"}</div>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={submit} className="rounded-2xl bg-card border border-border p-8 md:p-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label={isAr ? "الاسم" : "Name"} value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field type="email" label={isAr ? "البريد الإلكتروني" : "Email"} value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field label={isAr ? "الدولة" : "Country"} value={form.country} onChange={(v) => setForm({ ...form, country: v })} />
            <Field label={isAr ? "المنتج المطلوب" : "Product of interest"} value={form.product} onChange={(v) => setForm({ ...form, product: v })} placeholder={isAr ? "بدائل رخام / كوارتز خام / ألواح كوارتز" : "Marble alternatives / raw quartz / slabs"} />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{isAr ? "التفاصيل" : "Message"}</label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
              placeholder={isAr ? "الكميات، المقاسات، ميناء الوصول..." : "Quantities, sizes, destination port..."}
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
          >
            <Send className="h-4 w-4" />
            {isAr ? "إرسال الطلب" : "Send enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
