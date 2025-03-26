import React, { useEffect, useRef, useState } from 'react';
import SponsorLogo1 from './logo.png';
import SponsorLogo2 from './image.png';
import SponsorLogo3 from './logo.png';
import "./About.css";


function Sponsors() {
  const [position, setPosition] = useState(0);
  const logosRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev <= -300 ? 50 : prev - 2));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='sponsors-section' style={{
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      marginBottom: '20px'
    }}>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>Sponsors</h2>
      <div className='sponsors-container' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'hidden'
      }}>
        <div className='logos' ref={logosRef} style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `translateX(${position}px)`,
          transition: 'transform 0.1s ease-in-out'
        }}>
          <img src={SponsorLogo1} alt='Sponsor 1' style={{ height: '150px' }} />
          <img src={SponsorLogo2} alt='Sponsor 2' style={{ height: '150px' }} />
          <img src={SponsorLogo3} alt='Sponsor 3' style={{ height: '150px' }} />
          <img src={SponsorLogo1} alt='Sponsor 1' style={{ height: '150px' }} />
          <img src={SponsorLogo2} alt='Sponsor 2' style={{ height: '150px' }} />
          <img src={SponsorLogo3} alt='Sponsor 3' style={{ height: '150px' }} />
          <img src={SponsorLogo1} alt='Sponsor 1' style={{ height: '150px' }} />
          <img src={SponsorLogo2} alt='Sponsor 2' style={{ height: '150px' }} />
          <img src={SponsorLogo3} alt='Sponsor 3' style={{ height: '150px' }} />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
