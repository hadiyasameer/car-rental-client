import React, { useEffect, useState } from 'react'
import { deleteDealerById, fetchDealers } from '../../services/adminServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DealerList() {
    const [dealers, setDealers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDealers()
            .then((res) => {
                setDealers(res.data);
                setLoading(false);

            })
            .catch((err) => {
                setError(err.response?.data?.message || 'Failed to fetch dealers list');
                toast.error(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this dealer?')) {
            deleteDealerById(id)
                .then(() => {
                    toast.success('Dealer deleted successfully');
                    setDealers(dealers.filter(dealer => dealer._id !== id));
                })
                .catch((err) => {
                    toast.error(err.response?.data?.message || 'Failed to delete dealer');
                });
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Dealer List</h1>
            <div className="overflow-x-auto">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="table-auto w-full border-0">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Profile Picture</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Contact Number</th>
                                <th className="p-2">Manage Dealer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dealers.map((dealer) => (
                                <tr key={dealer._id}>
                                    <td className="p-2"><img
                                        src={dealer.profilePicture || 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'}
                                        onError={(e) => e.target.src = 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'}
                                        alt="Profile"
                                        className="object-cover w-24 h-16 mx-auto rounded"
                                    />
                                    </td>
                                    <td className="p-2 text-center">{dealer.name || 'N/A'}</td>
                                    <td className="p-2 text-center">{dealer.email || 'N/A'}</td>
                                    <td className="p-2 text-center">{dealer.mobileNumber}</td>
                                    <td className="p-2 text-center">
                                        <button onClick={() => handleDelete(dealer._id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div >)
}

export default DealerList