import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // or logical operator

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )} ${meridian}`;
  }

  function addZero(num) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <div
      style={{ backgroundImage: "url(./src/assets/background.jpg)" }}
      className="w-full h-screen bg-center bg-no-repeat bg-cover bg-fixed m-0 flex items-center justify-center"
    >
      <div className="backdrop-blur-sm w-full py-y px-0">
        <div className="text-white text-8xl font-bold font-mono text-center shadow-md">
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
