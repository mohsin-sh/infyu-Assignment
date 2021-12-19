import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-left">
                {/* number */}
                <div className='header-number-div'>
                    <i class="fas fa-phone"></i>
                    <p className='header-number'>(00) 000 111 222</p>
                </div>
                
                {/* email */}
                <div className='header-email-div'>
                    <i class="fas fa-envelope"></i>
                    <p className='header-email'>info@somedomain.com</p> 
                </div>
            </div>
      
            <div className="header-right">
                {/* social-media */}
                <div className="header-socials">
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-google-plus-g"></i>
                    <i class="fab fa-instagram"></i>
                </div>
                {/* usd */}
                <p style={{marginRight: "5px"}}><strong>USD</strong></p>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    )
}

export default Header
