
"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../public/assets/Ai Wind.png'
import { FaBars } from 'react-icons/fa';
import { motion } from "framer-motion"
import Link from 'next/link';
import { usePathname } from 'next/navigation'



const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const pathName = usePathname()

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }


    console.log("pathName", pathName);

    return (
        <nav className=' mx-auto h-20 top-0 flex-1  items-center pt-4 border border-b-1 px-2 sticky bg-white'>


            <div className='max-w-[1350px]  mx-auto flex justify-between items-center'>

                <Link href='/'>
                    <Image
                        alt='logo'
                        src={logo}
                        width={130}
                        height={130}
                        className=''>
                    </Image>
                </Link>

                <div className='hidden md:flex justify-between items-center gap-x-10'>
                    <div className='Links'>

                        <ul className='flex gap-x-6 font-semibold'>

                            <li>
                                <Link href="/" className={`${pathName === '/' ? 'active-link' : ""}`}>Home</Link>
                            </li>

                            <li>
                                <Link className={`${pathName === '/about' ? 'active-link' : ""}`} href="/about">About</Link>
                            </li>
                            <li>
                                <Link className={`${pathName === '/service' ? 'active-link' : ""}`} href="/service">Service</Link>
                            </li>
                            <li>
                                <Link className={`${pathName === '/blog' ? 'active-link' : ""}`} href="/blog">Blogs</Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <button className=' btn px-6 py-1  rounded rounded-md text-black font-semibold'>

                            Contact Us
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
                toggle && <motion.div
                    animate={toggle ? "open" : "closed"}
                    variants={variants}

                    className='md:hidden mobile-link mt-3 bg-gray-300 w-[300px] absolute right-0 p-4 h-96 rounded-md me-1 '>

                    <ul className='flex flex-col gap-y-10 text-right font-semibold '>

                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/service">Service</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blogs</Link>
                        </li>

                    </ul>
                </motion.div>
            }




        </nav >
    );
};

export default Navbar;