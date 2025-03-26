import React, { useEffect, useRef } from "react";
import SmallCountdown from './SmallCountdown'; // Import the new countdown component

function LandingSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Adjust video speed
    }
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center md:justify-start text-center md:text-left"> {/* Changed md:justify-end to md:justify-start and md:text-right to md:text-left */}
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/LandingVBG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div className="relative z-10 px-4 md:pl-12 flex flex-col items-center md:items-start justify-center h-full"> {/* Changed md:pr-12 to md:pl-12 and md:items-end to md:items-start */}
        {/* Container for text and countdown */}
        <div className="bg-black bg-opacity-50 md:bg-opacity-0 p-4 rounded-md flex flex-col items-center md:items-start max-w-lg md:max-w-none"> {/* Changed md:items-end to md:items-start */}
          <h1 className="text-5xl md:text-4xl font-bold text-white mobile-title">
            KRANTI 2K25
          </h1>
          {/* Conditionally render the description text for larger screens */}
          <p className="text-lg md:text-l text-gray-200 mt-2 hidden md:block">
            A National Level Technical Symposium
          </p>
          {/* Add the small countdown component here */}
          <SmallCountdown />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center scroll-down-indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 md:h-12 md:w-12 animate-bounce text-white drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
        {/* Changed text color for better visibility */}
        <span className="block text-lg md:text-xl font-semibold mt-2 text-white drop-shadow-md">
          Scroll Down
        </span>
      </div>
    </div>
  );
}

export default LandingSection;
