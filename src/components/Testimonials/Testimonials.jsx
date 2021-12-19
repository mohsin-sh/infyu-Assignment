import React from 'react'
import './Testimonials.css'


const Testimonials = () => {
    return (
        <div className='testimonial'>
            <h1 className='test-header'>Out Client Say!</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere mollitia officia aliquam dicta!</p>

            <div className='test-div'>
                <div className='test-info'>
                    <img className='image' src='https://cdn.shopify.com/s/files/1/0108/7370/0415/files/tet_200x200.jpg?v=1580810019' alt='image'/>
                    <div>
                        <h3>Lindse Johnson</h3>
                        <p>Web-designer</p>
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore officiis natus error veniam possimus corrupti qui? Numquam harum error consectetur tempora laudantium delectus ut rem consequatur, aspernatur cumque accusantium voluptatum aut esse minima. Nesciunt.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Testimonials
