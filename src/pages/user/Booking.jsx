import React, { useEffect, useState } from 'react';
import { cancelbooking, viewbooking } from '../../services/userServices';
import { FaCar } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb'
import { BsFuelPump } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ViewCar() {
  const navigate=useNavigate()
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    viewbooking().then((res) => {
      setBooking(res.data[0])
      console.log(res.data)
    }).catch((err) => {
      console.log(err);

    })
  }, [])

  const cancelBooking = (bookingId) => {
    try {
      cancelbooking(bookingId).then((res) => {
        console.log(res);
        toast.success('Booking cancelled successfully!');
        setBooking(null);
      })
    } catch (error) {
      console.log(error);
      toast.error('Failed to cancel booking.');

    }

  }

  return (
    <>
      {booking ? <>
        <div className="p-10">
          <div className='flex'>
            {booking && (<>
              <div className='flex'>
                <div className='flex-1'>
                  <h1 className="text-3xl font-bold w-full m-10">{booking.carId.title}</h1>
                  <figure className='flex-1  '>
                    <img
                      src={booking.carId.image}
                      alt="Cars" className='relative object-cover w-3/4 h-full' />
                  </figure>
                  <div className="flex justify-between w-3/4">
                    <div className="group">
                      {booking.carId.carType}
                      <FaCar className="text-4xl transition group-hover:animate-spin group-hover:text-yellow-500" />
                    </div>
                    <div className="group">
                      {booking.carId.transmission}
                      <TbManualGearbox className="text-4xl" />

                    </div>
                    <div className="group">
                      {booking.carId.fuelType}
                      <BsFuelPump className="text-4xl" />

                    </div>
                    <div className="group">
                      {booking.carId.seatingCapacity}
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
                    <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste pariatur reiciendis rem nulla soluta cupiditate, nobis velit laborum voluptatum est officia, itaque error omnis quos sapiente doloribus. Illum natus voluptas rerum est! Hic laboriosam dolorum incidunt facere unde, accusantium libero, quam, ut enim optio totam? Illum laborum ea veniam sunt.</p>
                    <p className="text-lg mb-4">{booking.carId.make} - {booking.carId.pricePerDay}/day</p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <label>Start Date:
                      <label htmlFor=""> {booking.startDate.slice(0, 10)}
                      </label>
                    </label>

                    <label>End Date:
                      <label htmlFor=""> {booking.endDate.slice(0, 10)}
                      </label>
                    </label>
                    <label>Total:
                      <label htmlFor=""> {booking.totalPrice} QR
                      </label>
                    </label>

                    <div className='flex gap-10 mt-10'>
                      <button className="bg-[#410512] text-white px-4 py-2 w-50 rounded hover:bg-[#5c1a27]">
                        Book
                      </button>
                      <button className="bg-[#410512] text-white px-4 py-2 w-50 rounded hover:bg-[#5c1a27]" onClick={() => cancelBooking(booking._id)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </>
            )}


          </div>
        </div>
      </> : <div>
        <p>No bookings yet</p>
        <button className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer'onClick={()=>navigate("/cars") }>
            View cars
        </button>
      </div>
      }
    </>

  );
}

export default ViewCar;
