// components/languageSwitcher.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import '../styles/languageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => changeLanguage("en")} 
        className={i18n.language === "en" ? "active" : ""}
      >
        <Image 
          src="/Resources/icons/english.png" 
          alt="English"
          width={24}
          height={24}
        />
      </button>
      <button 
        onClick={() => changeLanguage("es")} 
        className={i18n.language === "es" ? "active" : ""}
      >
        <Image 
          src="/Resources/icons/spanish.png" 
          alt="Español"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;