import Image from 'next/image';
import React from 'react';
import f_one from '../public/assets/f_one.png'
import f_two from '../public/assets/f_two.png'
import f_three from '../public/assets/f_three.png'
import f_four from '../public/assets/f_four.png'
const Featured = () => {
    return (
        <div className='max-w-[1350px] mx-auto -z-10 '>

            <div className='flex flex-col justify-center align-center items-center text-sm'>
                <p className='text-center p-16 md:py-24 carousel-text'>FEATURED</p>

                <div className='flex flex-col md:flex-row gap-y-20 gap-x-24'>


                    <Image
                        src={f_one}
                        alt='f_one'
                        width={210}
                        height={56}
                    >
                    </Image>

                    <Image
                        src={f_two}
                        alt='f_two'
                        width={210}
                        height={56}
                    >
                    </Image>

                    <Image
                        src={f_three}
                        alt='f_three'
                        width={210}
                        height={56}
                    >
                    </Image>

                    <Image
                        src={f_four}
                        alt='f_three'
                        width={210}
                        height={56}
                    >
                    </Image>


                </div>

            </div>

        </div>
    );
};

export default Featured;