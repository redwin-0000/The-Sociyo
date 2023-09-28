import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Animation=()=> {
  return (
   <>
   <div className="text-[3rem] font-bold text-[#1E266D]">
  <TypeAnimation
      sequence={[
        'Start today!', 
        1000, 
        'We can help.', 
        1000, 
        'Lets talks!', 
        1000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    //   className='text-[3rem] font-bold text-[#1E266D]'
    />
    </div>
   </>
  );
}

export default Animation;