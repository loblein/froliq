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
    ? <nav>
        <Link to='signup'>Sign Up</Link>
        <Link to='login'>Login</Link>
      </nav>
    : <nav>
        <button onClick={this.handleProfileClick}>Profile</button>
        <button onClick={this.handleLogoutClick}>Logout</button>
      </nav>
    ;

    return (
      <div className='container-fluid'>
        <div className='header-container'>
          <header className='clearfix'>
            <div className='logo' >
              <Link to='/'>Froliq</Link>
            </div>
            <img className='frog-logo' src={window.frogLogo}></img>
            {links}
          </header>
        </div>

      </div>
    )
  }
};

export default withRouter(Header);
