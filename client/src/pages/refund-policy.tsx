import React from "react";
import styles from "../styles/Policy.module.css";
import aboutG from '@assets/aboutG.mp4';
import refundp from '@assets/refundp.png';


const RefundPolicy = () => {
  return (
    <div className={styles.policyContainer}>
      {/* Background Video */}
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src={aboutG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Photo Section */}
      <img
        src={refundp} // Replace with your image path
        alt="Policy Illustration"
        className={styles.policyImage}
      />
      {/* Content Section */}
      <div className={styles.policyContent}>
        <h1>Refund Policy</h1>
        <p>
          This is the refund policy page. Here you can describe the conditions under which refunds are provided.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque libero at justo tincidunt, nec malesuada nisi bibendum.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;