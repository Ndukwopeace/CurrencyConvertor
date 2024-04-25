import React,{useEffect,useState} from 'react'
import doubleDirectionArrow from '../assets/images/Arrow.png'
import info from '../assets/images/SVG (4).png'
import currencyRequests from '../../Requests/CurrencyRequests.js'
import countries from '../../Countries/countries.js'


const CurrencyConverter = () => {
    const [exchangeRate , setExchangeRate] = useState('');
    const [amount , setAmount] = useState(1);
    const [currencies , setCurrencies] = useState([]);
    const [ofCurrency , setOfCurrency] = useState('USD');
    const [towardsCurrency , setTowardsCurrency] = useState('AED');
    const [loaded , setLoaded] = useState(false)
    useEffect(()=>{
           setCurrencies([currencies, ...countries]);
            console.log(currencies)
    },[])

    console.log(countries.length)
  

    const handleSubmit = (e)=>{
         e.preventDefault()
        
        }

    const exchangeCurrency = (e) =>{
        e.preventDefault();
        const tempCurrency = ofCurrency;

        setOfCurrency(towardsCurrency)
        setTowardsCurrency(tempCurrency);
    }

    
    return (
        <div >

            <form onSubmit={handleSubmit} className='flex flex-col p-[2rem] gap-[2rem]'>
                {/* inputs  */}
                <div className='flex  gap-[2rem]  '>

                    <div className='flex flex-col w-[24%] gap-[0.5rem]'>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name='amount' value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        className='border border-[#6f7c9c] rounded-lg p-[0.2rem] shadow-md' />
                    </div>
            {/* Select */}
                    <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                        <label htmlFor="of">Of</label>
                        <select  name='of' value={ofCurrency}
                        onChange={(e)=>setOfCurrency(e.target.value)}
                        className='border border-[#6f7c9c] rounded-lg p-[0.2rem] shadow-md' >
                        {
                            currencies?.map((currency)=>{
                                
                                // console.log(Object.keys(currency.currencies || {}).length)
                                
                               return  <option value={Object.keys(currency.currencies || {})[0]}> {currency.flag} - {Object.keys(currency.currencies || {})[0]}</option>
                            })
                        }
                        </select>
                    </div>
            {/* Select */}

                    <div className='hover:cursor-pointer border border-[#6f7c9c] relative top-[1.7rem]  shadow-md rounded-full  flex items-center justify-center self-baseline  w-[2.7rem] h-[2.5rem]' >
                        <img src={doubleDirectionArrow} alt="" onClick={exchangeCurrency}/>

                    </div>


                    <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                        <label htmlFor="towards">towards</label>
                        <select  name='towards' value={towardsCurrency}
                        onChange={(e)=>setTowardsCurrency(e.target.value)}
                        className='border border-[#6f7c9c] rounded-lg p-[0.2rem] shadow-md' >
                        <option value="USD" > USD</option>
                        <option value="AED" > AED</option>
                        </select>

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

                    <button
                    type='submit' 
                    className='bg-[#472E72] text-white self-center p-[0.7rem] rounded-lg'>
                        Convert
                    </button>
                </div>

            </form>

        </div>
    )
}

export default CurrencyConverter