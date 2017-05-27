import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidUpdate() {
    if (this.props.currentUser === null) {
      this.props.router.push('/');
    }
  }

  render() {

    return (
      <div className='container-fluid'>
        <div className='row'>
          <HeaderContainer />
        </div>
      </div>
    )
  }
}

export default withRouter(UserProfile);
