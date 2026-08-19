import { createFileRoute } from "@tanstack/react-router";
import { useId, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { useI18n } from "@/lib/i18n";
import { submitEnquiry } from "@/lib/enquiries.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Route Export | Export Enquiries" },
      {
        name: "description",
        content:
          "Contact Route Export for quotes, samples, and shipping enquiries. Our export desk replies within 24 hours in English and Arabic.",
      },
      { property: "og:title", content: "Contact Route Export | Export Enquiries" },
      {
        property: "og:description",
        content:
          "Contact Route Export for quotes, samples, and shipping enquiries. Our export desk replies within 24 hours in English and Arabic.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://routeexport.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://routeexport.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Route Export",
          url: "https://routeexport.lovable.app/contact",
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
  const [sending, setSending] = useState(false);
  const send = useServerFn(submitEnquiry);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await send({ data: form });
      toast.success(
        isAr
          ? "تم إرسال طلبك بنجاح — سنعاود التواصل خلال 24 ساعة."
          : "Enquiry sent — we'll reply within 24 hours.",
      );
      setForm({ name: "", email: "", country: "", product: "", message: "" });
    } catch {
      toast.error(
        isAr
          ? "تعذّر إرسال الطلب. برجاء المحاولة مرة أخرى أو مراسلتنا على البريد الإلكتروني."
          : "We couldn't send your enquiry. Please try again or email us directly.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <span className="badge-gold">{isAr ? "تواصل معنا" : "Get in touch"}</span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl leading-tight">
            {isAr
              ? "اطلب عرض سعر أو استفسر عن أي منتج."
              : "Request a quote or ask about any product."}
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            {isAr
              ? "فريق التصدير لدينا يردّ خلال 24 ساعة عمل مع تفاصيل التسعير، المقاسات المتاحة، ومدة الشحن إلى ميناء بلدك."
              : "Our export desk replies within 24 business hours with pricing, available specs, and lead time to your port."}
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-full hairline-gold flex items-center justify-center text-gold shrink-0">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {isAr ? "البريد الإلكتروني" : "Email"}
                </div>
                <a
                  href="mailto:export@routeexport.example"
                  className="font-display text-lg hover:text-gold"
                >
                  export@routeexport.example
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-full hairline-gold flex items-center justify-center text-gold shrink-0">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {isAr ? "الهاتف / واتساب" : "Phone / WhatsApp"}
                </div>
                <a
                  href="tel:+201559967556"
                  className="font-display text-lg hover:text-gold"
                  dir="ltr"
                >
                  +20 (0) 155 996 7556
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="h-10 w-10 rounded-full hairline-gold flex items-center justify-center text-gold shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {isAr ? "العنوان" : "Address"}
                </div>
                <div className="font-display text-lg">{isAr ? "القاهرة، مصر" : "Cairo, Egypt"}</div>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl bg-card border border-border p-8 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field
              label={isAr ? "الاسم" : "Name"}
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              required
            />
            <Field
              type="email"
              label={isAr ? "البريد الإلكتروني" : "Email"}
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field
              label={isAr ? "الدولة" : "Country"}
              value={form.country}
              onChange={(v) => setForm({ ...form, country: v })}
            />
            <Field
              label={isAr ? "المنتج المطلوب" : "Product of interest"}
              value={form.product}
              onChange={(v) => setForm({ ...form, product: v })}
              placeholder={
                isAr
                  ? "بدائل رخام / كوارتز خام / ألواح كوارتز"
                  : "Marble alternatives / raw quartz / slabs"
              }
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
            >
              {isAr ? "التفاصيل" : "Message"}
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
              placeholder={
                isAr
                  ? "الكميات، المقاسات، ميناء الوصول..."
                  : "Quantities, sizes, destination port..."
              }
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {sending
              ? isAr
                ? "جارٍ الإرسال..."
                : "Sending..."
              : isAr
                ? "إرسال الطلب"
                : "Send enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
      >
        {label}
      </label>
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
