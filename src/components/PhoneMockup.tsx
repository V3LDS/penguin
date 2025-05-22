
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
      <div className="relative w-[320px] h-[650px] bg-neutral-900 rounded-[40px] p-2 shadow-xl border border-neutral-800 transition-all duration-300 hover:shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-6 bg-neutral-900 rounded-b-3xl z-10 flex justify-center items-end pb-1">
          <div className="w-16 h-2 bg-neutral-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
          </div>
        </div>
        
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
        
        {/* Phone reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-[0.02] rounded-t-[40px] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;
