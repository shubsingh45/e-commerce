import React from 'react';
import './Offer.css'
import exclusive_image from '../Assests/exclusive_image.png'
const Offer = () => {
  return (
    <div className="main-offer">
      <div className="sec-offer">
        <div className="left-offer">
          <h1>Exclusive</h1>
          <h1>Offer For You</h1>
          <p>Only Best Sellers Products</p>
          <div className="btn-offer">
          <button>Check Now</button>
          </div>
        </div>
        <div className="right-offer">
          <img src={exclusive_image} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Offer;
