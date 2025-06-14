
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    dashboard: "Dashboard",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",
    googleAds: "Google Ads",
    accounts: "Accounts",
    reports: "Reports",
    settings: "Settings",
    login: "Login",
    register: "Register",
    email: "Email",
    password: "Password",
    language: "Language",
    totalFollowers: "Total Followers",
    avgEngagementRate: "Avg. Engagement Rate",
    totalImpressions: "Total Impressions",
    totalClicks: "Total Clicks"
  },
  id: {
    dashboard: "Dasbor",
    facebook: "Facebook", 
    instagram: "Instagram",
    tiktok: "TikTok",
    googleAds: "Google Ads",
    accounts: "Akun",
    reports: "Laporan", 
    settings: "Pengaturan",
    login: "Masuk",
    register: "Daftar",
    email: "Email",
    password: "Kata Sandi",
    language: "Bahasa",
    totalFollowers: "Total Pengikut",
    avgEngagementRate: "Rata-rata Tingkat Keterlibatan",
    totalImpressions: "Total Tayangan",
    totalClicks: "Total Klik"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>('en');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
