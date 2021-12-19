import React from 'react'
import './Discount.css';

const Discount = () => {
    return (
        <div className='discount'>
            <h3 className='discount-header'>Special Discount</h3>
            <h3 className='discount-header'>for all Grocery products</h3>
            <p className='discount-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis vero voluptas a excepturi quaerat?</p>
            <p className='discount-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consequatur?</p>
            <p className='discount-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit sapiente ipsum est blanditiis?</p>

            <div className='time'>
                <div>
                    <h1>40</h1>
                    <p className='time-d'>Days</p>
                </div>
                <div><h1>:</h1></div>
                <div>
                    <h1>00</h1>
                    <p className='time-d'>Hours</p>
                </div>
                <div><h1>:</h1></div>
                <div>
                    <h1>12</h1>
                    <p className='time-d'>Minutes</p>
                </div>
                <div><h1>:</h1></div>
                <div>
                    <h1>10</h1>
                    <p className='time-d'>Seconds</p>
                </div>
            </div>

            <button className='discount-btn'>Buy Now</button>
            
        </div>
    )
}

export default Discount
