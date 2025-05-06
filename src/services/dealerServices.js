import { axiosInstance } from "../axios/axiosinstance"

export const dealerSignUp = (data) => {
    return axiosInstance.post("dealer/signup", data)
}
export const dealerLogin = (values) => {
    return axiosInstance.post("dealer/login", values);
};
export const dealerLogout = () => {
    return axiosInstance.get("dealer/logout", {}, { withCredentials: true });
}

export const dealercarlist = () => {
    return axiosInstance.get("car/carlist");
};
export const addcar = (data) => {
    return axiosInstance.post("car/addcar", data)
}
export const getCarById = (carId) => {
    return axiosInstance.get(`car/ViewCar/${carId}`)
}
export const updateCar = (carId, data) => {
    return axiosInstance.put(`car/updatecar/${carId}`, data);
};
export const getDealerProfile = () => {
    return axiosInstance.get("dealer/profile");
};
export const deleteCar = async (carId) => {
    return axiosInstance.delete(`car/deletecar/${carId}`);
};
export const getDealerBookings = async () => {
    return axiosInstance.get('booking/dealerbooking', { withCredentials: true });
};