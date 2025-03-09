import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-2',
    large: 'w-12 h-12 border-3',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-full border-t-transparent border-primary animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default Loader;
