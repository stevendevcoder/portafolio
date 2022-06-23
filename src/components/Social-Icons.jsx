import React from 'react'
import { 
  AiFillGithub, 
  AiFillLinkedin,
  AiOutlineMail
} from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FiExternalLink } from 'react-icons/fi'
import '../styles/Social-icons.scss';


export const GitHub = ({url}) => (
  <a href={url} alt="github" target="_blank" className='social-link'>
    <AiFillGithub  className='social-icons github'/>  
  </a>
)

export const Whatsapp = ({url}) => (
  <a href={url} target="_blank" alt="whatsapp" className='social-link'>
    <IoLogoWhatsapp className='social-icons whatsapp'/>
  </a>
)

export const Email = ({url}) => (
  <a href={url} target="_blank" alt="email" className='social-link'>
    <AiOutlineMail className='social-icons email'/>
  </a>
)

export const LinkedIn = ({url}) => (
  <a href={url} target="_blank" alt="linkedin" className='social-link'>
    <AiFillLinkedin className='social-icons linkedin' />
  </a>  
)

export const WebSite = ({url}) => (
  <a href={url}  className='social-link'>
      <FiExternalLink className="social-icons website"/>
  </a>
)
