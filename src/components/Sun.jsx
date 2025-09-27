import { useEffect, useState } from 'react';

const Sun = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const count = 8;
    const tempClouds = [];

    for (let i = 0; i < count; i++) {
      const top = Math.random() * 20 + 5; // %5–25 arası yukarıda
      const left = Math.random() * 100;
      const size = Math.random() * 100 + 100; // 100px–200px
      const delay = Math.random() * 5;

      tempClouds.push({ top, left, size, delay });
    }

    setClouds(tempClouds);
  }, []);

  return (
    <>
      {/* Bulutlar */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {clouds.map((cloud, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60 animate-cloud-float"
            style={{
                top: `${cloud.top}%`,
                left: `${cloud.left}%`,
                width: `${cloud.size * 1.5}px`, // genişlik artırıldı
                height: `${cloud.size * 0.5}px`, // yatay form korunuyor
                animationDelay: `${cloud.delay}s`,
                filter: 'blur(6px)',
                opacity: 1,
            }}

          />

        ))}
      </div>

      {/* Güneş */}
      <div className="absolute top-10 right-10 z-10">
        <div
            className="w-32 h-32 rounded-full animate-spin-slow animate-pulse relative"

            style={{
            backgroundColor: '#fff176', // daha açık sarı (Tailwind'de yellow-300 gibi)
            boxShadow: '0 0 80px 50px rgba(255, 241, 118, 0.6)', // dışa doğru parlama
            }}
        />
        </div>


    </>
  );
};

export default Sun;
