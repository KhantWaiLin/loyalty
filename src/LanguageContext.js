import React, { createContext, useState } from 'react';
import i18next from 'i18next';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: {
        //Profile Screen
        "key": "Language",
        "personalInformation": "Personal Information",
        "myAccount":"My Account",
        "userName": "Username",
        "email": 'Email',
        "update": 'Update',
        "changeNumber":"Change Number",
        "chNumberNote": "You can update your phone number to ensure your account information is up-to-date. We'll send a verification code to your new number for security.",
        "newNumber": "New Phone Number",
        "verification": "Verification",
        "verification1": "Confirm",
        "changePassword":"Change Password",
        "currentP": "Current Password",
        "newP": "New Password",
        "confirmP": "Confirm Password",
        "transaction": "Transaction History",
        "membership": "Membership Tier Level",
        "setting": "Setting",
        "language": "Language",
        "general": "General",
        "helpCenter": "Help Center",
        "contactUs": "Contact Us",
        "faq": "FAQ",
        "terms": "Terms & Conditions",
        "receiveNoti": "Receive Notification",
        "receiveEmail": "Receive Offers By Email",
        "logout": "Log out",
        // Home Screen
        "promotions" : "Promotions",
        "viewAll": "View all",
        "services": "Services",
        "recBlogs": "Recommended Blogs" ,
        "goodM" : "Good Morning",
        "goodA": "Good Afternoon",
        "goodE": "Good Evening",
        "coupon": "Coupon",
        "coupons": "Coupons",
        "available": "Available",
        "used": "Used",
        "expired": "Expired",
        
      }
    },
    mm: {
      translation: {
        //Profile Screen
        "key": "ဘာသာာစကား",
        "personalInformation": "ကိုယ်ရေးအချက်အလက်",
        "userName": "အသုံးပြုသူ",
        "email": "မေးလ်",
        "update": "ပြောင်းမည်",
        "myAccount": "ကျွန်ုပ်အကောင့်",
        "changeNumber": "ဖုန်းနံပါတ်ပြောင်းမည်",
        "chNumberNote": "သင့်အကောင့်အချက်အလက်သည် နောက်ဆုံးပေါ်ဖြစ်ကြောင်း သေချာစေရန် သင့်ဖုန်းနံပါတ်ကို အပ်ဒိတ်လုပ်နိုင်ပါသည်။ လုံခြုံရေးအတွက် သင့်နံပါတ်အသစ်သို့ အတည်ပြုကုဒ်တစ်ခု ပေးပို့ပါမည်။",
        "newNumber": "ဖုန်းနံပါတ်အသစ်",
        "verification": "အတည်ပြုမည်",
        "verification1": "အတည်ပြုမည်",
        "changePassword": "လျှို့ဝှက်ကုဒ်ပြောင်းမည်",
        "currentP": "လက်ရှိလျှို့ဝှက်ကုဒ်",
        "newP": "လျှို့ဝှက်ကုဒ်အသစ်",
        "confirmP": "လျှို့ဝှက်ကုဒ်အသစ်ကိုအတည်ပြုပါ",
        "transaction": "အသုံးပြုမှုမှတ်တမ်း",
        "membership": "အဖွဲ့ဝင်အဆင့်သက်မှတ်ချက်",
        "setting": "ဆက်တင်",
        "language": "ဘာသာစကား",
        "general": "ပုံမှန်ဆက်တင်",
        "helpCenter": "အကူအညီ",
        "contactUs": "ဆက်သွယ်ရန်",
        "faq": "မေးလေ့ရှိသော မေးခွန်းများ",
        "terms": "စည်းကမ်းချက်များ",
        "receiveNoti": "အသိပေးချက်များရယူမည်",
        "receiveEmail": "မေးလ်ဖြင့်ကမ်းလှမ်းမှုများရယူမည်",
        "logout": "ထွက်မည်",
        // Home Screen
        "promotions": "ပရိုမိုးရှင်းများ",
        "viewAll": "အားလုံးကြည့်မည်",
        "services": "ဝန်ဆောင်မှုများ",
        "recBlogs": "အကြံပြုထားသော ဘလေ့ာများ",
        "goodM": "မင်္ဂလာမနက်ခင်းပါ",
        "goodA": "မင်္ဂလာနေ့လည်ခင်းပါ",
        "goodE": "မင်္ဂလာညနေခင်းပါ",
        "coupon": "ကူပွန်",
        "coupons": "ကူပွန်များ",
        "available": "အသုံးပြုနိုင်သော",
        "used": "အသုံးပြုပြီးသော",
        "expired": "သက်တမ်းကုန်သော"
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
