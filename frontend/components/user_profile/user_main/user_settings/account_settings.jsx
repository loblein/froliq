import React from 'react';
import { merge } from 'lodash';
import FontAwesome from 'react-fontawesome';

class AccountSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: this.props.currentUser.first_name || '',
        last_name: this.props.currentUser.last_name || '',
        email: this.props.currentUser.email || '',
        password: ''
      }
    }

    this.renderErrors = this.renderErrors.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleUserInfoSubmit = this.handleUserInfoSubmit.bind(this);
  };

  updateUser(field) {
    return event => this.setState({
      user: merge({}, this.state.user, {[field]: event.currentTarget.value})
    });
  }

  handleUserInfoSubmit(event) {
    event.preventDefault();
    const user = this.state.user;
    this.refs.firstName.value = '';
    this.refs.lastName.value = '';
    this.refs.email.value = '';
    this.refs.password.value = '';
    this.props.updateUser({user});
    this.state.user.password = '';
  }

  renderErrors(error, i) {
    return (
      <li className='error' key={i}>
          {error}
      </li>
    )
  }

  render() {
    const errors = this.props.errors || [];

    return (
      <form className='user-settings-form' onSubmit={this.handleUserInfoSubmit}>
        <div className='clearfix'>
          <h3>Account Settings</h3>
          <div className='form-block'>
            <label>
              First Name
              <input type='text' ref='firstName' placeholder={this.state.user.first_name} onChange={this.updateUser('first_name')}/>
            </label>
            <label>
              Last Name
              <input type='text' ref='lastName' placeholder={this.state.user.last_name} onChange={this.updateUser('last_name')}/>
            </label>
          </div>

          <div className='form-block'>
            <label>
              Email
              <input type='text' ref='email' placeholder={this.state.user.email} onChange={this.updateUser('email')}/>
            </label>
            <label>
              Password
              <input type='password' ref='password' onChange={this.updateUser('password')}/>
            </label>
          </div>

        </div>
        <div className='update-button-container'>
          <div className='update-button'>
            <input className='update' type='submit' value='Update Account Info' />
            <FontAwesome className='fa fa-long-arrow-right update-arrow' />
          </div>
        </div>
        <ul className='errors'>
          {errors.map(this.renderErrors)}
        </ul>
        <div className='clearfix'></div>
        <div className='horizontal_rule' />
      </form>
    );
  };
};

export default AccountSettings;
