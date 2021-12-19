import React from 'react'
import './News.css'
import Newsitem from './Newsitem'

const News = () => {
    return (
        <div className='news'>
            <h1>Our Latest News</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, a atque. Nihil accusamus voluptatibus commodi?</p>

            <div className="news-main">
                <div className='news-div'>
                    <img src="https://cdn.shopify.com/s/files/1/0508/5478/9312/articles/blog-1_600x_1054e15f-fd31-425a-a0a0-cbf07b1b89a7.jpg?v=1606990873" alt="image" />
                    <p><i>March 26, 2021</i></p>
                    <h3>Best in Quality Fresth Meat & Seafood</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta optio sit hic perferendis officiis voluptatem necessitatibus enim quia velit. Aspernatur voluptas quis a explicabo!</p>
                </div>
                <div>
                    <Newsitem img="	https://cdn.shopify.com/s/files/1/0108/7370/0415/articles/blog-2.jpg?v=1580990472"
                    date="March 25, 2021"
                    title="Best way to eat Dry Fruits and Nuts"
                    />
                    <Newsitem img="	https://cdn.shopify.com/s/files/1/0108/7370/0415/articles/blog-3.jpg?v=1580990493"
                    date="March 22, 2021"
                    title="Fruits & Vegetables Nutrients And Health Benefits"
                    />
                    <Newsitem img="https://cdn.shopify.com/s/files/1/0108/7370/0415/articles/blog-3.jpg?v=1580990493"
                    date="March 21, 2021"
                    title="Go Early For Shopping The Freshest food"
                    />
                </div> 
            </div>
        </div>
    )
}

export default News
