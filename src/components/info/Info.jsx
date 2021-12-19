import React from 'react'
import './Info.css'

const Info = () => {
    return (
        <div className='info'>
            <h1 className='info-header'>Our products</h1>
            <p className='info-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur eos minima blanditiis ut</p>

            <div className='info-main'>
                <div className='info-div one'>
                    <img className='info-img' src="http://groca.vedicthemes.com/image/cache/catalog/groca/categories/icon-1-80x80.png" alt="Milk" />
                    <span>Milk</span>
                </div>
                <div className='info-div two'>
                    <img className='info-img' src="http://groca.vedicthemes.com/image/cache/catalog/groca/categories/icon-2-80x80.png" alt="Milk" />
                    <span>Fruits</span>
                </div>
                <div className='info-div three'>
                    <img className='info-img' src="http://groca.vedicthemes.com/image/cache/catalog/groca/categories/icon-3-80x80.png" alt="Milk" />
                    <span>Flour</span>
                </div>
                <div className='info-div four'>
                    <img className='info-img' src="	http://groca.vedicthemes.com/image/cache/catalog/groca/categories/icon-4-80x80.png" alt="Milk" />
                    <span>Meat</span>
                </div>
                <div className='info-div five'>
                    <img className='info-img' src="	http://groca.vedicthemes.com/image/cache/catalog/groca/categories/icon-4-80x80.png" alt="Milk" />
                    <span>Vegies</span>
                </div>
                <div className='info-div six'>
                    <img className='info-img' src="	http://groca.vedicthemes.com/image/cache/catalog/groca/categories/icon-6-80x80.png" alt="Milk" />
                    <span>Eggs </span>
                </div>
            </div>
        </div>
    )
}

export default Info
