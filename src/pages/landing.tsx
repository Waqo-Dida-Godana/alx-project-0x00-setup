import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Landing Page</h1>
        <p className="text-lg text-gray-600 mb-8">This is the landing page of our Next.js application.</p>
        <Card />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </div>
    </div>
  );
};

export default Landing;
