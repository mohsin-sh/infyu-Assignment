import React from 'react'
import './Card.css'
import products from '../../data';


const Card = () => {
    return (
        <div className='card-main'>
            {
                products.map((card) => (
                    <div className="card">
                        <img src={card.imgurl} alt={card.name}/>
                        <div className="card-span-div">
                            <span className="card-w">{card.w1}</span>
                            <span className="card-w">{card.w2}</span>
                            <span className="card-w">{card.w3}</span>
                        </div>
                        
                        <h3 className="card-name">{card.name}</h3>
                        <h3 className="card-price">{card.price}</h3>
                        <button className="card-btn">Add to Cart</button>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Card
