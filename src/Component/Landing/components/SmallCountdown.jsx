import React, { useState, useEffect } from "react";

function SmallCountdown() {
  const targetDate = new Date("2025-04-15T00:00:00"); // Example: April 15, 2025, midnight

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Define base styles for reuse
  const numberStyle = "text-3xl md:text-4xl"; // Larger size for numbers
  const colonStyle = "text-xl md:text-2xl mx-1"; // Smaller size for colons, added margin
  const baseStyle = "font-mono font-bold text-yellow-300 tabular-nums tracking-wider align-baseline"; // Base styles for all parts

  return (
    <div className="mt-4 md:mt-6 text-center">
      {/* Use spans for individual styling */}
      <p className={baseStyle}>
        <span className={numberStyle}>{formatTime(timeLeft.days)}</span>
        <span className={colonStyle}>:</span>
        <span className={numberStyle}>{formatTime(timeLeft.hours)}</span>
        <span className={colonStyle}>:</span>
        <span className={numberStyle}>{formatTime(timeLeft.minutes)}</span>
        <span className={colonStyle}>:</span>
        <span className={numberStyle}>{formatTime(timeLeft.seconds)}</span>
        {/* Keep 'left' text smaller */}
        <span className="text-lg md:text-xl ml-2">left</span>
      </p>
    </div>
  );
}

export default SmallCountdown;
