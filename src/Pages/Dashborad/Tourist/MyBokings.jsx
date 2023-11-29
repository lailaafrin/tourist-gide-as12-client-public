import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Buttion from '../../../componets/Buttons/Buttion';
import { useAuth } from '../../../hooks/useAuth';

import TableRowData from '../../../componets/TableRowData';
import PayModal from '../../../componets/Modal/PayModal';
import axiosSecure from '../../../api';



const MyBokings = () => {
    const { user } = useAuth();
    const [ isOpen, setIsOpen ] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };

    const [ books, setBooks ] = useState([])
    const [ loading, setLoading ] = useState(true);


    useEffect(() => {
        axiosSecure.get(`/booking?email=${ user.email }`)
            .then(res => {
                setBooks(res.data);
                
                setLoading(false); 
            });
    }, [user]);

    

    return (
        <div>
            <>
            <Helmet>MyBooking</Helmet>

                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8">
                        <h1>{books.length} Bookings</h1>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            {/* ... (Header cells) */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {books.map((booking) => (
                                            <TableRowData key={booking._id} booking={booking} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
              
            </>
        </div>
    );
};

export default MyBokings;