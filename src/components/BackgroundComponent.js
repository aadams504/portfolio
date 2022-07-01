import React from 'react';
import '../styles/Background.scss';
import {Link} from 'react-scroll';

// import Spaceship from '../assets/images/ufo.png';
import bgImage from '../assets/images/bg.jpg';

const BackgroundComponent = () => {
  return (
    <div className='hero'>
          <img id='image' src={bgImage} alt='' />

        <div className="content">
          <h1>Arianna Adams</h1>
          <p>
            Software Engineer
          </p>
        <div className="buttons">
            <Link to='portfolio' smooth={true} className='btn'>Check Out My Work</Link>
            <Link to='contact' smooth={true} className='btn btn-light'>Hire Me</Link>
        </div>
    </div>
    </div>
  )
}

export default BackgroundComponent;