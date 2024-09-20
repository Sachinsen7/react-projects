import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isrunning, setRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isrunning) {
      intervalRef.current = setInterval(() => {
        setelapsedTime(Date.now() - startTimeRef.current);
      }, 10);

      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [isrunning]);

  function handleStartClick() {
    setRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function handleStopClick() {
    setRunning(false);
  }

  function handleResetClick() {
    setRunning(false);
    setelapsedTime(0);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="flex h-screen justify-center items-center flex-col bg-slate-200-800 text-white border-4 ">
      <div className="flex justify-center items-center flex-col bg-sky-300 text-white border-4 border-black p-8">
        <div className="text-8xl family-mono font-bold text-white shadow-lg mb-6">
          {formatTime()}
        </div>
        <div>
          <button
            className="text-2xl font-bold px-5 py-3 m-1 min-w-32 border-none rounded-lg cursor-pointer transition-all 0.5s ease text-white bg-green-600 hover:bg-green-700"
            onClick={handleStartClick}
          >
            Start
          </button>
          <button
            className="text-2xl font-bold px-5 py-3 m-1 min-w-32 border-none rounded-lg cursor-pointer transition-all 0.5s ease  text-white bg-red-600 hover:bg-red-700"
            onClick={handleStopClick}
          >
            Stop
          </button>
          <button
            className="text-2xl font-bold px-5 py-3 m-1 min-w-32 border-none rounded-lg cursor-pointer text-white transition-all 0.5s ease bg-blue-600 hover:bg-blue-700"
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
