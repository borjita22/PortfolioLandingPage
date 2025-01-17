// components/LazyLoadSection.tsx
"use client"; // Indica que este componente es del lado del cliente

import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LazyLoadSectionProps {
  children: React.ReactNode; // Contenido que se pasará a la sección
}

const LazyLoadSection: React.FC<LazyLoadSectionProps> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  const [isVisible, setIsVisible] = useState(false);

  const { i18n } = useTranslation();

  useEffect(() => {

    if (!i18n.isInitialized) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Cambiar a visible cuando entra en el viewport
          observer.disconnect(); // Dejar de observar una vez que se ha vuelto visible
        }
      });
    }, {
      rootMargin: '0px 0px -60% 0px', // Ajustar el margen inferior para que se active antes de entrar
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);  //se observa el elemento mientras se está montando
    }

    return () => {
      if (sectionRef.current) {  //una vez que se termina de montar, se deja de observar el elemento
        observer.unobserve(sectionRef.current);
      }
    };
  }, [i18n.isInitialized]);

  return (
    <section ref={sectionRef} className={`section ${isVisible ? 'visible' : ''}`}>
      {children} {/* Renderizar el contenido pasado como prop */}
    </section>
  );
};

export default LazyLoadSection;
