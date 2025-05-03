// src/components/BookingSuccess/BookingSuccess.jsx

import React, { useEffect } from 'react';
import { clearBookings } from '../../services/userServices'; // Import the clean function
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

function BookingSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const bookingId = new URLSearchParams(location.search).get("bookingId");

    if (bookingId) {
      clearBookings(bookingId)  // Use the clearBookings function from userServices
        .then(() => {
          console.log("Booking cleared after payment");
          navigate("payment/success"); // Refresh or redirect to bookings page
        })
        .catch(err => {
          console.error("Failed to clear booking:", err);
        });
    }
  }, [navigate]); // Adding navigate to the dependency array

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
      <p className="text-xl mt-4">Thank you for your booking. A confirmation has been sent.</p>
    </div>
  );
}

export default BookingSuccess;
