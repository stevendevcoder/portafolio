import React from 'react'
import '../styles/About.scss'
import Lottie from 'react-lottie'

import developer from '../static/developer.json'
import { Whatsapp } from './Social-Icons'

const developerData = {
  loop: true,
  autoplay: true,
  animationData: developer
}

function About() {
  return (
    <section className='about' id='acerca'>
      <div className='about-card'>
        <h1>¿Quien es Steven?</h1>
        <p>Hola! Mi nombre es Steven Serna y mi pasión es convertir el código en soluciones reales para el mundo real en forma de software. <b>Mi interés por el desarrollo web empezó en el 2016</b> al ver como el mundo cada vez está más contectado por el internet y todo empieza a moverse a través de él.</p>
        <br/>
        <p>Desde entonces he estado creando proyectos en la web y en el <b>mundo de la programación</b> (tanto personales como de terceros)</p>
        <p>Mi filosofia se basa en mantener un <b>codigo escalable</b>, reutilizable, leible y limpio</p>
        <Whatsapp 
          text='Escribir a Whatsapp'
          url={'https://api.whatsapp.com/send?phone=573025133452&text=Necesito%20ayuda%20con...'}
          />
      </div>
      <div className='animation-card'>
        <Lottie className='lottie' options={developerData} width={350} height={350}/>
      </div>
    </section>
  )
}

export default About