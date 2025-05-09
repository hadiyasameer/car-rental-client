import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCarById, updateCar } from '../../services/dealerServices';

const UpdateCar = () => {
    const { id: carId } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        pricePerDay: '',
        isAvailable: true,
        description: '',
        location: '',
    });
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const res = await getCarById(carId);
                const car = res.data;
                setValues({
                    title: car.title,
                    pricePerDay: car.pricePerDay,
                    isAvailable: car.isAvailable,
                    description: car.description,
                    location: car.location,
                });
            } catch (error) {
                toast.error("Failed to load car details");
            }
        };
        fetchCar();
    }, [carId]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {

            const updatedValues = { ...values, isAvailable: Boolean(values.isAvailable) };
            const formData = new FormData();
            Object.entries(updatedValues).forEach(([key, val]) => {
                formData.append(key, val);
            });
            if (image) {
                formData.append("image", image);
            }

            await updateCar(carId, formData);

            toast.success("Car updated successfully");
            navigate("/dealer/carlist");
        } catch (error) {
            toast.error(error?.response?.data?.message || "Update failed");
            console.log(error?.response?.data?.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Update Car</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input name="title" type="text" value={values.title} onChange={handleChange} placeholder="Car Title" required className="w-full border px-3 py-2 rounded" />
                <input name="pricePerDay" type="number" value={values.pricePerDay} onChange={handleChange} placeholder="Price Per Day" required className="w-full border px-3 py-2 rounded" />
                <textarea name="description" value={values.description} onChange={handleChange} placeholder="Description" className="w-full border px-3 py-2 rounded" />
                <input name="location" type="text" value={values.location} onChange={handleChange} placeholder="Location" required className="w-full border px-3 py-2 rounded" />
                <label className="flex items-center space-x-2">
                    <input type="checkbox" name="isAvailable" checked={values.isAvailable} onChange={handleChange} />
                    <span>Available</span>
                </label>
                <input type="file" onChange={handleImageChange} className="w-full border px-3 py-2 rounded" />
                <button disabled={loading} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
                    {loading ? 'Updating...' : 'Update Car'}
                </button>
            </form>
        </div>
    );
};

export default UpdateCar;
