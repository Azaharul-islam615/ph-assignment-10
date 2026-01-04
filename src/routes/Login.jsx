import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/Authprovider";
import { toast } from "react-toastify";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Login = () => {
    const { login, googleauth, setUser, setUpdatepasswordemail } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [eye, setEye] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const showpassword = () => setEye(!eye);

    // ================= NORMAL LOGIN =================
    const handlelogin = (e) => {
        e.preventDefault();

        const checkpassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!checkpassword.test(password)) {
            if (password.length < 6) {
                return setError("Password must be at least 6 characters long.");
            }
            if (!/[A-Z]/.test(password)) {
                return setError("Password must contain at least one uppercase letter.");
            }
            if (!/[a-z]/.test(password)) {
                return setError("Password must contain at least one lowercase letter.");
            }
        }

        login(email, password)
            .then(() => {
                setError("");
                toast(
                    <div className="flex items-center gap-2">
                        <FaCheckCircle color="green" /> Login successful
                    </div>
                );
                navigate(location.state?.from || "/");
            })
            .catch(err => {
                toast(err.message);
            });
    };

    // ================= GOOGLE LOGIN =================
    // ================= GOOGLE LOGIN =================
    const handlegoogleauth = () => {
        setError("");
        googleauth()
            .then(result => {
                const user = result.user;
                setUser(user);

                // ✅ Google login user কে MongoDB তে save করা
                axios.post("https://frelacing.vercel.app/users", {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                })
                    .then(res => {
                        console.log("Google user saved to database:", res.data);
                        toast(
                            <div className="flex items-center gap-2">
                                <FaCheckCircle color="green" /> Login successful
                            </div>
                        );
                    })
                    .catch(err => {
                        console.error("Database save error:", err);
                        // Optional: তুমি চাইলে duplicate বা error handle করতে পারো
                    });

                navigate(location.state?.from || "/");
            })
            .catch(err => toast(err.message));
    };


    // ================= DEMO LOGIN =================
    const handleDemoLogin = (role) => {
        let demoEmail = "";
        let demoPassword = "";

        if (role === "user") {
            demoEmail = "demo@user.com";
            demoPassword = "User123";
        }

        if (role === "admin") {
            demoEmail = "admin@demo.com";
            demoPassword = "Admin1234";
        }

        setEmail(demoEmail);
        setPassword(demoPassword);

        login(demoEmail, demoPassword)
            .then(() => {
                toast(
                    <div className="flex items-center gap-2">
                        <FaCheckCircle color="green" /> Demo login successful
                    </div>
                );
                navigate(location.state?.from || "/");
            })
            .catch(err => toast(err.message));
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setUpdatepasswordemail(e.target.value);
    };

    return (
        <div className="py-16">
            <div className="card mx-auto mt-16 mb-16 bg-base-100 w-full max-w-sm shadow-2xl">
                <title>Freelance Marketplace - Login</title>

                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold text-[#0046FF]">
                        Login now!
                    </h1>

                    <form onSubmit={handlelogin}>
                        <fieldset className="fieldset">
                            <label className="label text-sm">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                className="input rounded-xl"
                                placeholder="Email"
                                required
                            />

                            <label className="label text-sm">Password</label>
                            <div className="relative">
                                <input
                                    type={eye ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input rounded-xl"
                                    placeholder="Password"
                                    required
                                />
                                <span
                                    onClick={showpassword}
                                    className="absolute top-3 right-5 cursor-pointer"
                                >
                                    {eye ? <FaEye size={16} className="z-10" /> : <FaEyeSlash size={16} className="z-10" />}
                                </span>
                            </div>

                            {error && <p className="text-red-500 mt-2">{error}</p>}

                            <div className="mt-1">
                                <Link className="link link-hover text-sm">
                                    Forgot password?
                                </Link>
                            </div>

                            <button className="btn btn-neutral rounded-xl mt-3">
                                Login
                            </button>
                        </fieldset>
                    </form>

                    <p className="text-center text-gray-600 mt-2">or</p>

                    {/* Google Login */}
                    <button
                        onClick={handlegoogleauth}
                        className="flex items-center justify-center gap-3 bg-white border border-gray-300 w-full py-2 rounded-xl hover:bg-gray-100 transition"
                    >
                        <FcGoogle className="text-2xl" />
                        <span>Login with Google</span>
                    </button>

                    {/* Demo Login Buttons */}
                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => handleDemoLogin("user")}
                            className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm"
                        >
                            Demo User
                        </button>

                        <button
                            onClick={() => handleDemoLogin("admin")}
                            className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl text-sm"
                        >
                            Demo Admin
                        </button>
                    </div>

                    <h3 className="text-sm text-gray-600 mt-3 text-center">
                        New here?{" "}
                        <Link
                            to="/register"
                            state={location.state}
                            className="underline text-blue-600"
                        >
                            Register
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Login;
