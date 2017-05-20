import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container-fluid'>

        <div id='header'>
          <div className='root-header clearfix'>
            <div className='logo' >
              <Link to='/'>Froliq</Link>
            </div>
            <img className='frog-logo' src={window.frogLogo}></img>
            <div className='header-menu'>
              <Link to='/login'>Login</Link>
            </div>
          </div>
        </div>

      </div>
    )
  }
};

export default Header;
