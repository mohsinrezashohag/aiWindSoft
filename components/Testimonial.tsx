"use client"

import React, { useRef } from 'react';
import Slider from 'react-slick'
import Image from 'next/image';
import p_one from '../public/assets/p_one.jpeg'
import p_three from '../public/assets/p_three.jpg'



const Testimonial = () => {
    return (

        <div className='full-width bg-gray-200 py-20'>

            <div id="controls-carousel" className="relative max-w-[1350px] mx-auto my-10" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <div className='p-10'>
                            <div className='flex flex-col md:flex-row gap-10 items-center'>

                                <div>
                                    <Image
                                        src={p_three}
                                        alt='p_three'
                                        className='border-lg border-x-slate-200 rounded-md border-b-8 border-r-8 drop-shadow-xl'
                                        style={{ height: '400px', width: '600px' }}
                                    ></Image>
                                </div>

                                <div className='px-10'>
                                    <h1 className='text-5xl font-bold py-10'>Big fan of the product and the team</h1>

                                    <p className='font-semibold text-gray-500 py-6'>Handles our back office finance side. We’ve gotten to 25 people without needing a finance hire leveraging Truewind for bookkeeping and key reporting (not just financial statements). They also really go over and above for YC companies.</p>

                                    <p className='uppercase text-sm font-semibold'>
                                        <span>___</span> peter fishman, Mozrat Data (Yc s20)
                                    </p>


                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Item 2 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <div className='p-10'>
                            <div className='flex flex-col md:flex-row gap-10 items-center'>

                                <div>
                                    <Image
                                        src={p_one}
                                        alt='p_One'
                                        className='border-lg border-x-slate-200 rounded-md border-b-8 border-r-8 drop-shadow-xl'
                                        style={{ height: '400px', width: '300px' }}
                                    ></Image>
                                </div>

                                <div className='px-10'>
                                    <h1 className='text-5xl font-bold py-10'>They've been great for us</h1>

                                    <p className='h-[300px] w-[400px] font-semibold text-gray-500 py-6'>Awesome! Glad I can more publicly talk about you guys now - highly recommend working with Truewind, they’ve been great for us!</p>

                                    <p className='uppercase text-sm font-semibold'>
                                        <span>___</span> peter fishman, Mozrat Data (Yc s20)
                                    </p>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>




                <button type="button" className="absolute p-10 top-60 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 dark:bg-yellow-500 group-hover:bg-yellow-500 dark:group-hover:bg-yellow-400 group-focus:ring-4 group-focus:ring-yellow-400 dark:group-focus:ring-yellow-600 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>

            </div>

        </div>

    );
};

export default Testimonial;