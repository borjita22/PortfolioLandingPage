'use client'

import React, { useState, useCallback, useEffect} from 'react';
import '../styles/header.css';


//import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./languageSwitcher";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';


const Header: React.FC = () => {

  const { t } = useTranslation();
  //const { t, i18n } = useTranslation();
  /*
  
 

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.reloadResources();
      i18n.init();
    }
  }, [i18n]);
  */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleScroll = (event: { preventDefault: () => void; }, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
    }
  };

  useEffect(() => {
    // Debug logs
    console.log("Header - Current language:", i18n.language);
    console.log("Header - Is i18n initialized:", i18n.isInitialized);
    console.log("Header - Translation test:", t('header_about_option'));
    console.log("Header - Available languages:", i18n.languages);
}, [i18n.language]);

  /*
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  */

  return (
    <header className="header" >
      <div className="logo">
        <Image src= "/Resources/Imgs/Logotipos BorchDev/SVG/blanco.svg" alt="Logo" className='blended-element' width={450} height={450} priority>

        </Image>
        
      </div>
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
      <div>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
            <li>
              <Link href="/about" className='about-option' onClick={(e) => handleScroll(e, 'about')}>
              {t('header_about_option')}
              </Link>
            </li>
            <li>
              <Link href="/experience" className='experience-option' onClick={(e) => handleScroll(e, 'experience')}>
              {t('header_experience_option')}
              </Link>
            </li>
            <li>
              <Link href="/projects" className='projects-option' onClick={(e) => handleScroll(e, 'projects')}>
              {t('header_projects_option')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className='contact-option' onClick={(e) => handleScroll(e, 'contact')}>
              {t('header_contact_option')}
              </Link>
            </li>
              
            </ul>
        </nav>
      </div>
      <LanguageSwitcher />
      {/* <LanguageSwitcher className="top-right" /> */}
      
    </header>
  );
};

export default Header;


