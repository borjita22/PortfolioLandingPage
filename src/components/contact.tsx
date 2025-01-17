
import React from "react";
import '../styles/contact.css';
import Image from 'next/image';
import { useTranslation } from "react-i18next";


//import { useTranslation } from "react-i18next";


const Contact: React.FC = () =>
{
    
    const { t } = useTranslation();



    return(
        <section className="contact-container" id="contact">
            <h1 className="contact-header">
                <a>{t('contact_title')}</a>
            </h1>
            <div className="contact-panel-container">
                <p className="explanation-text">
                    {t('contact_paragraph')}
                </p>

                <div className="contact-icons">
                <a href="mailto:borjagr22@gmail.com">
                        <Image
                            src="/Resources/icons/gmail.svg"
                            alt="Gmail"
                            className="contact-icon"
                            width={24} // Ajusta el tamaño según sea necesario
                            height={24} // Ajusta el tamaño según sea necesario
                        />
                    </a>
                    <a href="https://github.com/borjita22/Borja-Garcia-Dev.git" target="_blank">
                        <Image
                            src="/Resources/icons/Github_dark.svg"
                            alt="GitHub"
                            className="contact-icon"
                            width={24} // Ajusta el tamaño según sea necesario
                            height={24} // Ajusta el tamaño según sea necesario
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/borjagarciagamedev/" target="_blank">
                        <Image
                            src="/Resources/icons/linkedin.svg"
                            alt="LinkedIn"
                            className="contact-icon"
                            width={24} // Ajusta el tamaño según sea necesario
                            height={24} // Ajusta el tamaño según sea necesario
                        />
                    </a>
                </div>
                <a href="/Resources/assets/CV.pdf" className="download-cv" target="_blank">{t('cv_link_text')}</a>
            </div>
        </section>
    );
};

export default Contact;