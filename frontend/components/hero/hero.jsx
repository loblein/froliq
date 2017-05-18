import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className='hero'>
        <div className='hero-image'>
          <div className='hero-text'>
            <label className='searchbar-label'>Destination:
              <input type='text' className='sleak-input' text='Boston, MA'></input>
            </label>
          </div>
          <div className='container'>
            <div className='hero-lower-third'>
              <div className='hero-lower-third-item'>
              </div>
              <div className='hero-lower-third-item'>
              </div>
              <div className='hero-lower-third-item'>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
