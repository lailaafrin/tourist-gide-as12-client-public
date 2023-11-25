import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Sheard/Footer';
import Navbar from '../Sheard/Navbar/Navbar';

const MyLayouts = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('/login') ||location.pathname.includes('/singup');
    return (
        <div>
            {
                noHeaderFooter || <Navbar></Navbar>
            }
            
            <div className='pt-24  min -h-[calc(100vh-60)]'>
                <Outlet></Outlet>
                </div>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default MyLayouts;