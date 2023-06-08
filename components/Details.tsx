import Image from 'next/image';
import React from 'react';
import D_One from '../public/assets/D_One.png'
import D_Two from '../public/assets/D_Two.jpg'
import D_Three from '../public/assets/D_Three.jpg'

const Details = () => {



    return (
        <section className='mt-40 max-w-[1350px] mx-auto' >
            <div className='text-center'>
                <h1 className='text-5xl font-bold  '>Smarter Bookkeeping & Finances</h1>
                <p className='py-6 font-semibold text-gray-500'>
                    Through a combination of AI and concierge service, we deliver a delightful financial back office
                    <br />
                    experience. Reliable bookkeeping, detailed financial models, built exclusively for startups</p>
            </div>





            < div className="grid grid-col-3 grid-flow-row md:grid-flow-col  md:gap-x-10">


                <div className='border-spacing-1 py-6 px-3 border-2 my-16'>
                    <div>
                        <span className='font-semibold details_tittle '>ACCURACY <span className='font-bold'>____</span></span>

                        <h3 className='text-2xl font-bold py-2'>Unmatched Accuracy</h3>

                        <p className='text-sm font-semibold text-gray-500 pb-10'>  Always count on getting accurate books delivered monthly. By pairing our concierge team with AI, you'll enjoy a new level of transparency and accuracy in accounting</p>
                    </div>

                    <Image
                        src={D_One}
                        alt='d_one'
                        height={400}
                        width={400}
                    >
                    </Image>
                </div>
                <div className='border-spacing-1 py-6 px-3 border-2 my-16'>
                    <div>
                        <span className='font-semibold details_tittle '>Timely <span className='font-bold'>____</span></span>

                        <h3 className='text-2xl font-bold py-2'>Faster Monthly Close</h3>

                        <p className='text-sm font-semibold text-gray-500 pb-10'> You can't get to real-time finance if it takes three weeks to close your books. We close your books in days rather than weeks, so you can make faster business decisions.</p>
                    </div>

                    <Image
                        src={D_Two}
                        alt='d_one'
                        height={400}
                        width={400}
                    >
                    </Image>
                </div>

                <div className='border-spacing-1 py-6 px-3 border-2 my-16'>
                    <div>
                        <span className='font-semibold details_tittle '>Support <span className='font-bold'>____</span></span>

                        <h3 className='text-2xl font-bold py-2'>World-Class Support</h3>

                        <p className='text-sm font-semibold text-gray-500 pb-10'> We treat this like a partnership. Work with one of our finance experts to manage your books and taxes. You'll always feel like we're in your corner. Because we are.</p>
                    </div>

                    <Image
                        src={D_Three}
                        alt='d_one'
                        height={400}
                        width={400}
                    >
                    </Image>
                </div>

            </div>



        </section >
    );
};

export default Details;