import React from 'react';
import { FaCar } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { BsFuelPump } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";

function BookCar({ item }) {
  return (
    <div className="p-5 bg-slate-100">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>

          <img
            src={item.image}
            alt="Car"
            className="w-full max-h-[300px] object-cover rounded mb-4"
          />

          {/* Specs Section */}
          <div className="flex flex-wrap justify-between gap-4 text-lg">
            <div className="flex items-center gap-2 w-[48%] sm:w-auto">
              <FaCar className="text-2xl text-yellow-500" />
              <span>{item.carType}</span>
            </div>
            <div className="flex items-center gap-2 w-[48%] sm:w-auto">
              <TbManualGearbox className="text-2xl text-yellow-500" />
              <span>{item.transmission}</span>
            </div>
            <div className="flex items-center gap-2 w-[48%] sm:w-auto">
              <BsFuelPump className="text-2xl text-yellow-500" />
              <span>{item.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 w-[48%] sm:w-auto">
              <PiArmchairFill className="text-2xl text-yellow-500" />
              <span>{item.seatingCapacity} Seats</span>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold pt-20">Description:</h2>
          <p className="text-gray-700 text-lg">{item.description}</p>
          <p className="text-xl font-medium">
            {item.make} - <span className="text-[#410512]">{item.pricePerDay}/day</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCar;
