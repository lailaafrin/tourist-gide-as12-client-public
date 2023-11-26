import React from 'react';
import ManuItems from '../ManuItems';
import { ImProfile } from "react-icons/im";
import { GiLovers } from "react-icons/gi";
import { LuWarehouse } from "react-icons/lu";

const TouristManu = () => {
    return (
        <>
            <ManuItems
                icon={ImProfile}

                label='My-Profile'
                address='myProfile'
            />

            <ManuItems
                icon={LuWarehouse}

                label='My Booking'
                address='myBookings'
            />
            <ManuItems
                icon={GiLovers}

                label='My Wishlist'
                address='mywishList'
            />
        </>
    );
};

export default TouristManu;