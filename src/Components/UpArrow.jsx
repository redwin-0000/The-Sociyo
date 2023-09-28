import React from 'react'
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
const UpArrow = () => {
  return (
    <div className='flex justify-end -mt-28 mr-10'>
        <div 
        onClick={() => {
document
    .getElementById("header")
    .scrollIntoView({ behavior: "smooth" })
        }}
        className='bg-gray-100 hover:shadow-inner w-20 h-20 p-5 rounded-full items-center shadow-2xl cursor-pointer'>
           <MdOutlineKeyboardDoubleArrowUp size={40} className='text-[#777AF2]'/>
        </div>
    </div>
  )
}

export default UpArrow