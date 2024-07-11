import React, { useState, useEffect } from 'react'
import Typical from 'react-typical'
import { Link } from 'react-scroll';

import { FiChevronDown, FiDownload } from 'react-icons/fi'

import {
  Whatsapp,
  GitHub,
  LinkedIn,
  Email
} from './Social-Icons'

import '../styles/Home.scss'

function Home() {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 30){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll",onScroll)
  }, []);

  return (
    <div className='home'>
      <div className="description">
        <h2>Soy <b style={{
          color: '#A6243C'
          }}>
          Steven Serna</b>
        </h2>
        <h1>Desarrollador frontend</h1>
        <Typical 
          loop={Infinity}
          className="typical"
          steps={[
            "The best sites",
            6000,
            "ReactJS",
            3000,
            "Wordpress 🔥​",
            3000,
            "PHP",
            3000,
            "Backend",
            5000,
            "Fullstack👨‍💻​",
            3000,
            "Google Ads📊​",
            3000,
            "Asesorias 🗣️",
            3000,
            "Diseño UX/UI",
            3000,
            "Código Limpio",
            4000
          ]}
        />
        <div className='btns'>

          <a className='contactar' href='/#skills'>
            Contactar
          </a>
          <a className='descargarCV' href='../data/CV.pdf' download>
            Descargar CV
            <FiDownload color='' size={20}/>
          </a>
        </div>
      </div>

      <div className="profile">
        <div className="personal-img">
          
        </div>
        <div className="links">
          <GitHub url={"https://github.com/stevendevcoder"}/>
          <LinkedIn url={"https://www.linkedin.com/in/steven-serna-zuluaga-870598236/"}/>
          <Email url={"/"}/>
        </div>
      </div>

      { !scrolled &&
        <a className='scroll-dowm' href='#proyectos'>
          Trabajos
          <FiChevronDown className='icon'/>
        </a> 
      }
    </div>
  )
}

export default Home