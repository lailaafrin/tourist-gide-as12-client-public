import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Buttion from '../../../componets/Buttons/Buttion';
import { useAuth } from '../../../hooks/useAuth';

import TableRowData from '../../../componets/TableRowData';
import PayModal from '../../../componets/Modal/PayModal';
import axiosSecure from '../../../api';



const MyBokings = () => {
    const { user } = useAuth();
    console.log(user.email)
    const [ isOpen, setIsOpen ] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };

    const [ books, setBooks ] = useState([])

    const [ loading, setLoading ] = useState(true);


    useEffect(() => {
        if (user) {
            axiosSecure.get(`/booking/?email=${ user.email }`)
                .then(res => {
                    setBooks(res.data.filter(booking => booking.email === user.email));
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching bookings:", error);
                    setLoading(false);
                });
        }
    }, [ user ]);
    
    

    return (
        
        <>
            <Helmet>MyBooking</Helmet>

            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <h1>{books.length} Bookings</h1>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="w-full leading-normal ">
                                <thead className='bg-green-400 py-2 text-purple-700'>
                                    <tr>

                                        <th>Image</th>
                                        <th>Name</th>
                                        <th></th>
                                        <th>Price</th>
                                        <th></th>
                                        <th>Date</th>
                                        <th>Button</th>
                                        <th>Button</th>
                                    </tr>
                                </thead>
                                <tbody className="space-y-24">
                                    {books.map((booking) => (
                                        <TableRowData key={booking._id} booking={booking}
                                            setBooks={setBooks}
                                        />
                                     
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default MyBokings;



