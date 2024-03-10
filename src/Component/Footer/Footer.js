import React from 'react'
import './Footer.css';
import inst_icon from '../Assests/instagram_icon.png'
import whatshapp_icon from '../Assests/whatsapp_icon.png';
import pintestar_icon from '../Assests/pintester_icon.png'
import logo from '../Assests/logo.png'
export const Footer = () => {
  return (
    <div className='con'>
      <div className="sec-con">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>SHOPNOW</h1>
        </div>
        <div className='li-item'>

        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
        </div>
        <div className="icon">
          <img src={inst_icon} alt="" />
          <img src={whatshapp_icon} alt="" />
          <img src={pintestar_icon} alt="" />
        </div>
        <hr />
        <h2>Copyright @ 2024 All Right Reserved</h2>
      </div>
    </div>
  )
}
