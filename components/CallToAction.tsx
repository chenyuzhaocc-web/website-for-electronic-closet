
import React from 'react';
import { Language } from '../translations';

export const CallToAction: React.FC<{ t: any; lang: Language }> = ({ t, lang }) => {
  const demoUrl = "https://ai.studio/apps/drive/1r1pNRNz6vDwZHEJ7cVQEFRm3CnpsXW2M?fullscreenApplet=true";

  return (
    <section className="px-6 py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className={`text-4xl md:text-6xl font-bold text-yellow-900 mb-12 ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>
          {t.ctaTitle}
        </h2>
        
        <a 
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-yellow-900 px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:scale-105 transition-all"
        >
          {t.tryDemo}
        </a>
      </div>
    </section>
  );
};
