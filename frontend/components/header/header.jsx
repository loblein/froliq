import React from 'react';
import { Link, withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    this.props.logout();
    this.props.router.push('/');
  }

  handleProfileClick() {
    this.props.router.push('/users/:userId');
  }

  render() {
    const links = this.props.currentUser === null
    ? <nav>
        <Link to='signup'><FontAwesome className='fa fa-user-plus' /> Sign Up</Link>
        <Link to='login'><FontAwesome className='fa fa-sign-in' /> Login</Link>
      </nav>
    : <nav>
        <Link to='users/:userId'><FontAwesome className='fa fa-user' /> Profile</Link>
        <button className='logout' onClick={this.handleLogoutClick}><FontAwesome className='fa fa-sign-out' /> Logout</button>
      </nav>
    ;

    return (
      <div className='container-fluid'>
        <div id='header-container'>
          <header className='clearfix'>
            <div className='logo' >
              <Link to='/'>Froliq</Link>
              <div className='jumping-frog' />
            </div>
            {links}
          </header>
        </div>

      </div>
    )
  }
};

export default withRouter(Header);
