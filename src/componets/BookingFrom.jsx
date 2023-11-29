import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { imageUpload } from '../api/imageupload';
import { useAuth } from '../hooks/useAuth';
import axiosSecure from '../api';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingFrom = () => {
    const { user } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const [ dateRange, setDateRange ] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);


    const [ selectedGuider, setSelectedGuider ] = useState('');
    const handleDateChange = (ranges) => {
      
        setDateRange([ ranges.selection ]);
    };
        const handleGuiderChange = (e) => {
        setSelectedGuider(e.target.value);
    };
    

        const handleSubmit = async (e) => {
        e.preventDefault();

        // Extract form data
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const startDate = dateRange[ 0 ].startDate;
        const endDate = dateRange[ 0 ].endDate;
        const selectOption = selectedGuider;
        const image = form.image.files[ 0 ];

        // Handle image upload
        const imageData = await imageUpload(image);
          

        const packageItem = {
name,email,price,startDate,endDate,selectOption,imageData
        }
        
        // console.log('Name:', name);
        // console.log('Email:', email);
        // console.log('Price:', price);
        // console.log('Selected Date Range:', dateRange);
        // console.log('Guider Selection:', selectOption);
        // console.log('Image Data:', imageData);


        axiosSecure.post('/booking', packageItem)
            .then(res => {
                console.log(res.data)
                
                if (res.data.insertedId) {
                    toast.success('Book now')
                    navigate('/dashboard/myBookings')
                }
            })
        
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
                            ranges={dateRange}
                        />

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
                               
                                <label htmlFor="options">Select an Guider:</label>
                                <select id="options" onChange={handleGuiderChange} value={selectedGuider} >
                                    <option value="option1">salam</option>
                                    <option value="option2">hassan</option>
                                    <option value="option3">robi</option>
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
                     Contract Us
                    </button>
            



            </form>
        </div>
    );
};

export default BookingFrom;