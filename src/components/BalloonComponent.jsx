import React, { useState, useEffect } from 'react';

const BalloonComponent = ({ imageSources }) => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const throwBalloon = () => {
      const newBalloon = {
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        duration: `${3 + Math.random() * 2}s`,
        size: `${30 + Math.random() * 40}px`,
        src: imageSources[Math.floor(Math.random() * imageSources.length)],
      };

      setBalloons((prevBalloons) => [...prevBalloons, newBalloon]);
    };

    const interval = setInterval(throwBalloon, 1000); // Throw a balloon every second

    // Stop throwing balloons after 20 seconds
    setTimeout(() => {
      clearInterval(interval);
    }, 20000);

    return () => clearInterval(interval);
  }, [imageSources]);

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
      {balloons.slice(0, 5).map((balloon) => (
        <img
          key={balloon.id}
          src={balloon.src}
          alt="Balloon"
          style={{
            position: 'absolute',
            left: balloon.left,
            animationName: 'balloonAnimation',
            animationTimingFunction: 'ease-in-out',
            animationDuration: balloon.duration,
            width: balloon.size,
            height: balloon.size,
          }}
        />
      ))}
      <style>{`
        @keyframes balloonAnimation {
          0% {
            bottom: 0;
          }
          100% {
            bottom: 100vh;
          }
        }
      `}</style>
    </div>
  );
};

export default BalloonComponent;
