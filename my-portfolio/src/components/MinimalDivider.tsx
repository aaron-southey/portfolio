import React from 'react';
import { motion } from 'framer-motion';

interface MinimalDividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const MinimalDivider: React.FC<MinimalDividerProps> = ({ 
  className = '', 
  orientation = 'horizontal' 
}) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
      animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`
        ${isHorizontal 
          ? 'w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' 
          : 'h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent'
        }
        ${className}
      `}
    />
  );
};

export default MinimalDivider;