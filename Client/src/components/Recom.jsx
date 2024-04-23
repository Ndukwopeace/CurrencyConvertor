import React from 'react'
import { Paper } from '@mui/material'
import star from '../assets/images/Vector.png'
import logo1 from '../assets/images/SVG1.png'


const Recom = () => {
  return (
    <>
    <div className='bg-grey border border-black text-center flex flex-col'>
        <h3>Recommended by over 40,000 verified customers</h3>

        <div className='flex  '>
            <div className='bg-[#060D4C] text-white text-[1.1rem] flex flex-col items-center gap-[0.5rem] p-[2rem] rounded-lg'>
                  <p>'Great'</p>
                  <div className='flex '>
                    <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] '/>   
                    <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] '/>    
                    <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] '/>    
                    <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] '/>    
                    <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] '/>    
                  </div>
                  <p>Based on 68,513 reviews</p>
                <div className='flex gap-[0.2rem] '>
                  <img src={star} alt="" />
                  <span className='relative top-[0.5rem]'>Trustpilot</span>
                </div>
            </div>
        </div>
        
    </div>
    
    </>
  )
}

export default Recom