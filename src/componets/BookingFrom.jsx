import React, { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import { imageUpload } from '../api/imageupload';
import { useAuth } from '../hooks/useAuth';


import { useLocation, useNavigate } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import { addPackage } from '../api/package';
import Swal from 'sweetalert2';
import axiosSecure from '../api';


const BookingFrom = ({ details }) => {
    
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const [ loading, setLoading ] = useState(false);
    const totalDays = parseInt(formatDistance(
        new Date(details?.to),
        new Date(details?.from)).split(' ')[ 0 ])
    
    const totalPrice = totalDays * details?.price;
    
    const from = new Date();
    const to = new Date();

    const [ state, setState ] = useState([
        {
            startDate: from,
            endDate: to,
            key: 'selection'
        }
    ]);

    const handleDateChange = (item) => {
        setState([ item.selection ]);

        // console.log('Selected Date Range:', item.selection);
    };
    
  
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const email = form.email.value;
        const guide = form.guide.value;
        const to = state[ 0 ].endDate;
        const from = state[ 0 ].startDate;
        const image = form.image.files[ 0 ];
        const imageData = await imageUpload(image);

        const packageItem = {
            name,
            email,
            price,
            to,
            from,
            imageData,
            guide
        };

        try {
            const response = await axiosSecure.post('/booking', packageItem, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Package Book Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            }

            navigate('/dashboard/myBookings');
        } catch (error) {
            console.error('Error while submitting form:', error);
        } finally {
            setLoading(false);
        }

        console.log(name, email, price, to, from, imageData, guide);
    };


   

    

    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit} >
                
                <div className='grid grid-cols-1 lg:grid-cols-2 my-8 gap-10'>

                   
                    <div className='space-y-6'>
                        
{/* daterange */}
                     
                      
                        <DateRange
                            editableDateInputs={true}
                            onChange={handleDateChange}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                            
                        />
                        {/* <DateRange
                            rangeColors={[ '#F43F5E' ]}
                            ranges={[ dateRange ]}
                            onChange={handleDateChange}
                            
                        /> */}

                    <div className='space-y-1'>
                            <label htmlFor='location' className='block text-gray-600'>
                                Select Availability Range
                            </label>
                            {/* <DateRange rangeColors={[ '#F43F5E' ]} /> */}
                        </div>
                    </div>
                    <div className='space-y-6'>
                        

                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <div>
                               
                                <label htmlFor="guider">Select an Guider:</label>
                                <select name="guide" >
                                    <option name="salam">salam</option>
                                    <option name="hassan">hassan</option>
                                    <option name="robi">robi</option>
                                </select>

                                
                            </div>
                            
                        
                                {/* {categories.map(category => (
                                    <option value={category.label} key={category.label}>
                                        {category.label}
                                    </option>
                                ))} */}
                            {/* </select> */}

                           
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                  price
                                </label>
                                <input
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900 '
                                    name='price'
                                    id='price'
                                    type='number'
                                    placeholder='Price'
                                    required
                                />
                            </div>

                            
                        </div>

                        

                       
                    </div>
                </div>

          
                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center text-xl font-medium text-white transition duration-200 rounded shadow-md bg-blue-500'
                    >
                      Book Now
                    </button>
            



            </form>
        </div>
    );
};

export default BookingFrom;