import React, { useState } from 'react';
import axiosSecure from '../api';
import Swal from 'sweetalert2';
import { format } from 'date-fns';


const TableRowData = ({ booking, setBooks,books }) => {
    
    console.log(booking)

    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isAccepted, setIsAccepted ] = useState(false); 
    const [ isPaymentEnabled, setIsPaymentEnabled ] = useState(false);
    const [ isCancelEnabled, setIsCancelEnabled ] = useState(false);

    const handlDelete = (_id) => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
                axiosSecure.delete(`/booking/${ _id }` )
                   
                    .then(data => {
                        console.log(data)
                        if (data.status==200 ) {
                            Swal.fire(
                                'Deleted!',
                                'Your package has been deleted.',
                                'success'
                            )
                            const remainingBookings = books?.filter(item => item._id != _id);
                            console.log(remainingBookings)
                           setBooks(remainingBookings)
                        }

                    })
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAccept = () => {
        // Implement logic for accepting booking
        // You can perform additional actions here
        setIsAccepted(true); // Set isAccepted to true after accepting the booking
        setIsPaymentEnabled(true); // Enable payment after accepting the booking
        handleCloseModal(); // Close the modal after handling the action
    };

    const handleReject = () => {
        // Implement logic for rejecting booking
        // You can perform additional actions here
        setIsCancelEnabled(true); // Enable cancel after rejecting the booking
        handleCloseModal(); // Close the modal after handling the action
    };

    const handleInReviewClick = () => {
        handleOpenModal();
    };

   
        
    
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={booking.imageData.data.
                                    display_url} // Assuming book has an imageUrl property
                                className='mx-auto object-cover rounded-full h-10 w-10'
                            />
                            {/* <p>{booking.
                                selectOption}</p> */}
                            
                        </div>
                    </div>
                    <div className='ml-3'>
                      
                        

                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{booking.guide}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {/* Display other properties of the book object as needed */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${booking.price}</p>
            </td>
            {/* Add similar code for other columns based on your data model */}
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               
                {format(new Date(booking.from), 'dd-MM-yyyy')} : 
                {format(new Date(booking.to), 'dd-MM-yyyy')}
                
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={handleInReviewClick}
                    className='relative bg-orange-200 rounded-full px-2 py-1 '>InReview</button>
            </td>

            <td className=' py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={() => handlDelete(booking?._id)}
                    className='relative'
                    disabled={!isCancelEnabled} // Disable the button if cancel is not enabled
                >
                    Cancel
                </button>
            </td>
            
           
            
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={handleInReviewClick}
                    className={`relative bg-${ isPaymentEnabled ? 'green' : 'gray' }-400 rounded-full px-3 py-1`}
                    disabled={!isPaymentEnabled} // Disable the button if payment is not enabled
                >
                    Pay
                </button>
            </td>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content gap-4 bg-slate-200 ">
                        <p className='text-2xl mb-5'>Do you want to accept or reject this booking?</p>
                        <button className='bg-green-400 mx-5 rounded-lg px-2' onClick={handleAccept}>Accept</button>
                        <button className='bg-red-400 mx-5 rounded-lg px-2' onClick={handleReject}>Reject</button>
                        <button className='bg-red-400  rounded-lg px-2' onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </tr>
    );
};

export default TableRowData;
