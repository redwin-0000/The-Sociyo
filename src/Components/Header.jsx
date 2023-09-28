import React, { useState } from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// import "Bg.css"
import Sub_Header from './Sub_Header';
const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div id='header' className='navbar w-full '>
            <div className='container mx-auto  lg:px-[10rem] px-5  invisible md:visible'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1'>
                        <div className='w-[0.1rem] h-10 bg-gray-300' />
                        <h1 className='py-2 text-[0.9rem] cursor-pointer hover:text-[#777AF2] invisible md:visible'>+91 8269490048</h1>
                        <div className='w-[0.1rem] h-10 bg-gray-300 invisible md:visible' />
                        <div className='py-2 text-[0.9rem]'>
                        <h1 className=' cursor-pointer hover:text-[#777AF2]'>contact@thesociyo.com</h1>
                        <h1 className='cursor-pointer hover:text-[#777AF2] md:invisible'>+91 8269490048</h1></div>
                        <div className='w-[0.1rem] h-10 bg-gray-300' />
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='w-[0.1rem] h-10 bg-gray-300' />
                        <FaFacebook size={20} className='cursor-pointer text-[#777AF2] hover:text-[#1E266D]' />
                        <div className='w-[0.1rem] h-10 bg-gray-300 ' />
                        <FaTwitter size={20} className='cursor-pointer text-[#777AF2] hover:text-[#1E266D]' />
                        <div className='w-[0.1rem] h-10 bg-gray-300' />
                        <FaInstagram size={20} className='cursor-pointer text-[#777AF2]  hover:text-[#1E266D]' />
                        <div className='w-[0.1rem] h-10 bg-gray-300' />
                    </div>
                </div>
            </div>
             <div className='lg:w-full h-[0.01rem] bg-gray-300' />
            <Sub_Header />
        </div>
    )
}

export default Header