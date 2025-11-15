import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <Image
        src="/assets/images/house.png"
        alt="House"
        width={400}
        height={250}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Beautiful House</div>
        <p className="text-gray-700 text-base">
          This is a beautiful house located in a serene environment.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#house</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#realestate</span>
      </div>
    </div>
  );
};

export default Card;
