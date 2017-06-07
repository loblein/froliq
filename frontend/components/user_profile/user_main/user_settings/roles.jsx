import React from 'react';
import ROLES from './roles_constants';
import FontAwesome from 'react-fontawesome';

class Roles extends React.Component {
  constructor() {
    super();

    this.state = {
      dishwasher: false,
      waiter: false,
      cook: false,
      laborer: false,
      assistant: false,
      caretaker: false,
      farmer: false,
      landscaper: false,
      artistDesigner: false,
      transportation: false,
      carpenter: false,
      creative: false,
      miscellaneous: false
    };

    this.toggleRole = this.toggleRole.bind(this);
    this.populateRoles = this.populateRoles.bind(this);
  };

  toggleRole(event) {
    event.preventDefault();
    const target = event.target.id.toLowerCase();
    this.state[target] === false ?
      this.setState({ [`${target}`]: true })
      :
      this.setState({ [`${target}`]: false });
  };

  componentDidUpdate() {

  }

  renderColor(role) {
    const target = role.toLowerCase();
    return (this.state[target] === false) ?
      'white'
      :
      '#3B5A82';
  }

  renderLabel(role) {
    const target = role.toLowerCase();
    return (this.state[target] === false) ?
      '#3B5A82'
      :
      'white';
  }

  populateRoles() {
    var roles = ROLES.map((role, i) => (
      <li className='role-item' key={i}>
        <label htmlFor={role} style={{
            color: this.renderLabel(role)
          }}><FontAwesome className='fa fa-leaf fa-3x' /></label>

          <input type='checkbox'
            id={role}
            style={{
              backgroundColor: this.renderColor(role),
              color: this.renderColor(role)
              }}
            onChange={this.toggleRole}>
          </input>

        {role}
      </li>
    ));
    return roles;
  }

  render() {


    return (
      <form className='roles-form'>
        <div className='clearfix'>
          <div className='form-block-full'>
            <ul className='role-list'>
              {this.populateRoles()}
            </ul>
          </div>
        </div>
        <div className='update-button-container'>
          <input type='submit' className='update-button' value='Update Roles'/>
        </div>
      </form>
    );
  };
};

export default Roles;
