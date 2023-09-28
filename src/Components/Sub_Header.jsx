import React, { useState } from 'react'
import Logo from "../assets/the-sociyon_logo.png"
import { CiSearch } from 'react-icons/ci';
const Sub_Header = () => {
    let [openMenu, setOpenMenu] = useState(false)
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
        <div className='container mx-auto'>
            <div className='lg:px-[10rem] px-2 flex justify-between items-center'>
                <img src={Logo} alt='logo' className='lg:w-[10rem] w-[5rem] cursor-pointer' />
                {/* <div className='visible md:invisible absolute right-8 cursor-pointer' onClick={() => setOpenMenu(!openMenu)}> */}
                        {/* <ion-icon name={openMenu ? 'close':'menu'} ></ion-icon> */}
                    {/* </div> */}
                <div className='flex gap-5 items-center invisible lg:visible' >
                    <ul className='flex gap-7 hover:text-gray-300'>
                        <li onClick={() => {
                            document
                                .getElementById("home")
                                .scrollIntoView({ behavior: "smooth" })
                        }} className='text-[#669DF3] cursor-pointer'>Home</li>
                        <li
                            onClick={() => {
                                document
                                    .getElementById("service")
                                    .scrollIntoView({ behavior: "smooth" })
                            }} className='hover:text-[#669DF3] cursor-pointer'>Services</li>
                        <li
                            onClick={() => {
                                document
                                    .getElementById("contact")
                                    .scrollIntoView({ behavior: "smooth" })
                            }} className='hover:text-[#669DF3] cursor-pointer'>Contact</li>
                    </ul>
                    <CiSearch size={20} className='cursor-pointer' />
                    <button className='border-2 hover:bg-[#777AF2] hover:text-white border-[#777AF2] rounded-3xl px-10 py-3 text-[#777AF2]'>Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default Sub_Header