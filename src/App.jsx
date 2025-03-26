import { useState } from 'react'
import { Timer } from './assets/components/Layouts/Timer/Timer';
import { LikeDislike } from './assets/components/Layouts/LikeDislike/LikeDislike';

export const App = () => {
  // 1. Dark/Light Mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  // 3. Color Selection
  const coloresAbsolutos = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", 
    "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", 
    "#808080", "#800000", "#808000", "#800080", 
    "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
  ];
  const [selectedColor, setSelectedColor] = useState(null);


  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Random Color Generator
  const generateRandomColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setSelectedColor(randomColor);
  };

  

  

  return (
    <div className={`min-h-screen p-8 transition-all duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center mb-6">React Hooks Challenge</h1>

        {/* 1. Dark/Light Mode Toggle */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Dark/Light Mode</h2>
          <button onClick={toggleDarkMode} className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        <LikeDislike />

        {/* 3. Color Generator */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Color Generator</h2>
          <button onClick={generateRandomColor} className="w-full py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
            Generate Random Color
          </button>
          {selectedColor && (
            <div className="mt-4 flex items-center justify-center">
              <div className="w-40 h-40 rounded-lg shadow-md flex items-center justify-center"style={{ backgroundColor: selectedColor }}>
                <span className="text-white font-bold">
                  {selectedColor}
                </span>
              </div>
            </div>
          )}
        </div>

        <Timer />

      </div>
    </div>
  )
}

