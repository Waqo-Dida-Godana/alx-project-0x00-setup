import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Landing Page</h1>
        <Card />
        <Card />
        <Card />
        <p className="text-lg text-gray-600 mb-8">This is the landing page of our Next.js application.</p>
        <Card />
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="small" shape="rounded-sm" title="Small Button" />
        <Button size="medium" shape="rounded-md" title="Medium Button" />
        <Button size="large" shape="rounded-full" title="Large Button" />
      </div>
    </div>
  );
};

export default Landing;
