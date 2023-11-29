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

                    <div className=' flex  items-center gap-4 '>
                        <div className='bg-purple-500 w-60 h-36  '>
                            < p className='text-center mt-12 text-white font-bold text-3xl'>
                                Total package
                            </p>
                        </div>
                        <div className='bg-orange-500 w-60 h-36'>

                        </div>
                        <div className='bg-pink-500 w-60 h-36'>

                        </div>
                        <div className='bg-lime-500 w-60 h-36'>

                        </div>
                      
                   </div>
                </div>
            </div>
        </div>
    );
};

export default DashBorad;