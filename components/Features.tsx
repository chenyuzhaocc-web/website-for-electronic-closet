
import React from 'react';
import { Language } from '../translations';

const FeatureCard: React.FC<{ icon: string; title: string; description: string; lang: Language }> = ({ icon, title, description, lang }) => (
  <div className="bg-white/50 p-8 rounded-3xl border border-yellow-100 hover:shadow-md transition-shadow">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className={`text-3xl font-bold text-yellow-900 mb-3 ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>{title}</h3>
    <p className="text-yellow-800/70 leading-relaxed font-medium">
      {description}
    </p>
  </div>
);

export const Features: React.FC<{ t: any; lang: Language }> = ({ t, lang }) => {
  return (
    <section id="features" className="px-6 py-20 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-yellow-900 mb-4 ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>
            {t.featuresTitle}
          </h2>
          <p className="text-yellow-800/60 font-medium">{t.featuresSub}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🗂️" 
            title={t.feat1Title} 
            description={t.feat1Desc}
            lang={lang}
          />
          <FeatureCard 
            icon="🧠" 
            title={t.feat2Title} 
            description={t.feat2Desc}
            lang={lang}
          />
          <FeatureCard 
            icon="🧸" 
            title={t.feat3Title} 
            description={t.feat3Desc}
            lang={lang}
          />
        </div>
      </div>
    </section>
  );
};
