import React from 'react';
import Header from '../header/header';
import FontAwesome from 'react-fontAwesome';

class SignUp extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Header />

        </div>

        <div className='row'>
          <div className='sign-up'>
            <div className='bi-fold-container'>
              <div className='bi-fold-item'>
                <h3>I am a</h3>
                <FontAwesome className="fa fa-arrow-up fa-5x"></FontAwesome>
                <h3>traveler</h3>
              </div>

              <div className='bi-fold-item'>
                <h3>I am an</h3>
                  <FontAwesome className="fa fa-arrow-down fa-5x"></FontAwesome>
                <h3>employer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default SignUp;
