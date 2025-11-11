import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import img from"../assets/web.webp"
import { AuthContext } from '../Context/Authprovider';
import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';

const Nav = () => {
    const { user, logout } = use(AuthContext);
    const handlelogout = () => {
        logout()
            .then(() => {
                toast(
                    <div className="flex items-center gap-2">
                        <FaCheckCircle size={20} color="green" />
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
        <NavLink to='/allapps' className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">All Jobs</NavLink>
        <NavLink to="/addjob" className="all hover:text-pink-600  mr-4 font-semibold text-[#CBCBCB]">Add a Job</NavLink>
        <NavLink to="/acceptedtask" className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">My Accepted
            Tasks</NavLink>
        <NavLink to="/login" className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">Login</NavLink>
        <NavLink to="/register" className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">Register</NavLink>
    </>
    return (
        <div className="navbar  shadow-sm bg-[#11224E] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <div className='flex gap-0 items-center'>
                    <img className='w-[50px] h-[50px] rounded-full' src={img} alt="" />
                    <a className="btn btn-ghost md:text-xl">Freelance <span className='text-[#8C00FF]'>MarketPlace</span> </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user && (
                    <div className="relative inline-block group mr-2">
                        <img
                            className="w-10 h-10 rounded-full"
                            src={user.photoURL}
                            alt={user.displayName}
                        />
                        <span className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 text-[10px] text-gray-800 hidden group-hover:block bg-white rounded px-1 shadow">
                            {user.displayName}
                        </span>
                    </div>
                )}
                {user ? (
                    <button
                        onClick={handlelogout}
                        className="btn md:text-[16px] bg-[#0C2B4E] text-white hover:bg-[#8CE4FF] hover:text-black"
                    >
                        Logout
                    </button>
                ) : (
                        <Link to="/login" className="btn md:text-[16px] bg-[#0C2B4E] text-white hover:bg-[#8CE4FF] hover:text-black">Login</Link>
                )}
                
            </div>
        </div>
    );
};

export default Nav;