import React, { useState } from "react";
import styles from "../../styles/AboutMe.module.css";
import emailjs from "@emailjs/browser"; // Install this package: npm install @emailjs/browser
import Aaboutme from '@assets/Aaboutme.png';
import aboutG from '@assets/aboutG.mp4';
import Atwitter from '@assets/Atwitter.png';
import Atelegram from '@assets/Atelegram.png';
import Ayoutube from '@assets/Ayoutube.png';
import Atwitch from '@assets/Atwitch.png';
import Atiktok from '@assets/Atiktok.png';

const AboutMe = () => {
  const [expandedQuestions, setExpandedQuestions] = useState({
    q1: false,
    q2: false,
    q3: false,
  });

  const [isSent, setIsSent] = useState(false); // State to track if the message was sent

  const toggleQuestion = (question: 'q1' | 'q2' | 'q3') => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_f5khxbq", // Replace with your EmailJS service ID
        "template_x4p8gpf", // Replace with your EmailJS template ID
        form,
        "_evb38KQd5qrpJpCS" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message sent successfully!", result.text);
          setIsSent(true); // Update state to indicate the message was sent
          setTimeout(() => setIsSent(false), 3000); // Revert back to "Send" after 3 seconds
        },
        (error) => {
          console.error("Failed to send message:", error.text);
        }
      );
  };

  return (
    <section className={styles.aboutSection}>
      {/* Background Video */}
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src={aboutG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Heading */}
      <h1 className={styles.sectionHeading}>Well! You can Call me Trey</h1>

      {/* Profile Image and Social Media Icons */}
      <div className={styles.profileAndIcons}>
        <div className={styles.profileImageContainer}>
          <img src={Aaboutme} alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.rightIcons}>
          <a href="https://x.com/treysocial" target="_blank" rel="noopener noreferrer">
            <img src={Atwitter} alt="Twitter" className={styles.icon} />
          </a>
          <a href="https://t.me/treystele" target="_blank" rel="noopener noreferrer">
            <img src={Atelegram} alt="Telegram" className={styles.icon} />
          </a>
          <a href="https://www.youtube.com/@treyxd" target="_blank" rel="noopener noreferrer">
            <img src={Ayoutube} alt="Youtube" className={styles.icon} />
          </a>
          <a href="https://www.twitch.tv/kingtreytv" target="_blank" rel="noopener noreferrer">
            <img src={Atwitch} alt="Twitch" className={styles.icon} />
          </a>
          <a href="https://www.tiktok.com/@trey" target="_blank" rel="noopener noreferrer">
            <img src={Atiktok} alt="Tiktok" className={styles.icon} />
          </a>
        </div>
      </div>

      {/* Collapsible Questions and Message Box */}
      <div className={styles.questionsAndMessage}>
        {/* Collapsible Questions */}
        <div className={styles.questionsContainer}>
          <div className={styles.question}>
            <button
              className={styles.toggleButton}
              onClick={() => toggleQuestion("q1")}
            >
              {expandedQuestions.q1 ? "-" : "+"} How does the ranking system work in NightCityAlpha?
            </button>
            {expandedQuestions.q1 && (
              <div className={styles.answer}>
                New members start as @Runner and can progress to @Seeker and @Hunter by gaining reputation and engaging in the community. Each tier unlocks access to better resources, insights, and discussions.
              </div>
            )}
          </div>
          <div className={styles.question}>
            <button
              className={styles.toggleButton}
              onClick={() => toggleQuestion("q2")}
            >
              {expandedQuestions.q2 ? "-" : "+"} What makes NightCityAlpha different from other crypto communities?
            </button>
            {expandedQuestions.q2 && (
              <div className={styles.answer}>
                We focus on building a thriving ecosystem where traders support each other. It’s not just about calls; it’s about long-term growth, strategy, and financial freedom.
              </div>
            )}
          </div>
          <div className={styles.question}>
            <button
              className={styles.toggleButton}
              onClick={() => toggleQuestion("q3")}
            >
              {expandedQuestions.q3 ? "-" : "+"} Is NightCityAlpha suitable for someone with zero experience?
            </button>
            {expandedQuestions.q3 && (
              <div className={styles.answer}>
                Yes! Our structured rank system allows you to start as a beginner (@Runner) and progress as you learn. We focus on making crypto accessible for everyone.
              </div>
            )}
          </div>
        </div>

        {/* Message Box */}
        <div className={styles.leftBox}>
          <h2 className={styles.heading}>Have a Doubt? Send me a Message</h2>
          <form onSubmit={handleSubmit} className={styles.messageForm}>
            <textarea
              name="message"
              className={styles.textarea}
              placeholder="Type your message here..."
              required
            ></textarea>
            <button type="submit" className={styles.sendButton}>
              {isSent ? "Sent ✅" : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* Navigation Options */}
      <div className={styles.navigationOptions}>
        <a href="/privacy-policy" target="_blank" className={styles.navLink}>
          Privacy Policy
        </a>
        <a href="/refund-policy" target="_blank" className={styles.navLink}>
          Refund Policy
        </a>
        <a href="/cancellation-policy" target="_blank" className={styles.navLink}>
          Cancellation Policy
        </a>
      </div>
    </section>
  );
};

export default AboutMe;