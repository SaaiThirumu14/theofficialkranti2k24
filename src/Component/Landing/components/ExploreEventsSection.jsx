import React from "react";

function ExploreEventsSection() {
  return (
    <div className="py-12 text-left explore-events-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500">Explore Events</h2>
        <p className="mt-4 text-white opacity-70">
          Discover a wide range of exciting events planned for Kranthi 2K25,
          including technical workshops, cultural performances, and sports
          competitions. There's something for everyone!
        </p>
        <a
          href="/event"
          className="inline-block mt-8 px-6 py-2 rounded-full bg-black text-white font-bold border border-sky-500 hover:bg-gray-800 transition-colors duration-300"
        >
          View Events
        </a>
      </div>
    </div>
  );
}

export default ExploreEventsSection;
