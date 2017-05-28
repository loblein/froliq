import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';
import FontAwesome from 'react-fontawesome';
import { merge } from 'lodash';

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      travelerForm: 'none',
      employerForm: 'none',
      buttons: 'block',
      backButton: 'none',
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }

    this.handleTravelerClick = this.handleTravelerClick.bind(this);
    this.handleEmployerClick = this.handleEmployerClick.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push('/users/:userId');
    }
  }

  handleTravelerClick(event) {
    this.setState({buttons: 'none'});
    this.setState({travelerForm: 'flex'});
    this.setState({backButton: 'block'});
  }

  handleEmployerClick(event) {
    this.setState({buttons: 'none'});
    this.setState({employerForm: 'flex'});
    this.setState({backButton: 'block'});
  }

  handleBackClick() {
    this.setState({buttons: 'block'});
    this.setState({employerForm: 'none'});
    this.setState({travelerForm: 'none'});
    this.setState({backButton: 'none'})
  }

  handleSubmit(event) {
    event.preventDefault;
    const user = this.state.user;
    this.props.processForm({user});
  }

  update(field) {
    return event => this.setState({
      user: merge({}, this.state.user, {[field]: event.currentTarget.value})
    });
  }

  render() {

    return (
      <div className='container-fluid'>
        <div className='row'>
          <HeaderContainer />

        </div>

        <div className='row'>
          <div className='sign-up-log-in'>

            <div style={{display: this.state.buttons}}>
              <div className='bi-fold-container'>
                <div className='bi-fold-item'>
                  <h3>I am a</h3>
                  <FontAwesome id='traveler-button' className="fa fa-arrow-up fa-5x" onClick={this.handleTravelerClick}></FontAwesome>
                  <h3>traveler</h3>
                </div>

                <div className='bi-fold-item'>
                  <h3>I am an</h3>
                    <FontAwesome id='employer-button' className="fa fa-arrow-down fa-5x" onClick={this.handleEmployerClick}></FontAwesome>
                  <h3>employer</h3>
                </div>
              </div>
              <div className='flex-container'>
                <img src={window.arrowPaths} />
              </div>
              <div className='flex-container choose-path'>
                <h3 className='text-white'>Choose</h3>
              </div>
            </div>

            <div className='standard-form-container' style={{display: this.state.travelerForm}}>

                <form className='standard-form traveler-form' onSubmit={this.handleSubmit}>
                  <h3>Hi There, Traveler!</h3>
                  <label>
                    First Name
                    <input
                      type='text'
                      value={this.state.user.first_name}
                      onChange={this.update('first_name')} />
                  </label>

                  <label>
                    Last Name
                    <input
                      type='text'
                      value={this.state.user.last_name}
                      onChange={this.update('last_name')} />
                  </label>

                  <label>
                    Email
                    <input
                      type='text'
                      value={this.state.user.email}
                      onChange={this.update('email')} />
                  </label>

                  <label>
                    Password
                    <input
                      type='password'
                      value={this.state.user.password}
                      onChange={this.update('password')} />
                  </label>

                  <div className='center-button'>
                    <input
                      className='submit-button'
                      type='submit'
                      text='submit' />
                  </div>

                </form>
            </div>

            <div className='back-button' style={{display: this.state.backButton}}>
              <a onClick={this.handleBackClick}>Go Back</a>
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
                  <div className='center-button'>
                    <input type='submit' className='submit-button' text='submit' />
                  </div>

                </form>

            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(SignUp);
