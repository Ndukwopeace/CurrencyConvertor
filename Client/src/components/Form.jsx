import React from 'react';
import coins from '../assets/images/SVG (2).png';
import arrowHead from '../assets/images/Vector (1).png';
import graph from '../assets/images/Vector (2).png';
import alerts from '../assets/images/SVG (3).png';
import CurrencyConverter from './CurrencyConverter';



const Form = () => {
  return (
    <div className='flex justify-center h-[37vh]'>
        <div className='w-[65%] absolute top-[10rem] z-50 bg-white rounded-xl shadow-md overflow-clip'>
        {/* Navbar */}
          <div className='grid grid-cols-4 hover:cursor-pointer bg-[#F0F5FA] py-[0.7rem] '>
            <div className='flex items-center gap-2 justify-center focus:bg-white'>
              <img src={coins} alt="" />
              <p>Convert</p>
            </div>

            <div className='flex items-center gap-2 justify-center'>
              <img src={arrowHead} alt="" />
              <p>Send</p>
            </div>

            <div className='flex items-center gap-2 justify-center'>
              <img src={graph} alt="" />
              <p>Graphics</p>
            </div>

            <div className='flex items-center gap-2 justify-center'>
              <img src={alerts} alt="" />
              <p>Alerts</p>
            </div>
          </div>

        {/* currency converter  */}

        <CurrencyConverter/>


        </div>


    </div>
  )
}

export default Form