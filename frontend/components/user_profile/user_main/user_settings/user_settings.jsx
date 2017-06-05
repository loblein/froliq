import React from 'react';
import { merge } from 'lodash';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        id: this.props.currentUser.id
      },
      userSettings: {
        bio: '',
        home_base: ''
      },
      roles: []
    }

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
    event.currentTarget.reset();
    this.props.updateInfo({user});
  }

  render() {
    return (
        <div className='user-settings-form-container'>
          <form className='user-info-form' onSubmit={this.handleUserInfoSubmit}>
            <div className='clearfix'>
            <div className='form-block clearfix'>
              <label>
                First Name
                <input type='text' onChange={this.updateUser('first_name')}/>
              </label>
              <label>
                Last Name
                <input type='text' onChange={this.updateUser('last_name')}/>
              </label>
            </div>

            <div className='form-block'>
              <label>
                Email
                <input type='text' onChange={this.updateUser('email')}/>
              </label>
              <label>
                Password
                <input type='password' onChange={this.updateUser('password')}/>
              </label>
            </div>
            </div>
            <div className='update-button-container'>
              <input className='update-button' type='submit' value='Update User Info'/>
            </div>
          </form>

        </div>
    );
  };
};

export default UserSettings;
