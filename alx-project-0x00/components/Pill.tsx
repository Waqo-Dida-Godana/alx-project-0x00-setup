import React from 'react';
import Image from 'next/image';
import { PillProps } from '../interfaces';

const Pill: React.FC<PillProps> = ({ text, color = 'blue' }) => {
  const bgColor = color === 'blue' ? 'bg-blue-100' : 'bg-green-100';
  const textColor = color === 'blue' ? 'text-blue-800' : 'text-green-800';

  return (
    <div className={`flex items-center ${bgColor} rounded-full px-3 py-1`}>
      <Image
        src="/assets/images/star.png"
        alt="Star"
        width={16}
        height={16}
        className="mr-2"
      />
      <span className={`${textColor} text-sm font-medium`}>{text}</span>
    </div>
  );
};

export default Pill;
