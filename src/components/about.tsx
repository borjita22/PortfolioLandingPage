"use client"

import { useTranslation } from "react-i18next";
import React, { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Image from 'next/image';

import '../styles/about.css';


// Optimización: `React.memo` para evitar renderizados innecesarios.
const About: React.FC = memo(() => {
    const { t } = useTranslation();
    const [activePanel, setActivePanel] = useState(0);

    const handleToggle = (index: React.SetStateAction<number>) => {
        setActivePanel(index);
    };

    const panelVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    const handleSwipe = useCallback((direction: string) => {
        if (direction === "Left") {
            setActivePanel((prev) => (prev + 1) % 4); // Avanza al siguiente panel
        } else if (direction === "Right") {
            setActivePanel((prev) => (prev - 1 + 4) % 4); // Vuelve al panel anterior
        }
    }, []);

    // Configuración para el hook useSwipeable
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("Left"),
        onSwipedRight: () => handleSwipe("Right"),
        trackMouse: true, // Permite el deslizamiento también con el mouse
    });

    return (
        <section className="about-container" id="about">
            <h1 className="about-header view">
                <a>{t('about_title')}</a>
            </h1>

            <div className="panel-container">
                <div className="content-container" {...swipeHandlers}>
                    <AnimatePresence mode="wait">
                        {activePanel === 0 && (
                            <motion.div
                                className="panel-content"
                                key="panel1"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={panelVariants}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="about-content-panel">
                                    {/* Optimización: Carga diferida de imagen con `priority` y uso de formato WebP */}
                                    <Image
                                        src="/Resources/Imgs/heroMainImage.png"
                                        alt="about-image"
                                        width={500}
                                        height={500}
                                        loading="lazy"
                                        className="about-image"
                                    />
                                    <div className="about-info-container">
                                        <p>
                                            {t('about_text_1')}
                                        </p>
                                        
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {activePanel === 1 && (
                            <motion.div
                                className="panel-content"
                                key="panel2"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={panelVariants}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="about-content-panel">
                                    <Image
                                        src="/Resources/Imgs/heroMainImage2.jpeg" // Usa WebP
                                        alt="about-image"
                                        width={500}
                                        height={500}
                                        loading="lazy" // Lazy load
                                        className="about-image"
                                    />
                                    <div className="about-info-container">
                                        <p>
                                            {t('about_text_2')}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        {activePanel === 2 && (
                            <motion.div
                                className="panel-content"
                                key="panel3"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={panelVariants}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="about-content-panel">
                                    <Image
                                        src="/Resources/Imgs/heroMainImage3.jpg"
                                        alt="about-image"
                                        width={500}
                                        height={500}
                                        loading="lazy"
                                        className="about-image specific-image-fix"
                                    />
                                    <div className="about-info-container">
                                        <p>
                                            {t('about_text_3')}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="toggle-buttons">
                    <button onClick={() => handleToggle(0)} className={activePanel === 0 ? "active" : ""}></button>
                    <button onClick={() => handleToggle(1)} className={activePanel === 1 ? "active" : ""}></button>
                    <button onClick={() => handleToggle(2)} className={activePanel === 2 ? "active" : ""}></button>
                </div>
            </div>
        </section>
    );
});

About.displayName = "About";
export default About;
