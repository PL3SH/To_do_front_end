export function CardRegister () {
    return (
        <div className=" flex items-center justify-center   p-4">
            
            <form className="relative border-black border-1 border-dotted w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-6  hover:border-white/40 transition-colors duration-300">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 ">Your favorite To-do list</h2>
                    <p className="text-gray-500 text-sm mt-2">Please Create an account</p>
                </div>

                <div className="space-y-2">
                    <label className="text-gray-700 text-sm font-medium pl-1" htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
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
                        name="password-confirmation"
                        id="password-confirmation"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                        placeholder="Password confirmation"
                    />
                </div>


                <button
                    type="submit"
                    className="  w-full bg-radial from-orange-400 via-orange-500 to-orange-600 text-white font-medium py-3  px-4 rounded-xl hover:opacity-90 hover:scale-105 transform transition-all duration-200 hover: shadow-md">
                    Sign In
                </button>
            </form>
            </div>
    )
}