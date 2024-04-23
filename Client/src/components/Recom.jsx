import React from 'react'
import { Paper } from '@mui/material'
import star from '../assets/images/Vector.png'
import logo1 from '../assets/images/SVG1.png'


const Recom = () => {
  return (
    <>
      <div className='bg-[#FAFAFB]  flex flex-col gap-[2rem] pt-[1rem] pb-[4rem]'>
        <h3 className='self-center text-[#0A146E] font-[600] text-[1.3rem]'>Recommended by over 40,000 verified customers</h3>

        <div className='flex gap-[3rem] justify-center'>
          {/* first */}
          <div className='bg-[#060D4C] text-white text-[1.1rem] w-[16rem] flex flex-col items-center justify-center gap-[0.5rem]  rounded-lg'>
            <p>'Great'</p>
            <div className='flex '>
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
            </div>
            <p>Based on 68,513 reviews</p>
            <div className='flex gap-[0.2rem] '>
              <img src={star} alt="" />
              <span className='relative top-[0.5rem]'>Trustpilot</span>
            </div>
          </div>
          {/* two */}
          <div className='text-[1.1rem] border shadow-md flex flex-col gap-[2rem] p-[1rem] w-[16rem] rounded-lg'>
            <div className='flex flex-col '>
            <div className='flex'>
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
            </div>
            <p className='font-[600]'>'I'd like to have a French
              communication</p>
            <p className='text-[0.9rem]'>I'd like to have a French
              communication</p>

            </div>
            <div className='flex flex-col gap-[0.2rem] text-xs'>
              <p >Johanne Fréchette</p>
              <span className='text-[#F89623] '>22 hours, 57 minutes ago</span>
            </div>
          </div>

  {/* three */}
  <div className='text-[1.1rem] border shadow-md flex flex-col gap-[5rem] p-[1rem] w-[16rem] rounded-lg'>
            <div className='flex flex-col '>
            <div className='flex'>
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
              <img src={star} alt="" className='w-[1.5rem] h-[1.5rem] ' />
            </div>
            <p className='font-[600]'>Good one more time</p>
            <p className='text-[0.9rem]'>Good one more time</p>

            </div>
            <div className='flex flex-col gap-[0.2rem] text-xs'>
              <p >FREDERIC COULLON</p>
              <span className='text-[#F89623] '>99 hours, 58 minutes ago</span>
            </div>
          </div>


        </div>

      </div>

    </>
  )
}

export default Recom