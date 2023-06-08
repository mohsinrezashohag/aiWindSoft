import React from 'react';
import companyOne from '../public/assets/C_one.png'
import companyTwo from '../public/assets/C_two.png'
import companyThree from '../public/assets/C_three.png'
import companyFour from '../public/assets/C_four.png'
import companyFive from '../public/assets/C_five.png'
import Image from 'next/image';


let images: Array<any>;
images = [companyOne, companyTwo, companyThree, companyFour, companyFive]

const Carousel = () => {
    return (

        <div className='max-w-[1350px] mx-auto'>

            <p className='carousel-text text-center text-xs font-semibold pb-10'>TRUSTED BY HYPER-GROWTH STARTUPS</p>

            <div className=" flex items-center  justify-center">

                <div className="w-[200%] h-20   overflow-hidden relative">
                    <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
                        {images.map((i) => {
                            return (
                                <div className="flex justify-center items-start w-[20rem]">
                                    <Image src={i} alt='' height={160} width={160} />
                                </div>
                            );
                        })}
                        {images.map((i) => {
                            return (
                                <div className="flex justify-center items-start w-[20rem]">
                                    <Image src={i} alt='' height={160} width={160} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div></div>

    );
};

export default Carousel;