import React from 'react';
import { Helmet } from 'react-helmet-async';
import TourTabs from './Guide/TourTabs';
import Banner from '../../Sheard/Banner';
import TourType from '../../componets/TourType';
import MeetVideo from '../../componets/Buttons/MeetVideo';
// import Section3 from '../../componets/Section3';



const Home = () => {
    
    return (
        <div>
            <Helmet>

                <title>Tourist Guide</title>
            </Helmet>
            <Banner></Banner>
            <TourTabs></TourTabs>
           <MeetVideo></MeetVideo>
            <TourType></TourType>

            

        </div>
    );
};

export default Home;