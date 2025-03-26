import { useState } from 'react'
export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

    // Timer Handlers
  const startTimer = () => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
      setTimerInterval(interval);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning && timerInterval) {
      clearInterval(timerInterval);
      setSeconds(0);
      setIsRunning(false);
    }
  };
    return (
        <div >
          <h2 className="text-xl font-semibent mb-4">Timer</h2>
          <div className="text-center text-4xl font-bold mb-4">
            {seconds} seconds
          </div>
          <div className="flex justify-between">
            <button onClick={startTimer} disabled={isRunning} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50">
              Start
            </button>
            <button onClick={stopTimer} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Stop
            </button>
          </div>
        </div>
    )
}