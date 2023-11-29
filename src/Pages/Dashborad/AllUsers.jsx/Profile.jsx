import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const { user } = useAuth();
    const [ role ] = useRole();
    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>Profile</title>
            </Helmet>

            <div className='bg-white shadow-lg rounded-2xl w-3/5' >
                <img
                className='w-full mb-4 rounded-t-lg h-36'
                    src="" alt="profile" />
                <div className='flex flex-col item-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img src={user.photoURL} alt="profile"
                        className='mx-auto object-cover rounded-full h-24 w-24 border-2 border-white'
                        />
                    </a>
                    <p className='p-2 px-4 text-xs text-white bg-sky-400 rounded-full'>{role && role.toUpperCase()}

                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800'>
                        user Id:{user.uid}
                    </p>
                    <p className='flex flex-col'>
                        Email
                        <span className='font-bold text-black'>{user.email}</span>
                    </p>
                    <div className=''>
                        <button className='bg-blue-400 px-10 py-1 rounded-lg text-white'> Update Profile</button>
                        <button className='bg-blue-400 px-10  ml-10 py-1 rounded-lg text-white'>Change Password</button>
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
};

export default Profile;