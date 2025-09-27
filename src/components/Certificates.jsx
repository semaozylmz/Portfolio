import React from 'react';

const certificates = [
  {
    title: 'Teknolojide Fırsat Eşitliği',
    issuer: 'Bahçeşehir Üniversitesi & Yapı Kredi',
    date: '2024',
    description: 'Fırsat eşitliği odaklı teknoloji destek programı.',
    link: 'https://drive.google.com/file/d/1PgG2dQHC0RDDDVFybirWoWUA8h1QjNCz/view?usp=share_link',
  },
  {
    title: 'Bootstrap 5 Eğitimi',
    issuer: 'BTK Akademi',
    date: '28.06.2024',
    description: 'Bootstrap 5 ile responsive web tasarım temelleri.',
    link: 'https://drive.google.com/file/d/1yg-8grRTPgfFt6Bg9tGRuZO6UhJyfaMs/view?usp=sharing',
  },
  {
    title: 'İleri Düzey Web Geliştirme',
    issuer: 'Udemy',
    date: '02.07.2024',
    description: 'HTML, CSS, JS ve modern frontend teknolojileri.',
    link: 'https://drive.google.com/file/d/1_x0L18gShnt6gcGLvLFSOEpRdlIn06-x/view?usp=sharing',
  },
  {
    title: 'React Eğitimi',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '13.07.2024',
    description: 'React ile modern web uygulamaları geliştirme.',
    link: 'https://drive.google.com/file/d/1ext3sy5xdqUHpXTsT_T_lRuMsODBtAd3/view?usp=sharing',
  },
  {
    title: 'Veri Bilimi ve Yapay Zekaya Giriş',
    issuer: 'Turkcell Akademi',
    date: '15.07.2024',
    description: 'Veri bilimi ve yapay zekanın temel kavramları.',
    link: 'https://drive.google.com/file/d/1d20DH99SZw-7oQ-nT33htzFtriE-Tlkb/view?usp=sharing',
  },
  {
    title: 'Veri Okuryazarlığı',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '15.07.2024',
    description: 'Veri okuma, yorumlama ve analiz becerileri.',
    link: 'https://drive.google.com/file/d/1v_gail5ZASdlMrhJKNCLYS12s33-D-8N/view?usp=sharing',
  },
  {
    title: 'Python Programlama',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '15.07.2024',
    description: 'Python dilinin temelleri ve uygulamalı örnekler.',
    link: 'https://drive.google.com/file/d/1z9ObV80UDVq4MKR0q0WsHpRnzdQbhlMv/view?usp=sharing',
  },
  {
    title: 'Veri Manipülasyonu',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '16.07.2024',
    description: 'Veri işleme ve dönüştürme teknikleri.',
    link: 'https://drive.google.com/file/d/17XEc1dkIVfEBA7WDJZgLEpcHSz_KYh8T/view?usp=sharing',
  },
  {
    title: 'Borusan Teknoloji Okulu',
    issuer: 'Borusan & Toptalent',
    date: '16.07.2024',
    description: 'Yapay zeka, otomotiv, enerji ve yazılım modülleri.',
    link: 'https://drive.google.com/file/d/1MxIclSXh3hIY3_ZmphBfOxBSsS4Wjlzx/view?usp=sharing',
  },
  {
    title: 'Data & AI Class',
    issuer: 'İş Bankası & Toptalent',
    date: '16.07.2024',
    description: 'Veri bilimi ve yapay zeka temelleri.',
    link: 'https://drive.google.com/file/d/16OJ0L7psGXcTJkee38ynxX9vvn4LEAaF/view?usp=sharing',
  },
  {
    title: 'Yapay Zeka ve Algoritmalarına Giriş',
    issuer: 'BTK Akademi',
    date: '17.07.2024',
    description: 'Yapay zeka algoritmalarının temel prensipleri.',
    link: 'https://drive.google.com/file/d/1RWWRSASsw_WBnef3WcD670HqWAjcLkSq/view?usp=sharing',
  },
  {
    title: 'Veri Görselleştirme',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '20.08.2024',
    description: 'Veri görselleştirme araçları ve teknikleri.',
    link: 'https://drive.google.com/file/d/1LjGYGNyXiY0riInVPXKmf2DuisDoyrv2/view?usp=sharing',
  },
    {
    title: 'Veri Ön İşleme',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '22.12.2024',
    description: 'Ham veriyi analiz için uygun hale getirme teknikleri.',
    link: 'https://drive.google.com/file/d/1OEFPZA4Sjqz8XKWETrSvl--61wyXohwm/view?usp=sharing',
  },
  {
    title: 'Makine Öğrenmesi',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '27.12.2024',
    description: 'Makine öğrenmesi algoritmalarının temelleri.',
    link: 'https://drive.google.com/file/d/1sNcreeC3gxcL6u7H58XiYMBllRWbFx3E/view?usp=sharing',
  },
  {
    title: 'Uygulama Tabanlı Makine Öğrenimi',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '31.12.2024',
    description: 'Gerçek uygulamalarla makine öğrenmesi eğitimi.',
    link: 'https://drive.google.com/file/d/1sNcreeC3gxcL6u7H58XiYMBllRWbFx3E/view?usp=sharing',
  },
  {
    title: 'Derin Öğrenmeye Giriş',
    issuer: 'BTK Akademi',
    date: '02.01.2025',
    description: 'Yapay sinir ağları ve derin öğrenme mimarileri.',
    link: 'https://drive.google.com/file/d/1-KRGY5O6MyFYcvZ4SAtt0GDn6X6mE36x/view?usp=sharing',
  },
  {
    title: 'Makine Öğrenmesi',
    issuer: 'BTK Akademi',
    date: '02.01.2025',
    description: 'Makine öğrenmesi algoritmalarına giriş eğitimi.',
    link: 'https://drive.google.com/file/d/1-KRGY5O6MyFYcvZ4SAtt0GDn6X6mE36x/view?usp=sharing',
  },
  {
    title: 'Pekiştirmeli Öğrenme',
    issuer: 'BTK Akademi',
    date: '03.01.2025',
    description: 'Reinforcement learning temelleri ve uygulamaları.',
    link: 'https://drive.google.com/file/d/1BnVn3HLz7jnHfLCyDtkuLEhB01r4Txhg/view?usp=sharing',
  },
  {
    title: 'Python ile Makine Öğrenmesi Uygulamaları',
    issuer: 'BTK Akademi',
    date: '05.01.2025',
    description: 'Python ile ML modelleri geliştirme ve test etme.',
    link: 'https://drive.google.com/file/d/1VMUF_VDsKCxQTfREIrl7FXhxSlsgFcBZ/view?usp=sharing',
  },
  {
    title: 'Siber Güvenliğe Giriş',
    issuer: 'BTK Akademi',
    date: '25.02.2025',
    description: 'Temel siber güvenlik kavramları ve tehdit analizi.',
    link: 'https://drive.google.com/file/d/1DWPjXtUlxlwnmbJF20LSsnOZIzkgCHe_/view?usp=sharing',
  },
  {
    title: 'Unity Eğitimi',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: '26.02.2025',
    description: 'Unity ile oyun geliştirme temelleri.',
    link: 'https://drive.google.com/file/d/1ZcDkb1crApreNL9cZcIdxnfP8S0u5gcX/view?usp=sharing',
  },
  {
    title: 'Go ile Programlamaya Giriş',
    issuer: 'BTK Akademi',
    date: '05.03.2025',
    description: 'Go dilinin temelleri ve uygulamalı örnekler.',
    link: 'https://drive.google.com/file/d/1WKh5N2j6QAFjMnZBMtZca8a8wonTUPvd/view?usp=sharing',
  },
  {
    title: 'GenAI Apps Learning Badge',
    issuer: 'MongoDB',
    date: '14.03.2025',
    description: 'GenAI uygulamaları geliştirme süreci.',
    link: 'https://drive.google.com/file/d/1nCVCLUKF-E9D3bK6S-qqaDJyE8wg9veX/view?usp=sharing',
  },
  {
    title: 'Introduction to AI and Vector Search',
    issuer: 'MongoDB',
    date: '14.03.2025',
    description: 'Vektör arama ve yapay zeka temelleri.',
    link: 'https://drive.google.com/file/d/1gPV-5cjR-qpCMGlLgJNJYE6tYHb-jTfy/view?usp=sharing',
  },
    {
    title: 'Using Vector Search for Semantic Search',
    issuer: 'MongoDB',
    date: '14.03.2025',
    description: 'Vektör tabanlı semantik arama uygulamaları.',
    link: 'https://drive.google.com/file/d/1Lfd2jMPm1ehGYEgP51og21uKt41LxrGa/view?usp=sharing',
  },
  {
    title: 'Using Atlas Vector Search for RAG Applications',
    issuer: 'MongoDB',
    date: '14.03.2025',
    description: 'RAG mimarileri için Atlas Vector Search kullanımı.',
    link: 'https://drive.google.com/file/d/1Lfd2jMPm1ehGYEgP51og21uKt41LxrGa/view?usp=sharing',
  },
  {
    title: 'Managing Atlas Vector Search Indexes',
    issuer: 'MongoDB',
    date: '14.03.2025',
    description: 'Atlas Vector Search indeks yönetimi.',
    link: 'https://drive.google.com/file/d/11tm0oVQNT-bHGtJrbe31GjnyfVNQu3Xr/view?usp=sharing',
  },
  {
    title: 'Versiyon Kontrolleri: Git ve GitHub',
    issuer: 'BTK Akademi',
    date: '27.04.2025',
    description: 'Git ve GitHub ile sürüm kontrolü eğitimi.',
    link: 'https://drive.google.com/file/d/11tm0oVQNT-bHGtJrbe31GjnyfVNQu3Xr/view?usp=sharing',
  },
  {
    title: 'İleri Proje Yönetimi',
    issuer: 'BTK Akademi',
    date: '05.06.2025',
    description: 'Proje yönetimi süreçleri ve araçları üzerine ileri seviye eğitim.',
    link: 'https://drive.google.com/file/d/1O5x7ja4c9k8T0gd8TmHt6e0siD5YlU6w/view?usp=sharing',
  },
  {
    title: 'Dijital Stratejiler: Algoritmik Trade',
    issuer: 'Ford Otosan & WTech & Vehbi Koç Vakfı',
    date: 'Haziran 2025',
    description: 'Algoritmik trade ve dijital stratejiler üzerine eğitim.',
    link: 'https://drive.google.com/file/d/1uR-XwuVQ3yJKYsgSoOnr76bZS8jNi9MD/view?usp=sharing',
  },
  {
    title: 'Python Eğitimi – Kaggle',
    issuer: 'Kaggle',
    date: '24.06.2025',
    description: 'Python programlama temelleri ve veri analizi.',
    link: 'https://drive.google.com/file/d/1wT14rWWL_rCIatujl38EigK0-GGU_6jT/view?usp=sharing',
  },
  {
    title: 'Merkeziyetsiz Uygulamalarda Kullanıcı Deneyimi',
    issuer: 'Ford Otosan & WTech & Vehbi Koç Vakfı',
    date: '26.06.2025',
    description: 'Web3 ve merkeziyetsiz uygulamalarda kullanıcı deneyimi.',
    link: 'https://drive.google.com/file/d/1jQKCSWo8u-8eSnkS6mvCADvnduucBey1/view?usp=sharing',
  },
  {
    title: 'Geleceği Kodlayan Güç: Kuantum Dolanıklık',
    issuer: 'T3 Vakfı – Sinaps',
    date: '2025',
    description: 'Kuantum bilgisayarlar ve dolanıklık üzerine farkındalık eğitimi.',
    link: 'https://drive.google.com/file/d/1uzZLUSXHA60xZKKk6P-bduTANeUZ8CVs/view?usp=sharing',
  },
  {
    title: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    date: '24.06.2025',
    description: 'Makine öğrenmesine giriş ve temel algoritmalar.',
    link: 'https://drive.google.com/file/d/1VaR7kvm__9orezLqOtefQa-L1cCaJpn7/view?usp=sharing',
  },
  {
    title: 'Veri Tabanına Giriş',
    issuer: 'BTK Akademi',
    date: '08.07.2025',
    description: 'Veri tabanı sistemlerinin temelleri.',
    link: 'https://drive.google.com/file/d/1HYkIdxDTrOvUVPSJZ3HoczmJ45OmnCML/view?usp=sharing',
  },
  {
    title: 'Yapay Zeka için Python Programlama',
    issuer: 'Udemy',
    date: '10.07.2025',
    description: 'Yapay zeka projeleri için Python temelleri.',
    link: 'https://drive.google.com/file/d/1X7WJJmfhAqWocFKFOMacQ4cTt6m1CVK1/view?usp=sharing',
  },
  {
    title: 'Veri Bilimi Uzmanlığı – Python',
    issuer: 'Udemy',
    date: '14.07.2025',
    description: 'Sıfırdan uzmanlığa veri bilimi eğitimi.',
    link: 'https://drive.google.com/file/d/13Dxv71xh9LrlcIBPlk9da3OWILMKuo9E/view?usp=sharing',
  },


];

const Certificates = ({ onBack }) => {
  return (
    <section className="animate-slide-up flex flex-col items-center justify-center w-full max-w-6xl px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center">📜 Sertifikalarım</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{cert.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1"><strong>Kuruluş:</strong> {cert.issuer}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2"><strong>Tarih:</strong> {cert.date}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{cert.description}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-300 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              >
                🔗 Sertifikayı Görüntüle
              </a>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        className="mt-12 px-6 py-3 bg-purple-300 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        🔙 Ana Sayfaya Dön
      </button>
    </section>
  );
};

export default Certificates;
