import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import img from"../assets/web.webp"
import { AuthContext } from '../Context/Authprovider';
import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';

const Nav = () => {
    const { user, logout,setToggle,toggle } = use(AuthContext);
    const [openProfile, setOpenProfile] = useState(false);
    const handletoggle=()=>{
        setToggle(!toggle)
    }
    const handlelogout = () => {
        logout()
            .then(() => {
                setOpenProfile(false);
                toast(
                    <div className="flex items-center gap-2">
                        <FaCheckCircle size={20} color="blue" />
                        Logout successfully!
                    </div>
                );
            })
            .catch((err) => {
                toast(<div>{err.message}</div>);
            });
    };
    const links=<>
        <NavLink to="/" className="all hover:text-pink-600  mr-4 font-semibold text-[#CBCBCB]">Home</NavLink>
        <NavLink to='/allapps' className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">AllJobs</NavLink>
        <NavLink to="/acceptedtask" className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]"> AcceptedTasks</NavLink>
        <NavLink to='/contact' className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">Contact</NavLink>
        <NavLink to='/aboutus' className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">AboutUs</NavLink>
       
       
        {
            user && <>
                <NavLink to="/myjob" className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">AddedJobs</NavLink>
                <NavLink to="/addjob" className="all hover:text-pink-600  mr-4 font-semibold text-[#CBCBCB]">AddJob</NavLink>
               
            </>
        }
       
       
    </>
    return (
        <div  className="navbar fixed top-0 z-10  shadow-sm bg-[#11224E] text-white">
            <div className="navbar-start">
                <div className="dropdown relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu  absolute top-6 z-40 right-[-150px] text-[8px] menu-sm dropdown-content bg-black rounded-box mt-3 w-52 p-2 shadow "
                    >
                        {links}
                    </ul>
                </div>
                <div className='flex gap-0 items-center'>
                    <img className=' w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full' src={img} alt="" />
                    <a className="btn btn-ghost text-[11px] md:text-xl">Freelance <span className='text-[#8C00FF]'>MarketPlace</span> </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu  menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
                <input onClick={handletoggle} type="checkbox" defaultChecked className="toggle toggle-primary mr-3" />
                
                {user ? (
                    <button
                        onClick={handlelogout}
                        className="btn hidden md:block text-[10px] md:text-[16px] bg-[#0C2B4E] text-white hover:bg-[#8CE4FF] hover:text-black"
                    >
                        Logout
                    </button>
                ) : <>
                        <Link to="/login" className="btn rounded-lg text-[10px] md:text-[16px] bg-[#0C2B4E] text-white hover:bg-blue-600 mr-2 hover:text-white">Login</Link>
                        <Link to="/register" className="btn rounded-lg text-[10px] md:text-[16px] bg-[#0C2B4E] text-white hover:bg-blue-600 hover:text-white">Register</Link>
                    </>}
                {user && (
                    <div className="relative ml-1">
                        {/* Profile Image */}
                        <div
                            onClick={() => setOpenProfile(!openProfile)}
                            className="rounded-full overflow-hidden w-12 h-12 cursor-pointer border-2 border-indigo-500"
                        >
                            <img
                                src={user.photoURL}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Dropdown */}
                        {openProfile && (
                            <div className="absolute right-0 mt-2 w-44 bg-[#050E3C] text-white rounded-lg shadow-lg z-50 p-3">
                                <p className="font-semibold border-b border-gray-600 pb-1">
                                    {user.displayName}
                                </p>

                                <Link
                                    to="/dashboard"
                                    className="block mt-2 hover:text-blue-400"
                                    onClick={() => setOpenProfile(false)}
                                >
                                    Dashboard
                                </Link>

                                <button
                                    onClick={handlelogout}
                                    className="mt-2 w-full text-left hover:text-red-400"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                )}
               
                
            </div>
        </div>
    );
};

export default Nav;