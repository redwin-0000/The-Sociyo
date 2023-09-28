import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import UpArrow from './UpArrow';
const Footer = () => {
    return (
        <div className='w-[100%] h-auto bg-[#F5F6FE]'>
            <div className='container mx-auto'>
                <div className='p-20'>
                    <div className='flex flex-col md:flex-row justify-between px-7 md:px-0'>
                        <div className='flex gap-8 text-[#445781]'>
                            <h1 className='cursor-pointer hover:underline underline-offset-4 hover:text-[#00D664]'>About</h1>
                            <h1 className='cursor-pointer hover:underline underline-offset-4 hover:text-[#00D664]'>Contact us</h1>
                        </div>
                        <div className='flex gap-10 items-center mt-5 md:mt-0'>
                            <FaFacebook size={20} className='cursor-pointer hover:text-[#777AF2]' />
                            <FaTwitter size={20} className='cursor-pointer hover:text-[#777AF2]' />
                            <FaInstagram size={20} className='cursor-pointer hover:text-[#777AF2]' />
                        </div>
                    </div>
                    <div className='lg:w-auto h-[0.01rem] bg-gray-500 mt-[1rem] ' />
                    {/* ------------------------------------------------- */}
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10 py-20'>
                        <div className=''>
                            <h1 className='text-xl font-bold text-[#445781]'>Sociyo</h1>
                            <div className='mt-6 text-gray-400'>
                                <p>Sociyo Communication – bridging the gap</p>
                                <p>between brands and their audiences through</p>
                                <p>creative and impactful public relations</p>
                                <p> strategies.</p>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-bold text-[#445781]'>Registered Office</h1>
                            <div className='mt-6 text-gray-400'>
                                <p>A-69, Kasturba Nagar,</p>
                                <p>Bhopal - 462023</p>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='text-xl font-bold text-[#445781]'>Corporate Office</h1>
                            <div className='mt-6 text-gray-400'>
                                <p>HIG-84, Sector-A, Vidhya Nagar,</p>
                                <p>Bhopal - 462026</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-auto h-[0.01rem] bg-gray-500 lg:mt-[1rem] -mt-[3rem]' />
                    <div className='flex  justify-center mt-6 '>
                        <h1 className='text-gray-400'>Sociyo Communications. All Rights Reserved © 2023. Powered by <span className='text-[#445781] ml-3'><a href='/'>Zwantum.</a></span></h1>
                    </div>
                </div>
            </div>
            <UpArrow/>
        </div>
    )
}

export default Footer