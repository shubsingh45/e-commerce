import React from 'react';
import './Popular.css'
import data_product from '../Assests/data';

const Popular = () => {
    return (
        <div className='popular'>
        <h1>Popular in women</h1>
        <hr />
           <div className="sec-item">
            {
                data_product.map((e) => {
                    return (
                            <div className='item'>
                                <img src={e.image} alt="" />
                                <p>{e.name}</p>
                                <div className="item-price">
                                    <div className="item-price-new">
                                        ${e.new_price}
                                    </div>
                                    <div className="item-old-price">
                                        ${e.old_price}
                                    </div>
                                </div>
                            </div>
                    )
                })
            }
          </div>

        </div>
    )
}

export default Popular;



