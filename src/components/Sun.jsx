import { useEffect, useState } from 'react';

const Sun = () => {
  const [clouds, setClouds] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const count = 8;
    const tempClouds = [];

    for (let i = 0; i < count; i++) {
      const top = Math.random() * 20 + 5;
      const left = Math.random() * 100;
      const size = Math.random() * 100 + 100;
      const delay = Math.random() * 5;

      tempClouds.push({ top, left, size, delay });
    }

    setClouds(tempClouds);

    // Mobil kontrolü
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // İlk yüklemede kontrol et
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Bulutlar */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {clouds.map((cloud, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-cloud-float"
            style={{
              top: `${cloud.top}%`,
              left: `${cloud.left}%`,
              width: `${cloud.size * 1.5}px`,
              height: `${cloud.size * 0.5}px`,
              animationDelay: `${cloud.delay}s`,
              filter: 'blur(6px)',
              opacity: 0.6,
              zIndex: -1,
            }}
          />
        ))}
      </div>

      {/* Güneş */}
      <div
        className="absolute"
        style={{
          top: isMobile ? '10px' : '40px',
          right: isMobile ? '10px' : '40px',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        <div
          className="rounded-full animate-spin-slow animate-pulse"
          style={{
            width: isMobile ? '80px' : '128px',
            height: isMobile ? '80px' : '128px',
            backgroundColor: '#fff176',
            boxShadow: '0 0 80px 50px rgba(255, 241, 118, 0.6)',
            opacity: isMobile ? 0.4 : 1,
          }}
        />
      </div>
    </>
  );
};

export default Sun;
