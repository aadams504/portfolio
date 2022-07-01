import React, { Component } from 'react';

import '../styles/HeroImage.css';

class HeroImageComponent extends Component {
  render() {
    return (
      <div className='hero-img'>
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImageComponent