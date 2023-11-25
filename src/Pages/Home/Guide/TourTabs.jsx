import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../../Sheard/Container';
import PackagesCard from './PackagesCard';
// import AllPackage from './AllPackage';
// import axiosSecure from '../../../api';
import { useLoaderData } from 'react-router-dom';

const TourTabs = () => {
    const packages = useLoaderData();
    console.log(packages)

    // const [ services, setService ] = useState([]);
    // useEffect(() => {
    //     axiosSecure.get('/packageAll')

    //         .then(res => setService(res.data))
    // }, [])
    return (
        <Container>
            <div className='mt-12' >

                {/* <div>

                    {
                        services.map(service => <AllPackage
                            key={service._id}
                            service={service}
                        ></AllPackage>)
                    }

                </div> */}

                <Tabs>
                    <TabList>
                        <Tab><h1 className='text-pink-600 font-semibold'>Overview</h1></Tab>
                        <Tab><h1 className='font-semibold'>Our Packages</h1></Tab>
                        <Tab><h1 className='font-semibold'>Meet Our Tour Guides</h1></Tab>

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