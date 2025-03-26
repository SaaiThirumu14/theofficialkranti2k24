import React from "react";
import "./About.css"; // Import the CSS file
import MeenakshiImage from "./ka.png";
import { color } from "framer-motion";

const About = () => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="about-section">
    
      <div className="about-container">
        <div className="about-image">
          {imageError ? (
            <img
              src="/logo.svg" // Path to your fallback image in the public directory
              alt="Fallback Image"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ) : (
            <img
              src={MeenakshiImage}
              alt="Meenakshi Sundararajan Engineering College"
              onError={handleImageError}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
        </div>
        <div className="about-content">
        <h2 style={{ color: "#e8e8e8", textAlign: "center" }}>
  Kranti 2K25 – The Revolution in Technology
</h2>


        
          <p>
         <br />

🚀 What is Kranti?<br />
Kranti, meaning "Revolution," symbolizes transformation and innovation. Kranti 2K25 is a CSE symposium where brilliant minds push boundaries, challenge limits, and redefine the future of technology. <br />
<br />

⏳ Theme: Time Paradox <br />
Step into the mysteries of time—loops, alternate realities, and temporal anomalies. This year’s events challenge you to think beyond the present, reshape the past, and embrace the future. <br />
<br />

💻 Can you debug an error before it happens?<br />
🕰 Can you pitch an idea that rewrites history?<br />
🔁 Can you code your way out of a time loop?<br />

The clock is ticking. Are you ready for the paradox?<br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
