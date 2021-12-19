import React from 'react'
import Productitem from './Productitem'
import './sproduct.css'

const Sproduct = () => {
    return (
        <div className='sproduct'>
            <h1 className='sproduct-header'>Our Special Products</h1>
            <p className='sproduct-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente consequuntur quod. Consectetur, qui laudantium.</p>

        <div className='productitema'>
            <Productitem img="https://5.imimg.com/data5/CH/OA/MY-2819324/fresh-broccoli-500x500.jpg"
            name="Broccoli" price="$100" />
            <Productitem img="https://3.imimg.com/data3/QQ/FP/GLADMIN-135878/boneless-chicken-500x500.jpg"
            name="Chiken Brest" price="$300" />
            <Productitem img="https://thumbs.dreamstime.com/b/chocolate-chips-cookies-white-background-chocolate-chips-cookies-white-background-119548950.jpg"
            name="Nuts cookies" price="$100" />
            <Productitem img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIhozZGpPIH3XprHmj3k2LPI4gPOrmKOFyi3A6bvwFnqfllTm7vmG5BpwIPGPGZGaer9E&usqp=CAU"
            name="Elderberry" price="$150" />
            <Productitem img="https://cdn.shopify.com/s/files/1/0532/0405/8272/products/spl-badam.jpg?v=1616404291"
            name="Badam" price="$300" />
            <Productitem img="https://m.media-amazon.com/images/I/51fTQ4vqAjL._SX466_.jpg"
            name="Cucumber" price="$100" />
        </div>
            
        </div>
    )
}

export default Sproduct
