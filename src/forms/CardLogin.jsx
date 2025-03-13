import { useState } from 'react'
import { loginUser } from '../services/authService';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export function CardLogin () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useAuth();
    const navigate = useNavigate();
      
   const handleLogin = async (e) => {
        e.preventDefault();
        const password_confirmation = password;
        try {
            const userData = {
                user: {
                    email,
                    password,
                    password_confirmation
                }
            };
            console.log('Sending login request with:', userData);  // Debug log 1
            const user = await loginUser(userData);
            console.log('Response from loginUser:', user);  // Debug log 2

            if (user) {
                console.log('User exists, attempting to set user and navigate');  // Debug log 3
                setUser(user);
                navigate('/home');
            } else {
                console.log('User is null or undefined');  // Debug log 4
            }
        } catch (error) {
            console.error('Login error:', error);  // Better error logging
            alert('Credenciales incorrectas');
        }
    }; 
    return (
        <div className=" flex items-center justify-center  p-4">
            {/* Background Elements */}
            
            
            <form onSubmit={handleLogin} className="relative w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20 hover:border-white/40 transition-colors duration-300">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 ">Your favorite To-do list</h2>
                    <p className="text-gray-500 text-sm mt-2">Please Sign in to continue</p>
                </div>

                <div className="space-y-2">
                    <label className="text-gray-700 text-sm font-medium pl-1" htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
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
                        autoComplete="current-password"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                        placeholder="Enter your password"
                    />
                </div>

                

                <button
                    type="submit"
                    className="w-full bg-radial from-orange-400 via-orange-500 to-orange-600 text-white font-medium py-3 px-4 rounded-xl hover:opacity-90 hover:scale-105 transform transition-all duration-200 hover: shadow-md">
                    Sign In
                </button>

                <p className="text-center text-orange-600 text-sm">
                    Don't have an account? 
                    <a href="/register" className=" hover:scale-105 font-medium ml-2">Sign up</a>
                </p>
            </form>
        </div>
    )
}