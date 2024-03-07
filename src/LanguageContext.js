import React, { createContext, useState } from 'react';
import {mm, en} from './data.js';
import i18next from 'i18next';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en
    },
    mm: {
      translation: mm,
    },
  }
});

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  const t = (key) => i18next.t(key);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
