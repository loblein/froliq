import React from 'react';

class UserHeader extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='upper-spacer' />
          <div className='user-header-container'>
            <div className='user-header'>
              <div className='user-avatar-container'>
                <img className='user-avatar' />
              </div>
              <div className='user-details-container'>
                <div className='user-details'>
                  <h3>{this.props.firstName} {this.props.lastName}</h3>
                  <h6>home base: Belfast, ME</h6>
                  <div className='user-star-rating'>
                    <h3>* * * * *</h3>
                  </div>
                </div>
              </div>
              <div className='user-blurb-container'>
                <div className='user-blurb'>
                  <h4>Notes</h4>
                  Looks like you haven't updated your user settings. Update your settings before searching for better results.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default UserHeader;
