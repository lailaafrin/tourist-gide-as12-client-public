import React from 'react';
// import { format } from 'date-fns'

const TableRowData = ({ booking }) => {
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
                {/* Display other properties of the book object as needed */}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${booking.price}</p>
            </td>
            {/* Add similar code for other columns based on your data model */}
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
               
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {/* <p className='text-gray-900 whitespace-no-wrap'>{format(new Date(book.to), 'P')}</p> */}
                <p className='text-gray-900 whitespace-no-wrap'>{booking.
                    startDate}</p>
            </td>
            
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Cancel</span>
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Pay</span>
                </span>
            </td>
        </tr>
    );
};

export default TableRowData;
