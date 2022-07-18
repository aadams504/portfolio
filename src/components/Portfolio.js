import "../styles/Portfolio.scss";

import Movies from "../assets/images/movies.png";
import Game from "../assets/images/game.png";
import Clothing from "../assets/images/clothing.png";
import PortfolioImage from "../assets/images/portfolio.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="container announcements">
      <h2>Portfolio</h2>
      <div className="portfolio">
        <div className="card">
          <a
            href="https://main--papaya-biscochitos-d63991.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Clothing} alt="" />
          </a>
          <div className="card__head">
            Ecommerce Site
            <p style={{ color: "white", fontSize: "16px" }}>
              React, Redux, Firebase, Stripe API
            </p>
          </div>
        </div>
        <div className="card">
          <a
            href="https://playful-vacherin-7cf0b9.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Game} alt="" />
          </a>

          <div className="card__head">
            Local 2-Player Game
            <p style={{ color: "white" }}>Javascript</p>
          </div>
        </div>
        <div className="card">
          <a
            href="https://update-movie-app.vercel.app/?genre=fetchActionMovies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Movies} alt="" />
          </a>
          <div className="card__head">
            Streming Site
            <p style={{ color: "white" }}>
              React, Next.js, TailwindCSS, TMDB API
            </p>
          </div>
        </div>
        <br />
        <div className="card">
          <a
            href="https://www.arianna.codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PortfolioImage} alt="" />
          </a>
          <div className="card__head">
            Portfolio
            <p style={{ color: "white" }}>React, SCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
