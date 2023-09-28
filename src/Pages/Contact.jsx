import React from 'react'
 import bg from "../assets/marketing-logos2.png"
// import "./Bg.css"
import Animation from "../Components/Animation"
const Contact = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-no-re'>
    <div id='contact' className='w-full h-screen flex justify-center items-center ' >
      <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center -mt-[17rem] md:-mt-[0rem] lg:-mt-[0rem] '>
        <h1 className='text-[1.5rem] lg:text-[3rem] font-bold text-[#1E266D] flex flex-wrap sm:flex-col lg:flex-row'>Have a new project in mind? {" "}</h1>
        <p className='mt-6 text-[#445781] flex flex-wrap p-6'>We develop impactful PR campaigns tailored on the basis of information about our clients' values and objectives ensuring that the message </p>
        <p className='text-[#445781] flex flex-wrap -mt-5 lg:-mt-0'>achieves its intended impact.</p>
        <button className='bg-[#777AF2] hover:bg-[#1E266D] px-7 py-3 rounded-[20rem] text-md text-white flex items-center mt-14'>Contact us</button>
      </div>
      </div>
      {/* <Animation /> */}
    </div>
    </div>
  )
}

export default Contact