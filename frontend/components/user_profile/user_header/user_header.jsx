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
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default UserHeader;
