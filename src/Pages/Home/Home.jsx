import React from 'react';
import { Helmet } from 'react-helmet-async';
import TourTabs from './Guide/TourTabs';
import Banner from '../../Sheard/Banner';
import TourType from '../../componets/TourType';
import MUITable from '../../Sheard/MUITable';



const Home = () => {
    
    return (
        <div>
            <Helmet>

                <title>Tourist Guide</title>
            </Helmet>
            <Banner></Banner>
            <TourTabs></TourTabs>
            <TourType></TourType>
<MUITable></MUITable>
            

        </div>
    );
};

export default Home;