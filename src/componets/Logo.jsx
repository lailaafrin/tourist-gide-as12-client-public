import React from 'react';
import image from '../assets/Travel.png'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to='/'>
            <img
                // className='hidden md:block w-full h-full'
                className='h-12 w-12'
                src={image}
                alt="logo"
                
               
            />


        </Link>
    );
};

export default Logo;