
import React, { useState } from 'react';
import { Language } from '../translations';

const PrincipleItem: React.FC<{ title: string; subtitle: string; emoji: string; lang: Language; onClick: () => void }> = ({ title, subtitle, emoji, lang, onClick }) => (
  <div 
    onClick={onClick}
    className="flex items-start space-x-6 cursor-pointer group hover:bg-yellow-50/50 p-4 -m-4 rounded-3xl transition-all"
  >
    <div className="text-3xl pt-1 group-hover:scale-110 transition-transform">{emoji}</div>
    <div>
      <h4 className={`text-2xl font-bold text-yellow-900 ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>{title}</h4>
      <p className="text-yellow-800/70 font-medium leading-relaxed">{subtitle}</p>
    </div>
  </div>
);

export const Principles: React.FC<{ t: any; lang: Language }> = ({ t, lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="principles" className="px-6 py-20 bg-yellow-50 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-inner border-2 border-yellow-100">
          <h2 className={`text-4xl md:text-5xl font-bold text-yellow-900 text-center mb-12 italic ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>
            {t.principleQuote}
          </h2>
          
          <div className="grid gap-10">
            <PrincipleItem 
              emoji="✨"
              title={t.princ1Title}
              subtitle={t.princ1Desc}
              lang={lang}
              onClick={() => setIsModalOpen(true)}
            />
            <PrincipleItem 
              emoji="🔒"
              title={t.princ2Title}
              subtitle={t.princ2Desc}
              lang={lang}
              onClick={() => setIsModalOpen(true)}
            />
            <PrincipleItem 
              emoji="☁️"
              title={t.princ3Title}
              subtitle={t.princ3Desc}
              lang={lang}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Principle Detail Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-yellow-900/10 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-white border-4 border-yellow-200 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-300"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className={`text-3xl font-bold text-yellow-900 ${lang === 'en' ? 'font-amatic' : 'font-chinese'}`}>
                {t.navPrinciples}
              </h3>
            </div>
            <ul className="space-y-6">
              {t.principleModalItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start space-x-3 text-lg text-yellow-800 font-medium">
                  <span className="text-yellow-400">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="mt-10 w-full py-4 bg-yellow-400 text-yellow-900 font-bold rounded-full hover:bg-yellow-300 transition-colors shadow-sm"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
