import Image from 'next/image';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import manVec from '../../public/assets/manVec.jpg'

const Hero = () => {
    return (
        <div className='flex my-20'>

            <div className='p-10'>
                <h1 className='hero-heading'>Meet the people behind Truewind</h1>

                <p className='sub-heading py-10'>We love finance & accounting. We're a team of technology engineers with one shared goal: give you peace of mind</p>

                <button className="btn rounded-md px-16 py-8 gap-4 font-bold flex items-center text-white"><FaArrowDown size={30} className='bg-gray-600 p-2 rounded-full'></FaArrowDown><p>Meet the team</p></button>

            </div>

            <div>
                <Image
                    src={manVec}
                    alt=''
                    height={600}
                >

                </Image>
            </div>

        </div>
    );
};

export default Hero;