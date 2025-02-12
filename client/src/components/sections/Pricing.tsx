import React from "react";
import styles from "../../styles/Pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      {/* Background Video */}
      <video autoPlay loop muted className={styles.bgVideo}>
        <source src="/gradientbg.mp4" type="video/mp4" />
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
  { video: "/cardp1.mp4", buttonText: "➝ Get Started Now", link: "https://whop.com/night-city-alpha/" },
  { video: "/cardp2.mp4", buttonText: "➝ Choose Monthly", link: "https://whop.com/night-city-alpha/" },
  { video: "/cardp3.mp4", buttonText: "➝ Go Yearly & Save", link: "https://whop.com/night-city-alpha/" },
];

export default Pricing;
