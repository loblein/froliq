import React from 'react';
import FontAwesome from 'react-fontawesome';

class UserHeader extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='upper-spacer'></div>
        </div>
        <div className='row'>
          <div className='col-md-1 col-lg-2'></div>

          <div className='user-header-container col-sm-12 col-md-10 col-lg-8'>
            <div className='user-header'>
              <div className='user-avatar-container'>
                <img className='user-avatar' />
              </div>
              <div className='user-details-container'>
                <div className='user-details'>
                  <h3>{this.props.firstName} {this.props.lastName}</h3>
                  <h6>{`Home Base: ${this.props.homeTown}` || ''}</h6>
                  <div className='user-star-rating'>
                      <FontAwesome className='fa fa-star' />
                      <FontAwesome className='fa fa-star' />
                      <FontAwesome className='fa fa-star' />
                      <FontAwesome className='fa fa-star' />
                      <FontAwesome className='fa fa-star' />
                  </div>
                </div>
              </div>
              <div className='user-blurb-container'>
                <div className='user-blurb'>
                  <h4>notes</h4>
                  Looks like you haven't updated your user settings. Update your settings for better search results.
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-1 col-lg-2'></div>
          </div>
          <div className='row'>
          <div className='lower-spacer'></div>
        </div>
      </div>
    )
  }
}

export default UserHeader;
