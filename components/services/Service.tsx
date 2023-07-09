import { finance } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';

const Service = () => {
    return (
        <div className='' id='service'>

            <div className='mt-20 pt-16'>
                <div className='text-center flex items-center justify-center mx-auto my-10'>
                    <p className='uppercase font-bold y-text'>Team </p>
                    <div className='bar w-[40px] h-[3px] block ms-2'></div>
                </div>
                <h1 className='hero-heading text-center'>Our engine is accurate and transparent</h1>
            </div>



            <div className='hidden md:block'>
                <div className='flex flex-col items-center mt-20'>


                    <div className='relative h-60'>
                        <div className='absolute p-4 w-[300px] md:w-[600px] mx-auto ms-20 -mt-4' >
                            <p className='y-text'>Connect</p>
                            <h1 className='text-2xl font-semibold mt-2'>Integrate your bank account 🥧</h1>
                            <p className='sub-heading'>So we won't need to ask you for monthly reports. We'll pull the bank transactions directly. It's as easy as pie</p>
                        </div>
                        <div className='absolute w-1 bg-yellow-500 h-40'>
                            <span className=' absolute w-5 h-5 z-10 bg-yellow-600  rounded-full  inline-block -right-2'></span>
                            <span className=' absolute w-7 h-7 z-11 bg-gray-600 -top-1 rounded-full  inline-block -right-3'></span>
                            <span className=' absolute w-24 h-1 bg-yellow-500 z-11  rounded-full  inline-block -right-20 top-3 -z-10'></span>
                        </div>
                    </div>


                    <div className='relative h-60 -mt-20'>
                        <div className='absolute p-4 w-[300px] md:w-[800px] max-auto ms-20 right-0 -mt-4 text-right px-24' >
                            <p className='y-text'>Upload</p>
                            <h1 className='text-2xl font-semibold mt-2'>Upload invoices and contracts ⏳</h1>
                            <p className='sub-heading'>Invoices and contracts may not impact your cash just yet but it impacts your accounting. Easily upload these files</p>
                        </div>
                        <div className='absolute w-1 bg-yellow-500 h-48 '>
                            <span className=' absolute w-5 h-5 z-10 bg-yellow-600  rounded-full  inline-block -right-2'></span>
                            <span className=' absolute w-7 h-7 z-11 bg-gray-600 -top-1 rounded-full  inline-block -right-3'></span>
                            <span className=' absolute w-24 h-1 bg-yellow-500 z-11  rounded-full  inline-block -left-20 top-3 -z-10'></span>
                        </div>
                    </div>

                </div>

                <div className='flex  md:flex-col items-center -mt-12 '>


                    <div className='relative h-60'>
                        <div className='absolute p-4 w-[600px] ms-20 -mt-4' >
                            <p className='y-text'>Connect</p>
                            <h1 className='text-2xl font-semibold mt-2'>Integrate your bank account 🥧</h1>
                            <p className='sub-heading'>So we won't need to ask you for monthly reports. We'll pull the bank transactions directly. It's as easy as pie</p>
                        </div>
                        <div className='absolute w-1 bg-yellow-500 h-40'>
                            <span className=' absolute w-5 h-5 z-10 bg-yellow-600  rounded-full  inline-block -right-2'></span>
                            <span className=' absolute w-7 h-7 z-11 bg-gray-600 -top-1 rounded-full  inline-block -right-3'></span>
                            <span className=' absolute w-24 h-1 bg-yellow-500 z-11  rounded-full  inline-block -right-20 top-3 -z-10'></span>
                        </div>
                    </div>


                    <div className='relative h-60 -mt-20'>
                        <div className='absolute p-4 w-[800px] ms-20 right-0 -mt-4 text-right px-24' >
                            <p className='y-text'>Upload</p>
                            <h1 className='text-2xl font-semibold mt-2'>Upload invoices and contracts ⏳</h1>
                            <p className='sub-heading'>Invoices and contracts may not impact your cash just yet but it impacts your accounting. Easily upload these files</p>
                        </div>
                        <div className='absolute w-1 bg-yellow-500 h-40 '>
                            <span className=' absolute w-5 h-5 z-10 bg-yellow-600  rounded-full  inline-block -right-2'></span>
                            <span className=' absolute w-7 h-7 z-11 bg-gray-600 -top-1 rounded-full  inline-block -right-3'></span>
                            <span className=' absolute w-24 h-1 bg-yellow-500 z-11  rounded-full  inline-block -left-20 top-3 -z-10'></span>
                        </div>
                    </div>

                </div >

            </div>


            {/* mobile view */}
            <div className='md:hidden mobile-view max-w-[400px] px-6 mt-10'>


                <div className='relative h-60'>
                    <div className='absolute p-4   mx-auto ms-20 -mt-4' >
                        <p className='y-text'>Connect</p>
                        <h1 className='text-2xl font-semibold mt-2'>Integrate your bank account 🥧</h1>
                        <p className=''>So we won't need to ask you for monthly reports. We'll pull the bank transactions directly. It's as easy as pie</p>
                    </div>
                    <div className='absolute w-1 bg-yellow-500 h-48'>
                        <span className=' absolute w-5 h-5 z-10 bg-yellow-600  rounded-full  inline-block -right-2'></span>
                        <span className=' absolute w-7 h-7 z-11 bg-gray-600 -top-1 rounded-full  inline-block -right-3'></span>
                        <span className=' absolute w-24 h-1 bg-yellow-500 z-11  rounded-full  inline-block -right-20 top-3 -z-10'></span>
                    </div>
                </div>
                <div className='relative h-60 -mt-10'>
                    <div className='absolute p-4  mx-auto ms-20 -mt-4' >
                        <p className='y-text'>Context</p>
                        <h1 className='text-2xl font-semibold mt-2'>Integrate your bank account 🥧</h1>
                        <p className=''>Using plain simple English, describe the business activities that your accountant would need to know about</p>
                    </div>
                    <div className='absolute w-1 bg-yellow-500 h-40'>
                        <span className=' absolute w-5 h-5 z-10 bg-yellow-600  rounded-full  inline-block -right-2'></span>
                        <span className=' absolute w-7 h-7 z-11 bg-gray-600 -top-1 rounded-full  inline-block -right-3'></span>
                        <span className=' absolute w-24 h-1 bg-yellow-500 z-11  rounded-full  inline-block -right-20 top-3 -z-10'></span>
                    </div>
                </div>

            </div>




            <section>
                <div className='mt-20 pt-16 px-40 mb-10'>
                    <div className='text-center flex items-center justify-center mx-auto my-10'>
                        <p className='uppercase font-bold y-text'>FINANCE
                        </p>
                        <div className='bar w-[40px] h-[3px] block ms-2'></div>
                    </div>
                    <h1 className='hero-heading text-center'>Get ready for fundraising with a
                        financial model</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-40 gap-y-10 mt-10'>
                    {finance.map(item =>
                        <div key={item.id} className='p-4'>
                            <Image
                                src={item.icon}
                                alt={item.title}
                                height={40}
                            ></Image>
                            <h1 className='font-bold text-2xl'>{item.title}</h1>
                            <p className='sub-heading'>{item.desc}</p>
                        </div>)}
                </div>


                <div>

                </div>

            </section>










        </div >
    );
};

export default Service;