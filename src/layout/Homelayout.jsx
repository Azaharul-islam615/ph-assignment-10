import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../component/Nav';
import Footer from '../component/Footer';

const Homelayout = () => {
    return (
        <div className='poppins bg-[#0D1B3E]'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;