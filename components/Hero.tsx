import React from 'react';

const Hero = () => {
    return (
        <div className='hero text-center flex flex-col gap-y-20 after:px-28 py-28'>


            <h1 className='hero-heading'>AI-Powered Bookkeeping & Finance for Startups</h1>

            <h4 className='sub-heading px-6 md:px-0'>
                Using AI to power bookkeeping & finance means less errors, more transparency,
                <br />
                and faster monthly close. Get peace of mind with Truewind
            </h4>

            <button className='btn px-8 py-2 font-semibold rounded-md w-[180px] mx-auto '>
                Get Started
            </button>

        </div>
    );
};

export default Hero;