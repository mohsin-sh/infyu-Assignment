import React from 'react'
import Productitem from './Productitem'
import './sproduct.css'

const Sproduct = () => {
    return (
        <div className='sproduct'>
            <h1 className='sproduct-header'>Our Special Products</h1>
            <p className='sproduct-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente consequuntur quod. Consectetur, qui laudantium.</p>

        <div className='productitema'>
            <Productitem img="http://groca.vedicthemes.com/image/cache/catalog/groca/products/shop-25-800x800.jpg"
            name="Broccoli" price="$100" />
            <Productitem img="http://groca.vedicthemes.com/image/cache/catalog/groca/products/shop-5-800x800.jpg"
            name="Chiken Brest" price="$300" />
            <Productitem img="http://groca.vedicthemes.com/image/cache/catalog/groca/products/shop-14-800x800.jpg"
            name="Nuts cookies" price="$100" />
            <Productitem img="http://groca.vedicthemes.com/image/cache/catalog/groca/products/shop-17-800x800.jpg"
            name="Elderberry" price="$150" />
            <Productitem img="http://groca.vedicthemes.com/image/cache/catalog/groca/products/shop-6-800x800.jpg"
            name="Badam" price="$300" />
            <Productitem img="http://groca.vedicthemes.com/image/cache/catalog/groca/products/shop-15-800x800.jpg"
            name="Cucumber" price="$100" />
        </div>
            
        </div>
    )
}

export default Sproduct
