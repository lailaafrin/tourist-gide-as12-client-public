import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Buttion from '../../../componets/Buttons/Buttion';
import { useAuth } from '../../../hooks/useAuth';
import { getUserPackage } from '../../../api/package';
import TableRowData from '../../../componets/TableRowData';
// import { useLoaderData } from 'react-router-dom';

const MyBokings = () => {
    const { user } = useAuth();
    // const details = useLoaderData();
    // const { _id, tourist_image, image, tourist_name, price } = details || {};

    const [ packages, setPackages ] = useState([]);

    useEffect(() => {
       getUserPackage(user?.email).then(data=>setPackages(data)) 
    },[user])

    return (
        <div>
            <>
            <Helmet>MyBooking</Helmet>

                <div className='container mx-auto px-4 sm:px-8'>
                    <div className='py-8'>
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                <table className='min-w-full leading-normal'>
                                    <thead>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                PackageName
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                GuideName
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Date
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                               InReview
                                            </th>
                                            
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-300 text-white mr-5">
                                                    Cancel
                                                </button>
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-300 text-white mr-5">
                                                    Apply
                                                </button>
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-300 text-white mr-5">
                                                    Pay
                                                </button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>{/* Table Row Data */}
                                        {
                                            packages.map(pkg => <TableRowData
                                            key={pkg._id}
                                            pkg={pkg}    

                                            ></TableRowData>)
                                    }
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