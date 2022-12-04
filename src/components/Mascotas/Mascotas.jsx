import React from 'react'
import './Mascotas.css'
import pymu from '../../assets/pymuTemp.png'
import cecy from '../../assets/cecyTemp.png'
import javi from '../../assets/javiTemp.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

const Mascotas = () => {

    return (
        <section className='mascotas' id='mascotas'>

            <div className='title'>
                <h1>mascotas de <span>izicode</span></h1>
            </div>

            <div className='cards-Container' >

                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand" className='card'>

                    <picture>
                        <img src={cecy} />
                    </picture>

                    <div className='content'>
                        <h2>
                            cecy
                        </h2>
                        <h3>
                            nuestra divertida coneja
                        </h3>
                        <p>
                            Reprehenderit in excepteur incididunt ullamco commodo deserunt ullamco duis id nulla magna veniam ad dolor. Eu reprehenderit et qui culpa sunt ullamco in et nulla proident cupidatat do magna voluptate. Irure sit dolore sunt pariatur quis quis sunt labore duis dolore ea consectetur esse.
                        </p>
                        <span>
                            experta en lenguaje C#
                        </span>
                        <button className='btn'>
                            ¡comencemos!
                        </button>
                    </div>
                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand" className='card'>

                    <picture>
                        <img src={pymu} />
                    </picture>

                    <div className='content'>
                        <h2>
                            pymu
                        </h2>
                        <h3>
                            nuestra carismatica patita
                        </h3>
                        <p>
                            Reprehenderit in excepteur incididunt ullamco commodo deserunt ullamco duis id nulla magna veniam ad dolor. Eu reprehenderit et qui culpa sunt ullamco in et nulla proident cupidatat do magna voluptate. Irure sit dolore sunt pariatur quis quis sunt labore duis dolore ea consectetur esse.
                        </p>
                        <span>
                            experta en lenguaje Python
                        </span>
                        <button className='btn'>
                            ¡comencemos!
                        </button>
                    </div>

                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand" className='card'>

                    <picture>
                        <img src={javi} />
                    </picture>

                    <div className='content'>
                        <h2>
                            javi
                        </h2>
                        <h3>
                            nuestro intrepido jabali
                        </h3>
                        <p>
                            Reprehenderit in excepteur incididunt ullamco commodo deserunt ullamco duis id nulla magna veniam ad dolor. Eu reprehenderit et qui culpa sunt ullamco in et nulla proident cupidatat do magna voluptate. Irure sit dolore sunt pariatur quis quis sunt labore duis dolore ea consectetur esse.
                        </p>
                        <span>
                            experto en lenguaje java
                        </span>
                        <button className='btn'>
                            ¡comencemos!
                        </button>
                    </div>

                </AnimationOnScroll>

            </div>

        </section>
    )
}

export default Mascotas