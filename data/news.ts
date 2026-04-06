export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categorySlug: string;
  date: string;
  content: string;
}

export const newsCategories = [
  { slug: "eklemeli-imalat", name: "Eklemeli İmalat", nameEn: "Additive Manufacturing" },
  { slug: "kompozit", name: "Kompozit", nameEn: "Composite" },
  { slug: "insansiz-araclar", name: "İnsansız Araçlar", nameEn: "Unmanned Vehicles" },
  { slug: "surdurulebilirlik", name: "Sürdürülebilirlik", nameEn: "Sustainability" },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "turkiyenin-ilk-buyuk-olcekli-metal-am-tesisi",
    title: "Türkiye'nin İlk Büyük Ölçekli Metal AM Tesisi",
    excerpt: "Sanayi ve Teknoloji Bakanlığı, metal eklemeli imalat alanında yeni teşvik paketleri açıkladı. Yerli üretim kapasitesi 3 katına çıkacak.",
    image: "/images/news-am.png",
    category: "Eklemeli İmalat",
    categorySlug: "eklemeli-imalat",
    date: "2025-03-20",
    content: "<h2>Türkiye'nin Metal AM Atılımı</h2><p>Sanayi ve Teknoloji Bakanlığı, metal eklemeli imalat alanında yeni teşvik paketleri açıkladı. Yerli üretim kapasitesi 3 katına çıkacak. Bu yatırım, Türkiye'nin ileri üretim teknolojilerindeki konumunu güçlendirecek.</p><p>Yeni tesis, havacılık, savunma ve otomotiv sektörlerinin ihtiyaçlarını karşılayacak kapasitede olacak. SLM ve EBM teknolojileri kullanılarak yüksek hassasiyetli metal parçalar üretilebilecek.</p>",
  },
  {
    slug: "waam-teknolojisinde-devrim",
    title: "WAAM Teknolojisinde Devrim",
    excerpt: "Çoklu tel besleme sistemleri, Wire Arc Additive Manufacturing üretim hızını 5 kat artırdı. Havacılık sektörü yoğun ilgi gösteriyor.",
    image: "/images/news-am.png",
    category: "Eklemeli İmalat",
    categorySlug: "eklemeli-imalat",
    date: "2025-03-18",
    content: "<h2>WAAM'da Yeni Dönem</h2><p>Çoklu tel besleme sistemleri, Wire Arc Additive Manufacturing üretim hızını 5 kat artırdı. Havacılık sektörü bu gelişmeye yoğun ilgi gösteriyor.</p>",
  },
  {
    slug: "avrupada-iha-regulasyonlari",
    title: "Avrupa'da İHA Regülasyonları",
    excerpt: "EASA'nın yeni düzenlemeleri, insansız hava araçları sektörünü yeniden şekillendirecek. Sertifikasyon süreçleri güncellendi.",
    image: "/images/news-iha.png",
    category: "İnsansız Araçlar",
    categorySlug: "insansiz-araclar",
    date: "2025-03-15",
    content: "<h2>EASA Yeni Düzenlemeler</h2><p>EASA'nın yeni düzenlemeleri, insansız hava araçları sektörünü yeniden şekillendirecek. Sertifikasyon süreçleri güncellendi.</p>",
  },
  {
    slug: "karbon-fiber-geri-donusumu",
    title: "Karbon Fiber Geri Dönüşümü",
    excerpt: "Yeni piroliz teknolojisiyle geri dönüştürülen karbon fiberlerde mekanik özellikler %90 oranında korunuyor.",
    image: "/images/bg2.png",
    category: "Kompozit",
    categorySlug: "kompozit",
    date: "2025-03-12",
    content: "<h2>Karbon Fiber Geri Dönüşümünde Atılım</h2><p>Yeni piroliz teknolojisiyle geri dönüştürülen karbon fiberlerde mekanik özellikler %90 oranında korunuyor. Bu gelişme, kompozit endüstrisinde sürdürülebilirlik açısından önemli bir adım.</p>",
  },
  {
    slug: "surdurulebilir-enerji-yatirimlari",
    title: "Sürdürülebilir Enerji Yatırımları",
    excerpt: "2025 ilk çeyreğinde yenilenebilir enerji projelerine yapılan yatırımlar %23 arttı. Türkiye bölgesel lider konumda.",
    image: "/images/news-energy.png",
    category: "Sürdürülebilirlik",
    categorySlug: "surdurulebilirlik",
    date: "2025-03-10",
    content: "<h2>Enerji Yatırımlarında Rekor</h2><p>2025 ilk çeyreğinde yenilenebilir enerji projelerine yapılan yatırımlar %23 arttı. Türkiye bölgesel lider konumda.</p>",
  },
  {
    slug: "denizalti-idalari",
    title: "Denizaltı İDA'lar",
    excerpt: "Otonom sualtı araçları, denizaltı boru hattı denetim maliyetlerini %60 düşürdü. Enerji sektörü yoğun talep gösteriyor.",
    image: "/images/news-iha.png",
    category: "İnsansız Araçlar",
    categorySlug: "insansiz-araclar",
    date: "2025-03-07",
    content: "<h2>Sualtı Otonom Sistemleri</h2><p>Otonom sualtı araçları, denizaltı boru hattı denetim maliyetlerini %60 düşürdü. Enerji sektörü yoğun talep gösteriyor.</p>",
  },
  {
    slug: "lsam-ile-havacilik-bileseni",
    title: "LSAM ile Havacılık Bileşeni",
    excerpt: "Large Scale Additive Manufacturing ile üretilen ilk sertifikalı havacılık bileşeni onaylandı. Maliyet %40 düştü.",
    image: "/images/news-am.png",
    category: "Eklemeli İmalat",
    categorySlug: "eklemeli-imalat",
    date: "2025-03-03",
    content: "<h2>Havacılıkta LSAM Dönemi</h2><p>Large Scale Additive Manufacturing ile üretilen ilk sertifikalı havacılık bileşeni onaylandı. Maliyet %40 düştü.</p>",
  },
  {
    slug: "turkiye-kompozit-ihracati",
    title: "Türkiye Kompozit İhracatı",
    excerpt: "Türk kompozit sektörü 2025'te %35 büyüme kaydetti. Otomotiv ve havacılık başlıca ihracat kalemleri arasında.",
    image: "/images/bg2.png",
    category: "Kompozit",
    categorySlug: "kompozit",
    date: "2025-02-28",
    content: "<h2>Kompozit İhracatında Rekor</h2><p>Türk kompozit sektörü 2025'te %35 büyüme kaydetti. Otomotiv ve havacılık başlıca ihracat kalemleri arasında.</p>",
  },
];

export function getNewsPost(slug: string): NewsPost | undefined {
  return newsPosts.find((p) => p.slug === slug);
}
