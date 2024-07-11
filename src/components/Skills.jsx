import React from 'react'
import '../styles/Skills.scss';
import { IoIosDesktop } from 'react-icons/io';
import { FaDatabase } from 'react-icons/fa';
import { frontend, backend, otros } from '../data/';
import Skill from './Skill';

function Skills() {
  return (
    <section id='skills' className='section'>
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
          <FaDatabase className='icon-skills'/>
          <h2>Backend</h2>
          <p>
          Optimizo y mantengo sistemas backend robustos y escalables, garantizando eficiencia y seguridad
          </p>
        </div>
      </div>
      <div className="lenguages__container">
        <div className='tec-container'>
          <h2>Frontend</h2>
          <div className='tec-card'>
            {
              frontend.map(tec => <Skill key={tec.nombre} tec={tec} />)
            }
          </div>
        </div>
        <div className='tec-container'>
          <h2>Backend</h2>
          <div className='tec-card'>
            {
              backend.map(tec => <Skill key={tec.nombre} tec={tec} />)
            }
          </div>
        </div>
        <div className='tec-container'>
          <h2>Otros</h2>
          <div className='tec-card'>
            {
              otros.map(tec => <Skill key={tec.nombre} tec={tec} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}


export default Skills