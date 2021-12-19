import React from 'react'
import './Header2.css'

const Header2 = () => {
    return (
        <div className="header2">
            <div className='container'>
                <div className="header2-img">
                    <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/logo-footer_x42@2x.png?v=1581488629" alt="logo" />
                </div>
                <div className="header2-nav">
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Best Seller</li>
                        <li>Deal of the Day</li>
                        <li>Pages</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="header2-logo">
                    <i class="far fa-heart"></i>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-user-alt"></i>
                </div>
            </div>

            <div className="header2-data">

                <select className='header2-select select1'>
                    <option value="">All Departments</option>
                    <option value="">Fruits</option>
                    <option value="">Meat</option>
                    <option value="">Vegies</option>
                    <option value="">Milk</option>
                </select>

                <div className="header2-data-input">
                    <select className='header2-select select2'>
                        <option value="">All</option>
                        <option value="">Fruits</option>
                        <option value="">Meat</option>
                        <option value="">Vegies</option>
                        <option value="">Milk</option>
                    </select>
                    <input type="text" placeholder='Search Here' className='search-bar' />
                    <button className='search-btn'>Search</button>
                </div>
            </div>
            <section className='header2-main'>
                <div className='header2-main-div'>
                    <h3 className='header2-main-sub'>100% Healthy & Affordable</h3>
                    <h1 className='header2-main-heading'>Organic Vegetables</h1>
                    <h3 className='header2-main-sub'>Small Changes Big Difference</h3>
                    <button className='header2-main-btn'>Shop Now</button>
                </div>
            </section>
            
        </div>
        
    )
}

export default Header2
