export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: number;
  content: string;
}

export const blogCategories = [
  { slug: "eklemeli-imalat", name: "Eklemeli İmalat", nameEn: "Additive Manufacturing" },
  { slug: "kompozit", name: "Kompozit", nameEn: "Composite" },
  { slug: "insansiz-araclar", name: "İnsansız Araçlar", nameEn: "Unmanned Vehicles" },
  { slug: "surdurulebilirlik", name: "Sürdürülebilirlik", nameEn: "Sustainability" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "slm-ve-waam-metal-eklemeli-imalat",
    title: "SLM ve WAAM: Metal Eklemeli İmalatın İki Farklı Yaklaşımı",
    excerpt: "Selective Laser Melting ve Wire Arc Additive Manufacturing teknolojilerinin karşılaştırmalı analizi ve endüstriyel uygulama alanları.",
    image: "/images/blog-ei.png",
    category: "Eklemeli İmalat",
    categorySlug: "eklemeli-imalat",
    date: "2026-03-18",
    readTime: 8,
    content: "<h2>Metal Eklemeli İmalatın İki Devi</h2><p>Selective Laser Melting (SLM) ve Wire Arc Additive Manufacturing (WAAM), metal eklemeli imalat dünyasının iki temel teknolojisidir. Her iki yöntem de dijital modelden metal parça üretir, ancak yaklaşımları ve uygulama alanları farklılık gösterir.</p><h2>SLM Teknolojisi</h2><p>SLM, ince metal tozu tabakalarını lazer ile eritip katman katman birleştirerek parça üretir. Yüksek hassasiyet ve karmaşık geometri kapasitesi ile öne çıkar.</p><h2>WAAM Teknolojisi</h2><p>WAAM, tel besleme ve ark kaynağı kullanarak büyük ölçekli metal parçalar üretir. Üretim hızı ve maliyet avantajı ile dikkat çeker.</p>",
  },
  {
    slug: "karbon-fiber-uretiminde-yeni-nesil",
    title: "Karbon Fiber Üretiminde Yeni Nesil Yaklaşımlar",
    excerpt: "Karbon fiber üretim süreçlerindeki son yenilikler ve gelecek trendleri inceliyoruz.",
    image: "/images/blog-kt.png",
    category: "Kompozit",
    categorySlug: "kompozit",
    date: "2026-03-12",
    readTime: 6,
    content: "<h2>Karbon Fiber Üretiminin Geleceği</h2><p>Karbon fiber, hafifliği ve dayanıklılığı ile modern mühendisliğin vazgeçilmez malzemelerinden biridir. Son yıllarda üretim süreçlerindeki yenilikler, maliyetleri düşürürken performansı artırmaktadır.</p>",
  },
  {
    slug: "otonom-deniz-araclarinin-endustriyel-uygulamalari",
    title: "Otonom Deniz Araçlarının Endüstriyel Uygulamaları",
    excerpt: "İnsansız deniz araçlarının enerji, savunma ve araştırma sektörlerindeki kullanım alanları.",
    image: "/images/blog-iha.png",
    category: "İnsansız Araçlar",
    categorySlug: "insansiz-araclar",
    date: "2026-03-05",
    readTime: 7,
    content: "<h2>Denizlerde Otonom Devrim</h2><p>İnsansız deniz araçları (İDA), denizcilik sektöründe devrim yaratıyor. Enerji altyapı denetiminden oşinografi araştırmalarına kadar geniş bir yelpazede kullanılmaktadır.</p>",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
