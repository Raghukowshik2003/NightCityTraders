import BookUI  from '@/components/ui/BookUI';
import styles from '@/components/ui/BookUI.module.css';
import React from 'react';
import spidy1 from '@assets/spidy1.mp4';
import spidy2 from '@assets/spidy2.mp4';
import spidy3 from '@assets/spidy3.mp4';

const IdeaNC: React.FC = () => {
  // Define an array of video URLs
  const videoChannels = [
    spidy1, // Replace with your video paths
    spidy2,
    spidy3,
  ];

  return (
    <div>
      <h1 className={styles.heading}>About Server</h1> {/* Add your heading here */}
      <BookUI videoChannels={videoChannels} />
    </div>
  );
};

export default IdeaNC;