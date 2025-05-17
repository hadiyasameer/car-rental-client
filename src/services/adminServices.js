import { axiosInstance } from "../axios/axiosinstance";

export const adminLogin = (values) => {
    return axiosInstance.post("admin/login", values);
};
export const adminLogout = () => {
    return axiosInstance.post("admin/logout", {}, { withCredentials: true });
}
export const carlist = (params = {}) => {
    return axiosInstance.get("car/carlist", { params })
}
export const getAdminBookings = async () => {
    return axiosInstance.get('booking/adminbooking', { withCredentials: true });
};
export const viewCar = (carId) => {
    return axiosInstance.get(`car/ViewCar/${carId}`)
}
export const fetchDealers = () => {
    return axiosInstance.get('admin/dealers', { withCredentials: true });
}
export const fetchUsers = () => {
    return axiosInstance.get('admin/users', { withCredentials: true })
}
export const deleteDealerById = (dealerId) => {
    return axiosInstance.delete(`admin/dealers/${dealerId}`, { withCredentials: true });
};
export const deleteUserById = (userId) => {
    return axiosInstance.delete(`admin/users/${userId}`, { withCredentials: true });
};
