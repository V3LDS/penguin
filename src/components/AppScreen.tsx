
import React from 'react';
import { User } from 'lucide-react';

const AppScreen: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden ocean-gradient">
      {/* Top navigation */}
      <div className="flex justify-between items-center p-4">
        <div className="bg-app-pink rounded-full py-1 px-4 text-black font-bold text-sm whitespace-nowrap">
          PARTICIPATING CAFES
        </div>
        <div className="bg-app-purple rounded-full py-1 px-6 text-white font-bold text-sm">
          T&Cs
        </div>
        <div className="bg-white rounded-full p-2">
          <User className="w-6 h-6 text-black" />
        </div>
      </div>

      {/* Penguin message */}
      <div className="relative flex mt-4 mx-4">
        <div className="bg-white rounded-full p-3 mx-auto animate-float">
          <p className="text-black text-center font-bold text-sm max-w-[200px]">
            By using a reusable cup you are saving the turtles habitats
          </p>
        </div>
        <img 
          src="/lovable-uploads/8fd6008d-0411-48a4-83d8-63e5155f8bec.png" 
          alt="Penguin" 
          className="absolute -right-3 bottom-0 w-20 h-20 object-contain"
        />
      </div>

      {/* Progress text */}
      <div className="mt-10 text-center">
        <p className="text-lg font-bold text-black">
          You are 6 drinks away from your next reward
        </p>
      </div>

      {/* Progress bar */}
      <div className="mx-6 mt-2 h-4 bg-app-purple/50 rounded-full overflow-hidden">
        <div className="h-full w-2/3 bg-app-pink rounded-full"></div>
      </div>

      {/* Coffee cup */}
      <div className="mt-8 flex justify-center">
        <div className="relative w-40 h-64">
          {/* Cup body */}
          <div className="absolute bottom-0 w-full h-48 bg-[#e6e2dd] rounded"></div>
          
          {/* Cup middle */}
          <div className="absolute bottom-8 w-full h-32 bg-[#c28e60] flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold text-black text-xs curved-text">YOU HAVE SAVED</p>
              <p className="font-black text-black text-4xl py-2">456</p>
              <p className="font-black text-black text-lg">COFFEE CUPS</p>
            </div>
          </div>
          
          {/* Cup lid */}
          <div className="absolute bottom-40 w-[110%] h-10 bg-[#4a3728] left-[-5%] rounded"></div>
          <div className="absolute bottom-37 w-[120%] h-6 bg-[#4a3728] left-[-10%] rounded"></div>
        </div>
      </div>

      {/* Buy button */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button className="bg-app-pink text-black font-black text-2xl py-3 px-10 rounded-full animate-pulse-slow">
          BUY A DRINK
        </button>
      </div>
    </div>
  );
};

export default AppScreen;
