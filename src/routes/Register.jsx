import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/Authprovider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios"; // ✅ add this

const Register = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [error, seterror] = useState(false)
    const [eye, seteye] = useState("")

    const { createUser, setUser, googleauth, updateuserprofile } = use(AuthContext)
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

                    // ✅ MongoDB তে user save
                    axios.post("https://frelacing.vercel.app/users", {
                        name: name,
                        email: email,
                        photoURL: photo
                    })
                        .then(res => {
                            console.log("User saved to database:", res.data)
                        })
                        .catch(err => {
                            console.error("Database save error:", err)
                        })

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
    const eyehandle = () => {
        seteye(!eye)
    }

    const handlegoogleauth = () => {
        googleauth()
            .then(result => {
                const user = result.user;
                setUser(user);

                // ✅ Google login user কে MongoDB তে save
                axios.post("https://frelacing.vercel.app/users", {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                })
                    .then(res => {
                        console.log("Google user saved to database:", res.data);
                    })
                    .catch(err => {
                        console.error("Database save error:", err);
                    });

                navigate(redirectPath, { replace: true });
            })
            .catch(err => {
                toast(<div>{err.message}</div>)
            })
    }


    return (
        <div className="py-16">
            <div data-aos="fade-up" className="card mx-auto my-16 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <title>Freelance MarketPlac-register</title>
                <div className="card-body ">
                    <h1 className="text-3xl text-center font-bold text-[#0046FF]">Register now!</h1>
                    <form onSubmit={handleregister} action="">
                        <fieldset className="fieldset">
                            <label className="label text-[14px]">Name</label>
                            <input type="text" name='name' className="input rounded-xl" placeholder="Name" required />
                            <label className="label text-[14px]">Photourl</label>
                            <input type="text" name='photourl' className="input rounded-xl" placeholder="Photourl" required />
                            <label className="label text-[14px]">Email</label>
                            <input type="email" name='email' className="input rounded-xl" placeholder="Email" required />
                            <label className="label text-[14px]">Password</label>
                            <div className='relative'>
                                <input type={eye ? "text" : "password"} name='password' className="input rounded-xl" placeholder="Password" required />
                                {error && <p data-aos="fade-up" className='mt-2 text-red-500 text-[12px]'>{error}</p>}
                                <div onClick={eyehandle} className='absolute top-3.5 right-7'>
                                    {eye ? <FaEye className="z-10" size={16}></FaEye> : <FaEyeSlash className="z-10" size={16}></FaEyeSlash>}
                                </div>
                            </div>

                            <button type='submit' className="btn btn-neutral rounded-xl mt-2 text-[16px] mb-1">Register</button>
                            <p className="text-center text-[16px]">or</p>
                            <button onClick={handlegoogleauth} type="button" className="flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-xl shadow hover:bg-gray-100 hover:shadow-md transition-all duration-300">
                                <FcGoogle className="text-2xl" />
                                <span className='text-[15px]'> Login with Google</span>
                            </button>

                        </fieldset>
                        <h3 className='font-semibold text-[16px] text-gray-600 mt-2'>already have an account? <Link to="/login" className='underline text-blue-600'>Login</Link> </h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
