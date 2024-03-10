import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
const Account = () => {
  return (
    <div className='main-login'>
    <div className="sec-login">
    <input type="text" name="" id="" placeholder=' Enter Your Name'/>
      <input type="email" name="" id=""placeholder='Enter Your Email' />
      <input type="password" name="" id="" placeholder='Enter Your Passward' />
        <button>Create Account</button>

        <p>Do you have account ? <Link to={'/account'}><span className='spaan'>Login here</span></Link></p>
    </div>

    </div>

  )
}

export default Account