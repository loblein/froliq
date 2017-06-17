import React from 'react';
import { Link, withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';

import Pitch from '../pitch/pitch';
import FooterContainer from '../footer/footer_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    this.setState({[field]: event.target.value});
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push('/users/:userId');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  renderErrors(error, i) {
    return (
      <li className='error' key={i}>
          {error}
      </li>
    )
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

              <div className='standard-form-container'>

                  <form className='standard-form session-form'
                    onSubmit={this.handleSubmit}>
                    <h3>Welcome Back!</h3>

                    <label>
                      Email:
                      <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange} />
                    </label>

                    <label>
                      Password:
                      <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange} />
                    </label>
                    <div className='clearfix' />
                    <div className='signup-login-errors-container clearfix'>
                      <ul className='errors'>
                        {errors.map(this.renderErrors)}
                      </ul>
                    </div>
                    <div className='center-button'>
                      <input
                        className='submit-button'
                        type='submit'
                        text='submit'/>
                    </div>
                  </form>

              </div>
              <div className='sub-form-content'>
                Don't have an account? <Link to='signup'>Sign Up</Link>
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

export default withRouter(SessionForm);
