import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addcar } from '../../services/dealerServices';
import WheelSpinner from '../../components/shared/WheelSpinner';

const AddCar = () => {
    const navigate = useNavigate();

    const carMakes = ['Toyota', 'BMW', 'Mercedes Benz', 'Audi', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai'];
    const years = Array.from({ length: 2025 - 2018 + 1 }, (_, i) => 2018 + i);
    const carTypes = ['sedan', 'SUV', 'offroad', 'luxury'];
    const fuelTypes = ['petrol', 'diesel', 'electric', 'hybrid'];
    const transmissions = ['manual', 'automatic'];
    const locations = ['Doha', 'Wakrah', 'Al Wukair', 'Ain Khaled', 'Mesaeidd', 'Al Sadd', 'Al Thumama'];

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
        description: '',
        location: '',
        isAvailable: true,
    });

    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
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
            navigate('/dealer/carlist');
        } catch (err) {
            toast.error(err?.response?.data?.message || 'Car adding failed', {
                position: 'top-center',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
            {loading ? (
                <WheelSpinner />
            ) : (
                <>
                    <h2 className="text-2xl font-bold mb-6">Add New Car</h2>
                    {error && <p className="text-red-500">{error}</p>}
                    <form className="space-y-4" onSubmit={onSubmit}>
                        <input
                            name="title"
                            type="text"
                            value={values.title}
                            onChange={handleChange}
                            placeholder="Car Title"
                            required
                            className="w-full border px-3 py-2 rounded"
                        />

                        <select
                            name="make"
                            value={values.make}
                            onChange={handleChange}
                            required
                            className="w-full py-2 px-4 border bg-white rounded text-black"
                        >
                            <option value="" disabled>Choose a make</option>
                            {carMakes.map((make, index) => (
                                <option key={index} value={make}>{make}</option>
                            ))}
                        </select>

                        <input
                            name="model"
                            type="text"
                            value={values.model}
                            onChange={handleChange}
                            placeholder="Model"
                            required
                            className="w-full border px-3 py-2 rounded"
                        />

                        <select
                            name="year"
                            value={values.year}
                            onChange={handleChange}
                            required
                            className="w-full py-2 px-4 border bg-white rounded text-black"
                        >
                            <option value="" disabled>Choose year</option>
                            {years.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))}
                        </select>

                        <select
                            name="carType"
                            value={values.carType}
                            onChange={handleChange}
                            required
                            className="w-full py-2 px-4 border bg-white rounded text-black"
                        >
                            <option value="" disabled>Choose a Car Type</option>
                            {carTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>

                        <select
                            name="fuelType"
                            value={values.fuelType}
                            onChange={handleChange}
                            required
                            className="w-full py-2 px-4 border bg-white rounded text-black"
                        >
                            <option value="" disabled>Choose a fuel type</option>
                            {fuelTypes.map((fuel, index) => (
                                <option key={index} value={fuel}>{fuel}</option>
                            ))}
                        </select>

                        <select
                            name="transmission"
                            value={values.transmission}
                            onChange={handleChange}
                            required
                            className="w-full py-2 px-4 border bg-white rounded text-black"
                        >
                            <option value="" disabled>Choose a transmission</option>
                            {transmissions.map((t, index) => (
                                <option key={index} value={t}>{t}</option>
                            ))}
                        </select>

                        <input
                            name="seatingCapacity"
                            type="number"
                            value={values.seatingCapacity}
                            onChange={handleChange}
                            placeholder="Seating Capacity"
                            required
                            className="w-full border px-3 py-2 rounded"
                        />

                        <input
                            name="pricePerDay"
                            type="number"
                            value={values.pricePerDay}
                            onChange={handleChange}
                            placeholder="Price Per Day"
                            required
                            className="w-full border px-3 py-2 rounded"
                        />

                        <textarea
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            placeholder="Description"
                            className="w-full border px-3 py-2 rounded"
                        />

                        <select
                            name="location"
                            value={values.location}
                            onChange={handleChange}
                            required
                            className="w-full py-2 px-4 border bg-white rounded text-black"
                        >
                            <option value="" disabled>Choose a location</option>
                            {locations.map((loc, index) => (
                                <option key={index} value={loc}>{loc}</option>
                            ))}
                        </select>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                            className="w-full border px-3 py-2 rounded"
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded"
                        >
                            {loading ? 'Uploading...' : 'Add Car'}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default AddCar;
