import BookUI  from '@/components/ui/BookUI';
import styles from '@/components/ui/BookUI.module.css';
import React from 'react';


const IdeaNC: React.FC = () => {
  // Define an array of video URLs
  const videoChannels = [
    '/spidy1.mp4', // Replace with your video paths
    '/spidy2.mp4',
    '/spidy3.mp4',
  ];

  return (
    <div>
      <h1 className={styles.heading}>About Server</h1> {/* Add your heading here */}
      <BookUI videoChannels={videoChannels} />
    </div>
  );
};

export default IdeaNC;