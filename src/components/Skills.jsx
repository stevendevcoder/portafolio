import React from 'react'
import '../styles/Skills.scss';
import { IoIosDesktop } from 'react-icons/io';

function Skills() {
  return (
    <section className='section'>
      <h2 className='title'>Habilidades y Conocimientos</h2>
      <div className="skills__container">
        <div className="skills__card">
          <IoIosDesktop className='icon-skills'/>
          <h2>Desarrollo Web</h2>
          <p>
            Diseños únicos
            Para tu sitio web o aplicación de cualquier tipo.
          </p>
        </div>
        <div className="skills__card">
          <IoIosDesktop className='icon-skills'/>
          <h2>Diseño UX y UI</h2>
          <p>
            Diseños únicos
            Para tu sitio web o aplicación de cualquier tipo.
          </p>
        </div>
        <div className="skills__card">
          <IoIosDesktop className='icon-skills'/>
          <h2>Estrategias Googe Ads y Facebook Ads</h2>
          <p>
            Diseños únicos
            Para tu sitio web o aplicación de cualquier tipo.
          </p>
        </div>
      </div>
      <div className="lenguages__container">
        {
          tecnologias.map(tec => (
            <div className="skill" key={tec.logo}>
              <div 
                className={'logo-skill ' + tec.nombre.toLowerCase()}
              >
                </div>
              <p>{tec.nombre}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

const tecnologias = [
  {
    nombre: 'HTML',
    certificados: {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'CSS',
    certificados: {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'JavaScript',

    certificados: {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'React',

    certificados: {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'SASS',

    certificados: {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'Figma',

    certificados: {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'PHP',

    certificados: {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'Wordpress',
    certificados : {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'NodeJS',
    certificados : {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'Git',
    certificados : {
      nombre: '',
      link: ''
    }
  },
  {
    nombre: 'Firebase',
    certificados : {
      nombre: '',
      link: ''
    }
  },
];

export default Skills