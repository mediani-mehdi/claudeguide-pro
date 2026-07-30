'use client';

import { useLanguage } from './LanguageProvider';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      type="button"
      aria-label="Switch language"
      title={`Switch to ${lang === 'en' ? 'French (Français)' : 'English'}`}
      className={`px-3 py-1.5 rounded-full backdrop-blur-md border text-[11px] font-semibold tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer bg-white/10 border-white/20 text-marble-100 hover:bg-white/20 hover:scale-105 shadow-md ${className}`}
    >
      <span className={lang === 'en' ? 'text-terracotta-400 font-bold' : 'opacity-60'}>
        EN
      </span>
      <span className="opacity-30">|</span>
      <span className={lang === 'fr' ? 'text-terracotta-400 font-bold' : 'opacity-60'}>
        FR
      </span>
    </button>
  );
}
