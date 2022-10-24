import React, { useState } from 'react'
import '../styles/Proyects.scss'
//import { materials } from '../data/'
import Img1 from '../images/best-eats.png';
import Img2 from '../images/caloric-app.png';
import Img3 from '../images/cloud-website.png';
import Img4 from '../images/tasks-app.png';
import Img5 from '../images/clima-app.png';

function Proyects() {
  const [folder, setFolder] = useState(false);
  return (
    <section id='proyectos' className='section'>
      <h1 data-aos='fade-right'>Proyectos realizados</h1>
      <div className="proyects__container">
        {materials.map(proyect => (
          <section className='proyect__card' key={proyect.name}>
            <div 
              className="preview_img" 
              style={{backgroundImage: `url('${proyect.img}')`}}></div>
            <div className="information"> 
              <h3>{proyect.name}</h3>
              <p className='description'>{proyect.description}</p>
              <div className="links">
                <a href={proyect.github} target="_blank" className='github'>GitHub</a>
                <a href={proyect.visitar} target="_blank" className='visitar'>Visitar</a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}


const materials = [
  {
    img: Img1, 
    name: 'Best Eats', 
    description: 'Ecommerce de comida rápida con alta optimizacion', 
    visitar: 'https://best-eats.vercel.app/', 
    github: 'https://github.com/stevendevcoder/best-eats'
  },
  {
    img: Img2, 
    name: 'Caloric app', 
    description: 'Fitness app hecha con React, HTML, CSS, Javascript, SASS, firebase', 
    visitar: 'https://caloric-app-web.vercel.app/', 
    github: 'https://github.com/stevendevcoder/caloric-app'
  },
  {
    img: Img3, 
    name: 'Cloud Website', 
    description: 'Landing page de una empresa de almacenamiento cloud',
    visit: 'https://cloud-website-ten.vercel.app/', 
    github: 'https://github.com/cloud-website'
  },
  {
    img: Img4,
    name: 'Tasks App',
    description: 'Este es otro proyecto',
    visitar: 'https://tasks-app-pink.vercel.app/',
    github: 'https://github.com/stevendevcoder/tasks-app'
  },
  {
    img: Img5,
    name: 'weather app',
    description: 'App para mirar el clima de cualquier ciudad del mundo en tiempo real',
    visitar: 'https://elmisteriokay.github.io/clima-app/',
    github: 'https://github.com/ElmisteriOkay/clima-app'
  },
  {
    img: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cufjzu9x8i7iuxmttzyf.png',
    name: 'Rick and morty app',
    description: 'Proyecto consumiento API de Rick and Morty',
    visitar: '/',
    github: '/'
  }
]

export default Proyects