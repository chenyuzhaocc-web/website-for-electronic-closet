
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Principles } from './components/Principles';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = translations[lang];

  return (
    <div className={`min-h-screen flex flex-col selection:bg-yellow-200 ${lang === 'zh' ? 'font-chinese' : ''}`}>
      <Header lang={lang} toggleLang={toggleLang} t={t} />
      <main className="flex-grow">
        <Hero t={t} lang={lang} />
        <Features t={t} lang={lang} />
        <Principles t={t} lang={lang} />
        <CallToAction t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
};

export default App;
