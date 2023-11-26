import React from 'react';
import { NavLink } from 'react-router-dom';

const DashNavBar = () => {
    return (
        <div>
            <div className=' bg-gray-600 gap-6 font-semibold text-xl sm:w-72 p-12 lg:w- h-screen px-2  text-white'>

                <div className=''>
                    <NavLink to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-indigo-700" : ""
                        }
                    >Home</NavLink>
                </div>
                <hr />
                <div className=''>
                    <NavLink to='/addservice'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-indigo-700" : ""
                        }
                    >Add Service</NavLink>
                </div>
                <hr />
                <div>

                    <NavLink to='/manageservice'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-indigo-700" : ""
                        }
                    >Manage Service</NavLink>

                </div>
                <hr />
                <div>

                    <NavLink to='/mybook'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-indigo-700" : ""
                        }
                    >MY MySchedules</NavLink>

                </div>


            </div>

        </div>
    );
};

export default DashNavBar;