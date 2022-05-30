import React from 'react';
import styles from './Subscription.module.css';

function Subscription() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Monthly Subscription</h2>
      <div className={styles.priceContainer}>
        <span>$29</span>
        <p>per month</p>
      </div>
      <p className={styles.description}>Full access for less than $1 a day</p>
      <a className={styles.btn}>Sign Up</a>
    </div>
  );
}

export default Subscription;
