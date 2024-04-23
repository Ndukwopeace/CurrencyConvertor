import react , { useState } from 'react'
import '../assets/styles/Header.css'
import { Box } from '@mui/material'


const Header = () =>{

    return (
        <>
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            paddingTop:'2.5rem',
            gap:'1rem',
            backgroundColor:'#211535',
            color:'white',
            height:'17rem',
            overflow:'clip',
            position:'relative'
            }}>

                 { /* Circles ================================================== */ }

                <div className="circle1" ></div>
                <div className="circle2"></div>


                <h1 style={{
                    position:'relative',
                    fontWeight:'600',
                    fontSize:'2.5rem'
                    }}>
                PayUnit Currency Converter
                </h1>
                <p style={{position:'relative'}}>
                Welcome to the world's most popular money tool.
                </p>
            </div>
        </>
    )


}

export default Header;