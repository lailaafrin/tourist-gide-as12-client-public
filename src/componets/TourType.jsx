import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { GiDetour } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import { SiTravisci } from "react-icons/si";

import '../componets/styles.css'
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Container from '../Sheard/Container';
import img from '../assets/image/images-removebg-preview.png'
const TourType = () => {
    return (
        <div className=' mt-12'>
            <Container>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Parallax, Pagination, Navigation ]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'background-image':
                            'url(https://i.ibb.co/XYgJTjg/360-F-368207548-G6r-QWR1o-STd-UD0-A8cq-ANU5j-QQDDj4l-AB.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    
                    
                    <div className='flex justify-evenly ' data-swiper-parallax="-300">
                        <div className="text flex  " data-swiper-parallax="-100">
                                <img className='h-24 w-24 mt-12 outline rounded-full' src={img} alt="" />
                              
                        </div>
                        <div className="text flex   " data-swiper-parallax="-100">
                                <div className='text-center   '>
                                    <FaCar className='h-24  w-24 mt-12 outline rounded-full' />
                                   
                               </div>
                        </div>
                        <div className=" flex " data-swiper-parallax="-100">
                                <SiTravisci className='h-24  w-24 mt-12 outline rounded-full' />
                        </div>
                   </div>

                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" >
                        Slide 2
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text " >
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Slide 3
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    );
};

export default TourType;