
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')",
          transform: `translateY(${offsetY * 0.5}px)` 
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center z-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
          Crafting Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          A passionate creator blending art and technology through Web Design, 2D/3D Illustration, and Animation.
        </p>
        <a 
          href="#portfolio" 
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 text-lg shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;