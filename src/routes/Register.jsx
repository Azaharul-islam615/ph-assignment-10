import React from "react";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  bg-[#0D1B3E] from-indigo-50 to-blue-100 px-4">
            <div className="max-w-md my-6 w-full bg-white p-10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8 ">
                    Create Account
                </h2>

                <form className="space-y-1 ">
                 
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                  
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="photo">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photo"
                            placeholder="PhotoURL"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                   
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Create a password"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="#" className="text-indigo-600 font-medium hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
