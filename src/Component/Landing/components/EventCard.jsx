import React from 'react';

function EventCard({ category, time, description }) {
  return (
    <div className="flex items-start py-4">
      <div className="w-1 h-20 bg-sky-500 mr-4"></div>
      <div>
        <h3 className="text-lg font-semibold">{category}</h3>
        <p className="text-sm text-gray-400">{time}</p>
        <p className="mt-2 text-white">{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
