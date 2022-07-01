import React from 'react';
import '../styles/Footer.scss';
// import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">

            </div>
                
            <div className="right">
            </div>
        </div>
        <div className="center copy">
                <p>
                &copy; 2022 Arianna Adams |
                Background Image from <a href='http://www.unsplash.com'>Unsplash</a>
                </p>
            </div>
    </div>
  )
}

export default FooterComponent