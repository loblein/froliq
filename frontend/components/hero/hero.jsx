import React from 'react';

import HeaderContainer from '../header/header_container';
class Hero extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className='hero'>
        <div className='hero-image'>
          <HeaderContainer />
          <div className='hero-text'>
            <label className='searchbar-label'>Destination:
              <input type='text' className='sleak-input' text='Boston, MA'></input>
            </label>
          </div>
          <div className='container'>
            <div className='hero-lower-third'>
                <img src={window.travelImg} className='hero-lower-third-item'></img>
                <img src={window.workImg} className='hero-lower-third-item'></img>
                <img src={window.playImg} className='hero-lower-third-item'></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
