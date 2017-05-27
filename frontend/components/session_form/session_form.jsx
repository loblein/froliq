import React from 'react';
import { Link, withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className='container-fluid'>

        <div className='row'>
          <HeaderContainer />
        </div>

        <div className='row'>
          <div className='sign-up-log-in'>

            <div className='standard-form-container'>

                <form className='standard-form session-form'
                  onSubmit={this.handleSubmit}>
                  <h3>Login</h3>

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

                  <div className='center-button'>
                    <input
                      className='submit-button'
                      type='submit'
                      text='submit'/>
                  </div>

                </form>


            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(SessionForm);
