'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, Language } from '@/lib/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    // 1. Check saved user preference
    const savedLang = localStorage.getItem('lang') as Language | null;
    if (savedLang === 'en' || savedLang === 'fr') {
      setLangState(savedLang);
      return;
    }

    // 2. Detect browser language
    if (typeof window !== 'undefined' && navigator) {
      const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
      if (browserLang.startsWith('fr')) {
        setLangState('fr');
      } else {
        setLangState('en');
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'fr' : 'en';
    setLang(nextLang);
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
