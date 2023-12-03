import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '../../../Sheard/Container';

import { useAuth } from '../../../hooks/useAuth';
import { imageUpload } from '../../../api/imageupload';

;
import { Helmet } from 'react-helmet-async';
import BookingFrom from '../../../componets/BookingFrom';



const itemData = [
    {
        img: 'https://i.ibb.co/5nkMh4g/istockphoto-1223269800-612x612.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/rcvNHM5/blogi-JR0-K1s-WVNFzin-GC-l4r3-Ids-VLyx-Zfkr.jpg',
        title: 'Burger',
    },
    {
        img: 'https://i.ibb.co/HC1k9Rw/images.jpg',
        title: 'Camera',
    },
    {
        img: 'https://i.ibb.co/8mVS64Q/download-2.jpg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/rbd4FGq/images-1.jpg',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/G75WGhJ/main-qimg-2f263553ea8dc40c7a601e5a85b07760-pjlq.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/Cw5hkZM/istockphoto-1446199740-612x612.jpg',
        title: 'Basketball',
    },
    {
        img: 'https://i.ibb.co/bFwRbTL/1878484-Saint-Martins-Island-Bangladesh.jpg',
        title: 'Fern',
    },
    {
        img: 'https://i.ibb.co/pJ4z3Mv/1525326654fchg.jpg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/CnxjtBF/360-F-368207548-G6r-QWR1o-STd-UD0-A8cq-ANU5j-QQDDj4l-AB.jpg',
        title: 'Tomato basil',
    },
    {
        img: 'https://i.ibb.co/cYM1pDC/Nilgiri-Bandarban.jpg',
        title: 'Sea star',
    },
    {
        img: 'https://i.ibb.co/Bs4vzFC/d04a6cb8-2d85-44b7-8de4-69fba38775a11551047cec4f29deff-800px-Dhaka-Lalbagh-Fort-5.jpg',
        title: 'Bike',
        cols: 2,
    },
];

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${ image }?w=${ size * cols }&h=${ size * rows }&fit=crop&auto=format`,
        srcSet: `${ image }?w=${ size * cols }&h=${ size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}




const DetailsePackage = () => {
    const details = useLoaderData();
    const { user } = useAuth();
    
    const { _id, tourist_image, image, tourist_name, price } = details || {};


return (
            
        <div >
            <Helmet>

                <title>Details Package</title>
            </Helmet>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', className: 'sm:grid-cols-1 lg:grid-cols-3' }}>
 

                    <ImageList
                        sx={{ width: 1000, height: 450 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={121}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    {...srcset(item.img, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
            </div>
            {/* Details */}

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>



                    <Card sx={{ maxWidth: 900, width: '100%' }}>
                        <CardMedia
                            sx={{ height: 400 }}
                            image={image }
                            title="green iguana"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {/* Your title content */}
                            </Typography>
                            {/* Your other content */}
                        </CardContent>

                        <CardActions>
                        <div>
                            <h1 className='text-2xl font-semibold text-black'>{tourist_name} </h1>
                            <h1>{price}</h1>

                               
                            {/* <Link to='/dashboard/myBookings'>
                            <Button size="small">Book Now</Button>
                        </Link> */}
                           
                        </div>
                       
                    </CardActions>
                 
                </Card>

            </div>
            <BookingFrom details={details}></BookingFrom>
            <Container>
            



            {/* Acrodian */}
           
                <div className='mt-16'>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                1. Discover the Hidden Gems: A Tour Guide's Perspective
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Welcome fellow adventurers! Today, we embark on a journey to explore the lesser-known wonders of our destination. As your trusty tour guide, I am thrilled to unveil the secrets that make this place truly extraordinary.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography> 2.
                                The Enchanting Old Town
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Our first stop is the heart of the city - the Old Town. Cobblestone streets echo with tales of centuries past. Immerse yourself in the rich history as we stroll by medieval architecture, each building whispering stories of bygone eras. Don't forget to capture the vibrant colors and intricate details that add a touch of magic to this enchanting place.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Culinary Delights Around Every Corner</Typography>
                        </AccordionSummary>
                    </Accordion>
                </div>
                <div>
                    <h1 className='text-3xl font-bold mt-10'>Nature's Retreat: Off the Beaten Path</h1>
                    <p>
                        Escape the hustle and bustle as we venture off the beaten path to discover nature's hidden retreats. Serene landscapes, untouched by the masses, await our exploration. From breathtaking viewpoints to tranquil lakes, these spots offer a sanctuary for those seeking solace in the midst of Mother Nature's beauty.
                    </p>
                    <h1 className='text-3xl font-bold mt-10'>Cultural Encounters and Local Traditions</h1>

                    <p>
                        Our journey wouldn't be complete without immersing ourselves in the local culture. Engage with the warm-hearted locals, learn about traditional crafts, and witness cultural performances that showcase the soul of the community. These authentic experiences will leave you with a deeper appreciation for the richness of this destination.


                    </p>
                    <h1 className='text-2xl text-orange-400 font-medium'>  Sunset Spectacles and Nighttime Wonders</h1>
                    As the day winds down, join me in capturing the breathtaking sunset at a secret vantage point. Witness the sky ablaze with hues of orange and pink, creating a canvas that will be etched in your memory. And fear not, our adventure doesn't end with the setting sun; we'll explore the nightlife and discover the hidden gems that come alive after dark.

                    So, fellow adventurers, are you ready to embark on this journey of discovery? Pack your curiosity and join me as we uncover the treasures that await in every corner. Let the adventure begin! 🌍🗺️✨
                </div>
            </Container>

            </div>
       
    );
};

export default DetailsePackage;
