


import React from 'react';
import './Location.css'; // Import the CSS file

function Location() {
  return (
    <section className="location-section bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg py-12">
      <div className="container mx-auto px-4 flex flex-wrap">
        {/* Left Column: Map Placeholder */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-4">
          <div className="map-placeholder flex items-center justify-center text-gray-400 border border-gray-600 rounded-lg">
          <iframe
            title="Google Map"
            width="100%"
            height="300px"
            
            className="rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.963757920901!2d80.22393577507789!3d13.055802687267342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f499eee457%3A0x4d3f7e677496e707!2sMeenakshi%20Sundararajan%20Engineering%20College!5e1!3m2!1sen!2sin!4v1742710337905!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Info & Links */}
        <div className="w-full md:w-1/2 pl-0 md:pl-4 text-white">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-sky-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/event" className="hover:text-sky-400"><i className="fas fa-calendar-alt mr-2"></i>Events</a></li>
              <li><a href="/about" className="hover:text-sky-400"><i className="fas fa-map-marker-alt mr-2"></i>FAQs</a></li>
              {/* Add more quick links as needed */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-sky-500">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><i className="fas fa-map-marker-alt mr-2 text-sky-500"></i>363, Arcot Rd, Kodambakkam, Chennai, 600024</li>
              <li className="flex items-center"><i className="fas fa-phone-alt mr-2 text-sky-500"></i>+91 44 2480 2480</li>
              <li className="flex items-center"><i className="fas fa-envelope mr-2 text-sky-500"></i><a href="mailto:info@msec.edu.in" className="hover:text-sky-400">info@msec.edu.in</a></li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-sky-400"><i className="fab fa-instagram"></i></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-sky-400"><i className="fab fa-whatsapp"></i></a>
              <a href="mailto:info@msec.edu.in" className="text-xl hover:text-sky-400"><i className="fas fa-envelope"></i></a>
              {/* Add other social links */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;

