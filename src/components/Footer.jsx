import React from 'react'
import './Footer.css'
import Github from '../image/github.png'
import Instagram from '../image/instagram.png'
import Linkdin from '../image/linkedin.png'
import Logo from '../image/logo.png'

const Footer = () => {
  return (
  <div className='Footer-container'>
     <hr />      
    <div className='footer'>
   
        <div className='social-links'>
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkdin} alt="" />
    </div>
    <div className='Logo-f'>
        <img src={Logo} alt=""/>
    </div>
    </div>
    </div>
  );
};

export default Footer
