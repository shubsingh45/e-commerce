import React from 'react';
import './Hero.css'
import hero_image from '../Assests/hero_image.png';
import arrow_img from '../Assests/arrow.png'
 const Hero = () => {
  return (
    <div className='div-first'>
         <div className="left">
         <div className="poster">
            <h3>New Arrivals Only</h3>
            <h1>New</h1>
            <h1>Collections</h1>
            <h1>For Everyone</h1>
                <button>latest collections</button>
                <img src={arrow_img} alt="" />
            </div>
         </div>
         <div className="right">
            <img src={hero_image} alt="" />
         </div>
    </div>

  )
}
export default Hero;
