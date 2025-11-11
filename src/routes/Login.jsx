import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/Authprovider";
import { toast } from "react-toastify";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



const Login = () => {
    const { login, googleauth, setUser, setUpdatepasswordemail } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [eye, setEye] = useState("")
    console.log(location.state)
    const showpassword = () => {
        setEye(!eye)
    }

    const handlelogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const checkpassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (!checkpassword.test(password)) {
            if (password.length < 6) {
                setError(" Password must be at least 6 characters long.");
                return
            } else if (!/[A-Z]/.test(password)) {
                setError(" Password must contain at least one uppercase letter.");
                return
            } else if (!/[a-z]/.test(password)) {
                setError(" Password must contain at least one lowercase letter.");
                return
            } else {
                setError(" Invalid password format.");
            }
            return setError("")
        }




        login(email, password)
            .then(() => {
                setError("")
                navigate(`${location.state ? location.state.from : "/"}`)
                toast(<div className='flex items-center gap-2'><FaCheckCircle size={20} color='green'></FaCheckCircle> Login succesfully!</div>)
                e.target.reset()
            })
            .catch(err => {
                e.target.reset()

                toast(<div>{err.message}</div>)
            })


    }
    const handlegoogleauth = () => {
        setError("")
        googleauth()
            .then(result => {
                setUser(result.user)
                toast(<div className='flex items-center gap-2 '><FaCheckCircle size={16} color='green'></FaCheckCircle> Login Succesfilly</div>)

                navigate(`${location.state ? location.state.from : "/"}`)
            })
            .catch(err => {
                toast(<div>{err.message}</div>)

                setError(err.message)

            })

    }
    const handleEmail = (e) => {

        const email = e.target.value
        setUpdatepasswordemail(email)

    }

    return (
        <div data-aos="fade-up" className="z-0 card mx-auto my-26 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            
            <title>Freelance MarketPlac-Login</title>
            <div data-aos="fade-up" className="card-body ">
                <h1 data-aos="fade-up" className="text-3xl text-center font-bold text-[#0046FF]">Login now!</h1>
                <form data-aos="fade-up" onSubmit={handlelogin}>
                    <fieldset data-aos="fade-up" className="fieldset">
                        <label data-aos="fade-up" className="label text-[14px]">Email</label>
                        <input data-aos="fade-up" onChange={handleEmail} type="email" name='email' className="input  rounded-xl" placeholder="Email" />
                        <label data-aos="fade-up" className="label  text-[14px]">Password</label>
                        <div data-aos="fade-up" className='relative'>
                            <input data-aos="fade-up" type={eye ? "text" : "password"} name='password' className="input  rounded-xl" placeholder="Password" />
                            <div data-aos="fade-up" onClick={showpassword}>
                                {
                                    eye ? <FaEye size={16} className='absolute top-6 right-5 z-10'></FaEye> : <FaEyeSlash size={16} className='absolute top-3 right-5 z-10'></FaEyeSlash>
                                }
                            </div>
                        </div>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        <div data-aos="fade-up" className='mt-1'><Link  className="link link-hover  text-[14px] ">Forgot password?</Link></div>
                        <button type='submit' className="btn btn-neutral rounded-xl mt-2 text-[16px] mb-1">Login</button>

                    </fieldset>
                    <h3 data-aos="fade-up" className='font-semibold text-[16px] text-gray-600 mt-2'>New in our web site? <Link to="/register" state={location.state} className='underline text-blue-600'>Register</Link> </h3>
                </form>
                <button data-aos="fade-up" onClick={handlegoogleauth} className="flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-xl shadow hover:bg-gray-100 hover:shadow-md transition-all duration-300">
                    <FcGoogle className="text-2xl" />
                    <span className='text-[15px] '> Login with Google</span>
                </button>

            </div>
        </div>
    );
};

export default Login;