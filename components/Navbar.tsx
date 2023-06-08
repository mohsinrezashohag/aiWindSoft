
"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../public/assets/logo.png'
import { FaBars } from 'react-icons/fa';
import { motion } from "framer-motion"
import Link from 'next/link';


const Navbar = () => {

    const [toggle, setToggle] = useState(false)


    // useEffect(() => {
    //     let handle = () => {
    //         setToggle(false)
    //     }

    //     document.addEventListener('', handle)
    // })


    return (
        <nav className=' mx-auto h-20 top-0 flex-1  items-center pt-6 border border-b-2 px-2 sticky bg-white'>


            <div className='max-w-[1350px]  mx-auto flex justify-between items-center'>

                <Link href='/'>
                    <Image
                        alt='logo'
                        src={logo}
                        width={130}
                        height={130}>
                    </Image>
                </Link>

                <div className='hidden md:flex justify-between items-center gap-x-10'>
                    <div className='Links  '>

                        <ul className='flex gap-x-6 font-semibold'>

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

                    <div>
                        <button className=' btn px-6 py-1  rounded rounded-md text-black font-semibold'>

                            contact us
                        </button>
                    </div>
                </div>


                <div className='md:hidden mobile-menu relative'>


                    <button className='btn p-1 rounded-md'
                        onClick={() => setToggle(prev => !prev)}
                    >

                        <FaBars size={30}></FaBars>
                    </button>





                </div>


            </div>





            {
                toggle && <div

                    className='md:hidden mobile-link mt-3 bg-gray-300 w-[300px] absolute right-0 p-4 h-96 rounded-md me-1 '>

                    <ul className='flex flex-col gap-y-10 text-right font-semibold '>

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
            }




        </nav >
    );
};

export default Navbar;