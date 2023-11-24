import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaHeart } from "react-icons/fa";


const PackagesCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="https://i.ibb.co/V3JG5Kd/login.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    
                       

                    <Button className='rounded-full ' >
                        <FaHeart  className='text-3xl text-gray-600'/>
                    </Button>
                    <h1>TourType </h1>
                    <h1>TripTitle </h1>
                    <p>Price:$3000</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained"> Package Deteils </Button>
                <Button variant="contained">AllPackage</Button>

                
            </CardActions>
        </Card>
    );
};

export default PackagesCard;