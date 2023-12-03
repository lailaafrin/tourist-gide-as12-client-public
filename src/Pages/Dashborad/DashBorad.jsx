import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteBer from '../../componets/SiteBer';
import Rechart from '../../Sheard/Rechart';
import DateRang from '../../Sheard/DateRang';

const DashBorad = () => {
    return (
        <div className='relative min-h-screen md:flex'>
            {/* Sidebar Component */}

            <SiteBer></SiteBer>
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>{/* Outlet for dynamic contents */}
                    <Outlet></Outlet>

                    <div className=''>
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
                        <div className=' mt-20 ml-12 gap-8 w-72 flex'>
                            
                            <div>
                                <Rechart></Rechart>
                            </div>
                            <div className='ml-80'>
                                <DateRang></DateRang>
                            </div>
                           
                        </div>
                       
                   </div>
                </div>
            </div>
        </div>
    );
};

export default DashBorad;