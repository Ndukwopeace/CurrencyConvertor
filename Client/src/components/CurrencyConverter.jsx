import React,{useEffect,useState} from 'react'
import doubleDirectionArrow from '../assets/images/Arrow.png'
import info from '../assets/images/SVG (4).png'
import currencyRequests from '../../Requests/CurrencyRequests.js'
import countries from '../../Countries/countries.js'


const CurrencyConverter = () => {
    const [exchangeRate , setExchangeRate] = useState('');
    const [result , setResult] = useState(1)
    const [symbol , setSymbol] = useState(null);
    const [amount , setAmount] = useState(1);
    const [currencies , setCurrencies] = useState([]);
    // of currency States
    const [ofCurrency , setOfCurrency] = useState('');
    const [ofCurrencyObject , setOfCurrencyObject] = useState({});

    //  towards currency states 
    
    const [towardsCurrency , setTowardsCurrency] = useState('');
    const [towardsCurrencyObject , setTowardsCurrencyObject] = useState({});

    

    console.log(ofCurrency);
    console.log(towardsCurrency);
    console.dir(towardsCurrencyObject)
    useEffect(()=>{
           setCurrencies(countries)
            console.log(currencies)
    },[])



    const handleSubmit = (e)=>{
         e.preventDefault()
        // currencyRequests.latest({
        //     base_currency: ofCurrency,
        //     currencies: towardsCurrency
        // })
        // .then(response =>{
        //     console.log(response.data)
        //     console.log(Object.values(Object.values(response.data)[0])[1])
        //     const rate = Object.values(Object.values(response.data)[0])[1]
        //     setExchangeRate(rate)
        //     console.log(amount)

           
        // })

        // const finalValue = amount * Number(exchangeRate);
        // setResult(finalValue)
        // console.log(result);


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
                                // console.log(Object.keys(currency.currencies || {}))
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
                        onChange={(e)=>{
                            // setTowardsCurrencyObject(e.target.value)
                            setTowardsCurrency(e.target.value)
                        }}
                        className='border border-[#6f7c9c] rounded-lg p-[0.2rem] shadow-md text-xs ' >
                      {
                            currencies?.map((currency)=>{
                                // console.log(Object.keys(currency.currencies || {}))
                            
                                    return <option  value={Object.keys(currency.currencies || {})[0]} myattribute={Object.values(Object.values(currency.currencies || {})[0] || '' )[0]}
                                    >{currency.flag}  {Object.keys(currency.currencies || {})[0]} - {Object.values(Object.values(currency.currencies || {})[0] || '' )[0]} </option>
                                    
                                
                            })
                        }
                        </select>

                    </div>

                </div>

                {/* Hero Note  */}

                <div className=' w-[30%] font-[600] leading-7'>
                    <p >1.00 United States Dollar = <span className='text-[#5E3D98] text-xl'>0,93 <span className='text-[#9d8cb9] ml-[-0.3rem]'>847853 </span></span>Euro</p>
                    <p className='text-sm'>1 EUR = 1,06527 USD </p>
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