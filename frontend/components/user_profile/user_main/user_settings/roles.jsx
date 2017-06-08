import React from 'react';
import ROLES from './roles_constants';
import FontAwesome from 'react-fontawesome';

class Roles extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.roles;

    // {
    //   dishwasher: false,
    //   waiter: false,
    //   cook: false,
    //   laborer: false,
    //   assistant: false,
    //   caretaker: false,
    //   farmer: false,
    //   landscaper: false,
    //   artistDesigner: false,
    //   transportation: false,
    //   carpenter: false,
    //   creative: false,
    //   miscellaneous: false
    // };

    this.toggleRole = this.toggleRole.bind(this);
    this.populateRoles = this.populateRoles.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  toggleRole(event) {
    event.preventDefault();
    const target = event.target.id.toLowerCase();
    this.state[target] === false ?
      this.setState({ [`${target}`]: true })
      :
      this.setState({ [`${target}`]: false });
  };

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
              backgroundColor: this.renderColor(role)
              }}
            onChange={this.toggleRole}>
          </input>

        {role}
      </li>
    ));
    return roles;
  }

  handleSubmit(event) {
    event.preventDefault();
    const role_selector = this.state;
    this.props.setRoles({role_selector});
  }

  render() {


    return (
      <form className='roles-form' onSubmit={this.handleSubmit}>
        <div className='clearfix'>
          <div className='form-block-full'>
            <ul className='role-list'>
              {this.populateRoles()}
            </ul>
          </div>
        </div>

        <div className='update-button-container'>
          <div className='update-button'>
            <input className='update' type='submit' value='Update User Roles' />
            <FontAwesome className='fa fa-long-arrow-right update-arrow' />
          </div>
        </div>
        <ul className='errors'></ul>
        <div className='clearfix'></div>
        <div className='horizontal_rule' />
      </form>
    );
  };
};

export default Roles;
