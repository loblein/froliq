import React from 'react';
import FontAwesome from 'react-fontawesome';
import HeaderContainer from '../header/header_container';
import { Link } from 'react-router';

class Hero extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className='hero'>
        <div className='hero-image'>

          <div className='hero-text'>
            <label className='searchbar-label'>Where to?

              <div className='search'>
                <input type='text' placeholder='Boston, MA' />
                  <FontAwesome className="fa fa-search lookingGlass"></FontAwesome>
              </div>

            </label>
          </div>
          <div className='container'>
            <div className='hero-lower-third'>
              <div className='hero-lower-third-item'>
                <Link to='login'><img src={window.travelImg} /></Link>
                <h4>
                  Travel
                </h4>
              </div>
              <div className='hero-lower-third-item'>
                <Link to='login'><img src={window.fishingBoat}></img></Link>
                <h4>
                  Work
                </h4>
              </div>
              <div className='hero-lower-third-item'>
                <Link to='login'><img src={window.playImg}></img></Link>
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
