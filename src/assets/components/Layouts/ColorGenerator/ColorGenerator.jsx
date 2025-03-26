import { useState } from 'react'

export const ColorGenerator = () => {
     // 3. Color Selection
  const coloresAbsolutos = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", 
    "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", 
    "#808080", "#800000", "#808000", "#800080", 
    "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
  ];
  const [selectedColor, setSelectedColor] = useState(null);
  // Random Color Generator
  const generateRandomColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setSelectedColor(randomColor);
  };

  return (
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
    )
}