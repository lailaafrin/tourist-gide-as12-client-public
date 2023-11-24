import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container';
import MenuDropdown from './MenuDropdown';
import image from '../../assets/Travel.png'

const Navbar = () => {
    return (
        <div className='fixed w-full   bg-white  z-10 shadow-sm'>
            <div className='py-2  border-b-[1px]'>
                <Container>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
                        {/* Logo */}
                        <div className='flex items-center '>
                            <Link to='/'>
                                <img
                                    className='hidden md:block h-12'
                                    src={image}
                                    alt='logo'

                                />
                            </Link>
                            <h1 className='hidden md:block text-2xl font-semibold'>Tour-Guide</h1>
                       </div>

                        <div className='hidden md:block '>
                            <ul className=" items-center gap-6 flex ">
                                <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased ">
                                    <NavLink to='/' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-pink-500" : ""
                                    } >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
                
                                    <NavLink to='/community' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-pink-500" : ""
                                    } >
                                        Community
                                    </NavLink>
                                </li>
                                <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
                                    <NavLink to='/aboutUs' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-pink-500" : ""
                                    }>
                                        About US
                                       
                                    </NavLink>
                                </li>
                                <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
                                    <NavLink to='/contactUs' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-pink-500" : ""
                                    }>
                                        Contact US
                                    </NavLink>
                                </li>
                                <li className="block p-1 font-sans text-sm font-bold leading-normal text-inherit antialiased">
                                    <NavLink to='/blogs' className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-pink-500" : ""
                                    }>
                                        Blogs
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                        {/* Dropdown Menu */}
                        <MenuDropdown />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;