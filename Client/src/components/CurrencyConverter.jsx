import React from 'react'
import doubleDirectionArrow from '../assets/images/Arrow.png'
const CurrencyConverter = () => {
  return (
    <div>

        <form action="">
            <div className='flex p-[2rem] gap-[2rem]  border border-black'>

            <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                <label htmlFor="amount">Amount</label>
                <input type="number" name='amount' className='border border-black rounded-lg p-[0.2rem]'/>
            </div>

            <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                <label htmlFor="of">Of</label>
                <input type="number" name='of' className='border border-black rounded-lg p-[0.2rem]'/>
            </div>
            
            <div className='border border-black relative top-[1.7rem] rounded-full  flex items-center justify-center self-baseline  w-[2.7rem] h-[2.5rem]' >
            <img src={doubleDirectionArrow} alt=""  />

            </div>
            

            <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                <label htmlFor="towards">towards</label>
                <input type="number" name='towards' className='border border-black rounded-lg p-[0.2rem]'/>
            </div>

            </div>
        </form>

    </div>
  )
}

export default CurrencyConverter