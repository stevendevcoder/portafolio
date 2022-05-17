import React, { useState } from 'react'
import '../styles/Header.scss';
import { Link } from 'react-router-dom';

import { HiCode, HiOutlineMenu } from 'react-icons/hi'


function Header() {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <header>
      <div className="title">
        <HiCode fontSize="30px"/>
        <Link to='/'>
          <h1>stevendevcoder</h1>
        </Link>
      </div>

      {/* Menu */}
      <ul className='menu__desktop'>
        {links.map(link => (
          <li>
            <Link to={link.path}>{link.description}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <ul className={`menu__mobile${!show ? ' hidden' : ''}`}>
        {links.map(link => (
          <li>
            <Link onClick={handleClick} to={link.path}>{link.description}</Link>
          </li>
        ))}
      </ul>
   
      <HiOutlineMenu className="menu__toggle" onClick={handleClick} fontSize="40px"/>
    </header>
  )
}

const links = [
  {path: '/', description: 'Home'},
  {path: '/proyects', description: 'Proyectos'},
  {path: '/skills', description: 'Habilidades'},
  {path: '/aboutme', description: 'Acercad de mi'},
  {path: '/contact', description: 'Contactame'},
  {path: '/prices', description: 'Precios'},
];

export default Header