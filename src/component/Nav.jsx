import React from 'react';
import { NavLink } from 'react-router';
import img from"../assets/web.webp"

const Nav = () => {
    const links=<>
        <NavLink to="/" className="all hover:text-pink-600  mr-4 font-semibold text-[#CBCBCB]">Home</NavLink>
        <NavLink to='/allapps' className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">All Jobs</NavLink>
        <NavLink className="all hover:text-pink-600  mr-4 font-semibold text-[#CBCBCB]">Add a Job</NavLink>
        <NavLink className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">My Accepted
            Tasks</NavLink>
        <NavLink to="/login" className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">Login</NavLink>
        <NavLink to="/register" className="all hover:text-pink-600 mr-4 font-semibold text-[#CBCBCB]">Register</NavLink>
    </>
    return (
        <div className="navbar sticky top-0 shadow-sm bg-[#11224E] text-white">
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
                <a className="btn md:text-[16px] bg-[#0C2B4E] text-white hover:bg-[#8CE4FF] hover:text-black">Login</a>
            </div>
        </div>
    );
};

export default Nav;