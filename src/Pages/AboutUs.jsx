import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../Sheard/Container';

const AboutUs = () => {
    return (
        <div>
            <Helmet>

                <title>AboutUs</title>
            </Helmet>
            <Container>
                <div className='flex'>
                    <div>
                        <h1 className='text-3xl font-bold'>  About Us</h1>

                        <p className='text-orange-400'>Welcome to [Your Company/Organization Name], where [brief statement about what your organization does or provides]. Our mission is to [state the primary goal or purpose of your organization].</p>

                        <p className='text-green-500'>
                            At [Your Company], we believe in [core values or principles that guide your organization]. Our team is dedicated to [briefly mention key aspects like quality, innovation, customer satisfaction, etc.].</p>
                       
                        <p>
                            At [Your Tour Company Name], we believe that travel is not just about visiting new places; it's about creating lasting memories, fostering connections, and experiencing the world in all its diversity. Established with a passion for exploration and a commitment to excellence, we take pride in curating exceptional travel experiences that go beyond the ordinary.</p>

                        <h1>Who We Are:</h1>
                        <p>
                            [Your Tour Company Name] is a team of dedicated travel enthusiasts who are on a mission to transform your vacations into unforgettable adventures. With years of experience in the travel industry, we have honed our expertise to provide you with seamless and enriching journeys. Our knowledgeable guides, meticulous planning, and attention to detail ensure that every moment of your trip is filled with joy and discovery.
                        </p>

                      
                    </div>
                    <div>
                        <img className='animate-bounce mt-24  h-100 w-100 mx-auto' src="https://i.ibb.co/Cw5hkZM/istockphoto-1446199740-612x612.jpg" alt="" />

                    </div>
                   
                </div>
                <img className='my-8 fixed' src="https://i.ibb.co/bFwRbTL/1878484-Saint-Martins-Island-Bangladesh.jpg" alt="" />

                <div className='my-8'>
                    Why Choose Us:

                    Expert Guides: Our team of experienced and knowledgeable guides are passionate about the destinations they showcase, adding a layer of depth and insight to your journey.

                    Customized Experiences: We understand that every traveler is unique. That's why we offer tailor-made itineraries to suit your interests, preferences, and travel style.

                    Attention to Detail: We take care of the logistics so you can focus on enjoying your trip. From accommodation to transportation, we ensure that every detail is thoughtfully planned.

Join us at [Your Tour Company Name] and embark on a journey of a lifetime. Discover the world with us, where every destination has a story to tell, and every moment is a new adventure.
                </div>
                <div>
                    <img className='backdrop-contrast-12' src="https://i.ibb.co/cYM1pDC/Nilgiri-Bandarban.jpg" alt="" />
                </div>
                <h1 className='my-8'>Our Values:

                    Passion for Exploration: We are driven by a deep love for travel and exploration. Our itineraries are crafted with care, ensuring that each destination is explored with genuine curiosity and a sense of wonder.

                    Customer-Centric Approach: Your satisfaction is our priority. From the moment you inquire about a trip to the day you return home, our team is dedicated to providing you with unparalleled service and support.

                    Responsible Tourism: We are committed to promoting responsible and sustainable tourism practices. We believe in leaving a positive impact on the communities we visit and preserving the beauty of our planet for future generations.</h1>
                
            </Container>
        </div>
    );
};

export default AboutUs;