import React, { useEffect, useState } from 'react';
import { getAdminBookings } from '../../services/adminServices';
import { toast } from 'react-toastify';

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAdminBookings()
      .then((res) => {
        setBookings(res.data.data);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || 'Failed to fetch bookings');
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Bookings</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">User</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Car</th>
              <th className="border p-2">Model</th>
              <th className="border p-2">Year</th>
              <th className="border p-2">Price/Day</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="border p-2">{booking.userId?.name || 'N/A'}</td>
                <td className="border p-2">{booking.userId?.email || 'N/A'}</td>
                <td className="border p-2">{booking.carId?.make} {booking.carId?.title}</td>
                <td className="border p-2">{booking.carId?.model}</td>
                <td className="border p-2">{booking.carId?.year}</td>
                <td className="border p-2">{booking.carId?.pricePerDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBookings;
