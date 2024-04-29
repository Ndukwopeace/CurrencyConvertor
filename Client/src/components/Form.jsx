import React,{useState} from 'react';
import coins from '../assets/images/SVG (2).png';
import arrowHead from '../assets/images/Vector (1).png';
import graph from '../assets/images/Vector (2).png';
import alerts from '../assets/images/SVG (3).png';
import CurrencyConverter from './CurrencyConverter';
import '../assets/styles/Form.css'


const Form = () => {
  const [convertStyle , setConvertStyle] = useState('inherit');
  const [sendStyle , setSendStyle] = useState('inherit');
  const [graphicStyle , setGraphicStyle] = useState('inherit');
  const [alertStyle , setAlertStyle] = useState('inherit');

  const changeConvertStyle =()=>{
      setSendStyle('inherit');
      setGraphicStyle('inherit');
      setAlertStyle('inherit');
      setConvertStyle('light');
  }

  const changeSendStyle =()=>{
    setSendStyle('light')
    setGraphicStyle('inherit');
    setAlertStyle('inherit');
    setConvertStyle('inherit');

  }

  const changeGraphicStyle =()=>{
    setSendStyle('inherit');
    setGraphicStyle('light');
    setAlertStyle('inherit');
    setConvertStyle('inherit');
  }

  const changeAlertStyle =()=>{
    setSendStyle('inherit')
    setGraphicStyle('inherit');
    setAlertStyle('light');
    setConvertStyle('inherit');
  }
  


  return (
    <div className='flex justify-center h-[37vh]'>
        <div className='w-[65%] absolute top-[10rem] z-50 bg-white rounded-xl shadow-md overflow-clip'>
        {/* Navbar */}
          <div className='grid grid-cols-4 hover:cursor-pointer bg-[#F0F5FA]  h-10 '>
            <div className='flex items-center gap-2 justify-center h-full ' id={convertStyle} onClick={changeConvertStyle} >
              <img src={coins} alt="" />
              <p>Convert</p>
            </div>

            <div className='flex items-center gap-2 justify-center ' id={sendStyle} onClick={changeSendStyle}>
              <img src={arrowHead} alt="" />
              <p>Send</p>
            </div>

            <div className='flex items-center gap-2 justify-center' id={graphicStyle} onClick={changeGraphicStyle}>
              <img src={graph} alt="" />
              <p>Graphics</p>
            </div>

            <div className='flex items-center gap-2 justify-center' id={alertStyle} onClick={changeAlertStyle}>
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