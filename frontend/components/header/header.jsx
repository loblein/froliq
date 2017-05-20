import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='container'>
        <div className='root-header clearfix'>
          <div className='logo' >
            <h2>Froliq</h2>
          </div>
          <div className='header-menu'>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </div>
    )
  }
};

export default Header;