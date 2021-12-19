import React from 'react'
import './Productitem.css'

const Productitem = ({img, name, price}) => {
    return (
        <div className='productitem'>
           <img src={img} alt={name} className='product-img'/> 
           <div className='product-div'>
                <h3>{name}</h3>
                <h3 className='product-price'>{price}</h3>
                <button className='product-btn'>Add to Cart</button>
           </div>
        </div>
    )
}

export default Productitem
