import React from 'react';
import Header from '../header/header';

class SignUp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Header />
          <div className='sign-up'>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;
