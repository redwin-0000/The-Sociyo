import React from 'react'
// import Dots from "../assets/dots.jpg"
import Market_icons_1 from "../assets/marketing-icon1.png"
import Market_icons_2 from "../assets/marketing-icon2.png"
import Market_icons_3 from "../assets/marketing-icon3.png"
import Market_icons_4 from "../assets/marketing-icon4.png"
import Market_icons_5 from "../assets/marketing-icon5.png"
import Market_icons_6 from "../assets/marketing-icon6.png"
import Dots1 from "../assets/dots1.png"
import Dots2 from "../assets/dots2.png"

const Service = () => {
    return (
        <div id='service' className='service bg-[#F5F6FE] w-[100%] h-auto'>
            <div className='container mx-auto '>
                <div className='flex flex-col justify-center items-center py-24'>
                    <h1 className='text-[1rem] lg:text-[3rem] md:text-[2rem] font-bold text-[#1E266D] flex flex-wrap '>Building relations, fostering connections:</h1>
                    <h1 className='text-[1rem] mt-2 lg:text-[3rem] font-bold lg-mt-3 text-[#1E266D] md:text-[2rem] '>Sociyo Communications</h1>
                    <h1 className='mt-5 text-[#445781] px-7 md:py-4 lg:px-0'>We help our clients communicate their message and build strong relationships with their constituents through strategic public relations.</h1>
                   {/* ------------------------------------------------------------ */}
                    <div className=' mt-[4rem] flex gap-7 flex-col lg:flex-row'>
                        <div className='rounded-md w-[22rem] h-[22rem] bg-white hover:drop-shadow-xl'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Market_icons_1} alt='marketIcons1' className='py-10' />
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Content Planning</h1>
                                <p className='p-6'>We create content that is descriptive, perceptive, and persuasive which creates a strong presence in the mind of your audience both on and beyond the virtual sphere.</p>
                            </div>
                        </div>
                        <div className='rounded-md w-[22rem] h-[26rem] bg-white hover:drop-shadow-xl'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Market_icons_2} alt='marketIcons2' className='py-10' />
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Media Planning and </h1>
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Management</h1>
                                <p className='p-6'>Rather than exploring a plethora of mediums and building strongly on none, we make sure that we are able to identify and cultivate the right mediums of media for creating your brand.</p>
                            </div>
                        </div>
                        <div className='rounded-md w-[22rem] h-[26rem] bg-white hover:drop-shadow-xl'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Market_icons_3} alt='marketIcons3' className='py-10' />
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Research, Survey and </h1>
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Analytic</h1>
                                <p className='p-6'>We conduct adept research through study, survey, analytics, analogy, and observation of your intended audience so that when you enter the market, you ace it by making informed decisions.</p>
                            </div>
                        </div>
                        <img src={Dots1} alt='dots' className='h-[10rem] w-20 mt-[12rem] invisible lg:visible'/>
                        {/* <img src={Dots} alt='dots' className='w-20 h-28'/> */}
                    </div>
                    {/* ------------------------------- */}
                    <div className='lg:mt-[4rem] -mt-[45rem] flex   gap-7 flex-col lg:flex-row'>
                    <img src={Dots2} alt='dots' className='h-[22rem] w-20 lg:mt-16 invisible lg:visible'/>
                        <div className=' rounded-md w-[22rem] h-[26rem] bg-white hover:drop-shadow-xl'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Market_icons_4} alt='marketIcons4' className='py-10' />
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Event Execution Services</h1>
                                <p className='p-6'>To make your events matter, you must be able to reach out to the right and diligent audience. With our event execution services, we ensure that we fetch the right mass for the right candor.</p>
                            </div>
                        </div>
                        <div className=' rounded-md w-[22rem] h-[26rem] bg-white hover:drop-shadow-xl'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Market_icons_5} alt='marketIcons5' className='py-10' />
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Creative Communication </h1>
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Services</h1>
                                <p className='p-6'>Our passionate and creative team is ready to etch strategies to make your presence stronger, attractive, and engaging, so that you communicate with the right minds in a non-rudimentary way</p>
                            </div>
                        </div>
                        <div className=' rounded-md w-[22rem] h-[22rem] bg-white hover:drop-shadow-xl'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={Market_icons_6} alt='marketIcons6' className='py-10' />
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Branding and Image </h1>
                                <h1 className='font-bold text-[#1E266D] text-2xl'>Makeover</h1>
                                <p className='p-6'>We derive and deploy various strategies to make your brand more resounding and appealing for your intended audience.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='w-[70rem] h-[0.01rem] bg-gray-500 mt-[3rem]' /> */}
                </div>
            </div>
        </div>
    )
}

export default Service