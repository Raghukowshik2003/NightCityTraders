import React from "react";
import styles from "../styles/Policy.module.css";
import aboutG from '@assets/aboutG.mp4';
import privacyp from '@assets/privacyp.jpg';

const PrivacyPolicy = () => {
  return (
    <div className={styles.policyContainer}>
      {/* Background Video */}
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src={aboutG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Photo Section */}
      <img
        src={privacyp} // Replace with your image path
        alt="Policy Illustration"
        className={styles.policyImage}
      />

      {/* Content Section */}
      <div className={styles.policyContent}>
        <h1>Privacy Policy</h1>
        <p>
          This is the privacy policy page. Here you can describe how user data is collected, used, and protected.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque libero at justo tincidunt, nec malesuada nisi bibendum.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;