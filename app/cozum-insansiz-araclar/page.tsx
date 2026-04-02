import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NavScript from '@/components/NavScript'
import CardAnimator from '@/components/CardAnimator'

export const metadata: Metadata = {
  title: 'İnsansız Hava & Deniz Araçları - Blact Systems',
  description: 'İHA ve İDA konsept tasarımından otonom navigasyon sistemlerine kadar kapsamlı insansız araç mühendislik çözümleri. Blact Systems ile geleceğin otonom platformlarını geliştirin.',
  keywords: ['İHA', 'İDA', 'insansız hava aracı', 'otonom sistemler', 'drone', 'UUV', 'USV', 'ROV'],
}

export default function InsansizAraclarPage() {
  return (
    <>
      <Navbar />
      <NavScript />

      <section className="detail-hero">
        <div className="container">
          <div className="section-label">Çözümlerimiz</div>
          <h1>İnsansız Hava &amp; Deniz Araçları</h1>
          <p>Konsept tasarımdan prototip üretime, otonom navigasyondan sensör entegrasyonuna kadar insansız hava ve deniz araçları için bütünleşik mühendislik çözümleri.</p>
        </div>
      </section>

      <CardAnimator selector=".detail-anim, .detail-body h2, .detail-body blockquote, .detail-body ul" />
      <section className="detail-content detail-content-light">
        <div className="container">
          <div className="detail-body">

            <div className="solution-features">
              <div className="solution-feature detail-anim" data-delay="0" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h4>İHA Konsept Tasarım</h4>
                <p>Sabit kanat, multirotor ve VTOL konfigürasyonlarında aerodinamik tasarım ve yapısal analiz.</p>
              </div>
              <div className="solution-feature detail-anim" data-delay="1" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h4>İDA Sistemleri</h4>
                <p>Su üstü ve su altı insansız araçlar için hidrodinamik tasarım ve sistem entegrasyonu.</p>
              </div>
              <div className="solution-feature detail-anim" data-delay="2" style={{ background: '#fff', border: '1px solid #ddd', padding: '2rem' }}>
                <h4>Otonom Navigasyon</h4>
                <p>Sensör füzyonu, SLAM algoritmaları ve yapay zeka destekli karar verme sistemleri.</p>
              </div>
            </div>

            <h2>İnsansız Hava Araçları (İHA)</h2>
            <p>İnsansız hava araçları, modern mühendisliğin en hızlı gelişen alanlarından birini oluşturmaktadır. Blact Systems olarak sabit kanat, multirotor ve dikey iniş-kalkış (VTOL) konfigürasyonlarında kapsamlı tasarım ve geliştirme hizmetleri sunuyoruz. Her platform türü, spesifik görev gereksinimlerine göre optimize edilir; uzun menzil ve yüksek dayanıklılık gerektiren görevler için sabit kanat, hassas konumlandırma ve hovering kabiliyeti gerektiren görevler için multirotor, her iki özelliğin birleşimi için ise VTOL tasarımları tercih edilir.</p>
            <p>Aerodinamik tasarım sürecimiz, hesaplamalı akışkanlar dinamiği (CFD) analizleriyle başlar. Kanat profili seçimi, gövde şekillendirme ve kontrol yüzeyi boyutlandırma işlemleri, yüksek çözünürlüklü RANS ve LES simülasyonlarıyla doğrulanır. Rüzgar tüneli testleri ile CFD sonuçlarının validasyonu sağlanarak, tasarım güvenilirliği en üst düzeye çıkarılır.</p>
            <p>Yapısal tasarımda kompozit malzeme teknolojilerinden yoğun olarak faydalanıyoruz. Karbon fiber ve cam fiber takviyeli polimer yapılar, minimum ağırlıkla maksimum dayanıklılık sağlar. Topoloji optimizasyonu ve eklemeli imalat teknolojileri, geleneksel yöntemlerle üretilmesi mümkün olmayan hafif ve sağlam yapısal çözümler sunmamıza olanak tanır.</p>

            <h2>İnsansız Deniz Araçları (İDA)</h2>
            <p>İnsansız deniz araçları; su altı araçlar (UUV - Unmanned Underwater Vehicle), su üstü araçlar (USV - Unmanned Surface Vehicle) ve uzaktan kumandalı araçlar (ROV - Remotely Operated Vehicle) olmak üzere farklı kategorilerde sınıflandırılır. Her kategori, kendine özgü mühendislik zorluklarını barındırır ve farklı tasarım yaklaşımları gerektirir.</p>
            <p>Hidrodinamik tasarım, insansız deniz araçlarının performansını belirleyen en kritik faktördür. Gövde formunun optimizasyonu, dalga direnci analizi, manevra kabiliyeti değerlendirmesi ve stabilite hesaplamaları, CFD araçları ve potansiyel akış yöntemleriyle gerçekleştirilir. Su altı araçlarda basınca dayanıklı gövde tasarımı, batarya sistemlerinin entegrasyonu ve balast kontrol mekanizmaları ek tasarım parametreleri olarak değerlendirilir.</p>
            <p>Deniz ortamının korozif etkilerine karşı malzeme seçimi ve koruma stratejileri, araç ömrünü doğrudan etkiler. Titanyum alaşımları, deniz sınıfı alüminyum ve özel kompozit malzemeler, deniz araçlarında yaygın olarak kullanılan mühendislik malzemeleridir. Biyolojik kirlenmeyı önleyen kaplama sistemleri ve katodik koruma yöntemleri, uzun süreli deniz operasyonları için hayati öneme sahiptir.</p>

            <h2>Otonom Navigasyon ve Kontrol</h2>
            <p>Otonom navigasyon sistemleri, insansız araçların bağımsız olarak güvenli ve etkin şekilde operasyon yapabilmesinin temelini oluşturur. Sensör füzyonu yaklaşımı; GPS, INS (inersiyal navigasyon sistemi), LiDAR, radar, sonar ve kamera verilerini bir arada işleyerek çevresel farkındalığı en üst düzeye çıkarır. Kalman filtreleri ve parçacık filtreleri gibi ileri tahmin algoritmaları, farklı sensör kaynaklarından gelen verilerin optimal şekilde birleştirilmesini sağlar.</p>
            <p>SLAM (Simultaneous Localization and Mapping) algoritmaları, aracın önceden haritalanmamış ortamlarda eş zamanlı olarak konumunu belirlemesine ve çevre haritası oluşturmasına olanak tanır. Görsel SLAM, LiDAR SLAM ve hibrit yaklaşımlar, farklı operasyon ortamlarının gereksinimlerine göre uygulanır. Derin öğrenme tabanlı nesne tanıma ve sahne anlama algoritmaları, otonom karar verme sistemlerinin güvenilirliğini artırır.</p>
            <p>Kontrol sistemi mimarisi, düşük seviye uçuş/seyir kontrolünden yüksek seviye görev planlamasına kadar çok katmanlı bir yapıda tasarlanır. PID, LQR ve model öngörülü kontrol (MPC) gibi klasik kontrol yöntemleri, adaptif ve robust kontrol stratejileriyle desteklenir. Yapay zeka tabanlı kontrol yaklaşımları, değişken çevre koşullarına ve beklenmedik durumlara karşı sistemin esnekliğini artırır.</p>

            <h2>Uygulama Alanları</h2>
            <ul>
              <li><strong>Enerji Altyapı Denetimi:</strong> Rüzgar türbini, güneş paneli, boru hattı ve enerji iletim hatlarının insansız araçlarla periyodik denetimi</li>
              <li><strong>Tarım:</strong> Hassas tarım uygulamaları, bitki sağlığı izleme, ilaçlama ve haritalama</li>
              <li><strong>Güvenlik:</strong> Sınır güvenliği, deniz gözetleme, kritik altyapı koruması</li>
              <li><strong>Araştırma:</strong> Oşinografik veri toplama, atmosferik ölçüm, yaban hayatı izleme</li>
              <li><strong>Lojistik:</strong> Kargo taşımacılığı, son kilometre teslimat, acil durum malzeme ulaştırma</li>
            </ul>

            <blockquote>İnsansız araç teknolojileri, erişilmesi güç bölgelerde güvenli operasyon ve veri toplama kapasitesiyle endüstriyel verimliliği yeniden tanımlıyor.</blockquote>

            <div className="detail-nav">
              <a href="/cozum-kompozit">&larr; Kompozit Teknolojisi</a>
              <a href="/cozum-surdurulebilirlik">Sürdürülebilirlik &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
