import React from 'react';
import { Contact, Experience, Works, StarsCanvas } from './components';

const Dev = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>

      <Works />
      <Experience />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Dev;
