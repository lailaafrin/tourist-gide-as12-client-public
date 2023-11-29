import Lottie from 'lottie-react';
import React from 'react';

import Animation from "../assets/animate.json"
const Error = () => {
    return (
        <div>
            
            <Lottie className='w-96 mx-auto mt-36' animationData={Animation} loop={true} />;
        </div>
    );
};

export default Error;