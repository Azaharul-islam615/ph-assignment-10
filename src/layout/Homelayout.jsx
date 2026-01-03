import React, { use } from 'react';
import { Outlet } from 'react-router';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import { AuthContext } from '../Context/Authprovider';

const Homelayout = () => {
    const{toggle}=use(AuthContext)
    return (
        <div className='bg-[#11224E] merriweather'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;