# تحديث التاجلاين: مش ستونز بس

الموقع بيقول إننا بنصدّر "حجر/أسطح بناء" بس، بس احنا دلوقتي بنصدّر كمان الأسمدة والمدخلات الزراعية. هنحدّث نسخة الهيرو والفوتر لتعكس النطاق الموسّع.

## الأماكن اللي هتتعدّل

### 1. `src/routes/index.tsx` — عنوان الهيرو (H1)
- **EN الحالي:** `Egyptian stone, exported worldwide.`
- **EN الجديد:** `Egyptian exports, delivered worldwide.`
- **AR الحالي:** `حجارة مصر إلى العالم.`
- **AR الجديد:** `صادرات مصر، إلى العالم.`

### 2. `src/routes/index.tsx` — فقرة الهيرو (p)
- **EN الحالي:** `A registered Egyptian export house delivering hand-picked building surfaces — marble slab alternatives, raw quartz aggregate, and engineered quartz slabs — to clients across the globe.`
- **EN الجديد:** `A registered Egyptian export house delivering hand-picked building surfaces and agricultural inputs — marble slab alternatives, raw quartz, engineered quartz slabs, and certified fertilizers — to clients across the globe.`
- **AR الحالي:** `شركة تصدير مصرية موثّقة تقدّم منتجات بناء مختارة بعناية — بدائل ألواح الرخام، الكوارتز الخام، وألواح الكوارتز المصنّعة — لعملائنا حول العالم.`
- **AR الجديد:** `شركة تصدير مصرية موثّقة تقدّم منتجات بناء ومدخلات زراعية مختارة بعناية — بدائل ألواح الرخام، الكوارتز الخام، ألواح الكوارتز المصنّعة، وأسمدة معتمدة — لعملائنا حول العالم.`

### 3. `src/components/site-footer.tsx` — وصف البراند
- **الحالي:** `Verified Egyptian exporter of premium building surfaces — marble slab alternatives, raw quartz, and engineered quartz slabs. Registered with the Egyptian Export Council.`
- **الجديد:** `Verified Egyptian exporter of premium building surfaces and agricultural inputs — marble slab alternatives, raw quartz, engineered quartz slabs, and certified fertilizers. Registered with the Egyptian Export Council.`

## من غير تغيير
- الـ SEO meta، الصور، الكاتيجوريز، وباقي الصفحات زي ما هي.
- نص الـ H1 بيفضل فيه `<span className="text-gradient-gold">` على الجزء التاني من الجملة بنفس التقسيمة.
