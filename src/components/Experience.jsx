import React from 'react';

const experiences = [    
{
    title: 'Deneyap Türkiye – Eğitmen & Mentor',
    date: 'Eylül 2025 - Devam ediyor',
    description: 'Deneyap Türkiye’de yarı zamanlı eğitmen ve mentor olarak görev alıyorum. Öğrencilere teknik eğitimler veriyor, proje geliştirme süreçlerinde rehberlik ediyorum.',
  },
  {
    title: 'Teknofest 2025 – Gönüllü',
    date: 'Ağustos 2025 - Eylül 2025',
    description: 'Teknofest Girişim Merkezi’nde gönüllü olarak görev aldım.',
  },
  {
    title: 'Take Off – Gönüllü Çalışkan',
    date: 'Temmuz 2025 - Devam ediyor',
    description: 'Sahne kısmında gönüllü olarak görev alıyorum.',
  },
  {
    title: 'Social Office TNC Group – IT Gönüllü Stajyeri',
    date: 'Ağustos 2025 - Eylül 2025',
    description: 'TNC Group bünyesinde IT departmanında gönüllü stajyer olarak görev aldım.',
  },
  {
    title: 'T3 Vakfı – Gönüllü',
    date: 'Haziran 2025 - Devam ediyor',
    description: 'T3 Vakfı bünyesinde gönüllü olarak çeşitli etkinliklerde görev alıyorum.',
  },
  {
    title: 'Etkin Kampüs – Temsilci',
    date: 'Eylül 2025 - Devam ediyor',
    description: 'Etkin Kampüs’te kampüs temsilcisi olarak görev alıyorum.',
  },
  {
    title: 'Genesis Network – Eğitmen',
    date: 'Eylül 2025',
    description: 'Genesis Network kapsamında dönemsel olarak eğitmenlik yapıyorum.',
  },
];

const Experience = ({ onBack }) => {
  return (
    <section className="animate-slide-up flex flex-col items-center justify-center w-full max-w-5xl px-6 py-10">
      <h2 className="text-4xl font-bold mb-10 text-center">🧭 Deneyimlerim</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        className="mt-10 px-6 py-3 bg-blue-300 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        🔙 Ana Sayfaya Dön
      </button>
    </section>
  );
};

export default Experience;
