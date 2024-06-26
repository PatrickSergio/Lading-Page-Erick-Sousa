import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <h2>Depoimentos</h2>
            <div className={styles.testimonial}>
                <p>"O Erick Sousa me ajudou a transformar minha alimentação e a melhorar meu desempenho nos treinos. Recomendo fortemente!"</p>
                <p className={styles.author}>- João Silva</p>
            </div>
            <div className={styles.testimonial}>
                <p>"Graças ao Erick, consegui atingir meus objetivos de perda de peso de forma saudável e sustentável. Sua abordagem é realmente diferenciada."</p>
                <p className={styles.author}>- Maria Oliveira</p>
            </div>
            <div className={styles.testimonial}>
                <p>"Como atleta, a orientação nutricional do Erick Sousa foi crucial para minha recuperação e para melhorar minha performance. Excelente profissional!"</p>
                <p className={styles.author}>- Carlos Pereira</p>
            </div>
        </div>
    );
};

export default Testimonials;
