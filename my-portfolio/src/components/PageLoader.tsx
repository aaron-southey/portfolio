import React from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center pointer-events-none"
    >
      <div className="flex items-center space-x-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
            className="w-2 h-2 bg-white/60 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PageLoader;