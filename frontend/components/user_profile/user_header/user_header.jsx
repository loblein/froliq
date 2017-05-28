import React from 'react';

class UserHeader extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='user-header-container'>

            <h1>Hi, {this.props.firstName}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default UserHeader;
