import { axiosInstance } from "../axios/axiosinstance"

export const userSignUp = (data) => {
    return axiosInstance.post("user/signup", data)
}

export const userLogin = (data) => {
    return axiosInstance.post("user/login", data)
}

export const userLogout = () => {
    return axiosInstance.post("user/logout", {}, { withCredentials: true });

}

export const createBooking = (carId, startDate, endDate) => {
    return axiosInstance.post(
        `booking/createbooking/${carId}`,
        { startDate, endDate },
        { headers: { 'Content-Type': 'application/json' } }
    );
};

export const viewbooking = () => {
    return axiosInstance.get("/booking/viewbooking")
}
export const cancelbooking = (bookingId) => {
    return axiosInstance.delete(`/booking/cancelbooking/${bookingId}`)
}
// export const updateBookingStatus = (bookingId, status) => {
//     return axiosInstance.put(`/booking/update-booking-status/${bookingId}`, { status });
// };

export const viewCar = (carId) => {
    return axiosInstance.get(`/car/ViewCar/${carId}`)
}

export const makepaymentOnStripe = (body) => {
    return axiosInstance.post(`/payment/makepayment`, body)
}

export const clearBookings = (bookingId) => {
    return axiosInstance.post('/booking/clearbooking', { bookingId });
};

export const getUserProfile = () => {
    return axiosInstance.get("/user/profile");
};


export const carlist = (filters = {}) => {
    return axiosInstance.get('/car/carlist', { params: filters });
  };
  