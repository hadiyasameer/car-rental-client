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
        <table className="table-auto w-full border-0">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Image</th>
              <th className="p-2">User</th>
              <th className="p-2">Email</th>
              <th className="p-2">Car</th>
              <th className="p-2">Model</th>
              <th className="p-2">Year</th>
              <th className="p-2">Total Price Paid</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="p-2"><img src={booking.carId ? booking.carId.image : '/placeholder-car.jpg'} alt="Car" className="object-cover w-24 h-16 rounded"/></td>
                <td className="p-2 justify-center">{booking.userId?.name || 'N/A'}</td>
                <td className="p-2 justify-center">{booking.userId?.email || 'N/A'}</td>
                <td className="p-2 justify-center">{booking.carId?.title}</td>
                <td className="p-2 justify-center">{booking.carId?.model}</td>
                <td className="p-2 justify-center">{booking.carId?.year}</td>
                <td className="p-2 justify-center">{booking.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBookings;
