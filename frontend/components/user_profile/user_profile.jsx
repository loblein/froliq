import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';
import UserHeaderContainer from './user_header/user_header_container';
import UserMainContainer from './user_main/user_main_container';
import UserFooter from './user_footer/footer';

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
          <UserHeaderContainer />
          <UserMainContainer />
        </div>
        <div className='row'>
          <UserFooter />
        </div>
      </div>
    )
  }
}

export default withRouter(UserProfile);
