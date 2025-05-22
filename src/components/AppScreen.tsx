
import React, { useState, useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Info, ArrowUp, Award, Heart, CheckCircle, Plus, ArrowRight, Settings } from 'lucide-react';

// Fake penguin data
const fakePenguins = [
  { id: 1, name: "Emperor", status: "Endangered", savedCount: 128, image: "🐧" },
  { id: 2, name: "Adelie", status: "Vulnerable", savedCount: 95, image: "🐧" },
  { id: 3, name: "Gentoo", status: "Threatened", savedCount: 76, image: "🐧" },
  { id: 4, name: "Chinstrap", status: "Declining", savedCount: 62, image: "🐧" },
  { id: 5, name: "Rockhopper", status: "Endangered", savedCount: 43, image: "🐧" },
];

// Fake user activities
const fakeActivities = [
  { id: 1, action: "Donation", amount: "$15.00", date: "Today", impact: "Saves 3 penguins" },
  { id: 2, action: "Beach Cleanup", location: "North Shore", date: "Yesterday", impact: "10 lbs plastic removed" },
  { id: 3, action: "Shared Campaign", platform: "Instagram", date: "2 days ago", impact: "Reached 242 people" },
  { id: 4, action: "Signed Petition", cause: "Ban Single-use Plastics", date: "Last week", impact: "Joining 35,621 others" },
];

const AppScreen: React.FC = () => {
  const [savedCount, setSavedCount] = useState(404);
  const [showInfo, setShowInfo] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(65);
  const [waterLevel, setWaterLevel] = useState(30);
  
  useEffect(() => {
    // Simulate rising water levels over time
    const timer = setInterval(() => {
      setWaterLevel(prev => {
        // Oscillate between 25% and 40% to simulate gentle ocean waves
        const newLevel = prev + (Math.random() > 0.5 ? 0.5 : -0.5);
        return Math.max(25, Math.min(40, newLevel));
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSavePenguin = () => {
    setSavedCount(prev => prev + 1);
    setCurrentProgress(prev => Math.min(prev + 5, 100));
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-blue-50">
      {/* Header */}
      <div className="bg-blue-700 text-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="font-bold text-lg">PenguinSaver</h1>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setShowInfo(!showInfo)} 
            className="bg-blue-600 rounded-full p-1.5 hover:bg-blue-800 transition-colors"
          >
            <Info className="w-5 h-5 text-white" />
          </button>
          <div className="bg-blue-600 rounded-full p-1.5">
            <Settings className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      
      <ScrollArea className="h-[calc(100%-132px)]">
        <div className="p-4">
          {/* Info Modal */}
          {showInfo && (
            <div className="mb-4 bg-white rounded-lg p-4 shadow-md border border-blue-100 animate-fade-in">
              <h3 className="font-bold text-blue-800 mb-2">About PenguinSaver</h3>
              <p className="text-sm text-gray-700">
                Our mission is to protect penguin habitats and reduce climate impact. 
                Every action you take helps save penguins from the effects of climate change.
              </p>
              <button 
                onClick={() => setShowInfo(false)}
                className="mt-3 text-sm text-blue-600 font-medium"
              >
                Got it
              </button>
            </div>
          )}
          
          {/* Stats Card */}
          <div className="mb-4 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">Your Impact</h2>
              <div className="mt-1 flex items-end space-x-1">
                <span className="text-3xl font-bold text-blue-700">{savedCount}</span>
                <span className="text-sm font-medium text-gray-500 mb-1">penguins helped</span>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-medium text-gray-700">Ocean Guardian Level</span>
                </div>
                <span className="text-xs font-bold text-blue-700">Level 5</span>
              </div>
              
              <div className="mt-3 mb-1 flex justify-between items-center text-xs">
                <span className="text-gray-600">Next level</span>
                <span className="text-blue-700 font-medium">96 more actions</span>
              </div>
              
              <Progress value={currentProgress} className="h-2" />
            </div>
          </div>
          
          {/* Penguin Visualization */}
          <div className="mb-4 bg-white rounded-2xl shadow-sm overflow-hidden relative">
            <div className="p-4 border-b border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">Melting Ice Crisis</h2>
            </div>
            
            <div className="relative h-40 bg-gradient-to-b from-blue-50 to-blue-100">
              {/* Ice Floe */}
              <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-white rounded-full shadow-inner"></div>
              
              {/* Penguin */}
              <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-4xl">🐧</div>
              
              {/* Rising Water */}
              <div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-500 to-blue-400 transition-all duration-1000 ease-in-out"
                style={{ height: `${waterLevel}%` }}
              ></div>
              
              {/* Call to action */}
              <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-white font-medium px-2">
                Rising sea levels threaten penguin habitats
              </div>
            </div>
          </div>
          
          {/* Endangered Penguins List */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-bold text-gray-700">Endangered Penguins</h2>
              <button className="text-xs text-blue-600 font-medium flex items-center">
                View all <ArrowRight className="ml-1 w-3 h-3" />
              </button>
            </div>
            
            <div className="space-y-2">
              {fakePenguins.slice(0, 3).map(penguin => (
                <div key={penguin.id} className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{penguin.image}</div>
                    <div>
                      <h3 className="text-sm font-medium">{penguin.name} Penguin</h3>
                      <p className="text-xs text-red-500">{penguin.status}</p>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-blue-700">
                    {penguin.savedCount} saved
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-bold text-gray-700">Your Activity</h2>
              <button className="text-xs text-blue-600 font-medium flex items-center">
                History <ArrowRight className="ml-1 w-3 h-3" />
              </button>
            </div>
            
            <div className="space-y-2">
              {fakeActivities.slice(0, 3).map(activity => (
                <div key={activity.id} className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">{activity.action}</h3>
                    <span className="text-xs text-gray-500">{activity.date}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {activity.amount || activity.location || activity.platform || activity.cause}
                  </p>
                  <div className="flex items-center mt-1">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                    <p className="text-xs text-green-600">{activity.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
      
      {/* Action buttons */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button 
          onClick={handleSavePenguin}
          className="bg-blue-600 w-full text-white font-bold text-lg py-3 px-10 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <Heart className="w-5 h-5 mr-2" />
          SAVE A PENGUIN
        </button>
      </div>
    </div>
  );
};

export default AppScreen;
