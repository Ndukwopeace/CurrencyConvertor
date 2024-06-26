import React, { useEffect, useState } from 'react'
import doubleDirectionArrow from '../assets/images/Arrow.png'
import info from '../assets/images/SVG (4).png'
import currencyRequests from '../../Requests/CurrencyRequests.js'
import countries from '../../Countries/countries.js'
import axios from 'axios'


const CurrencyConverter = () => {
    // const [exchangeRate , setExchangeRate] = useState('');
    const [result, setResult] = useState(1)
    const [symbol, setSymbol] = useState(null);
    const [amount, setAmount] = useState(1);
    const [currencies, setCurrencies] = useState([]);
    const [convert, setConvert] = useState(false);
    const [myOut , setMyOut] = useState('none')

    // of currency States
    const [ofCurrency, setOfCurrency] = useState('');
    const [ofCurrencyName, setOfCurrencyName] = useState('');
    const [myOfValue, setMyOfValue] = useState(null);

    //  towards currency states 

    const [towardsCurrency, setTowardsCurrency] = useState('');
    const [towardsCurrencyName, setTowardsCurrencyName] = useState('');
    const [myValue, setMyValue] = useState(null);
    const [towardSymbol, setTowardSymbol] = useState(null);





    console.log(symbol);
    console.log(ofCurrency);
    console.log(towardsCurrency);
    // console.dir(towardsCurrencyObject)
    useEffect(() => {

        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCurrencies(response.data);
                console.log(currencies)
            }
            )

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        setResult(null);
        setConvert(true);
        currencyRequests.latest({
            base_currency: ofCurrency,
            currencies: towardsCurrency
        })
            .then(response => {
                console.log(response.data)
                console.log(Object.values(Object.values(response.data)[0])[1])
                const rate = Object.values(Object.values(response.data)[0])[1]
                // setExchangeRate(rate)
                console.log(amount)
                const final = rate * amount;
                setResult(final);

            })

        // const finalValue = amount * Number(exchangeRate);
        // setResult(finalValue)
        // console.log(result);


    }

    // handle Of change  ======================================================================>

    const handleOfChange = async (e) => {
        setConvert(false)
        const value = e.target.value;
        console.log(value)
        const values = value.split('-');
        console.log(values)

        const currencyObject = {
            'currency': values[0],
            'name': values[1],
            'symbol': values[2]
        }

        setOfCurrency(currencyObject.currency);
        setOfCurrencyName(currencyObject.name);
        setSymbol(currencyObject.symbol);
    }



    // handle towards change ==================================================================

    const handleTowardsChange = async (e) => {
        setConvert(false)
        const value = e.target.value;
        console.log(value)
        const values = value.split('-');
        console.log(values)

        const currencyObject = {
            'currency': values[0],
            'name': values[1],
            'symbol': values[2]
        }

        setTowardsCurrency(currencyObject.currency);
        setTowardsCurrencyName(currencyObject.name);
        setTowardSymbol(currencyObject.symbol);

    }

    const exchangeCurrency = (e) => {
        e.preventDefault();

        const tempCurrency = ofCurrency;
        setOfCurrency(towardsCurrency)
        setTowardsCurrency(tempCurrency);


        const tempValue = myOfValue;
        setMyOfValue(myValue);
        setMyValue(tempValue);

        const tempCurrencyName = ofCurrencyName;
        setOfCurrencyName(towardsCurrencyName);
        setTowardsCurrencyName(tempCurrencyName);

        const tempSymbol = symbol;
        setSymbol(towardSymbol);
        setTowardSymbol(tempSymbol);

    }


    return (
        <div >

            <form onSubmit={handleSubmit} className='flex flex-col p-[2rem] gap-[2rem]'>
                {/* inputs  */}
                <div className='flex  gap-[2rem]  '>

                    <div className='flex flex-col w-[24%] gap-[0.5rem] '>
                        <label htmlFor="amount">Amount</label>

                        <div className='border border-[#6f7c9c]  gap-3 flex items-center rounded-lg  overflow-clip'>

                            <input type="number"  name='amount' inputMode='numeric' value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className='p-[0.2rem] shadow-md max-w-[70%]  outline-none' />
                            <span>{symbol}</span>

                        </div>
                    </div>
                    {/* Select */}
                    <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                        <label htmlFor="of">Of</label>
                        <select name='of' value={myOfValue}
                            onChange={(e) => {
                                setMyOfValue(e.target.value);
                                handleOfChange(e);
                            }}
                            className='border border-[#6f7c9c] rounded-lg p-[0.5rem] shadow-md text-xs' >
                            {
                                currencies?.map((currency) => {
                                    // console.log(Object.keys(currency.currencies || {}))
                                    return <option value={`${Object.keys(currency.currencies || '')[0]}-${Object.values(Object.values(currency.currencies || {})[0] || '')[0]}-${Object.values(Object.values(currency.currencies || {})[0] || '')[1]} `}>
                                        {currency.flag}
                                        {Object.keys(currency.currencies || {})[0]} -
                                        {Object.values(Object.values(currency.currencies || {})[0] || '')[0]} </option>
                                })
                            }
                        </select>
                    </div>
                    {/* Select */}

                    <div className='hover:cursor-pointer border border-[#6f7c9c] relative top-[1.7rem]  shadow-md rounded-full  flex items-center justify-center self-baseline  w-[2.7rem] h-[2.5rem]' >
                        <img src={doubleDirectionArrow} alt="" onClick={exchangeCurrency} />
                    </div>

                    {/* TOWARDS========================================================================================== */}
                    <div className='flex flex-col w-[27%] gap-[0.5rem]'>
                        <label htmlFor="towards">towards</label>
                        <select name='towards' value={myValue}
                            onChange={(e) => {
                                setMyValue(e.target.value)
                                handleTowardsChange(e);
                            }}

                            className='border border-[#6f7c9c] rounded-lg p-[0.5rem] shadow-md text-xs ' >
                            {
                                currencies?.map((currency) => {
                                    // console.log(Object.keys(currency.currencies || {}))
                                    return <option id="towards" value={`${Object.keys(currency.currencies || '')[0]}-${Object.values(Object.values(currency.currencies || {})[0] || '')[0]}-${Object.values(Object.values(currency.currencies || {})[0] || '')[1]} `}
                                    >{currency.flag}
                                        {Object.keys(currency.currencies || '')} -
                                        {Object.values(Object.values(currency.currencies || {})[0] || '')[0]}
                                    </option>
                                })
                            }
                        </select>

                    </div>

                </div>

                {/* Hero Note  */}

                {convert && <div className=' w-[30%] font-[600] leading-7'>
                    <p >{amount} {ofCurrencyName} = <span className='text-[#5E3D98] text-xl'>{result} <span className='text-[#9d8cb9] ml-[-0.3rem]'></span></span>{towardsCurrencyName}</p>
                    <p className='text-sm'>1 EUR = 1,06527 USD </p>
                </div>}
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