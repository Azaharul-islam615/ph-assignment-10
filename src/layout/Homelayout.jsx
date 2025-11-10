import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../component/Nav';
import Footer from '../component/Footer';

const Homelayout = () => {
    return (
        <div className='poppins'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;