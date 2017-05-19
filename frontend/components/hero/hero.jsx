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
            <label className='searchbar-label'>Where to?
              <input type='text' className='sleak-input' text='Boston, MA'></input>
            </label>
          </div>
          <div className='container'>
            <div className='hero-lower-third'>
              <div className='hero-lower-third-item'>
                <img src={window.travelImg}></img>
                <h4>
                  Travel
                </h4>
              </div>
              <div className='hero-lower-third-item'>
                <img src={window.workImg}></img>
                <h4>
                  Work
                </h4>
              </div>
              <div className='hero-lower-third-item'>
                <img src={window.playImg}></img>
                <h4>
                  Play
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
