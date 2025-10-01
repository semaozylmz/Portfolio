import React from 'react';

const projects = [
  {
    title: 'Titanic Survival Predictor',
    description: 'Streamlit ile geliştirilen, makine öğrenmesi destekli Titanic hayatta kalma tahmin uygulaması.',
    tech: ['Python', 'Streamlit', 'Jupyter Notebook'],
    github: 'https://github.com/semaozylmz/titanic-survival-predictor',
    updated: '20 Haziran 2025',
  },
  {
    title: 'Frontend Mentor Projects',
    description: 'Frontend Mentor üzerindeki küçük projelerle web geliştirme becerilerimi geliştirdiğim bir koleksiyon.',
    tech: ['HTML', 'CSS', 'Responsive Design'],
    github: 'https://github.com/semaozylmz/frontend-mentor-projects',
    updated: '28 Mayıs 2025',
  },
  {
    title: 'Minimal To Do App',
    description: 'Basit ve sade bir yapılacaklar listesi uygulaması. JavaScript ile geliştirilmiştir.',
    tech: ['JavaScript'],
    github: 'https://github.com/semaozylmz/MinimalToDoApp',
    updated: '27 Mayıs 2025',
  },
  {
    title: 'Personal Portfolio',
    description: 'Tailwind ve React ile geliştirdiğim ilk kişisel portföy web sitem.',
    tech: ['JavaScript', 'React', 'Tailwind'],
    github: 'https://github.com/semaozylmz/PersonalPortfolio',
    updated: '22 Mayıs 2025',
  },
  {
    title: 'Machine Learning Projects',
    description: 'Gerçek veri setleriyle sınıflandırma, regresyon ve kümeleme tekniklerini içeren başlangıç seviyesinde ML projeleri.',
    tech: ['Python', 'Jupyter Notebook', 'Scikit-learn'],
    github: 'https://github.com/semaozylmz/machine-learning-projects',
    updated: '6 Mayıs 2025',
  },
  {
    title: 'Calculator',
    description: 'Swift ile geliştirilen basit bir hesap makinesi uygulaması.',
    tech: ['Swift'],
    github: 'https://github.com/semaozylmz/calculator',
    updated: '29 Nisan 2025',
  },
  {
    title: 'Spotify Clone',
    description: 'JavaScript ile geliştirilen temel bir Spotify arayüz klonu.',
    tech: ['JavaScript'],
    github: 'https://github.com/semaozylmz/Spotify_clone',
    updated: '18 Mart 2025',
  },
  {
    title: 'Calendar',
    description: 'JavaScript ile oluşturulmuş interaktif bir takvim uygulaması.',
    tech: ['JavaScript'],
    github: 'https://github.com/semaozylmz/Calendar',
    updated: '25 Şubat 2025',
  },
  {
    title: 'Sentiment Analysis',
    description: 'Python ile geliştirilen duygu analizi projesi. Metinlerden pozitif/negatif duygu çıkarımı yapar.',
    tech: ['Python', 'NLP'],
    github: 'https://github.com/semaozylmz/sentiment-analysis',
    updated: '16 Şubat 2025',
  },
  {
    title: 'GameVerse',
    description: 'JavaScript ile geliştirilen basit oyun platformu arayüzü.',
    tech: ['JavaScript'],
    github: 'https://github.com/semaozylmz/GameVerse',
    updated: '10 Şubat 2025',
  },
  {
    title: 'Nova Blog Website',
    description: 'HTML ile hazırlanmış sade bir blog sitesi tasarımı.',
    tech: ['HTML'],
    github: 'https://github.com/semaozylmz/NovaBlogWebsite',
    updated: '8 Şubat 2025',
  },
   {
    title: 'Portfolio',
    description: 'React ve Tailwind CSS kullanarak geliştirdiğim güncellenmiş kişisel portföy web sitesi.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/semaozylmz/Portfolio',
    updated: '30 Eylül 2025',
  },

];

const Projects = ({ onBack }) => {
  return (
    <section className="animate-slide-up flex flex-col items-center justify-center w-full max-w-6xl px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center">🚀 Projelerim</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div key={index} className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-[1.02]">
            {/* GitHub ikonu */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className="w-6 h-6 hover:scale-110 transition-transform duration-300"
                />
              </a>
            )}

            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Güncellendi: {project.updated}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

            {/* Teknoloji etiketleri */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        className="mt-12 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        🔙 Ana Sayfaya Dön
      </button>
    </section>
  );
};

export default Projects;
