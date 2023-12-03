import React from 'react';
import axiosSecure from '../api';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
// import { format } from 'date-fns'

const TableRowData = ({ booking,setBooks}) => {

    const handlDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/booking/${ _id }` )
                   
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Service has been deleted.',
                                'success'
                            )
                            const remainingBookings = booking.filter(item => item._id !== _id);
                           setBooks(remainingBookings)
                        }

                     }) }
        })
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
                {/* <p className='text-gray-900 whitespace-no-wrap'>{format(new Date(booking.to), 'P')}</p> */}
                {format(new Date(booking.from), 'dd-MM-yyyy')} : 
                {format(new Date(booking.to), 'dd-MM-yyyy')}
                
            </td>
            
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span
                        onClick={() =>handlDelete(booking?._id)}
                        className='relative'>Cancel</span>
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span
                      
                        className='relative'>Pay</span>
                </span>
            </td>
        </tr>
    );
};

export default TableRowData;
