import { useEffect, useState } from 'react';

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const count = 300;
    const tempStars = [];

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 2 + 1; 
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;

      tempStars.push({ size, top, left, delay });
    }

    setStars(tempStars);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
            key={i}
            className="absolute rounded-full animate-star-float"
            style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.top}%`,
                left: `${star.left}%`,
                animationDelay: `${star.delay}s`,
                background: 'radial-gradient(circle, white 0%, rgba(255,255,255,0.3) 70%)',
                boxShadow: '0 0 6px rgba(255,255,255,0.6)',
         }}
        />

      ))}
    </div>
  );
};

export default StarsBackground;
