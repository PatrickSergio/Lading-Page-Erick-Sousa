import React, { useState, useEffect } from 'react';
import styles from './Video.module.css';

const Video = ({ videoSrc }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const videoPosition = document.querySelector(`.${styles.video}`).offsetTop;

    if (scrollTop + windowHeight >= videoPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.DivPai}>
      <div className={`${styles.video} ${isVisible ? styles.visible : ''}`}>
        <h1>Conheça a Minha Transformação!</h1>
        <div className={styles.textContainer}>
          <h3>Descubra o Segredo para Perder 49 KG em 2 Anos com Saúde e Sustentabilidade</h3>
        </div>
        <div className={styles.videoContainer}>
          <video src={videoSrc} autoPlay loop muted className={styles.videoSrc} />
        </div>
        <div className={styles.ctaContainer}>
          <h2>Transforme Sua Vida Hoje Mesmo!</h2>
          <p>Não perca a chance de mudar sua vida. Adquira já o meu ebook exclusivo e inicie sua jornada rumo a uma vida mais saudável e feliz!</p>
          <button className={styles.ctaButton}>Compre Agora📚✨</button>
        </div>
      </div>
    </div>
  );
};

export default Video;
