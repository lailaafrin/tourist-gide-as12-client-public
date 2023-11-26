import React from 'react';
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
    const { _id, tourist_image, image, tourist_name, price } = details || {};

    return (
       
            <div >
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
            
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>



                    <Card sx={{ maxWidth: 900, width: '100%' }}>
                        <CardMedia
                            sx={{ height: 400 }}
                            image={image || 'url_to_fallback_image'}
                            title="green iguana"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {/* Your title content */}
                            </Typography>
                            {/* Your other content */}
                        </CardContent>

                        <CardActions>
                            <h1 className='text-2xl font-semibold text-black'>{tourist_name} </h1>
                            <h1>{price}</h1>
       
             
                        <Link to='/dashboard/myBookings'>
                            <Button size="small">Book Now</Button>
                        </Link>
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>


            </div>
            <Container>
                <div >
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Disabled Accordion</Typography>
                        </AccordionSummary>
                    </Accordion>
                </div>
            </Container>

            </div>
       
    );
};

export default DetailsePackage;
