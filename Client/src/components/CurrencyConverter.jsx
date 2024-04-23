import React from 'react'
import doubleDirectionArrow from '../assets/images/Arrow.png'
import info from '../assets/images/SVG (4).png'

const CurrencyConverter = () => {
    return (
        <div >

            <form action="" className='flex flex-col  p-[2rem] gap-[2rem]'>
                {/* inputs  */}
                <div className='flex  gap-[2rem]  '>

                    <div className='flex flex-col w-[24%] gap-[0.5rem]'>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name='amount' className='border border-[#6f7c9c] rounded-lg p-[0.2rem] shadow-md' />
                    </div>

                    <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                        <label htmlFor="of">Of</label>
                        <input type="number" name='of' className='border border-[#6f7c9c] rounded-lg p-[0.2rem] shadow-md' />
                    </div>

                    <div className='hover:cursor-pointer border border-[#6f7c9c] relative top-[1.7rem]  shadow-md rounded-full  flex items-center justify-center self-baseline  w-[2.7rem] h-[2.5rem]' >
                        <img src={doubleDirectionArrow} alt="" />

                    </div>


                    <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                        <label htmlFor="towards">towards</label>
                        <input type="number" name='towards' className='border border-[#6f7c9c] rounded-lg p-[0.2rem] shadow-md' />
                    </div>

                </div>

                {/* Hero Note  */}

                <div className=' w-[30%] font-[600] leading-7'>
                    <p >1.00 United States Dollar = <span className='text-[#5E3D98] text-xl'>0,93 <span className='text-[#9d8cb9] ml-[-0.3rem]'>847853 </span></span>Euro</p>
                    <p className='text-sm'>1 EUR = 1,06527 USD</p>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[65%] bg-[#F2F7FE] text-[0.7rem] flex items-center gap-[0.7rem] px-[0.6rem] py-[0.5rem] text-[#373C49] rounded-lg'>
                        <img src={info} alt="" />
                        <p>We use the mid-market rate for our converter. The rate is given for information
                            purposes only. You will not benefit from this rate when sending money.
                             <a href=""> Check shipping rates </a> </p>
                    </div>

                    <button className='bg-[#472E72] text-white self-center p-[0.7rem] rounded-lg'>
                        Convert
                    </button>
                </div>

            </form>

        </div>
    )
}

export default CurrencyConverter