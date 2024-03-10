import React from 'react';
import './All.css'
import { woman_product } from './Assests/all_product';
import women_banner from './Assests/banner_women.png'
const Women = () => {
  return (
    <div className='main-cont'>

    <img className='_poster'  src={women_banner} alt="" />

    <div className="para">  

    <p>showing product 12 out of 36</p>
    </div>
      <div className='sec-cont'>
        {
          woman_product.map((e, i) => {
            return (
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
export default Women