import React, { use } from 'react';
import { Outlet } from 'react-router';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import { AuthContext } from '../Context/Authprovider';

const Homelayout = () => {
    const{toggle}=use(AuthContext)
    return (
        <div className={`poppins ${toggle ? "bg-white text-black" :" bg-[#0D1B3E]"}`}>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;