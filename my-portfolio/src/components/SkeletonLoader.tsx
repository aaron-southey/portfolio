import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className = '',
  variant = 'rectangular',
  width = 'w-full',
  height = 'h-4'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'text':
        return 'rounded';
      default:
        return 'rounded-lg';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ 
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`bg-white/10 backdrop-blur-sm ${width} ${height} ${getVariantClasses()} ${className}`}
    />
  );
};

export default SkeletonLoader;