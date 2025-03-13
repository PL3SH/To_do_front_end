import { useState } from 'react'
import {registerUser} from '../services/authService.js';
import { useNavigate } from 'react-router-dom';

export function CardRegister () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const navigate = useNavigate();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const user = await registerUser({ email, password, password_confirmation });
            if (user) {
                navigate('/');
            }
        } catch (error) {
            
            alert("No ha sido posible crear el usuario");
           
        }
    }; 
    return (
        <div className="flex items-center justify-center p-4 relative min-h-screen overflow-hidden  ">
           
            
            <form onSubmit={handleRegister} className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6 hover:border-white/40 transition-colors duration-300">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 ">Your favorite To-do list</h2>
                    <p className="text-gray-500 text-sm mt-2">Please Create an account</p>
                </div>

                <div className="space-y-2 ">
                    <label className="text-gray-700 text-sm font-medium pl-1" htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                        placeholder="Enter your email"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-gray-700 text-sm font-medium pl-1" htmlFor="password">
                        Password
                    </label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                        placeholder="Enter your password"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-gray-700 text-sm font-medium pl-1" htmlFor="password">
                        Password confirmation
                    </label>
                    <input 
                        type="password"
                        name="password_confirmation"
                        id="password-confirmation"
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                        placeholder="Password confirmation"
                    />
                </div>


                <button
                    type="submit"
                    className="  w-full bg-radial from-orange-400 via-orange-500 to-orange-600 text-white font-medium py-3  px-4 rounded-xl hover:opacity-90 hover:scale-105 transform transition-all duration-200 hover: shadow-md">
                    Sign up
                </button>

                <p className="text-center text-orange-600 text-sm">
                    Do you have an account? 
                    <a href="/" className=" hover:scale-105 font-medium ml-2">Sign in</a>
                </p>
            </form>
        </div>
    )
}