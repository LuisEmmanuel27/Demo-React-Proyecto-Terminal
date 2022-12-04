import React, { useState } from 'react'
import './Header.css'
import icon from '../../assets/iconTemp.png'
import { Link } from 'react-scroll'

const Header = () => {

    const [headerB, setheaderB] = useState({ background: 'transparent' })

    const scroll = window.onscroll = () => {

        if (scrollY > 50) setheaderB({ background: 'var(--morado-main-2)', backdropFilter: 'blur(5px)' })
        else setheaderB({ background: 'transparent' })

    }

    return (
        <header
            className='header'
            id='header'
            style={headerB}
            onScroll={scroll}
        >

            <picture className='icon-main'>
                <img src={icon} />
                <span>IziCode</span>
            </picture>

            <ul className='menu-main'>

                <Link
                    to='banner'
                    span={true}
                    smooth={true}
                    spy={true}
                >
                    <li>inicio</li>
                </Link>

                <Link
                    to='mascotas'
                    span={true}
                    smooth={true}
                    spy={true}
                >
                    <li>mascotas</li>
                </Link>

                <Link
                    to='cursos'
                    span={true}
                    smooth={true}
                    spy={true}
                >
                    <li>cursos</li>
                </Link>

                <Link
                    to='conocenos'
                    span={true}
                    smooth={true}
                    spy={true}
                >
                    <li>conocenos</li>
                </Link>

            </ul>

            <div className='menu-login'>
                <button className='btn'><i className="fa-solid fa-user-plus"></i>crear cuenta</button>
                <button className='btn'><i className="fa-solid fa-user"></i>iniciar sesion</button>
            </div>

        </header >
    )
}

export default Header