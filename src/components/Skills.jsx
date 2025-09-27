import React from 'react';

const skills = [
  {
    category: '🧠 Veri Bilimi & Yapay Zeka',
    color: 'bg-purple-100',
    items: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Pandas',
      'Numpy',
      'Matplotlib',
      'OpenCV',
      'Makine Öğrenmesi',
      'Derin Öğrenme',
      'NLP',
    ],
  },
  {
    category: '🎨 Frontend Geliştirme',
    color: 'bg-yellow-100',
    items: [
      'HTML',
      'CSS',
      'Bootstrap5',
      'Tailwind',
      'Material UI',
      'JavaScript',
      'Vanilla JS',
      'jQuery',
      'React',
      'Next.js',
      'Electron.js',
    ],
  },
  {
    category: '🛠️ Backend Geliştirme',
    color: 'bg-blue-100',
    items: ['Node.js', 'Express.js', 'Flask', 'Streamlit', 'Java', 'C++'],
  },
  {
    category: '📱 Mobil Uygulama Geliştirme',
    color: 'bg-green-100',
    items: ['Flutter'],
  },
  {
    category: '🌍 Diller',
    color: 'bg-pink-100',
    items: ['Türkçe (Ana dil)', 'İngilizce (C1 seviyesi)'],
  },
];

const Skills = ({ onBack }) => {
  return (
    <section className="animate-slide-up flex flex-col items-center justify-center w-full max-w-6xl px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 text-center">🛠️ Becerilerim</h2>

      <div className="space-y-10 w-full">
        {skills.map((group, index) => (
          <div key={index}>
            <h3 className={`text-xl font-semibold px-4 py-2 rounded-t-md ${group.color} text-gray-800`}>
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 bg-white dark:bg-gray-800 rounded-b-md shadow-md">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-center text-gray-800 dark:text-white font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onBack}
        className="mt-12 px-6 py-3 bg-green-300 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        🔙 Ana Sayfaya Dön
      </button>
    </section>
  );
};

export default Skills;
