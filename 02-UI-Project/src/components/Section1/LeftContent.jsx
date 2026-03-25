import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between '>
       <div className='p-6'>
         <h3 className='text-7xl font-bold mb-7  '>Prospective <br /> 
         <span>Customer</span> <br /> Segmentation</h3>

         <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Mollitia quos ab eaque dolore officiis tenetur deserunt 
             luptates nulla fugit id tenetur. expedita eius dicta ipsa!</p>
       </div>


       <div>
        
       </div>
       <div><ArrowUpRight size={20} strokeWidth={2.5} absoluteStrokeWidth /></div>
    </div>
  )
}

export default LeftContent
