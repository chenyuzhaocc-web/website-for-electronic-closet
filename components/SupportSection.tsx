
import React, { useState } from 'react';
import { Language } from '../translations';

export const SupportSection: React.FC<{ t: any; lang: Language }> = ({ t, lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-8 pb-12">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white border-2 border-yellow-300 text-yellow-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-50 hover:border-yellow-400 shadow-sm transition-all"
      >
        {t.sayHi}
      </button>

      {isOpen && (
        <div className="mt-8 p-8 bg-white border-4 border-yellow-100 rounded-3xl max-w-lg mx-auto shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-yellow-900 font-bold mb-6 text-lg">
            {t.supportTitle}
          </p>
          <div className="space-y-4 text-yellow-800">
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
              <span className="text-xl">📧</span>
              <a href="mailto:chenyuzhaocc@gmail.com" className="font-medium hover:underline">
                chenyuzhaocc@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl border border-yellow-100">
              <span className="text-xl">🔗</span>
              <a href="https://www.linkedin.com/in/chenyu-chelsea" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                www.linkedin.com/in/chenyu-chelsea
              </a>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-6 text-sm text-yellow-500 font-bold underline uppercase tracking-widest block mx-auto"
          >
            {t.close}
          </button>
        </div>
      )}
    </div>
  );
};
