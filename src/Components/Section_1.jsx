import React from 'react'
import { CiPlay1 } from 'react-icons/ci';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import marketing from "../assets/marketing1.jpg"
const Section_1 = () => {
    return (
        <div id='home' className='w-[100%] h-auto'>
            <div className='lg:px-[10rem] lg:py-[10rem] container mx-auto md:px-[15rem]'>
                {/* container mx-auto  */}
                <div className='flex justify-around p-10'>
                    <div className='flex flex-col space-y-4'>
                        <div className='flex items-center flex-col lg:flex-row space-y-3 lg:space-y-0'>
                            <div className='bg-[#777AF2] hover:bg-[#1E266D] px-3 py-1 rounded-2xl text-white cursor-pointer'><h1>Supercharge your PR</h1></div>
                            <div className='bg-[#EBEBFD] px-3 py-1 rounded-xl'><h1>with proven strategy or ours</h1></div>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-[2.6rem] lg:text-[3.5rem] text-[#1E266D]'>Sociyo</h1>
                            <h1 className='font-bold text-[2.6rem] lg:text-[3.5rem] -mt-5 text-[#1E266D]'>Communications</h1>
                            <h1 className='mt-6 text-[#445781]'>Bridging the gap between brands and their audiences through creative <br /> and impactful public relations strategies.</h1>
                            <div className='mt-14 flex items-center gap-10'>
                                <button className='bg-[#777AF2] hover:bg-[#1E266D] px-6 py-5 rounded-[20rem] cursor-pointer text-md text-white flex items-center'>Start a project<MdOutlineKeyboardArrowRight size={30} /></button>
                                <CiPlay1
                                    // onClick={{//video link add here...}}
                                    size={20}
                                    className='bg-gray-100 hover:bg-[#777AF2] w-20 h-20 p-5 rounded-full items-center shadow-2xl cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    {/* right section */}
                    <div className='invisible lg:visible'>
                        <img src={marketing} alt='marketing' className='w-[60rem] ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_1