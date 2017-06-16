import React from 'react';
import { Link, withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';

class UserFooter extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    this.props.logout();
    this.props.router.push('/');
  }

  render() {
    return (
      <div className='container-fluid fixed-to-bottom' id='footer-container'>
        <footer>
          <div className='logo' >
            <Link to='/'>Froliq</Link>
          </div>
          <nav>
            <Link to='users/:userId'><FontAwesome className='fa fa-user' /> Profile</Link>
            <button className='logout' onClick={this.handleLogoutClick}><FontAwesome className='fa fa-sign-out' /> Logout</button>
          </nav>
        </footer>
      </div>
    );

  };
};

export default withRouter(UserFooter);
