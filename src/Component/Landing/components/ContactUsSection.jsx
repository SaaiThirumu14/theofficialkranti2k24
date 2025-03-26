import React from 'react';

function ContactUsSection() {
  return (
    <div className="py-12 text-left bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500">Explore More</h2>
        <p className="mt-4 text-white opacity-70">
          Dive deeper into our website and discover more about us, our team, and
          the exciting events we have planned. Click the buttons below to explore!
        </p>
        <div className="mt-8 flex flex-col items-start space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          <a
            href="/about"
            className="inline-block px-6 py-2 rounded-full bg-black text-white font-bold border border-sky-500 hover:bg-gray-800 transition-colors duration-300"
          >
            FAQs
          </a>
          <a
            href="/dev"
            className="inline-block px-6 py-2 rounded-full bg-black text-white font-bold border border-sky-500 hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Our Team
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
