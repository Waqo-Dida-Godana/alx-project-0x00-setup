import React from 'react';
import { ButtonProps } from '../interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, title }) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${sizeClasses[size]} ${shapeClasses[shape]} transition duration-300`}>
      {title}
    </button>
  );
};

export default Button;
