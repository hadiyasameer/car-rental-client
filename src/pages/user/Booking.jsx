import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createBooking} from '../../services/userServices';
import axios from 'axios';
import { FaCar } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb'
import { BsFuelPump } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";
import { toast } from 'react-toastify';

function ViewCar() {

  const [booking, setBooking] = useState([]);
  useEffect(() => {
    viewbooking().then((res) => {
      setBooking(res.data.bookings)
    }).catch((err) => {
      console.log(err);

    })
  })

  return (
    <div className="p-10">
      <div className='flex'>
        {/* <div >
          <h1 className="text-3xl font-bold w-full m-10">{car.title}</h1>
          <figure className='flex-1  '>
            <img
              src={car.image}
              alt="Cars" className='relative object-cover w-3/4 h-full' />
          </figure>
          <div className="flex justify-between w-3/4">
            <div className="group">
              {car.carType}
              <FaCar className="text-4xl transition group-hover:animate-spin group-hover:text-yellow-500" />
            </div>
            <div className="group">
              {car.transmission}
              <TbManualGearbox className="text-4xl" />

            </div>
            <div className="group">
              {car.fuelType}
              <BsFuelPump className="text-4xl" />

            </div>
            <div className="group">
              {car.seatingCapacity}
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
            <p className='2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste pariatur reiciendis rem nulla soluta cupiditate, nobis velit laborum voluptatum est officia, itaque error omnis quos sapiente doloribus. Illum natus voluptas rerum est! Hic laboriosam dolorum incidunt facere unde, accusantium libero, quam, ut enim optio totam? Illum laborum ea veniam sunt.</p>
          </div>
          <div>
            <p className="text-lg mb-4">{car.make} - {car.pricePerDay}/day</p> */}
            <div>
            <label>Start Date:
              <label htmlFor="">{booking.startDate}
              </label>
            </label>

            <label>End Date:
              <label htmlFor="">{booking.endDate}
              </label>
            </label>
            <button className="bg-[#410512] text-white px-4 py-2 rounded hover:bg-[#5c1a27]">
              Book
            </button>
          </div>
        </div>
      </div>


  );
}

export default ViewCar;
