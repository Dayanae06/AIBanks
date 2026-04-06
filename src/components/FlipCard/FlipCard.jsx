import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './FlipCard.module.css';

// Flip Card inspired by animate-ui/community/flip-card
// A 3D card that flips on tap to reveal content on the back

export default function FlipCard({
  front,
  back,
  className = '',
  flipDirection = 'horizontal', // 'horizontal' or 'vertical'
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipVariants = {
    front: {
      rotateY: flipDirection === 'horizontal' ? 0 : 0,
      rotateX: flipDirection === 'vertical' ? 0 : 0,
    },
    back: {
      rotateY: flipDirection === 'horizontal' ? 180 : 0,
      rotateX: flipDirection === 'vertical' ? 180 : 0,
    },
  };

  return (
    <div
      className={`${styles.flipContainer} ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: 800 }}
    >
      <motion.div
        className={styles.flipInner}
        animate={isFlipped ? 'back' : 'front'}
        variants={flipVariants}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className={styles.flipFront}>
          {front}
        </div>
        <div className={styles.flipBack}>
          {back}
        </div>
      </motion.div>
    </div>
  );
}
