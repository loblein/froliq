import React from 'react';
import FontAwesome from 'react-fontawesome';
import HeaderContainer from '../header/header_container';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.loggedIn) {
      this.props.router.push('/users/:userId');
    } else {
      this.props.router.push('/login');
    }
  };

  render() {
    return(
      <div className='hero'>
        <div className='upper-hero-spacer'></div>
        <div className='hero-image'>

          <div className='hero-text'>
            <SearchContainer location='hero' />
          </div>
          <div className='container'>
            <div className='hero-lower-third' >
              <div className='hero-lower-third-item'>
                <img src={window.travelImg} onClick={this.handleClick}/>
                <h4>
                  Travel
                </h4>
              </div>
              <div className='hero-lower-third-item'>
                <img src={window.fishingBoat} onClick={this.handleClick}/>
                <h4>
                  Work
                </h4>
              </div>
              <div className='hero-lower-third-item'>
                <img src={window.beachParty} onClick={this.handleClick}/>
                <h4>
                  Play
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className='lower-hero-spacer'></div>
      </div>

    )
  }
}

export default withRouter(Hero);
