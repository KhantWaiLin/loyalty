// LanguageContext.js
import React, { createContext, useState } from 'react';
import i18next from 'i18next';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "Language",
        "help": 'Help Center',
        "personalInformation": "Personal Information",
        "myAccount":"My Account",
        "changeNumber":"Change Number",
        "changePassword":"Change Password"
      }
    },
    mm: {
      translation: {
        "key": "ဘာသာာစကား",
        "help": 'အကူအညီ',
        "personalInformation": "ကိုယ်ရေးအချက်အလက်",
        "myAccount": "ကျွန်ုပ်အကောင့်",
        "changeNumber": "ဖုန်းနံပါတ်ပြောင်းမည်",
        "changePassword": "လျှို့ဝျက်ကုဒ်ပြောင်းမည်"
      }
    }
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
