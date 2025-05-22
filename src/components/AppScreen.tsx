
import React, { useState } from 'react';
import { User, Coffee, Award, ChevronRight, Leaf } from 'lucide-react';

const AppScreen: React.FC = () => {
  const [cupCount, setCupCount] = useState(456);
  
  const handleAddCup = () => {
    setCupCount(prevCount => prevCount + 1);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-emerald-800 font-bold text-lg">EcoCup</h1>
        <div className="flex items-center space-x-2">
          <div className="bg-emerald-100 rounded-full p-1.5">
            <Leaf className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="bg-white rounded-full p-1.5 shadow">
            <User className="w-5 h-5 text-neutral-700" />
          </div>
        </div>
      </div>
      
      {/* Stats Card */}
      <div className="mx-5 mt-8 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-sm font-medium text-neutral-500">Your Impact</h2>
          <div className="mt-1 flex items-end space-x-1">
            <span className="text-3xl font-bold text-emerald-700">{cupCount}</span>
            <span className="text-sm font-medium text-neutral-500 mb-1">cups saved</span>
          </div>
        </div>
        
        <div className="p-4 bg-emerald-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-medium text-neutral-700">Green Ambassador Level</span>
            </div>
            <span className="text-xs font-bold text-emerald-700">Level 4</span>
          </div>
        </div>
      </div>
      
      {/* Cup Visualization */}
      <div className="mt-8 flex justify-center">
        <div className="relative w-40 h-52">
          {/* Cup body */}
          <div className="absolute bottom-0 w-full h-48 bg-white rounded-lg shadow-md border border-neutral-200"></div>
          
          {/* Cup content */}
          <div className="absolute bottom-2 left-2 right-2 h-40 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-md flex flex-col items-center justify-center">
            <div className="text-center px-2">
              <Coffee className="w-8 h-8 text-white mx-auto mb-2 opacity-50" />
              <p className="font-black text-white text-xs tracking-wide">YOU HAVE SAVED</p>
              <p className="font-black text-white text-4xl">{cupCount}</p>
              <p className="font-bold text-white text-xs tracking-wide">CUPS</p>
            </div>
          </div>
          
          {/* Cup lid */}
          <div className="absolute top-0 w-[110%] h-8 bg-neutral-800 left-[-5%] rounded-t-lg"></div>
        </div>
      </div>
      
      {/* Progress section */}
      <div className="absolute bottom-24 left-0 right-0 px-5">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-neutral-800">Next Reward</h3>
            <span className="text-xs text-emerald-600 font-medium">4 cups away</span>
          </div>
          
          <div className="mt-3 h-2 bg-neutral-100 rounded-full overflow-hidden">
            <div className="h-full w-[60%] bg-emerald-500 rounded-full"></div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-100 rounded-full p-1.5">
                <Coffee className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-xs font-medium text-neutral-700">Free coffee at EcoCafe</span>
            </div>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
      </div>
      
      {/* Buy button */}
      <div className="absolute bottom-6 left-5 right-5 flex justify-center">
        <button 
          onClick={handleAddCup}
          className="bg-emerald-600 w-full text-white font-bold text-lg py-3 px-10 rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-colors"
        >
          LOG A REUSABLE CUP
        </button>
      </div>
    </div>
  );
};

export default AppScreen;
