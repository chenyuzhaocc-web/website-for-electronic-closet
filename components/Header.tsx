
import React from 'react';
import { Language } from '../translations';

interface HeaderProps {
  lang: Language;
  toggleLang: () => void;
  t: any;
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLang, t }) => {
  const demoUrl = "https://ai.studio/apps/drive/1r1pNRNz6vDwZHEJ7cVQEFRm3CnpsXW2M?fullscreenApplet=true";

  return (
    <header className="sticky top-0 z-50 bg-[#FEFCE8]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-yellow-100">
      <div className="flex items-center space-x-2">
        <span className={`text-3xl font-bold text-yellow-800 tracking-wider ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>
          {t.appName}
        </span>
      </div>
      <nav className="flex items-center space-x-4 md:space-x-8">
        <button 
          onClick={toggleLang}
          className="px-3 py-1 rounded-full bg-white border border-yellow-200 text-xs font-bold text-yellow-700 hover:bg-yellow-50 transition-all uppercase tracking-tighter"
        >
          {lang === 'en' ? '中文' : 'EN'}
        </button>

        <a 
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border-2 border-yellow-400 text-yellow-700 px-4 py-1.5 rounded-full hover:bg-yellow-50 transition-all text-sm font-semibold whitespace-nowrap"
        >
          {t.tryDemo}
        </a>
      </nav>
    </header>
  );
};