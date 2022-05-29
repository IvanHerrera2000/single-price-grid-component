import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Join our community</h2>
      <h3 className={styles.subtitle}>
        30-day, hassle-free money back guarantee
      </h3>
      <p className={styles.description}>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </p>
    </div>
  );
}

export default Hero;
