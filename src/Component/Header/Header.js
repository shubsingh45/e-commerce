import React from 'react'
import './Header.css';
import cart_icon from '../Assests/cart_icon.png';
import logo from '../Assests/logo.png';
import { Link } from 'react-router-dom';
export  const Header = () => {
  return (
    <div className="main">
        <div className="logo">
            <img src={logo} alt="" />
            <h1>SHOPNOW</h1>
        </div>
        <div className="nav">
            <ul className='navbar'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/men'><li>Men</li></Link>
            <Link to='/women'><li>Women</li></Link>
            <Link to='/kid'><li>Kid</li></Link>


            </ul>
        </div>
        <div className="login">
        <Link to='/login'><button>Login</button></Link>

          <div className="cart">
          <Link to='/cart'>
          <img src={cart_icon} alt="" />
          </Link>
          <div className='count'>0</div>
         </div>

        </div>
    </div>
  )
}

