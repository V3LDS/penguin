
import React from 'react';
import PhoneMockup from '@/components/PhoneMockup';
import AppScreen from '@/components/AppScreen';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <PhoneMockup className="transform-gpu">
        <AppScreen />
      </PhoneMockup>
    </div>
  );
};

export default Index;
