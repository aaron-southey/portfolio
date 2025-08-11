import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkeletonLoader from './SkeletonLoader';

interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  onLoad?: () => void;
  [key: string]: any;
}

const LoadingImage: React.FC<LoadingImageProps> = ({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className="relative">
      {!isLoaded && !hasError && (
        <SkeletonLoader
          variant="rectangular"
          className={`absolute inset-0 ${skeletonClassName}`}
        />
      )}
      
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'image-loaded' : 'image-loading'}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{ opacity: isLoaded ? 1 : 0 }}
        {...props}
      />
      
      {hasError && (
        <div className={`flex items-center justify-center bg-white/5 border border-white/20 rounded ${className}`}>
          <span className="text-white/60 text-sm">Failed to load</span>
        </div>
      )}
    </div>
  );
};

export default LoadingImage;