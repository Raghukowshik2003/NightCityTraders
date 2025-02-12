import React, { useState } from 'react';
import styles from './BookUI.module.css';

interface VideoChannelProps {
  videoSrc: string;
  style?: React.CSSProperties; // Add optional style prop
}

const VideoChannel: React.FC<VideoChannelProps> = ({ videoSrc, style }) => {
  return (
    <div className={styles.videoPlayer} style={style}> {/* Apply the style prop */}
      <video src={videoSrc} autoPlay muted loop playsInline></video>
    </div>
  );
};

interface BookUIProps {
  videoChannels: string[];
}

const BookUI: React.FC<BookUIProps> = ({ videoChannels }) => {
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);

  const handleNav = (direction: number) => {
    let newIndex = activeChannelIndex + direction;
    if (newIndex < 0) {
      newIndex = videoChannels.length - 1;
    } else if (newIndex >= videoChannels.length) {
      newIndex = 0;
    }
    setActiveChannelIndex(newIndex);
  };

  return (
    <div className={styles.section}>
      <div className={styles.videoContainer}>
        {videoChannels.map((videoSrc, index) => (
          <VideoChannel
            key={index}
            videoSrc={videoSrc}
            style={{ display: index === activeChannelIndex ? 'block' : 'none' }}
          />
        ))}
        <button
          className={`${styles.navButton} ${styles.prev}`}
          onClick={() => handleNav(-1)}
        >
          <img src="/leftnav.png" alt="Previous" />
        </button>
        <button
          className={`${styles.navButton} ${styles.next}`}
          onClick={() => handleNav(1)}
        >
          <img src="/rightnav.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default BookUI;
