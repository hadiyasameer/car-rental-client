import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { userSignUp } from '../../services/userServices'
import { dealerSignUp } from '../../services/dealerServices';
import { toast } from 'react-toastify';

function SignUp() {

    const location = useLocation();
    const isDealer = location.pathname.includes('/dealer');
    const role = isDealer ? 'dealer' : 'user';

    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''

    })
    const signUpFunction = role === 'dealer' ? dealerSignUp : userSignUp;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault()
        signUpFunction(values).then((res) => {
            toast.success(`${role === 'dealer' ? 'Dealer' : 'User'} signup successful`);
            navigate(role === 'dealer' ? '/dealer/login' : '/login');
        }).catch((err) => {
            toast.error(err?.response?.data?.message || "Signup failed", {
                position: "top-center"
            });
        });
    }
    return (
        <div className='p-5'>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-auto ">
                        <h1 className="text-5xl font-bold whitespace-nowrap">
                            {role === 'dealer' ? 'Register as a Dealer!' : 'Sign Up now!'}
                        </h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={onSubmit}>
                            <div className="form-control">
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" name='name' onChange={handleChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" onChange={handleChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">Mobile Number</label>
                                <input type="tel" className="input" name='mobileNumber' placeholder="Mobile Number" autoComplete="tel" onChange={handleChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">Password</label>
                                <input type="password" className="input" name='password' autoComplete="new-password" placeholder="Password" onChange={handleChange} />
                            </div>
                            <div className="form-control">
                                <label className="label">Confirm Password</label>
                                <input type="password" className="input" name='confirmPassword' autoComplete="new-password" placeholder="Confirm Password" onChange={handleChange} />
                            </div>

                            <button className="form-control btn btn-neutral mt-4" >Sign Up</button>
                            <div className='text-center'>
                                Already a member?
                                <Link to={role === 'dealer' ? "/dealer/login" : "/login"} className='text-blue-600 underline px-3'></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp