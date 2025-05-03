import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../services/userServices';
import { adminLogin } from '../../services/adminServices';
import { saveUser } from '../../redux/features/userSlice';
import { saveAdmin } from '../../redux/features/adminSlice';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const isAdmin = location.pathname.includes('/admin')

    const onSubmit = (e) => {
        e.preventDefault()
        const loginFunc = isAdmin ? adminLogin : userLogin;
        loginFunc(values)
            .then((res) => {
                toast.success("Login successful")
                if (isAdmin) {
                    console.log("Admin login response:", res.data.data);
                    dispatch(saveAdmin(res.data.data));
                    navigate("/admin");
                } else {
                    dispatch(saveUser(res.data.data));
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error(err?.response?.data?.message || "Login failed", {
                    position: "top-center"
                })
            })
    }

    return (
        <div className='p-10'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold whitespace-nowrap">{isAdmin ? 'Admin Login' : 'Login now!'}</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={onSubmit}>
                            <div className="form-control">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name='email' onChange={handleChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name='password' onChange={handleChange} />
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="form-control btn btn-neutral mt-4" >Login</button>
                            {!isAdmin && (
                                <div className='text-center'>
                                    Join us today!<Link to="/signup" className='text-blue-600 underline px-3'>Sign Up</Link>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login