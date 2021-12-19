import React from 'react'
import './Add.css'

const Add = ({image, name}) => {
    return (
        <span className='add'>
            <img src={image} alt={name} />
            <div className="add-item">
                <h2 className='name'>{name}</h2>
                <h2 className='organic'><strong>100%</strong> Organic Products</h2>
                <button>Buy Now</button>
            </div>
        </span>
    )
}

export default Add
