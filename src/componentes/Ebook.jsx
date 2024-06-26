import React, { useState, useEffect, useRef } from 'react';
import styles from './Ebook.module.css';
import ButtonCard from './elements/ButtonCard';

const Ebook = ({ id, title, description, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ebookRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (ebookRef.current) {
        const rect = ebookRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
        <div ref={ebookRef} className={`${styles.ebook} ${isVisible ? styles.visible : ''}`}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <ButtonCard text={'Garanta aqui seu e-book'} />
        </div>
      </div>
  );
};

export default Ebook;
