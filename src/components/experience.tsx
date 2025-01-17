"use client"


import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import '../styles/experience.css';

// Optimización: `React.memo` para evitar renderizados innecesarios.
const Experience: React.FC = memo(() => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(1);

    const panelVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    };

    return (
        <section className="experience-container" id="experience">
            <h1 className="experience-header">
                <a>{t('experience_title')}</a>
            </h1>

            <div className="experience-options">
                <div
                    className={`option view ${selectedOption === 1 ? "active" : ""}`}
                    onClick={() => setSelectedOption(1)}
                >
                    <a>{t('experience_games_option')}</a>
                </div>

                <div
                    className={`option view ${selectedOption === 2 ? "active" : ""}`}
                    onClick={() => setSelectedOption(2)}
                >
                    <a>WEB</a>
                </div>
            </div>

            <div className="experience-content">
                <AnimatePresence mode="wait">
                    {selectedOption === 1 && (
                        <motion.div
                            key="option1"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={panelVariants}
                            className="experience-main-panel"
                        >
                            <div>
                                <h2>{t('knowledge_section_title')}</h2>
                                <div className="knowledge-fields">
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/Unity_dark.svg"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_mechDesign')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/Unity_dark.svg"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_gameplayProg')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/Unity_dark.svg"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_modelling')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/Unity_dark.svg"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_animation')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/Unity_dark.svg"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_shaders')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/Unity_dark.svg"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_sound')}</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div>
                                <h2>{t('frameworks_title')}</h2>
                                <div className="frameworks-container">
                                    {/* Optimización de imágenes con WebP, carga diferida y lazy loading */}
                                    <a href="https://unity.com" target="_blank">
                                        <Image
                                            src="/Resources/icons/Unity_dark.svg"
                                            alt="Unity"
                                            width={200}
                                            height={200}
                                            priority={true}
                                            className="framework-img"
                                        />
                                    </a>
                                    <a href="https://www.unrealengine.com/en-US" target="_blank">
                                        <Image
                                            src="/Resources/icons/Unreal Engine_dark.svg"
                                            alt="Unreal Engine"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            className="framework-img"
                                        />
                                    </a>
                                    <a href="https://dotnet.microsoft.com/es-es/languages/csharp" target="_blank">
                                        <Image
                                            src="/Resources/icons/csharp.svg"
                                            alt="C#"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            className="framework-img"
                                        />
                                    </a>
                                    <a href="https://visualstudio.microsoft.com" target="_blank">
                                        <Image
                                            src="/Resources/icons/visual-studio.svg"
                                            alt="Visual Studio"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            className="framework-img"
                                        />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {selectedOption === 2 && (
                        <motion.div
                            key="option2"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={panelVariants}
                            className="experience-main-panel"
                        >
                            <div>
                                <h2>{t('knowledge_section_title')}</h2>
                                <div className="knowledge-fields">
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/development.png"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_webDesign')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/development.png"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_webProgrammingFront')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/development.png"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_webProgrammingBack')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/development.png"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_seo')}</p>
                                    </div>
                                    <div className="knowledge-slot">
                                        <Image
                                            src="/Resources/icons/development.png"
                                            alt="Unity"
                                            width={120}
                                            height={120}
                                            priority={true}
                                            className="knowledge-slot-img">

                                        </Image>
                                        <p>{t('knowledge_versionControl')}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>{t('frameworks_title')}</h2>
                                <div className="frameworks-container">
                                    {/* Optimización de imágenes con WebP, carga diferida y lazy loading */}
                                    <a href="">
                                        <Image
                                            src="/Resources/icons/html5.svg"
                                            alt="HTML5"
                                            width={200}
                                            height={200}
                                            priority={true}
                                        />
                                    </a>
                                    <a href="">
                                        <Image
                                            src="/Resources/icons/css.svg"
                                            alt="CSS"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            
                                        />
                                    </a>
                                    <a href="">
                                        <Image
                                            src="/Resources/icons/javascript.svg"
                                            alt="JavaScript"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            
                                        />
                                    </a>
                                    <a href="">
                                        <Image
                                            src="/Resources/icons/php_dark.svg"
                                            alt="PHP"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            
                                        />
                                    </a>
                                    <a href="">
                                        <Image
                                            src="/Resources/icons/bootstrap.svg"
                                            alt="Bootstrap"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            
                                        />
                                    </a>
                                    <a href="">
                                        <Image
                                            src="/Resources/icons/react.svg"
                                            alt="React"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            
                                        />
                                    </a>
                                    <a href="">
                                        <Image
                                            src="/Resources/icons/Next.js_wordmark_dark.svg"
                                            alt="Next.js"
                                            width={200}
                                            height={200}
                                            loading="lazy"
                                            
                                        />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
});

Experience.displayName = "Experience";
export default Experience;
