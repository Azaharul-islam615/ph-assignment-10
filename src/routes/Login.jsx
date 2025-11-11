import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center bg-[#0D1B3E] from-blue-50 to-indigo-100 px-4">
            <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
                    Login Form
                </h2>

                <form className="space-y-1  ">
                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="text-right">
                        <a href="#" className="text-sm text-indigo-500 hover:underline">
                            Forget Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-gray-500">
                    <span>Or login with</span>
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 transition py-3 rounded-lg font-medium">
                    <FcGoogle size={24} />
                    Login with Google
                </button>

                <p className="mt-6 text-center text-gray-600">
                    Don't have an account?{" "}
                    <a href="#" className="text-indigo-600 font-medium hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
