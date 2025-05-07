import React, { useEffect } from 'react';
import { clearBookings } from '../../services/userServices'; 
import { useNavigate } from 'react-router-dom'; 

function BookingSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const bookingId = new URLSearchParams(location.search).get("bookingId");

    if (bookingId) {
      clearBookings(bookingId)  
        .then(() => {
          console.log("Booking cleared after payment");
          navigate("/"); 
        })
        .catch(err => {
          console.error("Failed to clear booking:", err);
        });
    }
  }, [navigate]); 

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-xl mt-4">Thank you for your booking. A confirmation has been sent.</p>
    </div>
  );
}

export default BookingSuccess;
