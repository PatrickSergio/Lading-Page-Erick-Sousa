import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={styles.footer}>
      <button
        className={`${styles.scrollTopButton} ${showButton ? styles.show : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
      <p>© 2024 Copyright. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
