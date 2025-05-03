import { axiosInstance } from "../axios/axiosinstance";

export const adminLogin = (values) => {
    return axiosInstance.post("/admin/login", values);
};
export const adminLogout = () => {
    return axiosInstance.post("admin/logout", {}, { withCredentials: true });
}
export const carlist = () => {
    return axiosInstance.get("/car/carlist")
}
export const getAdminBookings = async () => {
    return await axiosInstance.get('/booking/adminbooking', { withCredentials: true });
};
export const viewCar = (carId) => {
    return axiosInstance.get(`/car/ViewCar/${carId}`)
}