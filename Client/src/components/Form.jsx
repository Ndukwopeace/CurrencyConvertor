import React,{useState} from 'react';
import coins from '../assets/images/SVG (2).png';
import arrowHead from '../assets/images/Vector (1).png';
import graph from '../assets/images/Vector (2).png';
import alerts from '../assets/images/SVG (3).png';
import CurrencyConverter from './CurrencyConverter';
import '../assets/styles/Form.css'
import DummyContent from './DummyContent';


const Form = () => {
  const [convertStyle , setConvertStyle] = useState('light');
  const [sendStyle , setSendStyle] = useState('inherit');
  const [graphicStyle , setGraphicStyle] = useState('inherit');
  const [alertStyle , setAlertStyle] = useState('inherit');
  const [isDummy , setIsDummy] = useState(false);
  const [isGraphicPage , setIsGraphicPage] = useState(false);
  const [isAlertPage , setIsAlertPage] = useState(false);

  const changeConvertStyle =()=>{
      setIsDummy(false)
      setSendStyle('inherit');
      setGraphicStyle('inherit');
      setAlertStyle('inherit');
      setConvertStyle('light');
  }

  const changeSendStyle =()=>{
    setIsDummy(true);
    setIsAlertPage(false);
    setIsGraphicPage(false);
    setSendStyle('light')
    setGraphicStyle('inherit');
    setAlertStyle('inherit');
    setConvertStyle('inherit');

  }

  const changeGraphicStyle =()=>{
    setIsDummy(true);
    setIsAlertPage(false);
    setIsGraphicPage(true);
    setSendStyle('inherit');
    setGraphicStyle('light');
    setAlertStyle('inherit');
    setConvertStyle('inherit');
  }

  const changeAlertStyle =()=>{
    setIsDummy(true);
    setIsGraphicPage(false)
    setIsAlertPage(true);
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
            <div className='flex items-center gap-2 justify-center h-full ' 
            
            id={convertStyle} 
            
            onClick={changeConvertStyle} >
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

       { 
                isDummy? 
                 <DummyContent graphicPage = {isGraphicPage} alertPage ={isAlertPage}/> 
                :
                <CurrencyConverter/> 
                }


        </div>


    </div>
  )
}

export default Form