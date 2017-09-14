import React from 'react';
import { Link, withRouter } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'guest@user.com',
      password: 'password'
    };

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleGuestLoginClick = this.handleGuestLoginClick.bind(this);
  }

  handleLogoutClick() {
    this.props.logout();
    this.props.router.push('/');
  }

  handleGuestLoginClick(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.loggedIn) {
      this.props.router.push('/users/:user_id');
    }
  }

  render() {
    const links = this.props.currentUser === null
    ? <nav>
        <button id='guest-login-btn' onClick={this.handleGuestLoginClick}><FontAwesome className='fa fa-sign-in' /> Guest Login</button>
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
            </div>
            {links}
          </header>
        </div>

      </div>
    )
  }
};

export default withRouter(Header);
