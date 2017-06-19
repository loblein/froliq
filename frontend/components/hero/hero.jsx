import React from 'react';
import FontAwesome from 'react-fontawesome';
import HeaderContainer from '../header/header_container';
import { Link, withRouter } from 'react-router';
import SearchContainer from '../search/search_container';

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow(target) {
    if (target === this.props.visibleComponent && this.props.expanderVisible === true) {
      this.props.showExpander(false);
    } else {
      this.props.showExpander(true);
    }
  };

  handleClick(event) {
    const target = event.currentTarget.name;
    this.toggleShow(target);
    this.props.setComponent(target);
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
                <img src={window.travelImg} name='travel' onClick={this.handleClick}/>
                <h4>
                  Travel
                </h4>
              </div>
              <div className='hero-lower-third-item'>
                <img src={window.fishingBoat} name='work' onClick={this.handleClick}/>
                <h4>
                  Work
                </h4>
              </div>
              <div className='hero-lower-third-item'>
                <img src={window.beachParty} name='play' onClick={this.handleClick}/>
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
