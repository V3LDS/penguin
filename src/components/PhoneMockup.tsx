
import React from 'react';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className }) => {
  return (
    <div className={cn("relative", className)}>
      {/* Phone frame */}
      <div className="relative w-[320px] h-[650px] bg-neutral-900 rounded-[40px] p-2 shadow-xl border border-neutral-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-neutral-900 rounded-b-3xl z-10"></div>
        
        {/* Screen */}
        <div className="w-full h-full overflow-hidden rounded-[32px] bg-white">
          {/* App content */}
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-neutral-600 rounded-full"></div>
        
        {/* Power button */}
        <div className="absolute right-[-4px] top-28 h-20 w-1 bg-neutral-800 rounded-l-md"></div>
        
        {/* Volume buttons */}
        <div className="absolute left-[-4px] top-20 h-10 w-1 bg-neutral-800 rounded-r-md"></div>
        <div className="absolute left-[-4px] top-36 h-10 w-1 bg-neutral-800 rounded-r-md"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
