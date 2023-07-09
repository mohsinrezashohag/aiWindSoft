"use client"
import Image from 'next/image';
import React from 'react';
import serviceImage from '../../public/assets/florid-support-service.png'
import downArrow from '../../public/assets/angle-down-solid.svg';
import Service from '@/components/services/Service';



const page = () => {
    return (
        <div className='max-w-[1350px] mx-auto my-10'>
            <div>
                <div className='flex justify-between items-center py-16'>
                    <div className='text-center'>
                        <h1 className='hero-heading py-10'>AI-Powered Bookkeeping and
                            <br />
                            Finance</h1>
                        <p className='sub-heading'>Accounting and finance requires context. We use AI to capture the business
                            <br /> context that only you have 😌</p>

                    </div>

                    <div>
                        <Image
                            src={serviceImage}
                            alt='product'
                            height={400}
                            width={400}
                        >
                        </Image>
                    </div>
                </div>

                <a href='#service' className='flex gap-3 items-center font-semibold'>
                    <Image src={downArrow} alt="" width={40} />
                    <p className='y-text text-2xl'>See Details</p>
                </a>

            </div>

            <Service></Service>
        </div>
    );
};

export default page;