import React from 'react';
import { Link, withRouter } from 'react-router';

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
    ? <div className='header-menu'>
        <Link to='signup'>Sign Up</Link>
        <Link to='login'>Login</Link>
      </div>
    : <div className='header-menu'>
        <button onClick={this.handleProfileClick}>Profile</button>
        <button onClick={this.handleLogoutClick}>Logout</button>
      </div>
    ;

    return (
      <div className='container-fluid'>
        <div id='header'>
          <div className='root-header clearfix'>
            <div className='logo' >
              <Link to='/'>Froliq</Link>
            </div>
            <img className='frog-logo' src={window.frogLogo}></img>
            {links}
          </div>
        </div>

      </div>
    )
  }
};

export default withRouter(Header);
