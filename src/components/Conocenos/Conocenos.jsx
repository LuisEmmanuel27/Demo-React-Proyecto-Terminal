import React from 'react'
import './Conocenos.css'
import banner from '../../assets/bannerTemp.jpg'

const Conocenos = () => {
    return (
        <section className='conocenos' id='conocenos'>

            <div className='title'>
                <h1>conoce mas de <span>izicode</span></h1>
            </div>

            <div className='info-web'>
                <picture>
                    <img src={banner} />
                </picture>

                <div className='contenido'>

                    <h2>¿que busca lograr izicode?</h2>

                    <p>
                        Esse dolor aliquip cillum officia culpa occaecat. Duis sint tempor velit aute laborum do dolor esse. Aliquip consequat est elit tempor labore enim id. In culpa nulla est do quis non labore tempor commodo exercitation commodo ut aliquip minim. Amet labore reprehenderit in officia nostrud amet. Velit occaecat cillum laborum consectetur adipisicing incididunt fugiat ullamco ullamco ad sint incididunt ad. Occaecat laborum deserunt esse reprehenderit enim eu nostrud laboris.
                    </p>

                </div>
            </div>

            <div className='social-media'>
                <h2>visita nuestras redes sociales y foros en:</h2>

                <div className='ico-container'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-discord"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>

        </section>
    )
}

export default Conocenos