import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Banner = () => {
    return (
        <div className='h-96'>

            <AwesomeSlider className='h-96 -mt-24'
                media={[
                    {


                        source: 'https://i.ibb.co/89WQQKC/water-landscape-in-bangladesh.jpg',
                    },
                    {
                        source: 'https://i.ibb.co/ZY8QXcC/sundarban-650.jpg',
                    },
                    {
                        source: 'https://i.ibb.co/RC42bGg/slider.jpg',
                    },
                ]}
            />
            
        </div>
    );
};

export default Banner;