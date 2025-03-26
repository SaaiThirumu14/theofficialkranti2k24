import React from 'react';

function Preloader({ isLoading }) {
  // Define inline styles for multi-color effect
  const colors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C']; // Example colors
  const text = "KRANTI-2K25";

  // IMPORTANT: Replace '/background-video.mp4' with the actual path to your video file in the /public directory
  const videoSrc = '/background-video.mp4';

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-1000 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none' // Fade out preloader container
      }`}
    >
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline // Important for iOS playback
        className="absolute top-0 left-0 w-full h-full object-cover z-0" // Position video as background
      />

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full"> {/* Center content */}
        <h1
          className={`text-5xl md:text-7xl font-bold mix-blend-screen transition-transform duration-1000 ease-in-out ${ // Apply blend mode
            isLoading ? 'translate-y-0' : '-translate-y-full' // Move text up on exit
          }`}
          style={{ willChange: 'transform' }} // Optimize animation
        >
          {text.split('').map((char, index) => (
            <span key={index} style={{ color: colors[index % colors.length] }}>
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default Preloader;
