import Image from 'next/image';
import React from 'react';
import b_one from '../../public/assets/b_one.png'
import b_two from '../../public/assets/b_two.png'
import { blogs } from '@/utils/utils';

const page = () => {
    return (
        <div className='max-w-[1350px] mx-auto px-10 md:px-0'>


            <div>
                <div className='text-center flex items-center mx-auto my-10 justify-center'>
                    <p className='uppercase font-bold y-text'>Blogs </p>
                    <div className='bar w-[40px] h-[3px] block ms-2'></div>
                </div>

                <h1 className='hero-heading text-center'>Thought starters</h1>

            </div>


            <div className='my-20'>

                <div className='flex flex-col md:flex-row gap-12'>

                    <div className='bg-gray-300 rounded-md cursor-pointer'>

                        <Image
                            src={b_two}
                            alt='blog'
                            className='rounded-md mb-6 w-full  h-[420px]'

                        ></Image>
                        <div className='px-6'>

                            <h1 className='text-3xl font-semibold'>Balancing Innovation and Risk:
                                <br />
                                Navigating Regulatory Frameworks in the World of Generative AI</h1>

                            <p className='btn inline-block px-5 py-2 my-3 text-white font-semibold rounded-full' >April 28, 2023</p>
                        </div>
                    </div>

                    <div className='bg-gray-300 rounded-md cursor-pointer'>

                        <Image
                            src={b_one}
                            alt='blog'
                            className='rounded-md mb-6 w-full h-[420px]'

                        ></Image>
                        <div className='px-6 '>

                            <h1 className='text-3xl font-semibold'>The AI Startups Rising Higher As TikTok's Regulatory Challenges Mount</h1>

                            <p className='btn inline-block px-5 py-2 my-3 text-white font-semibold rounded-full items-end' >April 28, 2023</p>
                        </div>
                    </div>

                </div>


                <div className='sm-blogs mt-20 mb-32'>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>

                        {blogs.map(blog =>

                            <div key={blog.id} className='bg-gray-300 rounded-md cursor-pointer'>

                                <Image src={blog.image} alt={blog.title} className='rounded-md' />

                                <div className='p-4'>
                                    <h1 className='text-2xl font-semibold'>{blog.title}</h1>
                                    <p className='btn inline-block px-5 py-q my-3 text-white font-semibold rounded-full items-end' >April 28, 2023</p>

                                </div>
                            </div>)}
                    </div>

                </div>


            </div>

        </div>
    );
};

export default page;