import React from 'react';
import { GiCarWheel } from 'react-icons/gi';

const WheelSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <GiCarWheel className="w-24 h-24 text-gray-800 animate-spin" />
      <p className="mt-4 text-lg text-gray-600 font-medium">Loading Ride Qatar...</p>
    </div>
  );
};

export default WheelSpinner;
