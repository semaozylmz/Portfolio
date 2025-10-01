import { useState, useEffect } from 'react';
import StarsBackground from './components/StarsBackground';
import Sun from './components/Sun';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [activeSection, setActiveSection] = useState('home'); // 'home', 'projects', 'experience', 'skills', 'contact', 'certificates'

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-gradient-to-b from-green-100 via-yellow-50 to-blue-100'} relative min-h-screen transition-colors duration-500`}>

      {/* Tema Toggle Butonu */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 left-5 px-4 py-2 bg-gray-700 text-white rounded-full z-50"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Arka planlar */}
      {isDark && <StarsBackground />}
      {!isDark && <Sun />}

      {/* Sayfa içeriği */}
      <main className="min-h-screen overflow-y-auto flex items-center justify-center px-6 py-10">
        {activeSection === 'home' && (
          <section className="max-w-3xl text-center transition-all duration-500 animate-fade-in">
            <h1 className="text-5xl font-bold mb-2">Sema Nur Özyılmaz</h1>
            <h2 className="text-2xl mb-6">Bilgisayar Mühendisliği Öğrencisi</h2>
            <p className="text-xl leading-relaxed mb-8">
              Yapay zeka, veri bilimi ve frontend teknolojileriyle ilgilenen bir geliştiriciyim.  
              Teknik altyapımı estetik dokunuşlarla birleştirerek dijital kimliğimi özgün bir evren olarak tasarlıyorum.  
              Bu portfolyo, hem benim dijital sahnem hem de hayal gücümün kodlanmış hali.
            </p>

            {/* 4 Buton: Deneyim, Proje, Beceri, Sertifika */}
            <div className="flex justify-center gap-4 mt-12 flex-wrap md:flex-nowrap">
            <button
              onClick={() => setActiveSection('experience')}
              className="px-6 py-3 bg-blue-300 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              🧭 Deneyimlerime Göz At
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              🚀 Projelerime Göz At
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className="px-6 py-3 bg-green-300 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              🛠️ Becerilerime Göz At
            </button>
            <button
              onClick={() => setActiveSection('certificates')}
              className="px-6 py-3 bg-purple-300 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              📜 Sertifikalarımı Görüntüle
            </button>
          </div>

            

            {/* İletişim Butonu */}
            <div className="mt-8">
              <button
                onClick={() => setActiveSection('contact')}
                className="w-48 h-12 bg-pink-400 text-black font-semibold shadow-md hover:scale-105 transition-transform duration-300"
              >
                📩 Benimle İletişime Geç
              </button>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <Projects onBack={() => setActiveSection('home')} />
        )}
        {activeSection === 'experience' && (
          <Experience onBack={() => setActiveSection('home')} />
        )}
        {activeSection === 'skills' && (
          <Skills onBack={() => setActiveSection('home')} />
        )}
        {activeSection === 'certificates' && (
          <Certificates onBack={() => setActiveSection('home')} />
        )}
        {activeSection === 'contact' && (
          <Contact onBack={() => setActiveSection('home')} />
        )}
      </main>

      {/* Sosyal Bağlantılar sadece ana sahnede görünür */}
      {activeSection === 'home' && (
        <footer className="bottom-5 left-1/2 transform -translate-x-1/2 flex gap-6 z-40 fixed md:absolute md:bottom-5">
          <a
            href="https://github.com/semaozylmz?tab=followers"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 rounded-full bg-white/70 dark:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-6 h-6" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sema-nur-ozyilmaz0903/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-12 h-12 rounded-full bg-white/70 dark:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
            </div>
          </a>
          <a
            href="mailto:semanrozyilmaz@gmail.com"
            className="group"
          >
            <div className="w-12 h-12 rounded-full bg-white/70 dark:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-6 h-6" />
            </div>
          </a>
        </footer>
      )}
    </div>
  );
}

export default App;
