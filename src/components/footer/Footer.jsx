import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0108/7370/0415/files/logo-footer_x42@2x.png?v=1581488629" alt="" />
                <p className='footer-ul'>No: 58 A, East Madison Street, Baltimore, MD, USA 4509</p>
                <p>+91 12345678</p>
                <p>support@somemail.com</p>
            </div>
            <div>
                <p>Help</p>
                <ul className='footer-ul'>
                    <li>Search</li>
                    <li>Help</li>
                    <li>Information</li>
                    <li>Privacu Policy</li>
                    <li>Shipping Information</li>
                </ul>
            </div>
            <div>
                <p>Support</p>
                <ul className='footer-ul'>
                    <li>Contact</li>
                    <li>About Us</li>
                    <li>Carrers</li>
                    <li>Refund & Returns</li>
                    <li>Deliveries</li>
                </ul>
            </div>
            <div>
                <p>Information</p>
                <ul className='footer-ul'>
                    <li>Search Terms</li>
                    <li>Advanced Search</li>
                    <li>Helps & Faqs</li>
                    <li>Store Location</li>
                    <li>Orders & Returns</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
