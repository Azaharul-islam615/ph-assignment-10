import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/Authprovider";

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [error, seterror] = useState(false)
    const { createUser, setUser, updateuserprofile, googleauth } = use(AuthContext)
    const redirectPath = location.state?.from || '/';
    const handleregister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photourl.value
        seterror("")
        const checkpassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (!checkpassword.test(password)) {
            if (password.length < 6) {

                seterror(" Password must be at least 6 characters long.");
                return
            } else if (!/[A-Z]/.test(password)) {
                seterror(" Password must contain at least one uppercase letter.");
                return
            } else if (!/[a-z]/.test(password)) {
                seterror(" Password must contain at least one lowercase letter.");
                return
            } else {
                seterror(" Invalid password format.");

            }
            return seterror("")
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                updateuserprofile({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                    navigate(redirectPath, { replace: true });
                }).catch(err => {
                    toast(<div>{err.message}</div>)
                })

                e.target.reset()
            })
            .catch(err => {
                seterror(err.message)
                toast(<div>{err.message}</div>)
            })

    }
    return (
        <div className="min-h-screen flex items-center justify-center  bg-[#0D1B3E] from-indigo-50 to-blue-100 px-4">
            <div className="max-w-md my-6 w-full bg-white p-10 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8 ">
                    Create Account
                </h2>

                <form onSubmit={handleregister} className="space-y-1 ">

                    <div>
                        <label className="block text-gray-700 mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            name="name"
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
                            name="email"
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
                            name="photourl"
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
                            name="password"
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
                    <Link className="text-indigo-600 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
