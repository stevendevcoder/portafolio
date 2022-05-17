import React from 'react'
import '../styles/Proyects.scss'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

function Proyects() {
  return (
    <section className='section'>
      <h2>Proyectos</h2>
      <div className="proyects__container">
        {materials.map(proyect => (
          <section className='proyect__card' key={proyect.name}>
            <div 
              className="preview_img" 
              style={{backgroundImage: `url('${proyect.img}')`}}></div>
            <div className="information">
              <h3>{proyect.name}</h3>
              <p className='description'>{proyect.description}</p>
            </div>
            <a href={proyect.github} className="enlace-proyecto">
              <AiFillGithub />
            </a>
            <a href={proyect.visitar}className="enlace-proyecto">
              <FiExternalLink />
            </a>
          </section>
        ))}
      </div>
    </section>
  )
}

const materials = [
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--MPwrq01---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/2f71wfjgldnssaxjkd11.png', 
    name: 'Solarcity', 
    description: 'Este es un proyecto hecho con react, html, css, Javascript, SASS, firebase', 
    visitar: '/', 
    github: 'https://github.com/stevendevcoder'
  },
  {
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--LfSAfAF5--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/p8okja00qmsdatymvqob.png', 
    name: 'Caloric app', 
    description: 'Este es un proyecto hecho con react, html, css, Javascript, SASS, firebase', 
    visitar: '/', 
    github: 'https://github.com/stevendevcoder'
  },
  {
    img: 'https://i.ytimg.com/vi/n8iA18R76jk/maxresdefault.jpg', 
    name: 'Instagram clone', 
    description: 'Este es un proyecto hecho con react, html, css, Javascript, SASS, firebase', 
    visitar: '/', 
    github: 'https://github.com/stevendevcoder'
  }
]

export default Proyects