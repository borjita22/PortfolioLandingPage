import React, { useEffect } from 'react';
import gsap from 'gsap';

const SmartCursor: React.FC = () => {

  useEffect(() => {
    // Accede al document solo en el lado del cliente
    const cursor = document.getElementById('custom-cursor') as HTMLElement;
    const links = document.querySelectorAll('a');

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX - 10, y: clientY - 10, ease: "elastic.out(1, 0.3)", duration: 0.5 });
    };

    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLElement; // Tipo más específico para event.target
      if (link.classList.contains('view')) {
        gsap.to(cursor, { scale: 3, duration: 0.1 });
      } else {
        gsap.to(cursor, { scale: 1.5, duration: 0.1 });
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.1 });
    };

    // Agrega los eventos solo en el lado del cliente
    document.addEventListener('mousemove', onMouseMove);
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    // Limpia los eventos al desmontar el componente
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };

  }, []);

  // Estilo del cursor
  return (
    <div id='custom-cursor' className='custom-cursor'>
    </div>
  );
};

export default SmartCursor;
