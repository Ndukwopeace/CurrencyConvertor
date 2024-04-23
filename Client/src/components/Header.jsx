import react , { useState } from 'react'
import '../assets/styles/Header.css'
import { Box } from '@mui/material'


const Header = () =>{

    return (
        <>
        <div className='flex flex-col items-center 
        pt-[2.5rem] gap-[1rem] bg-[#211535]
         text-white h-[17rem] overflow-clip relative'>

                 { /* Circles ================================================== */ }

                <div className="border-[#DF8720] border-[2.3rem] h-[15rem] w-[15rem] rounded-full absolute left-[-5rem] top-[-1.4rem]" ></div>
                <div className="border-[#DF8720] border-[7.5rem] h-[35rem] w-[35rem] rounded-full absolute right-[-4.5rem] top-[-9rem]"></div>


                <h1 className='relative font-[600] text-[2.2rem]'>
                PayUnit Currency Converter
                </h1>
                <p className='relative text-sm'>
                Welcome to the world's most popular money tool.
                </p>
            </div>
        </>
    )


}

export default Header;