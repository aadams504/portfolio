import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import '../styles/Navbar.scss';

const NavbarComponent = (props) => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [header, setHeader] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setHeader(true)
    }   else {
            setHeader(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div className={header ? "header active" : "header"}>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/involvement'>Get Involved</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/contact' style={{color:'#D1A617'}}>Donate</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
            
        </div>
    </div>
  )
}

export default NavbarComponent