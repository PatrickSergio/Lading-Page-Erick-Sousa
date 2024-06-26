import React from 'react';
import styles from '../../componentes/elements/ButtonCard.module.css';

const ButtonA = ({ link, text }) => {
  return (
    <a href={link} className={styles.btn}>
      {text}
    </a>
  );
};

export default ButtonA;
