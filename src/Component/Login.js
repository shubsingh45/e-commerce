import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {

  return (
    <div>
      

        <div className='main-login'>
          <div className="sec-login">
            <input type="email" name="" id="" placeholder='Enter Your Email' />
            <input type="password" name="" id="" placeholder='Enter Your Passward' />
            <button>Login</button>

            <p>Do you have not account ? <Link to={'/login'}><span className='spaan'>Create account</span></Link></p>
          </div>


        </div>

    </div>
  )
}
export default Login;
