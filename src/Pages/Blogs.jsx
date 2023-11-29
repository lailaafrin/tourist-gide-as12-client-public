import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../Sheard/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Blogs = () => {
    return (
        <div>
            <Helmet>

                <title>Blogs</title>
            </Helmet>
            <Container>
                <div >
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                               1. Discover the Hidden Gems: A Tour Guide's Perspective
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Welcome fellow adventurers! Today, we embark on a journey to explore the lesser-known wonders of our destination. As your trusty tour guide, I am thrilled to unveil the secrets that make this place truly extraordinary.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography> 2.
                                The Enchanting Old Town
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Our first stop is the heart of the city - the Old Town. Cobblestone streets echo with tales of centuries past. Immerse yourself in the rich history as we stroll by medieval architecture, each building whispering stories of bygone eras. Don't forget to capture the vibrant colors and intricate details that add a touch of magic to this enchanting place.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disabled>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Culinary Delights Around Every Corner</Typography>
                        </AccordionSummary>
                    </Accordion>
                </div>
                <div>
                    <h1 className='text-3xl font-bold mt-10'>Nature's Retreat: Off the Beaten Path</h1>
                    <p>
                        Escape the hustle and bustle as we venture off the beaten path to discover nature's hidden retreats. Serene landscapes, untouched by the masses, await our exploration. From breathtaking viewpoints to tranquil lakes, these spots offer a sanctuary for those seeking solace in the midst of Mother Nature's beauty.
                    </p>
                    <h1 className='text-3xl font-bold mt-10'>Cultural Encounters and Local Traditions</h1>

                    <p>
                        Our journey wouldn't be complete without immersing ourselves in the local culture. Engage with the warm-hearted locals, learn about traditional crafts, and witness cultural performances that showcase the soul of the community. These authentic experiences will leave you with a deeper appreciation for the richness of this destination.


                    </p>
                    <h1 className='text-2xl text-orange-400 font-medium'>  Sunset Spectacles and Nighttime Wonders</h1>
                    As the day winds down, join me in capturing the breathtaking sunset at a secret vantage point. Witness the sky ablaze with hues of orange and pink, creating a canvas that will be etched in your memory. And fear not, our adventure doesn't end with the setting sun; we'll explore the nightlife and discover the hidden gems that come alive after dark.

                    So, fellow adventurers, are you ready to embark on this journey of discovery? Pack your curiosity and join me as we uncover the treasures that await in every corner. Let the adventure begin! 🌍🗺️✨
                </div>
            </Container>
        </div>
    );
};

export default Blogs;