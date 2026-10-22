import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { mr } from '../locales/mr';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('ayushyachi_lang');
      return saved === 'mr' ? 'mr' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang) => {
    const validLang = lang === 'mr' ? 'mr' : 'en';
    setLanguageState(validLang);
    try {
      localStorage.setItem('ayushyachi_lang', validLang);
    } catch (e) {
      console.warn("Could not save language to localStorage", e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mr' : 'en');
  };

  useEffect(() => {
    if (language === 'mr') {
      document.body.classList.add('lang-mr');
      document.documentElement.lang = 'mr';
    } else {
      document.body.classList.remove('lang-mr');
      document.documentElement.lang = 'en';
    }
  }, [language]);

  const t = language === 'mr' ? mr : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
