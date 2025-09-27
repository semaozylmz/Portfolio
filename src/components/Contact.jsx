import React, { useState } from 'react';

const Contact = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Şimdilik sadece konsola yazıyor, ileride backend ile semanrozyilmaz@gmail.com adresine yönlendirilebilir
    console.log('Gönderilen Mesaj:', formData);
    alert('Mesajınız gönderildi! En kısa sürede dönüş yapacağım 💌');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="animate-slide-up flex flex-col items-center justify-center w-full max-w-4xl px-6 py-10 text-center">
      <h2 className="text-4xl font-bold mb-6">📩 İletişim</h2>

      <p className="text-lg mb-6 max-w-2xl">
        Projeleriniz hakkında konuşmak veya beraber çalışma fırsatları için benimle iletişime geçin.  
        Birlikte harika projeler yaratmaya başlayalım!  
        <br /><br />
        Yeni projeler, iş birlikleri veya sadece merhaba demek için...  
        Her türlü mesajınıza açığım. En kısa sürede size dönüş yapacağım.
      </p>

     {/* Temel iletişim bilgileri */}
        <div className="text-left w-full max-w-md mb-8 space-y-3">
        <p>
            <strong>E-posta:</strong>{' '}
            <a
            href="mailto:semanrozyilmaz@gmail.com"
            className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
            >
            semanrozyilmaz@gmail.com
            </a>
        </p>
        <p>
            <strong>Telefon:</strong>{' '}
            <a
            href="tel:+905061347089"
            className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
            >
            +90 506 134 70 89
            </a>
        </p>
        <p><strong>Lokasyon:</strong> İstanbul, Türkiye</p>
        </div>


      {/* Sosyal bağlantılar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-md">
        <a
            href="https://www.linkedin.com/in/sema-nur-ozyilmaz0903/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-center"
        >
            💼 LinkedIn
        </a>
        <a
            href="https://github.com/semaozylmz?tab=followers"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-800 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-center"
        >
            🐙 GitHub
        </a>
        <a
            href="https://medium.com/@ssozylmz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-black text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-center"
        >
            ✍️ Medium
        </a>
        <a
            href="https://www.kaggle.com/semaozyilmaz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-center"
        >
            📊 Kaggle
        </a>
        </div>


      {/* Mesaj formu */}
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta adresiniz"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Mesajınız"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <button
          type="submit"
          className="w-full py-2 bg-pink-400 text-black font-semibold rounded-md shadow-md hover:scale-105 transition-transform duration-300"
        >
          ✉️ Mesaj Gönder
        </button>
      </form>

      {/* Ana sayfaya dönüş */}
      <button
        onClick={onBack}
        className="mt-8 px-6 py-3 bg-gray-300 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        🔙 Ana Sayfaya Dön
      </button>
    </section>
  );
};

export default Contact;
