import Image from 'next/image';
import React from 'react';
import product from '../../public/assets/product.jpeg'
import { FaArrowDown } from 'react-icons/fa';
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
                            src={product}
                            alt='product'
                            height={500}
                            width={500}
                            className='rounded-md border-b-8 border-r-8'
                        >

                        </Image>
                    </div>
                </div>

                <button className="btn rounded-md px-16 py-8 gap-4 font-bold flex items-center text-white"><FaArrowDown size={30} className='bg-gray-600 p-2 rounded-full'></FaArrowDown><p>Meet the team</p></button>

            </div>

            <Service></Service>
        </div>
    );
};

export default page;