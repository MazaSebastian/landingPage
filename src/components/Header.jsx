import React from 'react';
import Navbar from './Navbar';


function Header() {
    return (
        <div id='main'>
                <Navbar/>
                <div className='name'>
                    <h1><span>Inicia tu APP</span>Con creatividad!</h1>
                    <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempore?</p>
                    <a href="#" className='cv-btn'>Descarga</a>
                </div>
        </div>
    )
}

export default Header

