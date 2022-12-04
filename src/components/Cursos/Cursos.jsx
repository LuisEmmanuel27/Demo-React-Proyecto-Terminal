import React from 'react'
import './Cursos.css'
import planeta1 from '../../assets/planeta1.png'
import planeta2 from '../../assets/planeta2.png'
import planeta3 from '../../assets/planeta3.png'
import planeta4 from '../../assets/planeta4.png'
import cometa from '../../assets/cometa.png'
import cecyEspacio from '../../assets/cecyEspacio.png'
import py from '../../assets/pyLogo.png'
import c from '../../assets/cLogo.png'
import ja from '../../assets/jaLogo.png'
import proBas from '../../assets/proBasLogo.png'
import pyIco from '../../assets/pymuIco.png'
import ceIco from '../../assets/cecyIco.png'
import jaIco from '../../assets/javiIco.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

const Cursos = () => {

    return (
        <section className='cursos' id='cursos' >

            <div className='space-back'>
                <img src={planeta1} />
                <img src={planeta2} />
                <img src={planeta3} />
                <img src={planeta4} />
                <img src={cometa} />
                <img src={cecyEspacio} />
            </div>

            <div className='title'>
                <h1>cursos de <span>izicode</span></h1>
            </div>

            <div className='cursos-cont'>

                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand" className='curso-item'>

                    <picture>
                        <img src={proBas} />
                    </picture>

                    <div className='content'>

                        <h2>fundamentos de la programacion</h2>

                        <div className='info'>
                            <p>
                                Aqui aprenderas todos los conceptos basicos de la programacion, asi como empezar a desarrollar la logica que se necesita para la programacion.
                            </p>

                            <p>
                                Te acompanara en tu viaje: <br />
                                <img src={pyIco} />
                            </p>
                        </div>

                    </div>

                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand" className='curso-item'>

                    <picture>
                        <img src={c} />
                    </picture>

                    <div className='content'>

                        <h2>curso lenguaje c</h2>

                        <div className='info'>
                            <p>
                                Aqui aprenderas todos los conceptos basicos de la programacion, asi como empezar a desarrollar la logica que se necesita para la programacion.
                            </p>

                            <p>
                                Te acompanara en tu viaje: <br />
                                <img src={ceIco} />
                            </p>
                        </div>

                    </div>

                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand" className='curso-item'>

                    <picture>
                        <img src={py} />
                    </picture>

                    <div className='content'>

                        <h2>curso en python</h2>

                        <div className='info'>
                            <p>
                                Aqui aprenderas todos los conceptos basicos de la programacion, asi como empezar a desarrollar la logica que se necesita para la programacion.
                            </p>

                            <p>
                                Te acompanara en tu viaje: <br />
                                <img src={pyIco} />
                            </p>
                        </div>

                    </div>

                </AnimationOnScroll>

                <AnimationOnScroll animateOnce={true} animateIn="animate__rubberBand" className='curso-item'>

                    <picture>
                        <img src={ja} />
                    </picture>

                    <div className='content'>

                        <h2>curso en java</h2>

                        <div className='info'>
                            <p>
                                Aqui aprenderas todos los conceptos basicos de la programacion, asi como empezar a desarrollar la logica que se necesita para la programacion.
                            </p>

                            <p>
                                Te acompanara en tu viaje: <br />
                                <img src={jaIco} />
                            </p>
                        </div>

                    </div>

                </AnimationOnScroll>

            </div>

        </section>
    )
}

export default Cursos