import React from 'react';
import vidio from '../../assets/vidio/guide.mp4'

const MeetVideo = () => {
    return (
        <div className='my-12    '>
            <div>
                <video src={vidio} className='h-96 mx-auto max-w[3000px] ' autoPlay muted loop style={{ border: '5px solid blue' }}>


                </video>
            </div>
        </div>
    );
};

export default MeetVideo;