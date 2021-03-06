import React from 'react'
import Typical from 'react-typical'
import { Link } from 'react-scroll';
import { 
  AiFillGithub, 
  AiFillLinkedin,
  AiOutlineMail
} from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FiChevronDown } from 'react-icons/fi'

import '../styles/Home.scss'

function Home() {
  return (
    <div className='home'>
      <div className="description">
        <h1>Desarrollador frontend</h1>
        <h2>Hola! Soy <b style={{
          color: '#A6243C'
          }}>
          Héctor Steven</b>
        </h2>
        <Typical 
          loop={Infinity}
          className="typical"
          steps={[
            "Sitios increibles",
            6000,
            "ReactJS",
            3000,
            "Firebase 🔥​",
            3000,
            "PHP",
            3000,
            "Backend",
            5000,
            "Fullstack 👨‍💻​",
            3000,
            "Google Ads 📊​",
            3000,
            "Asesorias",
            3000,
            "Cursos de programación 🗣️​",
            4000,
            "Diseño UX y UI",
            3000,
            "Código",
            4000
          ]}
        />
        <Link className='contactar' to='contacto'>
          Contactar
        </Link>
      </div>

      <div className="profile">
        <div className="personal-img">
          
        </div>
        <div className="links">
          <a href="https://github.com/stevendevcoder" alt="github" target="_blank">
            <AiFillGithub  className='social-icons github'/>  
          </a>
          <a href='' target="_blank" alt="linkedin">
            <AiFillLinkedin className='social-icons linkedin' />
          </a>
          <a href='' target="_blank" alt="whatsapp">
            <IoLogoWhatsapp className='social-icons whatsapp'
            />
          </a>
          <a href='' target="_blank" alt="email">
            <AiOutlineMail className='social-icons email'/>
          </a>
        </div>
      </div>

      <Link className='scroll-dowm' to=''>
        Trabajos
        <FiChevronDown className='icon'/>
      </Link>
    </div>
  )
}

export default Home