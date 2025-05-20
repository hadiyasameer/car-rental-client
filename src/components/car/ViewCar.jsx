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
import WheelSpinner from '../shared/WheelSpinner';


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

  if (loading) return <WheelSpinner />
  if (!car) return <div>No car details available.</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="lg:p-10 p-5">
      <div className="flex flex-col lg:flex-row gap-10">

        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">{car.title}</h1>
          <img src={car.image} alt="Car" className="w-full h-[300px] object-cover rounded" />

          <div className="flex flex-wrap justify-between items-center gap-4 mt-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <FaCar className="text-2xl text-yellow-500" />
              <span>{car.carType}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <TbManualGearbox className="text-2xl text-yellow-500" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <BsFuelPump className="text-2xl text-yellow-500" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <PiArmchairFill className="text-2xl text-yellow-500" />
              <span>{car.seatingCapacity} Seats</span>
            </div>
            <div className="w-full sm:w-auto">
              <div className="text-sm font-medium">
                {car.isAvailable ? (
                  <span className="inline-block px-3 py-1 bg-green-500 text-white rounded-full">
                    Available
                  </span>
                ) : (
                  <span className="inline-block px-3 py-1 bg-red-500 text-white rounded-full">
                    Unavailable
                  </span>
                )}
              </div>

            </div>
          </div>


        </div>

        <div className="lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Description:</h2>
            <p className="text-gray-700">{car.description}</p>
          </div>

          <div className="text-lg text-gray-800">
            <p className="mb-4">{car.make} - <span className="font-semibold">{car.pricePerDay}/day</span></p>

            {!isAdmin && (
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Start Date:</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    excludeDates={bookedDates}
                    minDate={new Date()}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select start date"
                    className="border p-2 rounded w-full"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">End Date:</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    excludeDates={bookedDates}
                    minDate={startDate || new Date()}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select end date"
                    className="border p-2 rounded w-full"
                  />
                </div>

                <button
                  onClick={handleBooking}
                  disabled={!startDate || !endDate}
                  className="bg-[#410512] text-white px-6 py-2 rounded hover:bg-[#5c1a27] disabled:opacity-50"
                >
                  Book
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default ViewCar;
