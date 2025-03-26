import { useState } from 'react'
import { Timer } from './assets/components/Layouts/Timer/Timer';
import { LikeDislike } from './assets/components/Layouts/LikeDislike/LikeDislike';
import { ColorGenerator } from './assets/components/Layouts/ColorGenerator/ColorGenerator';

export const App = () => {
  // 1. Dark/Light Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
        <ColorGenerator />

        {/* 4. Timer */}
        <Timer />

      </div>
    </div>
  )
}

