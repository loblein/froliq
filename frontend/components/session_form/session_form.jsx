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
  }

  handleChange(event) {
    const field = event.target.name;
    this.setState({[field]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  render() {
    return (
      <div className='background-reset col-lg-12 col-md-12 col-sm-12'>
        <div className='flex-container'>
          <div className='session-logo'></div>
        </div>
        <div className='flex-container'>
          <h2>Login</h2>
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
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default SessionForm;
