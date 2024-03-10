import React from 'react';
import '../NewCollection.css'
import new_collections from '../Assests/new_collections';

const NewCollection = () => {
    return (
        <div className='first-div'>
            <h1>Our New Collection</h1>
            <hr />
            <div className="sec-div">
                {
                    new_collections.map((e) =>{
                        return(

                        <div className='third-div'>
                            <img src={e.image} alt="" />
                            <p>{e.name}</p>
                            <div className="main-price">
                                <div className="new-price">
                                    ${e.new_price}
                                </div>
                                <div className="old-price">
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

export default NewCollection;



