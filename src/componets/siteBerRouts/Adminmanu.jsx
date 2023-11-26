import React from 'react';
import { FaHospitalUser } from "react-icons/fa";
import ManuItems from '../ManuItems';
import { ImProfile } from "react-icons/im";


const Adminmanu = () => {
    return (
        <>
            <ManuItems
                icon={ImProfile}

                label='My-Profile'
                address='myProfile'
            />

            <ManuItems
                icon={FaHospitalUser}

                label='manage-users'
                address='manage-users'
            /> 
        </>
    );
};

export default Adminmanu;