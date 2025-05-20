import React, { useEffect, useState } from 'react'
import { deleteUserById, fetchUsers } from '../../services/adminServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WheelSpinner from '../shared/WheelSpinner';


function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers()
            .then((res) => {
                setUsers(res.data);
                setLoading(false);

            })
            .catch((err) => {
                setError(err.response?.data?.message || 'Failed to fetch users list');
                toast.error(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            deleteUserById(id)
                .then(() => {
                    toast.success('User deleted successfully');
                    setDealers(users.filter(user => user._id !== id));
                })
                .catch((err) => {
                    toast.error(err.response?.data?.message || 'Failed to delete user');
                });
        }
    };
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">User List</h1>
            <div className="overflow-x-auto">
                {loading ? (
                    <WheelSpinner />
                ) : (
                    <table className="table-auto w-full border-0">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Profile Picture</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Contact Number</th>
                                <th className="p-2">Manage User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td className="p-2"><img
                                        src={user.profilePicture || 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'}
                                        onError={(e) => e.target.src = 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png'}
                                        alt="Profile"
                                        className="object-cover w-24 h-16 mx-auto rounded"
                                    />
                                    </td>
                                    <td className="p-2 text-center">{user.name || 'N/A'}</td>
                                    <td className="p-2 text-center">{user.email || 'N/A'}</td>
                                    <td className="p-2 text-center">{user.mobileNumber}</td>
                                    <td className="p-2 text-center">
                                        <button onClick={() => handleDelete(user._id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>)
}

export default UserList