
import React from 'react';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className }) => {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* Phone frame */}
      <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-2 shadow-2xl phone-shadow">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10"></div>
        
        {/* Screen */}
        <div className="w-full h-full overflow-hidden rounded-[32px] bg-blue-200">
          {/* App content */}
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-200 rounded-full"></div>
        
        {/* Power button */}
        <div className="absolute right-[-4px] top-28 h-16 w-1 bg-gray-700 rounded-l-md"></div>
        
        {/* Volume buttons */}
        <div className="absolute left-[-4px] top-20 h-8 w-1 bg-gray-700 rounded-r-md"></div>
        <div className="absolute left-[-4px] top-32 h-8 w-1 bg-gray-700 rounded-r-md"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
