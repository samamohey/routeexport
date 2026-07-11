import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import factoryVideo from "@/assets/kayan-factory.mp4.asset.json";
import { useI18n } from "@/lib/i18n";

type Product = {
  id: number;
  name: string;
  permalink: string;
  short_description: string;
  sku: string;
  images: { src: string; alt: string }[];
};

export const Route = createFileRoute("/categories/marble-alternatives")({
  head: () => ({
    meta: [
      { title: "Marble Slab Alternative Panels from Egypt | Nile Stone Exports" },
      {
        name: "description",
        content:
          "Lightweight, moisture-resistant marble-look composite panels exported from Egypt. 60+ patterns, 1.22×2.80m, 3–6mm — ~1,200 pcs per 40' HC.",
      },
      { property: "og:title", content: "Marble Slab Alternative Panels from Egypt" },
      { property: "og:description", content: "60+ marble-look composite panels engineered in Egypt for global residential and commercial projects." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://nile-exports.lovable.app/categories/marble-alternatives" },
      { property: "og:image", content: "https://i0.wp.com/kayan-egy.net/wp-content/uploads/2025/06/61.png?fit=800%2C800&ssl=1" },
    ],
    links: [{ rel: "canonical", href: "https://nile-exports.lovable.app/categories/marble-alternatives" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Marble Slab Alternative Panels",
          category: "Building Materials",
          brand: { "@type": "Brand", name: "Nile Stone Exports" },
          countryOfOrigin: "EG",
          description:
            "Lightweight composite marble-look panels, 60+ patterns, 1.22×2.80m, 3–6mm thickness — exported from Egypt.",
        }),
      },
    ],
  }),
  component: MarblePage,
});

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function MarblePage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";
  const [playing, setPlaying] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["marble-products"],
    queryFn: async () => {
      const res = await fetch("/api/public/marble-products?per_page=60");
      if (!res.ok) throw new Error("Failed to load");
      return (await res.json()) as Product[];
    },
    staleTime: 5 * 60_000,
  });

  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-border">
        <div className="container-x">
          <span className="badge-gold">01 · {isAr ? "المنتج الأول" : "Category One"}</span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.05] max-w-3xl">
            {isAr ? "بدائل ألواح الرخام" : "Marble Slab Alternatives"}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {isAr
              ? "ألواح مركّبة خفيفة الوزن بمظهر رخامي فاخر — مقاومة للرطوبة والحرارة، تركيب سريع ونظيف، وصديقة للبيئة. نصدّرها بأكثر من ٦٠ نقشًا مختلفًا للمشاريع السكنية والتجارية."
              : "Composite panels with a luxurious marble finish — moisture and heat resistant, quick clean installation, and eco-friendly. Available in 60+ patterns for residential and commercial projects."}
          </p>

          <div className="mt-8 grid sm:grid-cols-4 gap-4 text-sm">
            {[
              { k: isAr ? "أنماط متاحة" : "Patterns", v: "60+" },
              { k: isAr ? "المقاسات" : "Panel size", v: "1.22 × 2.80 m" },
              { k: isAr ? "السماكة" : "Thickness", v: "3 – 6 mm" },
              { k: isAr ? "الحاوية" : "Per 40' HC", v: "~ 1,200 pcs" },
            ].map((s) => (
              <div key={s.k} className="border-t border-gold/40 pt-3">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
                <div className="mt-1 font-display text-2xl">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16">
        <div className="container-x">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-ink group">
            {!playing && (
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center text-cream z-10 bg-black/40 hover:bg-black/50 transition"
              >
                <span className="h-20 w-20 rounded-full bg-gold text-ink flex items-center justify-center shadow-2xl group-hover:scale-105 transition">
                  <Play className="h-8 w-8 ml-1" />
                </span>
                <span className="mt-6 text-xs uppercase tracking-[0.22em] text-gold">Factory Tour</span>
                <span className="mt-2 font-display text-2xl">
                  {isAr ? "شاهد المصنع الذي نصدّر منه" : "Inside our partner factory"}
                </span>
              </button>
            )}
            <video
              src={factoryVideo.url}
              className="h-full w-full object-cover"
              controls={playing}
              autoPlay={playing}
              playsInline
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container-x">
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-gold">Live catalog</span>
              <h2 className="mt-2 font-display text-4xl">
                {isAr ? "المنتجات المتاحة للتصدير" : "Available for export"}
              </h2>
            </div>
            {data && (
              <div className="text-sm text-muted-foreground">
                {data.length} {isAr ? "منتج" : "products"}
              </div>
            )}
          </div>

          {isLoading && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-muted rounded-xl" />
                  <div className="h-4 bg-muted rounded mt-3 w-2/3" />
                </div>
              ))}
            </div>
          )}
          {isError && (
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
              {isAr ? "تعذّر تحميل الكتالوج. حاول لاحقًا." : "Could not load the catalog. Please try again later."}
            </div>
          )}

          {data && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.map((p, i) => {
                const img = p.images?.[0]?.src;
                return (
                  <motion.a
                    key={p.id}
                    href={p.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 8) * 0.04 }}
                    className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-gold/60 transition"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      {img && (
                        <img
                          src={img}
                          alt={p.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-medium text-sm truncate">{p.name}</div>
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-gold shrink-0" />
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {stripHtml(p.short_description)}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
