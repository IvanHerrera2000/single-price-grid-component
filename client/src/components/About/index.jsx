import React from 'react';
import Subscription from '../Subscription';
import WhyUs from '../WhyUs';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <Subscription />
      <WhyUs />
    </div>
  );
}

export default About;
