import { axiosInstance } from "../axios/axiosinstance"


export const carlist = () => {
    return axiosInstance.get("/car/carlist")
}


export const userSignUp = (data) => {
    return axiosInstance.post("user/signup", data)
}

export const userLogin = (data) => {
    return axiosInstance.put("user/login", data)
}

export const userLogout = () => {
    return axiosInstance.post("user/logout",{},{ withCredentials: true });

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
export const viewCar = (carId) => {
    return axiosInstance.get(`/car/ViewCar/${carId}`)
}