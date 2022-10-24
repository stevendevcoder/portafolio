import React, { useState } from 'react'
import '../styles/Header.scss';

import { HiCode, HiOutlineMenu } from 'react-icons/hi'


function Header() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <header id='top'>
      <div className="title">
        <HiCode fontSize="30px"/>
        <a href='/'>
          <h1>stevendevcoder</h1>
        </a>
      </div>

      {/* Menu */}
      <ul className='menu__desktop'>
        {links.map(link => (
          <li key={link.path}>
            <a href={link.path}>{link.description}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <ul className={`menu__mobile${!show ? ' hidden' : ''}`}>
        {links.map(link => (
          <li key={link.path}>
            <a onClick={handleClick} href={link.path}>{link.description}</a>
          </li>
        ))}
      </ul>
   
      <HiOutlineMenu className="menu__toggle" onClick={handleClick} fontSize="40px"/>
    </header>
  )
}
  
const links = [
  {path: '/', description: 'Inicio'},
  {path: '#acerca', description: 'Quién soy'},
  {path: '#proyectos', description: 'Proyectos'},
  {path: '#skills', description: 'Habilidades'},
  {path: '#contact', description: 'Contactar'}
];

export default Header