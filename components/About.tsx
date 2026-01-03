import React from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-gray-700 text-cyan-300 text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full">
    {children}
  </span>
);


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="https://picsum.photos/seed/profile/400/400" 
              alt="Sammy Jay"
              className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hi, I'm Sammy Jay, a multi-disciplinary creative with a passion for building beautiful and functional digital products. With a background in fine arts and a love for technology, I bridge the gap between aesthetics and interaction. My goal is to create memorable experiences that not only look good but also feel great to use.
            </p>
             <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Whether I'm designing a user-friendly website, illustrating a vibrant character, or bringing a story to life with animation, I pour my full dedication and creativity into every project.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start">
                <SkillBadge>React</SkillBadge>
                <SkillBadge>TypeScript</SkillBadge>
                <SkillBadge>Figma</SkillBadge>
                <SkillBadge>Blender</SkillBadge>
                <SkillBadge>Adobe Creative Suite</SkillBadge>
                <SkillBadge>Motion Graphics</SkillBadge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;