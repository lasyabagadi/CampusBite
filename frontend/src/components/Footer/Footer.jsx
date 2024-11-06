import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        {/* <h2>Team 4</h2> */}
            <ul>
                <li>B.Lasya Priya</li>
                <li>Indian Institue of Information Technology, Kottayam</li>
                <li>2022-2026</li>
                <li>lasyapriya4594@gmail.com</li>
            </ul>
            
        </div>
        
        <div className="footer-content-right">
            <h2>Campus Bite</h2>
            <ul>
                <li>+91 8639086347</li>
                <li>contact@campusbite.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © CampusBite.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
