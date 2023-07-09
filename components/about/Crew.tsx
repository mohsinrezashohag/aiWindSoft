import { team } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';

const Crew = () => {
    return (
        <div className='flex flex-col' id='team'>

            <div>
                <div className='text-center flex items-center mx-auto my-10 justify-center'>
                    <p className='uppercase font-bold y-text'>Team </p>
                    <div className='bar w-[40px] h-[3px] block ms-2'></div>
                </div>

                <h1 className='hero-heading text-center'>The TrueWind Crew</h1>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-20 text-center items-center mt-24 pb-20'>
                {team.map(item =>

                    <div key={item.name} className='mx-auto'>
                        <Image
                            src={item.image}
                            alt={item.name}
                            height={250}
                            width={250}
                            className='border-b-8 border-r-8 p-3 rounded-full'
                        ></Image>

                        <h3 className='text-2xl py-3 font-bold'>Mr. {item.name}</h3>
                        <p className='uppercase font-semibold text-gray-500'>{item.post}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Crew;