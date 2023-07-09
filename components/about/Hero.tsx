import Image from 'next/image';
import React from 'react';
import downArrow from '../../public/assets/angle-down-solid.svg';
import manVec from '../../public/assets/manVec.jpg'
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='flex   my-20'>

            <div className='p-10'>
                <h1 className='hero-heading'>Meet the people behind Truewind</h1>

                <p className='sub-heading py-10'>We love finance & accounting. We're a team of technology engineers with one shared goal: give you peace of mind</p>

                <a href='#team' className='flex gap-3 items-center font-semibold'>
                    <Image src={downArrow} alt="" width={40} />
                    <p className='y-text text-2xl'>Meet the team</p>
                </a>


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