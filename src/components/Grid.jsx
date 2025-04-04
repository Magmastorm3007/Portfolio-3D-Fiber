import { useState, useEffect } from 'react';

const Grid = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.01);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        backgroundColor: '#000', // Black background
        backgroundImage: `linear-gradient(#2E865F 1px, transparent 1px), linear-gradient(90deg, #2E865F 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        backgroundPosition: `${offset}px ${offset}px`, // Parallax effect
        pointerEvents: 'none', // ensures it doesn’t block interaction
        animation: 'gridPulse 10s infinite',
      }}
    />
  );
};

export default Grid;
