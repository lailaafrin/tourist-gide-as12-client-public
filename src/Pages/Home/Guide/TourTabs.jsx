import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../../Sheard/Container';
import PackagesCard from './PackagesCard';
import { useLoaderData } from 'react-router-dom';

const TourTabs = () => {
    const packages = useLoaderData();
    // console.log(packages)

    
    return (
        <Container>
            <div className='mt-12' >

               <Tabs>
                    <TabList>
                        <Tab><h1 className='text-pink-600 font-semibold'>Our Packages</h1></Tab>
                        <Tab><h1 className='font-semibold'>
                            Overview
                            </h1></Tab>
                        <Tab><h1 className='font-semibold'>Meet Our Tour Guides</h1></Tab>
                        

                    </TabList>

                    <TabPanel>
                        <h2>
                            <PackagesCard></PackagesCard>
                        </h2>
                        
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-3xl'>Welcome to Your Guided Tour Experience!
                            </h2>
                            <p>1
                                Embark on a fascinating journey as our expert tour guide leads you through a captivating exploration of [Destination]. Our carefully crafted tour is designed to provide you with an immersive and enriching experience, blending historical insights, cultural highlights, and the hidden gems that make [Destination] truly unique.</p>

                            <p>
                                2 .  Highlights of Your Tour:

                                Historical Landmarks: Delve into the rich history of [Destination] as we visit iconic landmarks that stand as testaments to the past. Uncover the stories behind each site, from ancient tales to modern events that have shaped the city's identity.
                         </p>

                            <p>
                                3. Cultural Wonders: Immerse yourself in the vibrant culture of [Destination]. From bustling markets to serene art galleries, our tour showcases the diverse tapestry of traditions and artistic expressions that define this incredible locale.
                            </p>

                            <p>
                                4.Local Cuisine: Indulge your taste buds with a culinary journey through [Destination]'s gastronomic delights. Our guide will lead you to hidden eateries and popular dining spots, ensuring you savor the authentic flavors that make the local cuisine unforgettable.
                            </p>

                            <p>
                                5. Scenic Beauty: Enjoy breathtaking views and picturesque landscapes as we navigate through [Destination]. Whether it's a panoramic vista from a historic site or a serene park tucked away from the bustling streets, your tour promises moments of awe-inspiring beauty.
                           </p>

                            <h1 className='text-3xl'>
                                What to Expect:
                          </h1>

                            <p>
                                Informative Commentary: Our knowledgeable guide will provide fascinating insights into the history, culture, and stories that define [Destination].
                          </p>

                            <p>
                                Interactive Experience: Engage with your surroundings through interactive activities and opportunities to connect with fellow travelers.
                           </p>

                            <p>
                                Comfortable Transportation: Relax and enjoy the journey with our comfortable transportation, ensuring you focus on the sights and sounds rather than logistics.
                        </p>

                            <p>
                                  Join us for a memorable adventure that goes beyond the surface, offering you a deep and personal connection to the heart of [Destination]. Let's create lasting memories together as we explore the wonders that await!
                          </p>

                            Feel free to tailor this overview text to match the specific details and attractions of the destination you are guiding in.
                    </TabPanel>
                   
                    <TabPanel>

                        <div>

                            Here's a general list to get <h1 className='text-xl'>you started:</h1>

                            <h1 className='text-2xl'>1.Local Tour Operators:</h1>
                            <p>
                                Check with local tour operators in the area you're interested in. They often have a team of experienced guides.</p>
                            <h1 className='text-2xl'>2 .Online Platforms:</h1>

                            <p> Websites like Viator, GetYourGuide, and ToursByLocals connect travelers with local guides worldwide. You can search for guides based on your destination and interests.</p>
                            <h1 className='text-2xl'> 3. Tourism Websites:</h1>

                            <p> Many official tourism websites provide information about certified guides in specific regions. For example, the official tourism website of a city or country may have a list of recommended guides.</p>
                            <h1 className="text-2xl">4. TripAdvisor:</h1>

                            <p>
                                TripAdvisor is a popular platform for travel-related information. You can find reviews and recommendations for tour guides in various destinations.
                            </p>
                            <h1 className="text-2xl">5. Travel Agencies:</h1>

                            <p>     Traditional travel agencies often have partnerships with local guides. Inquire with them about available options.</p>
                            <h1 className="text-2xl">6. Local Chambers of Commerce:</h1>

                            <p>  Contact the local chamber of commerce or tourism office. They may have information on licensed guides.</p>
                            <h1 className="text-2xl">7.  Professional Associations:</h1>

                            <p>Look for guides who are members of professional associations such as the Professional Tour Guide Association or the World Federation of Tourist Guide Associations.</p>
                            <h1 className="text-2xl">8.  Personal Recommendations:</h1>

                            <p>Ask friends, family, or colleagues who have visited the destination for recommendations. Personal experiences can be valuable.</p>
                            <h1 className="text-2xl">9.Social Media Groups:</h1>

                            <p>  Join travel-related groups on social media platforms. Members often share recommendations for guides based on their own experiences.</p>
                            <h1 className="text-2xl">10.  Hotels and Accommodations:</h1>

                            <p> Some hotels and accommodations have partnerships with local guides. Inquire at your place of stay for recommendations.
                                Remember to verify the credentials and reviews of the tour guides to ensure a positive and safe experience. Additionally, consider the type of tour you're interested in (historical, adventure, culinary, etc.) and find a guide with expertise in that area.
                           </p>
                            
                           
                                <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-300 text-white mr-5 w-full my-5">
                                    Package Details
                                </button>
                          
                        </div>
                        <h2 className='text-3xl'> Meet Our Expert Guides: Your Passport to Unforgettable Adventures</h2>
                       

                        <p className=''>
                           1. At [Your Tour Company], we take pride in curating experiences that go beyond the ordinary. Our team of dedicated and knowledgeable tour guides is at the heart of creating unforgettable journeys for our guests. Each guide brings a unique blend of expertise, passion, and a genuine love for sharing the wonders of the world. Allow us to introduce you to the faces behind your next adventure:
                        </p>

                        <p>
                            2.[Guide's Name] - The History Buff:
                            *Passionate about unraveling the mysteries of the past, [Guide's Name] is your go-to expert for historical insights. With an extensive knowledge of the [Destination] region, they'll transport you through time, revealing the stories and secrets that shaped the landscape.
                  </p>

                        <p>
                            3.[Guide's Name] - The Culture Connoisseur:
                            *For a deep dive into the local traditions and cultural nuances, look no further than [Guide's Name]. With an infectious enthusiasm for art, music, and customs, they'll guide you through immersive experiences that showcase the rich tapestry of [Destination]'s cultural heritage.
                        </p>

                        <p>
                          4  [Guide's Name] - The Culinary Explorer:
                            *Prepare your taste buds for a culinary adventure with [Guide's Name]. A true foodie at heart, they'll lead you to hidden gems and local eateries, ensuring you savor the authentic flavors that define [Destination]'s gastronomic scene.
                        </p>

                        <p>5. [Guide's Name] - The Nature Aficionado:
                            *If you're drawn to breathtaking landscapes and natural wonders, [Guide's Name] is your nature guide extraordinaire. From scenic viewpoints to tranquil parks, they'll unveil the beauty of [Destination] in a way that leaves you in awe.</p>

                        <h2 className='text-3xl'>Why Choose Our Guides:</h2>

                        <p>
                            Passion for Exploration: Our guides are not just experts; they're passionate explorers who genuinely love sharing their knowledge and creating meaningful connections with travelers.</p>

                        <p>
                            Personalized Experiences: Whether you're a history buff, a food enthusiast, or an adventure seeker, our guides tailor each experience to suit your interests, ensuring a personalized and memorable journey.
                        </p>

                        <p>
                            Local Insights: Benefit from the insider knowledge of our guides, who call [Destination] home. Discover hidden gems and off-the-beaten-path treasures that you won't find in guidebooks.
                        </p>

                        <p>
                            Get ready to embark on a journey led by these extraordinary individuals. Our guides aren't just narrators; they're storytellers, curators, and companions on your travel adventure. Join us as we explore the world together, one captivating story at a time!
                    </p>






                    </TabPanel>
                    
                </Tabs>
            </div>
        </Container>

    );
};

export default TourTabs;