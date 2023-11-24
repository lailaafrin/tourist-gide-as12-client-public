import React from 'react';
import { Helmet } from 'react-helmet-async';
import TourTabs from './Guide/TourTabs';
import Banner from '../../Sheard/Banner';


const Home = () => {
    return (
        <div>
            <Helmet>

                <title>Tourist Guide</title>
            </Helmet>
            <Banner></Banner>
            <TourTabs></TourTabs>

        </div>
    );
};

export default Home;