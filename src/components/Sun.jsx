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
                height: `${cloud.size * 0.5}px`, 
                animationDelay: `${cloud.delay}s`,
                filter: 'blur(6px)',
                opacity: 1,
            }}

          />

        ))}
      </div>

      {/* Güneş */}
      <div className="absolute top-10 right-10 z-10">
        <div className="sun-core" />
        </div>


    </>
  );
};

export default Sun;
