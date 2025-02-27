// frontend/src/components/Auth/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/authSlice'; 
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                email,
                password,
            });
   
     dispatch(registerUser({ user: { email }, token: response.data.token }));
     alert('Registration successful! Please log in.');
            navigate('/login'); 
        } catch (err) {
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"> 
                <h1 className="text-3xl font-bold text-center mb-6">Register</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="border rounded p-2 w-full mb-4" 
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="border rounded p-2 w-full mb-4" 
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Register</button>
                    {error && <p className="text-red-500 text-center mt-4">{error}</p>} 
                </form>
                <p className="text-center mt-4">
                    Already registered? <a href="/login" className="text-blue-500">Log in here</a> {/* Link to login page */}
                </p>
            </div>
        </div>
    );
};

export default Register;