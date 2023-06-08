"use client"

import React, { useRef } from 'react';
import Slider from 'react-slick'
import Image from 'next/image';
import p_one from '../public/assets/p_one.jpeg'
import p_two from '../public/assets/p_two.jpeg'
import p_three from '../public/assets/p_three.jpg'
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";



const Testimonial = () => {

    const slideRef = useRef<Slider>(null)

    const handleNextSlide = () => {
        slideRef.current?.slickNext();
    };

    const handlePrevSlide = () => {
        slideRef.current?.slickPrev();
    };



    const settings: object = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,
        swipe: false
    };

    return (
        <div className='relative p-6 overflow-hidden bg-gray-300  pb-60'>


            <div className='max-w-[1350px] mx-auto relative'>
                <Slider {...settings} ref={slideRef}>


                    <div className='p-10'>
                        <div className='flex flex-col md:flex-row gap-10 items-center'>

                            <div>
                                <Image
                                    src={p_three} alt='p_three'
                                    height={950}
                                    width={750}
                                    className='border-lg border-x-slate-200 rounded-md border-b-8 border-r-8 drop-shadow-xl  '
                                ></Image>
                            </div>

                            <div className='px-10'>
                                <h1 className='text-5xl font-bold py-10'>Big fan of the product and the team</h1>

                                <p className='font-semibold text-gray-500 py-6'>Handles our back office finance side. We’ve gotten to 25 people without needing a finance hire leveraging Truewind for bookkeeping and key reporting (not just financial statements). They also really go over and above for YC companies.</p>

                                <p className='uppercase text-sm font-semibold'>
                                    <span>___</span> peter fishman, Mozrat Data (Yc s20)
                                </p>

                                <p></p>
                            </div>

                        </div>
                    </div>


                    <div className='p-10'>
                        <div className='flex flex-col md:flex-row gap-10 items-center'>

                            <div>
                                <Image
                                    src={p_one} alt='p_three'
                                    height={950}
                                    width={750}
                                    className='border-lg border-x-slate-200 rounded-md border-b-8 border-r-8 drop-shadow-xl  '
                                ></Image>
                            </div>

                            <div className='px-10'>
                                <h1 className='text-5xl font-bold py-10'>They've been great for us</h1>

                                <p className='font-semibold text-gray-500 py-6'>Handles our back office finance side. We’ve gotten to 25 people without needing a finance hire leveraging Truewind for bookkeeping and key reporting (not just financial statements). They also really go over and above for YC companies.</p>

                                <p className='uppercase text-sm font-semibold'>
                                    <span>___</span> peter fishman, Mozrat Data (Yc s20)
                                </p>

                                <p></p>
                            </div>

                        </div>
                    </div>



                </Slider>




                <div className="absolute md:bottom-0 flex flex-row-reverse md:right-10 md:flex-col md:space-y-2  p-[-80px] m-[-80px]">
                    <button
                        className="rounded-full bg-[#F9C303] p-4"
                        onClick={handleNextSlide}
                    >
                        <FaLongArrowAltRight size={30} />
                    </button>
                    <button
                        className="mr-2 md:mr-0 rounded-full bg-[#F9C303] p-4"
                        onClick={handlePrevSlide}
                    >
                        <FaLongArrowAltLeft size={30} />
                    </button>
                </div>
            </div>



        </div>
    );
};

export default Testimonial;