import React from "react";
import styles from "../../styles/Pricing.module.css";
import cardp1 from '@assets/cardp1.mp4';
import cardp2 from '@assets/cardp2.mp4';
import cardp3 from '@assets/cardp3.mp4';
import gradientbg from '@assets/gradientbg.mp4';

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      {/* Background Video */}
      <video autoPlay loop muted className={styles.bgVideo}>
        <source src={gradientbg} type="video/mp4" />
      </video>

      {/* Pricing Heading - Positioned Separately */}
      <h2 className={styles.pricingHeading}>Choose Your Plan</h2>

      {/* Pricing Cards Container */}
      <div className={styles.pricingContainer}>
        {pricingData.map((plan, index) => (
          <div key={index} className={styles.pricingCard}>
            <video autoPlay loop muted className={styles.cardVideo}>
              <source src={plan.video} type="video/mp4" />
            </video>
            <a href={plan.link} className={styles.ctaButton}>
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const pricingData = [
  { video: cardp1, buttonText: "➝ Get Started Now", link: "https://whop.com/night-city-alpha/" },
  { video: cardp2, buttonText: "➝ Choose Monthly", link: "https://whop.com/night-city-alpha/" },
  { video: cardp3, buttonText: "➝ Go Yearly & Save", link: "https://whop.com/night-city-alpha/" },
];

export default Pricing;
