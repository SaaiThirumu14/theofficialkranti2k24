import React from "react";
import "./About.css"; // Import the CSS file
import MeenakshiImage from "./Meenakshi-Sundararajan-Engineering-College-Chennai.png";

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={MeenakshiImage} alt="Meenakshi Sundararajan Engineering College" />
        </div>
        <div className="about-content">
          <h2 style={{ color: "#e8e8e8" }}>Meenakshi Sundararajan Engineering College</h2>
          <p>
            Meenakshi Sundararajan Engineering College (MSEC) was established by the IIET Society in 2001. 
            This institution is a part of the prestigious KRS Group of Institutions which also includes the 
            renowned IIET (Indian Institute of Engineering Technology) established in 1947 by our Founder Late 
            Shri K.R.Sundararajan, the well-known Meenakshi College for Women, and the more recently established 
            Meenakshi Sundararajan School of Management. The institutions on the KRS Campus are known for the 
            quality education they impart and their stringent levels of discipline. We have consistently outshone 
            all our peers, not only in academics, but in co-curricular activities as well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
