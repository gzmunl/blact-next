import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavScript from '@/components/NavScript'
import CardAnimator from '@/components/CardAnimator'

export const metadata: Metadata = {
  title: 'Sürdürülebilirlik - Blact Systems',
  description: 'Yenilenebilir enerji sistemlerinden yaşam döngüsü analizine, enerji depolama çözümlerinden döngüsel ekonomi yaklaşımlarına kadar sürdürülebilir mühendislik hizmetleri.',
  keywords: ['sürdürülebilirlik', 'yenilenebilir enerji', 'yaşam döngüsü analizi', 'enerji depolama', 'döngüsel ekonomi', 'yeşil mühendislik'],
}

export default function SurdurulebilirlikPage() {
  return (
    <>
      <Navbar />
      <NavScript />

      <section className="detail-hero">
        <div className="container">
          <div className="section-label">Çözümlerimiz</div>
          <h1>Sürdürülebilirlik</h1>
          <p>Yenilenebilir enerji konsept tasarımından yaşam döngüsü analizine, enerji depolama sistemlerinden döngüsel ekonomi stratejilerine kadar kapsamlı sürdürülebilir mühendislik çözümleri.</p>
        </div>
      </section>

      <CardAnimator selector=".detail-anim, .detail-body h2, .detail-body blockquote, .detail-body ul" />
      <section className="detail-content detail-content-light">
        <div className="container">
          <div className="detail-body">

            <div className="solution-features">
              <div className="solution-feature detail-anim" data-delay="0" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h4>Enerji Konsept Tasarımı</h4>
                <p>Rüzgar, güneş ve hidrojen enerjisi sistemlerinin konsept tasarımı ve fizibilite analizleri.</p>
              </div>
              <div className="solution-feature detail-anim" data-delay="1" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h4>Yaşam Döngüsü Analizi</h4>
                <p>Hammaddeden geri dönüşüme kadar ürün ve süreçlerin çevresel etkilerinin kapsamlı değerlendirmesi.</p>
              </div>
              <div className="solution-feature detail-anim" data-delay="2" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h4>Sürdürülebilir Mühendislik</h4>
                <p>Enerji verimliliği, emisyon azaltma ve kaynak optimizasyonu odaklı mühendislik yaklaşımları.</p>
              </div>
            </div>

            <h2>Yenilenebilir Enerji Çözümleri</h2>
            <p>Yenilenebilir enerji, küresel enerji dönüşümünün temel taşıdır. Blact Systems olarak rüzgar, güneş ve hidrojen enerjisi alanlarında konsept tasarımdan detaylı mühendislik analizlerine kadar kapsamlı çözümler sunuyoruz. Rüzgar enerjisi alanında, türbin kanat aerodinamiğinden kule yapısal tasarımına, rüzgar çiftliği yerleşim optimizasyonundan şebeke entegrasyonuna kadar tüm süreçlerde mühendislik desteği sağlıyoruz.</p>
            <p>Güneş enerjisi sistemlerinde, fotovoltaik panel verimlilik analizi, termal yönetim optimizasyonu ve hibrit sistemlerin tasarımı konularında çalışmalar yürütüyoruz. Yoğunlaştırılmış güneş enerjisi (CSP) sistemlerinin optik ve termal tasarımı, enerji dönüşüm verimliliğini maksimize etmek için ileri simülasyon araçlarıyla desteklenmektedir.</p>
            <p>Hidrojen enerjisi, geleceğin enerji taşıyıcısı olarak büyük potansiyel taşımaktadır. Elektroliz sistemlerinin tasarımı, hidrojen depolama çözümleri ve yakıt hücresi entegrasyonu konularında mühendislik hizmetleri sunuyoruz. Yeşil hidrojen üretiminden dağıtım altyapısına, endüstriyel kullanım senaryolarından mobilite uygulamalarına kadar geniş bir yelpazede projeler geliştiriyoruz.</p>

            <h2>Enerji Depolama Sistemleri</h2>
            <p>Yenilenebilir enerji kaynaklarının kesintili doğası, etkin enerji depolama sistemlerini zorunlu kılmaktadır. Batarya teknolojileri alanında, lityum-iyon hücre tasarımından büyük ölçekli enerji depolama sistemi (BESS) mühendisliğine kadar kapsamlı çözümler sunuyoruz. Termal yönetim, batarya yönetim sistemi (BMS) optimizasyonu ve yaşlanma modellemesi, batarya sistemlerinin güvenlik ve performansını belirleyen kritik mühendislik alanlarıdır.</p>
            <p>Termal enerji depolama, endüstriyel süreç ısısının geri kazanımı ve bina enerji yönetimi uygulamalarında önemli bir rol üstlenir. Duyulur ısı, gizli ısı ve termokimyasal depolama yöntemleri, farklı sıcaklık aralıkları ve uygulama gereksinimleri için optimize edilir. Faz değişim malzemeleri (PCM) ve yüksek sıcaklık termal depolama sistemleri konusunda ileri malzeme araştırmaları yürütüyoruz.</p>
            <p>Hidrojen bazlı enerji depolama, mevsimsel enerji dengesi ve sektörler arası enerji transferi için giderek artan bir öneme sahiptir. Basınçlı gaz, sıvı hidrojen ve metal hidrür depolama yöntemlerinin karşılaştırmalı analizi ile her uygulama için en uygun depolama stratejisi belirlenmektedir. Yeraltı hidrojen depolama ve amonyak gibi hidrojen taşıyıcıları da değerlendirme kapsamımıza dahildir.</p>

            <h2>Yaşam Döngüsü Analizi (LCA)</h2>
            <p>Yaşam döngüsü analizi, bir ürün veya sürecin hammadde ediniminden son bertarafına kadar tüm çevresel etkilerinin sistematik olarak değerlendirilmesini sağlar. ISO 14040 ve 14044 standartlarına uygun olarak gerçekleştirdiğimiz LCA çalışmaları; karbon ayak izi, su ayak izi, asidifikasyon, ötrofikasyon ve kaynak tüketimi gibi çoklu etki kategorilerini kapsar.</p>
            <p>Hammadde edinimi aşamasında maden çıkarma, rafinasyon ve malzeme işleme süreçlerinin çevresel yükleri değerlendirilir. Üretim aşamasında enerji tüketimi, atık üretimi ve emisyonlar detaylı olarak modellenir. Kullanım aşamasında ürünün enerji tüketimi, bakım gereksinimleri ve performans değişimi analiz edilir. Son olarak, yaşam sonu senaryoları kapsamında geri dönüşüm, enerji geri kazanımı ve bertaraf seçeneklerinin çevresel etkileri karşılaştırılır.</p>
            <p>LCA sonuçları, tasarım kararlarının çevresel boyutunu somut verilerle ortaya koyarak bilinçli mühendislik seçimlerini destekler. Malzeme seçimi, üretim yöntemi tercihi ve ürün ömrü optimizasyonu gibi kararlar, LCA verileri ışığında daha sürdürülebilir bir yönde şekillendirilir. Karşılaştırmalı LCA çalışmaları ile alternatif tasarım seçeneklerinin çevresel performansı objektif olarak değerlendirilebilir.</p>

            <h2>Döngüsel Ekonomi</h2>
            <p>Döngüsel ekonomi, kaynakların mümkün olan en uzun süre değer zincirinde tutulmasını hedefleyen bir ekonomik modeldir. Tasarımdan geri dönüşüme kadar her aşamada atığı minimize eden ve malzeme döngüsünü tamamlayan stratejiler geliştirilir. &quot;Geri dönüşüm için tasarım&quot; prensibi, ürünün yaşam sonu aşamasında bileşenlerinin kolayca ayrıştırılabilmesini ve malzemelerin yeniden kullanılabilmesini sağlar.</p>
            <p>Endüstriyel simbiyoz yaklaşımı, bir üretim sürecinin atıklarının başka bir sürecin hammaddesi olarak değerlendirilmesini içerir. Bu yaklaşım, atık miktarını azaltırken yeni değer zincirleri oluşturur. Blact Systems olarak, müşterilerimizin üretim süreçlerinde döngüsel ekonomi prensiplerini entegre etmelerine yardımcı oluyoruz; atık karakterizasyonundan değerlendirme senaryolarının geliştirilmesine kadar kapsamlı danışmanlık hizmetleri sunuyoruz.</p>
            <p>Dijital ikiz teknolojisi ve IoT tabanlı izleme sistemleri, ürünlerin kullanım ömrü boyunca performansının takip edilmesine ve bakım süreçlerinin optimize edilmesine olanak tanır. Öngörücü bakım algoritmaları ile ürün ömrü uzatılırken, kullanım verilerinin analizi gelecek nesil ürünlerin tasarımını bilgilendirir. Bu bütünleşik yaklaşım, sürdürülebilirlik hedeflerinin ekonomik değer yaratmayla uyumlu hale getirilmesini sağlar.</p>

            <h2>Uygulama Alanları</h2>
            <ul>
              <li><strong>Enerji:</strong> Rüzgar ve güneş enerjisi santralleri, hidrojen üretim tesisleri, enerji depolama projeleri</li>
              <li><strong>İnşaat:</strong> Yeşil bina sertifikasyonu, enerji verimli yapı tasarımı, sürdürülebilir malzeme seçimi</li>
              <li><strong>Ulaşım:</strong> Elektrikli araç altyapısı, alternatif yakıt sistemleri, düşük emisyonlu ulaşım çözümleri</li>
              <li><strong>Üretim:</strong> Kaynak verimliliği, atık minimizasyonu, sürdürülebilir tedarik zinciri yönetimi</li>
            </ul>

            <blockquote>Sürdürülebilir mühendislik, bugünün ihtiyaçlarını karşılarken gelecek nesillerin kaynaklarını koruma sorumluluğunu taşır.</blockquote>

            <div className="detail-nav">
              <a href="/cozum-insansiz-araclar">&larr; İnsansız Araçlar</a>
              <a href="/#cozumlerimiz">Tüm Çözümler &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
