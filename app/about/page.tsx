import Crew from '@/components/about/Crew';
import Hero from '@/components/about/Hero';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-[1350px] mx-auto'>
            <Hero />
            <Crew></Crew>
        </div >
    );
};

export default page;