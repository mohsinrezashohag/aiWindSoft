import Image from 'next/image';
import React from 'react';
import logo from '../public/assets/Ai Wind.png'
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-gray-300 py-2'>
            <div className='max-w-[1350px] mx-auto my-20'>

                <div className='flex justify-between px-6 md:px-0 '>

                    <div>
                        <Image
                            src={logo}
                            alt='logo'
                            width={130}
                            height={130}
                            className='rounded-lg shadow-md'


                        />
                    </div>

                    <div className='Links text-gray-500 text-left md:text-right font-semibold'>

                        <ul className='flex flex-row gap-x-2 md:flex-col gap-y-6'>

                            <p className='uppercase hidden md:block'>truwind</p>

                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/service">Product</Link>
                            </li>
                            <li>
                                <Link href="/blog">Musings</Link>
                            </li>
                            <li>
                                <Link href="/hiring">Hiring</Link>
                            </li>

                        </ul>
                    </div>

                </div>


                <div className='flex justify-between align-middle items-center mt-6 px-52 md:px-0 py-6' >


                    <div className='flex gap-4'>

                        <button
                            className="rounded-full btn p-4 border-r-8 border-b-8"

                        >
                            <FaLinkedin size={30} />
                        </button>

                        <button
                            className="rounded-full btn p-4 border-r-8 border-b-8"

                        >
                            <FaTwitter size={30} />
                        </button>
                    </div>


                    <div className='hidden md:block'>
                        <p>Terms of Service
                            |
                            Privacy Policy</p>
                    </div>


                    <div className='hidden md:block'>
                        <p className='text-sm font-semibold'>copyright @ mohsin reza shohag </p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Footer;