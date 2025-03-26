import { useState } from 'react'

export const DarkLight = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Dark/Light Mode</h2>
            <button onClick={toggleDarkMode} className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    )
}