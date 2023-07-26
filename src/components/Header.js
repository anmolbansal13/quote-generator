import React from 'react';
import ReactLogo from "../images/reactLogo.png"
import quote from "../images/quote.png"

export default function Header(){
    return (
        <header className='header'>
            {/* <img src="../images/meme-face.jpg" /> doesn't work */}
            <img src={quote} alt="oops" className='header--image'/>
            <h2 className='header--title'>QUOTE GENERATOR</h2>
            <h4 className='header--project'>Designed with</h4>
            <img src={ReactLogo} className='react--logo--image'/>
        </header>
    )
};