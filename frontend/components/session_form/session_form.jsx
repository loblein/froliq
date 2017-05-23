import React from 'react';
import { Link, withRouter } from 'react-router';

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
    console.log('submitted');
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user}).then(() => this.redirect());
  }

  render() {
    return (
      <div className='background-reset col-lg-12 col-md-12 col-sm-12'>
        <div className='flex-container'>
          <div className='session-logo'>
            <img src={window.frogLily} />
          </div>
        </div>
        <div className='flex-container'>
          <h3>Login</h3>
        </div>
        <div className='flex-container'>
          <div className='session-box'>
            <form onSubmit={this.handleSubmit}>
              <label>
                Email:
                <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
              </label>

              <label>
                Password:
                <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
              </label>
              <br />
              <input className='submit-button' type='submit' />
            </form>
          </div>
        </div>
        <div className='flex-container'>
          <p>
            Don't have an account?
          </p>
        </div>
        <div className='flex-container'>

        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm);
