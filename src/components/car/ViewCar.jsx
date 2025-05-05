import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { createBooking } from '../../services/userServices';
import { viewCar } from '../../services/userServices';
import { FaCar } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb'
import { BsFuelPump } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";
import { toast } from 'react-toastify';

function ViewCar() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin');

  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await viewCar(id);
        setCar(res.data.data);
      } catch (error) {
        setError(err.response?.data?.message || 'Failed to fetch car details.');
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!car) return <div>No car details available.</div>;

  const handleBooking = async () => {
    try {
      await createBooking(id, startDate, endDate);
      alert('Booking created!');
    } catch (err) {
      alert(err.response?.data?.message || 'Booking failed');
      toast.error(err.response.data.error)
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;


  if (!car) return <div>Loading...</div>;

  return (
    <div className="lg:p-10">
      <div className='flex flex-col lg:flex-row'>
        <div >
          <h1 className="text-3xl font-bold w-full m-10">{car.title}</h1>
          <figure className='flex-1  w-200'>
            <img
              src={car.image}
              alt="Cars" className='relative object-cover w-1/2 lg:w-3/4 h-full' />
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
          <div className='flex flex-col items-center'>
            <p className="text-lg mb-4">{car.make} - {car.pricePerDay}/day</p>
            {!isAdmin && (
              <>
                <label>Start Date:
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-2 rounded block my-2" />
                </label>

                <label>End Date:
                  <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-2 rounded block my-2" />
                </label>
                <button onClick={handleBooking} className="bg-[#410512] text-white px-4 py-2 rounded hover:bg-[#5c1a27]">
                  Book
                </button>
              </>
            )
            }
          </div>
        </div>
      </div>


    </div>
  );
}

export default ViewCar;
