import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { createBooking, getBookedDates } from '../../services/userServices';
import { viewCar } from '../../services/userServices';
import { FaCar } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb'
import { BsFuelPump } from "react-icons/bs";
import { PiArmchairFill } from "react-icons/pi";
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';


function ViewCar() {
  const location = useLocation()
  const [bookedDates, setBookedDates] = useState([]);

  const isAdmin = location.pathname.startsWith('/admin');

  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const res = await getBookedDates(id);
        const dates = [];

        res.data.data.forEach(range => {
          let current = new Date(range.startDate);
          const end = new Date(range.endDate);

          while (current <= end) {
            dates.push(new Date(current));
            current.setDate(current.getDate() + 1);
          }
        });

        setBookedDates(dates);
      } catch (err) {
        toast.error('Failed to fetch booked dates');
      }
    };

    fetchBookedDates();
  }, [id]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await viewCar(id);
        setCar(res.data.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch car details.');
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);
  const handleBooking = async () => {
    try {
      if (!startDate || !endDate) {
        toast.error("Please select both start and end dates");
        return;
      }

      const formattedStart = format(startDate, 'yyyy-MM-dd');
      const formattedEnd = format(endDate, 'yyyy-MM-dd');

      await createBooking(id, formattedStart, formattedEnd);
      toast.success('Booking created!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Booking failed');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!car) return <div>No car details available.</div>;
  if (error) return <div className="text-red-600">{error}</div>;

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
            <p className='2xl'>{car.description}</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className="text-lg mb-4">{car.make} - {car.pricePerDay}/day</p>
            {!isAdmin && (
              <>
                <label><span>Start Date: </span>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    excludeDates={bookedDates}
                    minDate={new Date()}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a start date"
                    className="border p-2 rounded mb-4"
                  />
                </label>

                <label><span>End Date: </span>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    excludeDates={bookedDates}
                    minDate={startDate || new Date()}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select an end date"
                    className="border p-2 rounded mb-4"
                  />
                </label>
                <button onClick={handleBooking} disabled={!startDate || !endDate}
                  className="bg-[#410512] text-white px-4 py-2 rounded hover:bg-[#5c1a27]">
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
