import React from 'react'
import './Newsitem.css'

const Newsitem = ({img, date, title}) => {
    return (
        <div>
            <div className='newsitem'>
                <img src={img} alt='picture' />
                <div>
                    <p><i>{date}</i></p>
                    <h3 className='news-title'>{title}</h3>
                    <p>Lorem ipsum consectetur adipisicing eli. Aspernatur voluptas quis a explicabo!</p>
                    <button className='news-btn'>Read More</button> 
                </div>
            </div>
        </div>
    )
}

export default Newsitem
