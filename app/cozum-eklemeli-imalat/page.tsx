import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavScript from '@/components/NavScript'
import CardAnimator from '@/components/CardAnimator'

export const metadata: Metadata = {
  title: 'Eklemeli İmalat - Blact Systems',
  description: 'SLM, WAAM ve LSAM teknolojileriyle yenilikçi metal eklemeli imalat çözümleri. Blact Systems ile geleceğin üretim teknolojilerini keşfedin.',
  keywords: ['eklemeli imalat', 'SLM', 'WAAM', 'LSAM', 'metal 3D baskı', 'additive manufacturing'],
  openGraph: {
    title: 'Eklemeli İmalat - Blact Systems',
    description: 'SLM, WAAM ve LSAM teknolojileriyle yenilikçi metal eklemeli imalat çözümleri.',
    images: ['/images/hero-laser.png'],
  },
  alternates: { canonical: 'https://blactsystems.com/cozum-eklemeli-imalat' },
}

export default function EklemeliImalatPage() {
  return (
    <>
      <Navbar />
      <NavScript />

      <main>
      <section className="detail-hero hero-eklemeli">
        <div className="container">
          <div className="section-label">Çözümlerimiz</div>
          <h1>Eklemeli İmalat</h1>
          <p>SLM, WAAM ve LSAM teknolojileriyle dijital modelden doğrudan metal parça üretimi. Yüksek hassasiyet, karmaşık geometri kapasitesi ve hızlı prototipleme imkanı.</p>
        </div>
      </section>

      <CardAnimator selector=".detail-anim, .detail-body h2, .detail-body blockquote, .detail-body ul" />
      <section className="detail-content detail-content-light">
        <div className="container">
          <div className="detail-body">

            <div className="solution-features">
              <div className="solution-feature detail-anim" data-delay="0" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h3>SLM Teknolojisi</h3>
                <p>Yüksek güçlü lazer ile metal tozu eritme. Mikron seviyesinde hassasiyet ve karmaşık iç geometriler.</p>
              </div>
              <div className="solution-feature detail-anim" data-delay="1" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h3>WAAM Teknolojisi</h3>
                <p>Tel besleme ve ark kaynağı ile büyük ölçekli metal parça üretimi. Yüksek üretim hızı ve maliyet avantajı.</p>
              </div>
              <div className="solution-feature detail-anim" data-delay="2" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h3>LSAM Teknolojisi</h3>
                <p>Büyük ölçekli eklemeli imalat. Endüstriyel boyutlarda prototip ve son ürün üretimi.</p>
              </div>
            </div>

            <h2>Selective Laser Melting (SLM)</h2>
            <p>SLM teknolojisi, ince metal tozu tabakalarını yüksek güçlü lazer ile eritip katman katman birleştirerek parça üretir. Bu yöntem, geleneksel üretim teknikleriyle elde edilmesi imkansız olan karmaşık iç geometrilerin üretilmesine olanak tanır.</p>
            <p>Toz yatak füzyon prensibiyle çalışan SLM, titanyum, alüminyum, paslanmaz çelik ve nikel alaşımları dahil geniş bir malzeme yelpazesinde üretim yapabilir. Katman kalınlığı 20-100 mikron arasında değişerek yüksek yüzey kalitesi ve boyutsal doğruluk sağlar.</p>
            <p>SLM ile üretilen parçalar, döküm veya dövme yöntemleriyle üretilen parçalara eşdeğer veya daha üstün mekanik özelliklere sahip olabilir. Topoloji optimizasyonu ile birleştirildiğinde, ağırlık azaltma ve performans artışı aynı anda elde edilir. Havacılık sektöründe yakıt nozulları, türbin kanatçıkları ve yapısal braketler bu teknolojiyle üretilen kritik bileşenler arasındadır.</p>

            <h2>Wire Arc Additive Manufacturing (WAAM)</h2>
            <p>WAAM, tel besleme ve ark kaynağı kullanarak büyük ölçekli metal parçalar üretir. SLM&apos;e kıyasla çok daha yüksek biriktirme hızları ve düşük malzeme maliyetleri sunar. Bu teknoloji, özellikle metre boyutlarındaki yapısal bileşenlerin üretiminde benzersiz avantajlar sağlar.</p>
            <p>Özellikle havacılık, denizcilik ve enerji sektörlerinde büyük yapısal bileşenlerin üretiminde tercih edilir. Buy-to-fly oranını dramatik şekilde düşürerek malzeme israfını minimize eder. Geleneksel yöntemlerle %90&apos;a varan malzeme kaybı yaşanırken, WAAM ile bu oran %20&apos;nin altına indirilebilir.</p>
            <p>WAAM sürecinde kullanılan çoklu eksenli robot kolları, karmaşık geometrilerin üretimini mümkün kılar. Gerçek zamanlı termal izleme ve adaptif kontrol sistemleri sayesinde üretim kalitesi sürekli olarak optimize edilir. Titanyum, çelik, alüminyum ve nikel bazlı süperalaşımlar bu yöntemle başarıyla işlenebilir.</p>

            <h2>LSAM — Büyük Ölçekli Eklemeli İmalat</h2>
            <p>Large Scale Additive Manufacturing, endüstriyel boyutlarda parça ve kalıp üretimi için geliştirilmiş bir teknolojidir. Polimer, kompozit ve metal malzemelerle büyük hacimli üretim yapabilir. Geleneksel kalıp üretim süreçlerini haftalardan günlere indiren bu teknoloji, özellikle otomotiv, havacılık ve denizcilik sektörlerinde devrim yaratmaktadır.</p>
            <p>LSAM sistemleri, hem eklemeli üretim hem de eksiltmeli işleme kapasitesini tek bir platformda birleştirir. Biriktirme kafası ile malzeme katman katman oluşturulurken, entegre CNC freze ile yüzey kalitesi ve boyutsal doğruluk sağlanır. Bu hibrit yaklaşım, büyük ölçekli parçaların hızlı ve hassas üretimini mümkün kılar.</p>
            <p>Karbon fiber takviyeli polimerler, cam elyaf kompozitler ve yüksek performanslı termoplastikler LSAM ile işlenebilen malzemeler arasında yer alır. Endüstriyel kalıplar, jig ve fikstürler, prototip araç gövdeleri ve mimari yapı elemanları bu teknolojinin başlıca uygulama alanlarındandır.</p>

            <blockquote>Eklemeli imalat, tasarım özgürlüğü ve üretim esnekliğiyle endüstriyel üretimin geleceğini şekillendiriyor.</blockquote>

            <h2>Uygulama Alanları</h2>
            <ul>
              <li><strong>Havacılık ve Uzay:</strong> Hafif yapısal bileşenler, türbin kanatçıkları, yakıt nozulları</li>
              <li><strong>Savunma:</strong> Özel geometrili parçalar, hızlı prototipleme</li>
              <li><strong>Otomotiv:</strong> Performans parçaları, özelleştirilmiş bileşenler</li>
              <li><strong>Medikal:</strong> Hasta-özel implantlar, cerrahi aletler</li>
              <li><strong>Enerji:</strong> Türbin bileşenleri, ısı eşanjörleri</li>
            </ul>

            <h2>Mühendislik Yaklaşımımız</h2>
            <p>Blact Systems olarak, her projeye kapsamlı bir mühendislik perspektifinden yaklaşıyoruz. Tasarım optimizasyonundan son ürün kalite kontrolüne kadar tüm süreçlerde ileri simülasyon ve analiz araçlarını kullanıyoruz. Sonlu eleman analizi (FEA), hesaplamalı akışkanlar dinamiği (CFD) ve topoloji optimizasyonu gibi araçlar, eklemeli imalat projelerimizin ayrılmaz bir parçasıdır.</p>
            <p>Malzeme seçiminden üretim parametre optimizasyonuna, son işlem stratejilerinden kalite güvence protokollerine kadar her aşamada müşterilerimize kapsamlı mühendislik desteği sunuyoruz. Amacımız, eklemeli imalatın sunduğu tasarım özgürlüğünü en üst düzeyde değerlendirerek, geleneksel yöntemlerle ulaşılamayan performans seviyelerine erişmektir.</p>

            <div className="detail-nav">
              <a href="/#cozumlerimiz">&larr; Tüm Çözümler</a>
              <a href="/cozum-kompozit">Kompozit Teknolojisi &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  )
}
