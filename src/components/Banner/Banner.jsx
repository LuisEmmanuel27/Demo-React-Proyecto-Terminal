import React from 'react'
import './Banner.css'
import pymu from '../../assets/pymuTemp.png'
import cecy from '../../assets/cecyTemp.png'
import javi from '../../assets/javiTemp.png'
import stars from '../../assets/stars.png'

const Banner = () => {
    return (
        <div className='banner' id='banner'>

            <div className='divisor'>
                <div className='stars'>
                    <img src={stars} />
                </div>
            </div>

            <div className='content'>
                <div className='left-b'>
                    <span>bienvenido a</span>
                    <span>IziCode</span>
                    <p>donde aprender a programar sera divertido para todos (´｡• ◡ •｡`) ♡</p>
                    <button className='btn btn-ban'><i className="fa-solid fa-chevron-right"></i>¡Comencemos!</button>
                </div>

                <div className='right-b'>
                    <img src={pymu} />
                    <img src={cecy} />
                    <img src={javi} />
                </div>
            </div>

        </div>
    )
}

export default Banner