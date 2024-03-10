import React from 'react';
import './All.css'
import { man_product } from './Assests/all_product';
import man_banner from './Assests/banner_mens.png';
import { Link } from 'react-router-dom';

const Men = () => {
  return (
    <div className='main-cont'>

        <img  className=" _poster"src={man_banner} alt="" />


      <div className="para">

        <p>showing product 12 out of 36</p>
      </div>
      <div className='sec-cont'>
        {
          man_product.map((e, i) => {
            return (
              <Link to={`/${e.id}`}>
              
              <div key={i} className="img-cont">
                <img src={e.image} alt="" />
                <p>{e.name}</p>
                <div className="price-cont">
                  <div className="man-new-price">
                    ${e.new_price}
                  </div>
                  <div className="man-old-price">
                    ${e.old_price}
                  </div>
                </div>
              </div>
          </Link>
            )
          })
        }
      </div>
      {/* <div className="expoler"> */}
      <button>exploer more</button>
      {/* </div> */}
    </div>
  )
}
export default Men;