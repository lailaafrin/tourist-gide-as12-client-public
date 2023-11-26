import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosSecure from '../../../api';
import { useLoaderData } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FaHeart } from 'react-icons/fa';
import { Container } from '@mui/material';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { CSSTransition } from 'react-transition-group'; // Import CSSTransition
import { Helmet } from 'react-helmet-async';

const AllPackage = () => {
    const packages = useLoaderData();
    const [services, setServices] = useState([]);

    useEffect(() => {
        axiosSecure.get('/packageAll').then((res) => setServices(res.data));
    }, []);

    return (
        <Container>
            <Helmet>

                <title>AllPackage</title>
            </Helmet>
            <h1 className='text-3xl text-center font-semibold py-4'>  All Tourist Packages</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {services.map((pkg, index) => (
                    <Card key={pkg._id} sx={{ maxWidth: 345 }} className="relative">
                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={500}
                            classNames="fade"
                        >
                            <CardMedia
                                component="img"
                                alt="Package Image"
                                height="200"
                                image={pkg.image}
                                style={{ objectFit: 'cover', maxHeight: '200px' }}
                                className="hover:scale-110 transition-transform duration-300 ease-in-out transform"
                            />
                        </CSSTransition>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {/* Lizard */}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <button className="rounded-full">
                                    <FaHeart className="text-3xl text-gray-600" />
                                </button>
                                <h1 className='text-2xl font-semibold text-black'>{pkg.tourist_name} </h1>
                                <h1 className='my-3 text-orange-500'>{pkg.tour_type} </h1>
                                <p className='font-semibold text-end'>Price:{pkg.price}</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/detailsePackage/${ pkg._id }`}>
                                <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-300 text-white mr-5">
                                    Package Details
                                </button>
                            </Link >
                            
                            
                        </CardActions>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default AllPackage;
