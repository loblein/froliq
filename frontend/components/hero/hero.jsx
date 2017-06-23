import React from 'react';
import FontAwesome from 'react-fontawesome';
import HeaderContainer from '../header/header_container';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';

class Hero extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className='hero'>
        <div className='upper-hero-spacer'></div>
        <div className='hero-image'>

          <div>
            <SearchContainer location='hero' />
          </div>

          <div className='container'>
            <div className='identity'>
              <h1>Froliq</h1>
            </div>
            <div className='slogan'>
              <img src={window.frogIcon} />
              <h2>Travel.</h2><h2>Work.</h2><h2>Play.</h2>
              <img src={window.lilyIcon} />
            </div>
          
          </div>
        </div>
        <div className='lower-hero-spacer'></div>
      </div>

    )
  }
}

export default withRouter(Hero);
