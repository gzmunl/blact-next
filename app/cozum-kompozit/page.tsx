import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavScript from '@/components/NavScript'
import CardAnimator from '@/components/CardAnimator'

export const metadata: Metadata = {
  title: 'Kompozit Teknolojisi - Blact Systems',
  description: 'Karbon fiber üretiminden yapısal kompozit tasarıma, ileri malzeme karakterizasyonundan sürdürülebilir kompozit çözümlerine kadar kapsamlı mühendislik hizmetleri.',
  keywords: ['kompozit', 'karbon fiber', 'prepreg', 'yapısal tasarım', 'ileri malzeme', 'kompozit mühendislik'],
  openGraph: {
    title: 'Kompozit Teknolojisi - Blact Systems',
    description: 'Karbon fiber üretiminden yapısal kompozit tasarıma kapsamlı mühendislik hizmetleri.',
    images: ['/images/hero-laser.png'],
  },
  alternates: { canonical: 'https://blactsystems.com/cozum-kompozit' },
}

export default function KompozitPage() {
  return (
    <>
      <Navbar />
      <NavScript />

      <main>
      <section className="detail-hero hero-kompozit">
        <div className="container">
          <div className="section-label">Çözümlerimiz</div>
          <h1>Kompozit Teknolojisi</h1>
          <p>Karbon fiber üretiminden yapısal tasarıma, ileri malzeme karakterizasyonundan endüstriyel uygulama geliştirmeye kadar bütünleşik kompozit mühendislik çözümleri.</p>
        </div>
      </section>

      <CardAnimator selector=".detail-anim, .detail-body h2, .detail-body blockquote, .detail-body ul" />
      <section className="detail-content detail-content-light">
        <div className="container">
          <div className="detail-body">

            <div className="solution-features">
              <div className="solution-feature detail-anim" data-delay="0" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h3>Karbon Fiber Üretimi</h3>
                <p>PAN prekürsörden son ürüne kadar karbon fiber üretim süreçleri. Yüzey işlemleri ve prepreg sistemleri.</p>
              </div>
              <div className="solution-feature detail-anim" data-delay="1" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h3>Yapısal Kompozit Tasarım</h3>
                <p>Yük analizi, katmanlama optimizasyonu ve sonlu eleman analizi ile optimize edilmiş yapısal çözümler.</p>
              </div>
              <div className="solution-feature detail-anim" data-delay="2" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h3>İleri Malzeme Karakterizasyonu</h3>
                <p>Mekanik test, termal analiz ve mikroyapı inceleme ile kapsamlı malzeme değerlendirmesi.</p>
              </div>
            </div>

            <h2>Karbon Fiber Üretim Süreçleri</h2>
            <p>Karbon fiber üretimi, PAN (poliakrilonitril) prekürsör liflerinin kontrollü atmosferde yüksek sıcaklıklarda işlenmesiyle başlar. Stabilizasyon, karbonizasyon ve grafitizasyon aşamalarından geçen lifler, çelikten beş kat daha güçlü ve üç kat daha hafif bir malzemeye dönüşür. Her aşamadaki sıcaklık profili, atmosfer kontrolü ve gerilim parametreleri, son ürünün mekanik özelliklerini doğrudan belirler.</p>
            <p>Yüzey işlemleri, karbon fiberlerin matris malzemesiyle olan ara yüzey bağlanmasını optimize etmek için kritik öneme sahiptir. Elektrolitik oksidasyon, plazma işleme ve sizing uygulamaları ile fiber-matris uyumu en üst düzeye çıkarılır. Bu işlemler, kompozit yapının yük aktarım kapasitesini ve uzun vadeli dayanıklılığını belirleyen temel faktörlerdir.</p>
            <p>Prepreg sistemleri, karbon fiber kumaşların epoksi veya diğer termoset reçinelerle önceden emprenye edilmesiyle oluşturulur. Blact Systems olarak, farklı uygulama gereksinimlerine yönelik unidireksiyonel, dokuma ve çok eksenli prepreg formatlarında çözümler sunuyoruz. Otoklav ve otoklav dışı kürleme süreçlerinin optimizasyonu ile maksimum fiber hacim fraksiyonu ve minimum boşluk oranı hedeflenmektedir.</p>

            <h2>Yapısal Kompozit Tasarım</h2>
            <p>Yapısal kompozit tasarım, klasik laminasyon teorisinden ileri sonlu eleman analizine kadar geniş bir mühendislik yelpazesini kapsar. Her projenin başlangıcında detaylı yük analizi gerçekleştirilir; statik, dinamik, termal ve yorulma yükleri altında yapının davranışı modellenir. Katmanlama dizilimi, fiber oryantasyonları ve kalınlık dağılımı, çok amaçlı optimizasyon algoritmaları kullanılarak belirlenir.</p>
            <p>Sonlu eleman analizi (FEA), kompozit yapıların tasarım sürecinin vazgeçilmez bir parçasıdır. Tsai-Wu, Hashin ve Puck gibi hasar kriterleri kullanılarak başarısızlık modları öngörülür. İlerlemiş hasar analizi ile yapının son yük kapasitesi ve hasar toleransı değerlendirilir. Delaminasyon, matris çatlağı ve fiber kopması gibi hasar mekanizmalarının etkileşimi detaylı olarak modellenir.</p>
            <p>Tasarım sürecinde aeroelastik etkileşimler, titreşim karakteristikleri ve burkulma davranışı da dikkate alınır. Yapısal sağlık izleme (SHM) sensörlerinin entegrasyonu ile kullanım ömrü boyunca yapının durumu izlenebilir. Sertifikasyon gereksinimlerine uygun test programları planlanarak, tasarımın doğrulanması sağlanır.</p>

            <h2>Uygulama Alanları</h2>
            <ul>
              <li><strong>Havacılık:</strong> Gövde panelleri, kanat yapıları, kuyruk bileşenleri, iç mekan elemanları</li>
              <li><strong>Otomotiv:</strong> Şasi bileşenleri, gövde panelleri, süspansiyon parçaları, aerodinamik elemanlar</li>
              <li><strong>Denizcilik:</strong> Tekne gövdeleri, güverte yapıları, direk ve bom sistemleri</li>
              <li><strong>Enerji:</strong> Rüzgar türbini kanatları, basınç kapları, boru hatları</li>
              <li><strong>Spor Ekipmanları:</strong> Bisiklet çerçeveleri, tenis raketleri, kayak ekipmanları, yarış tekneleri</li>
            </ul>

            <h2>Sürdürülebilirlik ve Geri Dönüşüm</h2>
            <p>Kompozit malzemelerin yaşam döngüsü sürdürülebilirliği, sektörün öncelikli araştırma alanlarından biridir. Piroliz yöntemiyle karbon fiber geri kazanımı, termoset matris malzemenin kontrollü atmosferde ayrıştırılarak fiberlerin yeniden kullanılabilir hale getirilmesini sağlar. Bu süreçte geri kazanılan fiberler, orijinal mukavemetlerinin %90&apos;ından fazlasını koruyabilir.</p>
            <p>Mekanik geri dönüşüm, kompozit atıkların öğütülerek kısa fiber takviyeli malzemelere dönüştürülmesini içerir. Bu yöntem, enjeksiyon kalıplama ve ekstrüzyon proseslerinde takviye malzemesi olarak kullanılabilecek granüller üretir. Kimyasal geri dönüşüm ise solvoliz prosesiyle hem fiber hem de reçine bileşenlerinin geri kazanılmasını hedefler.</p>
            <p>Blact Systems olarak, biyobazlı reçine sistemleri ve doğal fiber takviyeleri konusunda da çalışmalar yürütüyoruz. Keten, kenevir ve bazalt fiberleri gibi sürdürülebilir takviye malzemeleri, belirli uygulamalarda karbon ve cam fiberlerine alternatif oluşturmaktadır. Yaşam döngüsü analizi (LCA) ile her projenin çevresel etkisi değerlendirilmekte ve sürdürülebilir tasarım kararları desteklenmektedir.</p>

            <blockquote>Kompozit teknolojisi, hafiflik ve dayanıklılığı bir arada sunarak yüksek performanslı mühendislik uygulamalarının temel taşıdır.</blockquote>

            <div className="detail-nav">
              <a href="/cozum-eklemeli-imalat">&larr; Eklemeli İmalat</a>
              <a href="/cozum-insansiz-araclar">İnsansız Araçlar &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  )
}
