import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../Sheard/Container';
import BookingFrom from '../componets/BookingFrom';
import DateRang from '../Sheard/DateRang';

const ContactUs = ({


    handleBooking,
    handleDateChange,
    details,
    state,
    loading = false,


}) => {


    return (
        <div>
            <Helmet>

                <title>ContactUs</title>
            </Helmet>
            <Container>
                <div>
                    <h1 className='text-center animate-text bg-gradient-to-r from-blue-500 via-green-500 to-roange-500 bg-clip-text text-transparent text-5xl font-bla   font-semibold '>Contact Us</h1>
                    <h2></h2>
                  

                    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
                        <form onSubmit={handleBooking} >

                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

                                <div>
                                    The Office
                                    <br />
                                    Travelia, Inc.
                                    <br />
                                    Address: fa795 Folsom Ave, Suite  <br />
                                    City: San Francisco, CA 94107 <br />

                                    P: (123) 456-7890 <br />
                                    Travelia Emails <br />
                                    Email: sales@iwthemes.com <br />
                                    Email: support@iwthemes.com
                                </div>
                                <div className='space-y-6'>

                                    {/* daterange */}
                                    {/* <DateRange
                            editableDateInputs={true}
                            onChange={handleDateChange}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                        /> */}

                                    <DateRang></DateRang>

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
                                            <label htmlFor="selectOption">Select  Guider Name</label>

                                            <select id="selectOption" name="selectOption"
                                                placeholder='Guider'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                                            >
                                                <option value="option1">salam</option>
                                                <option value="option2">Jamal</option>
                                                <option value="option2">kamal</option>
                                                <option value="option2">Kovir</option>
                                                {/* Add more options as needed */}
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
                                                {details?.price}
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
                                {/* {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                        'Book Now'
                    )} */}
                                Contract Us
                            </button>




                        </form>
                    </div>
                </div>
           </Container>
        </div>
    );
};

export default ContactUs;