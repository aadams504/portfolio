import '../styles/Portfolio.scss';

import Movies from '../assets/images/movies.png';
import Game from '../assets/images/game.png';
import Alan from '../assets/images/alan.png';
import Clothing from '../assets/images/clothing.png';

const Portfolio = () => {
  return (
    <div id="portfolio" className='container announcements'>
      <h2>Portfolio</h2>
      <div className="portfolio">
        <div className="card">
          <a href="https://main--papaya-biscochitos-d63991.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={Clothing} alt="" />
          </a>
          <div className="card__head">Crwn Clothing
          <p style={{color: 'white', fontSize: '16px'}}>React, Redux, Firebase, Stripe API</p></div>
        </div>
        <div className="card">
          <a href="https://sunny-kelpie-ad37da.netlify.app" target="_blank" rel="noopener noreferrer">
          <img src={Alan} alt="" /></a>

          <div className="card__head">AI News
          <p style={{color: 'white'}}>React, Alan API</p></div>
        </div>
        <div className="card">
          <a href="https://playful-vacherin-7cf0b9.netlify.app" target="_blank" rel="noopener noreferrer">
          <img src={Game} alt="" /></a>

          <div className="card__head">Road Brawlers
          <p style={{color: 'white'}}>Javascript</p></div>
          
        </div>
        <div className="card">
          <a href="https://elegant-raindrop-060bbe.netlify.app" target="_blank" rel="noopener noreferrer">
          <img src={Movies} alt="" /></a>
          <div className="card__head">Movie Ratings App
          <p style={{color: 'white'}}>HTML, CSS, Javascript</p></div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio