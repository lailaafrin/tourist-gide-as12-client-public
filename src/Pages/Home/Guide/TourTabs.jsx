import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../../Sheard/Container';
import PackagesCard from './PackagesCard';

const TourTabs = () => {
    return (
        <Container>
            <div >

                <Tabs>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>Our Packages</Tab>
                        <Tab>Meet Our Tour Guides</Tab>

                    </TabList>

                    <TabPanel>
                        <h2>overvew content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>
                            <PackagesCard></PackagesCard>
                        </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2></h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>meet our tur gied</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </Container>

    );
};

export default TourTabs;