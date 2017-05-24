import React from 'react';
import Header from '../header/header';
import FontAwesome from 'react-fontawesome';



class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      travelerForm: 'none',
      employerForm: 'none',
      buttons: 'block'
    }

    this.handleTravelerClick = this.handleTravelerClick.bind(this);
    this.handleEmployerClick = this.handleEmployerClick.bind(this);
  }

  componentDidUpdate() {
    console.log('state changed');
    console.log(this.state);
  }

  handleTravelerClick(event) {
    this.setState({buttons: 'none'});
    this.setState({travelerForm: 'flex'});
  }

  handleEmployerClick(event) {
    this.setState({buttons: 'none'});
    this.setState({employerForm: 'flex'});
  }

  render() {

    return (
      <div className='container-fluid'>
        <div className='row'>
          <Header />

        </div>

        <div className='row'>
          <div className='sign-up'>

            <div className='phase-one' style={{display: this.state.buttons}}>
              <div className='bi-fold-container'>
                <div className='bi-fold-item'>
                  <h3>I am a</h3>
                  <FontAwesome id='traveler-button' className="fa fa-arrow-up fa-5x" onClick={this.handleTravelerClick}></FontAwesome>
                  <h2>traveler</h2>
                </div>

                <div className='bi-fold-item'>
                  <h3>I am an</h3>
                    <FontAwesome id='employer-button' className="fa fa-arrow-down fa-5x" onClick={this.handleEmployerClick}></FontAwesome>
                  <h2>employer</h2>
                </div>
              </div>
              <div className='flex-container'>
                <img src={window.arrowPaths} />
              </div>
              <div className='flex-container choose-path'>
                <h3 className='text-white'>Choose</h3>
              </div>
            </div>

            <div className='traveler-form-container' style={{display: this.state.travelerForm}}>

                <form className='traveler-form'>
                  <h3>New Traveler</h3>
                  <label>
                    First Name
                    <input></input>
                  </label>

                  <label>
                    Last Name
                    <input></input>
                  </label>

                  <label>
                    Email
                    <input></input>
                  </label>

                  <label>
                    Password
                    <input></input>
                  </label>

                  <input type='submit' text='submit' />

                </form>

            </div>

            <div className='employer-form-container' style={{display: this.state.employerForm}}>

                <form className='traveler-form'>
                  <h3>New Employer</h3>
                  <label>
                    First Name
                    <input></input>
                  </label>

                  <label>
                    Last Name
                    <input></input>
                  </label>

                  <label>
                    Email
                    <input></input>
                  </label>

                  <label>
                    Password
                    <input></input>
                  </label>

                  <input type='submit' text='submit' />

                </form>

            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default SignUp;
