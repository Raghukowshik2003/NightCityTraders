import React from "react";
import styles from "../styles/Policy.module.css";

const CancellationPolicy = () => {
  return (
    <div className={styles.policyContainer}>
      {/* Background Video */}
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/aboutG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Photo Section */}
      <img
        src="/cancelp.jpg" // Replace with your image path
        alt="Policy Illustration"
        className={styles.policyImage}
      />

      {/* Content Section */}
      <div className={styles.policyContent}>
        <h1>Cancellation Policy</h1>
        <p>
          This is the cancellation policy page. Here you can describe the process for canceling services or subscriptions.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque libero at justo tincidunt, nec malesuada nisi bibendum.
        </p>
      </div>
    </div>
  );
};

export default CancellationPolicy;