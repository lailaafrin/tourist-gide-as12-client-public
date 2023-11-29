import React from 'react';
import Container from '../../Sheard/Container';
import { Helmet } from 'react-helmet-async';
import video from '../../assets/vidio/cruise_ship_-_3713 (360p).mp4'
const Commuity = () => {
    return (
        <>
            <Helmet>

                <title>Community</title>
            </Helmet>
            <div>
                <div className='-mt-24'>
                    <video src={video} className='w-full' autoPlay muted loop > </video>
                </div>
                <Container>
                    <h1 className='text-4xl mt-12 mb-4 font-bold text-center'>Welcome to Our Tour Guide Community! 🌐✈️🚶‍♂️🚶‍♀️ </h1>
                    <p>
                        Certainly! Below is a sample text for a tour guide community, which could be used for a website, social media group, or any platform where tour guides come together to share experiences, tips, and build connections.

                        Welcome to Our Tour Guide Community!
                        Greetings fellow wanderers and storytellers! Whether you're a seasoned guide or just starting on your guiding journey, you've found your way to a community that shares your passion for exploration and storytelling.</p>
                    <h1 className='text-3xl'>
                        What We're About:
                        
                    </h1>
                    <p>
                        1. Sharing Experiences: This is a space to share the highs and lows of being a tour guide. From heartwarming encounters with travelers to overcoming unexpected challenges, let's learn from each other's experiences.
                    </p>
                    <p>
                       2. Tips and Tricks: Every guide has their own set of tricks up their sleeve. Whether it's the best route to take through a bustling market or the perfect way to engage a diverse group, share your tips and help each other grow.
                    </p>
                    <p>
                        3. Destination Insights: From hidden gems to well-trodden paths, let's create a collective guidebook. Share your favorite spots, local haunts, and the stories that make each destination unique.
                    </p>
                    <p>
                        4. Community Support: Being a tour guide can be both rewarding and demanding. Use this space to seek advice, share resources, and lift each other up. We're a community that understands the challenges and triumphs of this profession.
                    </p>
                    <h1 className='text-4xl font-bold'>How to Dive In:</h1>
                    <p>1. Introduce Yourself: Start by introducing yourself! Share your guiding background, your favorite type of tours, and one interesting fact about yourself. Let's get to know the faces behind the tours.</p>
                    <p>
                        2. Share a Story: We all have that one tour moment that stays with us. Whether it's a hilarious mix-up or a heartwarming connection with a traveler, share your memorable stories with the community.
                    </p>
                    <p>
                        3. Ask Questions: Have a burning question about guiding techniques, dealing with unexpected situations, or anything else? Ask away! The collective wisdom of our community is here to help.🌍🗺️✨
                    </p>

                    <h1 className='text-4xl font-bold'>Join the Adventure:</h1>
                    <p>
                        Consider this community your virtual tour guide family. Let's support, inspire, and learn from one another as we navigate the exciting and ever-changing world of tour guiding. Adventure awaits, and it's even better when we experience it together!

                        Welcome aboard! 🌐✈️🚶‍♂️🚶‍♀️ #TourGuideCommunity #ExploreTogether
                    </p>
                </Container>
            </div>
        </>
    );
};

export default Commuity;