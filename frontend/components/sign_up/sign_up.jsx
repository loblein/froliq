import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';
import FontAwesome from 'react-fontawesome';
import { merge } from 'lodash';

import Pitch from '../pitch/pitch';
import FooterContainer from '../footer/footer_container';

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
        password: '',
        employer: false
      }
    }

    this.handleTravelerClick = this.handleTravelerClick.bind(this);
    this.handleEmployerClick = this.handleEmployerClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push('/users/:userId');
    }
  }

  handleTravelerClick(event) {
    this.setState((previousState) => _.merge({}, previousState, {
      buttons: 'none',
      travelerForm: 'flex',
      backButton: 'block',
      user: {employer: false}
    }));
  }

  handleEmployerClick(event) {
    this.setState((previousState) => _.merge({}, previousState, {
      buttons: 'none',
      employerForm: 'flex',
      backButton: 'block',
      user: {employer: true}
    }));
  }

  handleBackClick() {
    this.setState((previousState) => _.merge({}, previousState, {
      buttons: 'block',
      employerForm: 'none',
      travelerForm: 'none',
      backButton: 'none'
    }));
  }

  handleSubmit(event) {
    event.preventDefault;
    const user = this.state.user;
    this.props.processForm({user});
  }

  renderErrors(error, i) {
    return (
      <li className='error' key={i}>
          {error}
      </li>
    )
  }

  update(field) {
    return event => this.setState({
      user: merge({}, this.state.user, {[field]: event.currentTarget.value})
    });
  }

  render() {
    const errors = this.props.errors;

    return (
      <div>
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
                    <div className='frog-button' onClick={this.handleTravelerClick}></div>
                    <h3>traveler</h3>
                  </div>

                  <div className='bi-fold-item'>
                    <h3>I am an</h3>
                      <div className='lily-button' onClick={this.handleEmployerClick}></div>
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

                    <div className='signup-login-errors-container'>
                      <ul className='errors'>
                        {errors.map(this.renderErrors)}
                      </ul>
                    </div>

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

              <div className='standard-form-container' style={{display: this.state.employerForm}}>

                  <form className='standard-form traveler-form' onSubmit={this.handleSubmit}>
                    <h3>New Employer</h3>
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

                    <div className='signup-login-errors-container'>
                      <ul className='errors'>
                        {errors.map(this.renderErrors)}
                      </ul>
                    </div>

                    <div className='center-button'>
                      <input type='submit' className='submit-button' text='submit' />
                    </div>

                  </form>

              </div>
            </div>
          </div>

          <div className='row'>
            <Pitch />
          </div>

      </div>
      <div><FooterContainer /></div>
    </div>
    )
  }
}

export default withRouter(SignUp);
