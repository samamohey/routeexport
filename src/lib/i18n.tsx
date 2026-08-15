import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const dict = {
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.categories": { en: "Categories", ar: "المنتجات" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "brand.tagline": {
    en: "Egyptian Exports · Registered Trade House",
    ar: "شركة تصدير مصرية · مسجّلة رسمياً",
  },
  "cta.explore": { en: "Explore products", ar: "استكشف المنتجات" },
  "cta.contact": { en: "Request a quote", ar: "اطلب عرض سعر" },
  "cat.marble.title": { en: "Marble Slab Alternatives", ar: "بدائل ألواح الرخام" },
  "cat.marble.desc": {
    en: "Lightweight, moisture-resistant panels with a luxurious marble finish.",
    ar: "ألواح خفيفة الوزن ومقاومة للرطوبة بمظهر رخامي فاخر.",
  },
  "cat.raw.title": { en: "Raw Quartz Aggregate", ar: "الكوارتز الخام" },
  "cat.raw.desc": {
    en: "High-purity SiO₂ (>99.5%) from Egypt — powder to coarse grades.",
    ar: "كوارتز عالي النقاء (SiO₂ >99.5٪) من مصر بمقاسات متعددة.",
  },
  "cat.slab.title": { en: "Quartz Slabs — EGY QUARTZ", ar: "ألواح الكوارتز — EGY QUARTZ" },
  "cat.slab.desc": {
    en: "Engineered quartz surfaces for kitchens, floors, and cladding.",
    ar: "ألواح كوارتز مصنّعة للمطابخ والأرضيات والواجهات.",
  },
  "cat.fert.title": { en: "Agricultural Fertilizers", ar: "الأسمدة الزراعية" },
  "cat.fert.desc": {
    en: "Water-soluble NPK blends, potassium citrate and chelated micronutrients.",
    ar: "أسمدة NPK كاملة الذوبان وبوتاسيوم سيترات وعناصر صغرى مخلّبية.",
  },
  "footer.rights": {
    en: "All rights reserved.",
    ar: "جميع الحقوق محفوظة.",
  },
} satisfies Dict;

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Lang | null;
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof dict) => dict[key][lang];

  return (
    <I18nContext.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
