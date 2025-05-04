import React, { useState } from 'react';
import { axiosInstance } from '../../axios/axiosinstance';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addcar } from '../../services/dealerServices';

const AddCar = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        make: '',
        model: '',
        year: '',
        carType: '',
        fuelType: '',
        transmission: '',
        seatingCapacity: '',
        pricePerDay: '',
        availability: true,
        description: '',
        location: ''
    });

    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        setError('');

        try {
            const formData = new FormData();
            for (let key in values) {
                formData.append(key, values[key]);
            }
            formData.append('image', image);

            await addcar(formData);

            toast.success('Car added successfully');
            navigate("/dealer/carlist");
        } catch (err) {
            toast.error(err?.response?.data?.message || "Car adding failed", {
                position: "top-center"
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Add New Car</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form className="space-y-4" onSubmit={onSubmit}>
                <input name="title" type='text' onChange={handleChange} placeholder="Car Title" required className="w-full border px-3 py-2 rounded" />
                <input name="make" type='text' onChange={handleChange} placeholder="Make" required className="w-full border px-3 py-2 rounded" />
                <input name="model" type='text' onChange={handleChange} placeholder="Model" required className="w-full border px-3 py-2 rounded" />
                <input name="year" onChange={handleChange} placeholder="Year" type="number" required className="w-full border px-3 py-2 rounded" />
                <input name="carType" type='text' onChange={handleChange} placeholder="Car Type" required className="w-full border px-3 py-2 rounded" />
                <input name="fuelType" onChange={handleChange} placeholder="Fuel Type" required className="w-full border px-3 py-2 rounded" />
                <input name="transmission" onChange={handleChange} placeholder="Transmission" required className="w-full border px-3 py-2 rounded" />
                <input name="seatingCapacity" onChange={handleChange} placeholder="Seating Capacity" type="number" required className="w-full border px-3 py-2 rounded" />
                <input name="pricePerDay" onChange={handleChange} placeholder="Price Per Day" type="number" required className="w-full border px-3 py-2 rounded" />
                <textarea name="description" onChange={handleChange} placeholder="Description" className="w-full border px-3 py-2 rounded" />
                <input name="location" type='text' onChange={handleChange} placeholder="Location" required className="w-full border px-3 py-2 rounded" />
                <input type="file" onChange={handleImageChange} required className="w-full border px-3 py-2 rounded" />
                <button disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded">
                    {loading ? 'Uploading...' : 'Add Car'}
                </button>
            </form>
        </div>
    );
};

export default AddCar;
