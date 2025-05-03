import React, { useEffect, useState } from 'react';
import { cancelbooking, makepaymentOnStripe, viewbooking } from '../../services/userServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import BookCar from '../../components/car/BookCar';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHED_KEY_STRIPE);

function Booking() {
  const navigate = useNavigate()
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    viewbooking().then((res) => {
      setBooking(res.data)
      console.log("Booking carId:", res.data); // Add this line to check the carId

      console.log(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const cancelBooking = async (bookingId) => {
    try {
      await cancelbooking(bookingId);
      toast.success('Booking cancelled successfully!');
      setBooking(prev => prev.filter(b => b._id !== bookingId));
    } catch (error) {
      console.log(error);
      toast.error('Failed to cancel booking.');
    }
  }

  const makePayment = async (singleBooking) => {
    try {
      console.log("Booking details being sent:", singleBooking);
  
      const response = await makepaymentOnStripe({ bookings: [singleBooking] }); // Correct shape
      console.log("Payment session response:", response);
      const stripe = await stripePromise;
  
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.sessionId,
      });
  
      if (result.error) {
        toast.error(result.error.message);
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.");
    }
  };
  


  return (
    <>
      {booking.length > 0 ? (
        <div className="p-10">
          {booking.map((booking) => (
            <div key={booking._id} className='flex bg-slate-100 p-4 rounded mb-4 gap-6'>

              <BookCar item={booking.carId} />
              < div className='flex flex-col justify-center items-center' >
                <p>Start Date: {booking.startDate.slice(0, 10)}</p>
                <p>End Date: {booking.endDate.slice(0, 10)}</p>
                <p>Total: {booking.totalPrice} QR</p>

                <div className='flex gap-10 mt-10'>
                  <button className="bg-[#410512] text-white px-4 py-2 w-50 rounded hover:bg-[#5c1a27]" onClick={()=>makePayment(booking)}>
                    Book
                  </button>
                  <button className="bg-[#410512] text-white px-4 py-2 w-50 rounded hover:bg-[#5c1a27]" onClick={() => cancelBooking(booking._id)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-xl mb-4">No bookings yet</p>
          <button className='hover:text-yellow-500 transition font-medium text-2xl hover:border-yellow-500 cursor-pointer' onClick={() => navigate("/cars")}>
            View cars
          </button>
        </div>
      )}
    </>
  );
}

export default Booking;
