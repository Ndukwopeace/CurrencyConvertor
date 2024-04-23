import React from 'react';
import appleLogo from '../assets/images/SVG (1).png';
import googleLogo from '../assets/images/SVG.png';
import trustPilot from '../assets/images/SVG1.png';
import star from '../assets/images/SVG 3.png';
import greenStar from '../assets/images/Vector (5).png';

const Footer = () => {
  return (
    <div className='bg-[#F7F8F9] flex justify-center  gap-[5rem] py-[2rem]'>
        {/* logos */}
        {/* appleLogo */}
        <div className='flex items-center gap-[0.7rem]'>
          <img src={appleLogo} alt="" />
          {/* ratings */}
          <div className='flex flex-col gap-[0.5rem] items-center'>
            {/* stats */}
            <div className='flex gap-[0.2rem]' >
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <p className='text-xs'><span className='font-[600] '>4.5/5</span>, 2.2k ratings</p>
          </div>
        </div>

         {/* googleLogo */}
         <div className='flex items-center gap-[0.7rem]'>
          <img src={googleLogo} alt="" />
          {/* ratings */}
          <div className='flex flex-col gap-[0.5rem] items-center'>
            {/* stats */}
            <div className='flex gap-[0.2rem]' >
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <p className='text-xs'><span className='font-[600] '>3.8/5</span>, 90.8k ratings</p>
          </div>
        </div>

        {/* trustPilot */}
        <div className='flex items-center gap-[0.7rem]'>
          <img src={trustPilot} alt="" />
          {/* ratings */}
          <div className='flex flex-col gap-[0.5rem] items-center'>
            {/* stats */}
            <div className='flex gap-[0.2rem]' >
              <img src={greenStar} alt="" />
              <img src={greenStar} alt="" />
              <img src={greenStar} alt="" />
              <img src={greenStar} alt="" />
              <img src={greenStar} alt="" />
            </div>

            <p className='text-xs'><span className='font-[600] '>4.7/5</span>, 41.5k ratings</p>
          </div>
        </div>
    </div>
  )
}

export default Footer