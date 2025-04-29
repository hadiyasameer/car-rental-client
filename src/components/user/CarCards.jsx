import React from 'react'
import { FaCar } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb'
import { BsFuelPump } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";



function CarCards({ car }) {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm grid grid-cols-1" >
                <figure className='w-full h-80'>
                    <img
                        src={car.image}
                        alt="Cars" className='relative object-cover w-full h-full' />
                    <div className="absolute top-5 left-5 badge badge-secondary">Available</div>
                    <div className="absolute top-5 right-5 badge badge-secondary">New</div>
                </figure>
                <div className="card-body">
                    <p>{car.make}</p>
                    <div className='flex justify-between items-center w-full'>
                        <h2 className="card-title ">
                            {car.title}
                        </h2>
                        <p className='absolute right-5'><span className='font-bold text-xl'>{car.pricePerDay}</span>/day</p>
                    </div>
                    <div className="h-[2px] bg-slate-200 mt-1"></div>

                    <div className="flex justify-between ">
                        <div className="group">
                            {car.carType}
                            <FaCar className="text-2xl transition group-hover:animate-spin group-hover:text-yellow-500" />
                        </div>
                        <div className="group">
                            {car.transmission}
                            <TbManualGearbox  className="text-2xl"/>

                        </div>
                        <div className="group">
                            {car.fuelType}
                            <BsFuelPump className="text-2xl" />

                        </div>
                        <di className="group">
                            {car.seatingCapacity}
                            <PiArmchairFill  className="text-2xl"/>

                        </di>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCards