import React from 'react'
import { FaCar } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb'
import { BsFuelPump } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";

function BookCar({item}) {
  return (
    <div>
      <div className='flex bg-slate-100'>
                <div className='flex-1'>
                  <h1 className="text-3xl font-bold w-full m-10">{item.title}</h1>
                  <figure className='flex-1  '>
                    <img
                      src={item.image}
                      alt="Cars" className='relative object-cover w-3/4 h-full' />
                  </figure>
                  <div className="flex justify-between w-3/4">
                    <div className="group">
                      {item.carType}
                      <FaCar className="text-4xl transition group-hover:animate-spin group-hover:text-yellow-500" />
                    </div>
                    <div className="group">
                      {item.transmission}
                      <TbManualGearbox className="text-4xl" />

                    </div>
                    <div className="group">
                      {item.fuelType}
                      <BsFuelPump className="text-4xl" />

                    </div>
                    <div className="group">
                      {item.seatingCapacity}
                      <PiArmchairFill className="text-4xl" />
                    </div>
                    <div className="group">
                      <div className="badge badge-secondary h-full">Available</div>
                    </div>
                  </div>
                </div>

                <div className='flex-1'>
                  <div className='my-30'>
                    <h2 className='text-3xl '>Description:</h2>
                    <p className='text-2xl'>{item.description}</p>
                    <p className="text-lg mb-4">{item.make} - {item.pricePerDay}/day</p>
                  </div>
                  
                </div>

              </div>
    </div>
  )
}

export default BookCar