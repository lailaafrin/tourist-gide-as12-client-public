import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteBer from '../../componets/SiteBer';

const DashBorad = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            {/* Sidebar Component */}

            <SiteBer></SiteBer>
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>{/* Outlet for dynamic contents */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBorad;