import React from 'react';
import { motion } from 'framer-motion';

interface LoadingButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'minimal' | 'filled';
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  isLoading = false,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  variant = 'minimal'
}) => {
  const baseClass = variant === 'filled' ? 'btn-minimal-filled' : 'btn-minimal';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClass} ${className} ${isLoading ? 'opacity-75' : ''} relative overflow-hidden`}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      <span className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
        {children}
      </span>
      
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
                className={`w-1 h-1 rounded-full ${
                  variant === 'filled' ? 'bg-black' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.button>
  );
};

export default LoadingButton;