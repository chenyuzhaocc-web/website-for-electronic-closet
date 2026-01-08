
import React from 'react';
import { Language } from '../translations';
import { SupportSection } from './SupportSection';

export const Footer: React.FC<{ t: any; lang: Language }> = ({ t, lang }) => {
  return (
    <footer className="px-6 border-t border-yellow-100 bg-white">
      <SupportSection t={t} lang={lang} />
      
      <div className="max-w-4xl mx-auto py-16 text-center space-y-8">
        <div className={`text-3xl font-bold text-yellow-700 tracking-wider ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>
          {t.appName}
        </div>
        
        <div className="space-y-4">
          <p className="text-yellow-800/80 font-medium text-lg">
            {t.footerFeedback}
          </p>
          <p className="text-yellow-800/60 font-medium italic">
            {t.footerExplore}
          </p>
        </div>

        <div className="flex justify-center space-x-8 text-sm font-bold text-yellow-800/30 uppercase tracking-widest cursor-default select-none">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>

        <div className="text-xs text-yellow-800/30 font-bold uppercase tracking-widest pt-4">
          © 2026 Wardrobe on My Phone. All rights reserved.
        </div>

        <div className="text-4xl opacity-20 select-none pt-4">
          🧣 🧤 🧥 👖 👟
        </div>
      </div>
    </footer>
  );
};