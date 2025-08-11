import React from 'react';
import { motion } from 'framer-motion';

interface ProgressiveTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  splitBy?: 'words' | 'characters';
}

const ProgressiveText: React.FC<ProgressiveTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  splitBy = 'words'
}) => {
  const items = splitBy === 'words' 
    ? text.split(' ')
    : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: stagger,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((part, index) => (
        <motion.span
          key={index}
          variants={item}
          className="inline-block"
        >
          {part}
          {splitBy === 'words' && index < items.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ProgressiveText;