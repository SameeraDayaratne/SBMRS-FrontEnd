/* eslint-disable no-unused-vars */
import React from 'react';
import spiderman from '../assets/Spider-Man.jpg'

function HeroNew(props) {
    return (
        <div className='w-full h-screen'>
            <img className='w-full h-screen object-cover ' src={spiderman} alt="" />
            <div className='bg-black/50 w-full h-screen absolute top-0 left-0'  />
        </div>
    );
}

export default HeroNew;