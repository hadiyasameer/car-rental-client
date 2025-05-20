import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getDealerBookings } from '../../services/dealerServices';
import WheelSpinner from '../../components/shared/WheelSpinner';


const DealerBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const dealerId = useSelector((state) => state.dealer?.dealer?._id);

    useEffect(() => {
        getDealerBookings()
            .then((res) => {
                setBookings(res.data.data);
            })
            .catch((err) => {
                toast.error(err.response?.data?.message || 'Failed to fetch bookings');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [dealerId]);



    if (loading) return <WheelSpinner />

    if (!loading && bookings.length === 0) return <div className="text-center mt-10">No bookings yet.</div>;


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">All Bookings</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className=" p-2">Image</th>
                            <th className=" p-2">User</th>
                            <th className=" p-2">Email</th>
                            <th className=" p-2">Car</th>
                            <th className="p-2">Rental Days</th>
                            <th className=" p-2">Total Price Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td className="p-2"><img src={booking.carId ? booking.carId.image : '/placeholder-car.jpg'} alt="Car" className="object-cover mx-auto w-24 h-16 rounded" /></td>
                                <td className=" p-2 text-center">{booking.userId?.name || 'N/A'}</td>
                                <td className=" p-2 text-center">{booking.userId?.email || 'N/A'}</td>
                                <td className=" p-2 text-center">{booking.carId?.make} {booking.carId?.title}</td>
                                <td className=" p-2 text-center">{booking.rentalDays}</td>
                                <td className=" p-2 text-center">{booking.totalPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DealerBookings;
