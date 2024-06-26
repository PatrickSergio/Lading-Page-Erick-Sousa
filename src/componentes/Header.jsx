import React from 'react';
import styles from './Header.module.css';
import ButtonCard from './elements/ButtonCard';

const Header = ({ Trainer }) => {
  return (
    <header className={styles.header}>
      <h1>ATÉ QUANDO VOCÊ VAI PROCRASTINAR?</h1>
      <h1>JÁ PASSOU DA HORA DE VOCÊ DAR O PRIMEIRO PASSO NO PROCESSO DE EMAGRECIMENTO!🚀 </h1>
      <img src={Trainer} alt='Trainer' className={styles.trainerImage} />
      <h2>Conheça meus <br/> e-books e transforme sua vida! 📚✨</h2>
      <ButtonCard text={'VEM SER FELIZ DE UMA VEZ 💪'} />
    </header>
  );
};

export default Header;
