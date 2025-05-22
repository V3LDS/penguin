
import React from 'react';
import PhoneMockup from '@/components/PhoneMockup';
import AppScreen from '@/components/AppScreen';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-300 to-yellow-400">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16">
          <div className={`${isMobile ? 'order-2' : 'order-1'} max-w-md`}>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Eco Cup Tracker
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              An innovative app that helps you track your reusable cup usage and rewards
              your contribution to saving the environment.
            </p>
            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Environmental Impact</h2>
                <p className="text-gray-700">
                  Track how many single-use cups you've saved and visualize your positive
                  impact on marine habitats.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Rewards Program</h2>
                <p className="text-gray-700">
                  Earn rewards from participating cafés every time you choose to use your
                  reusable cup.
                </p>
              </div>
            </div>
          </div>

          <div className={`${isMobile ? 'order-1' : 'order-2'} animate-float`}>
            <PhoneMockup>
              <AppScreen />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
