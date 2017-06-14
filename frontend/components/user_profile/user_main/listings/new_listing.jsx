import React from 'react';
import ROLES from '../user_settings/roles_constants';
import FontAwesome from 'react-fontawesome';
import { merge } from 'lodash';

class NewListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: {
        dishwasher: false,
        waiter: false,
        cook: false,
        laborer: false,
        assistant: false,
        caretaker: false,
        farmer: false,
        landscaper: false,
        transportation: false,
        carpenter: false,
        creative: false,
        miscellaneous: false,
        job_id: null
      },
      title: '',
      description: '',
      rate: 10.00
    }

    this.toggleRole = this.toggleRole.bind(this);
    this.populateRoles = this.populateRoles.bind(this);

    this.handleTitle = this.handleTitle.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateListingWithCategories = this.updateListingWithCategories.bind(this);
  };

  toggleRole(event) {
    event.preventDefault();
    const target = event.target.id.toLowerCase();
    var categories = this.state.categories;
    categories[target] === false ?
      categories[target] = true
      :
      categories[target] = false;
    this.setState({categories});
  };

  renderColor(role) {
    const target = role.toLowerCase();
    return (this.state.categories[target] === false) ?
      'white'
      :
      '#3B5A82';
  }

  renderLabel(role) {
    const target = role.toLowerCase();
    return (this.state.categories[target] === false) ?
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

  handleRate(event) {
    const rate = event.currentTarget.value;
    this.setState({
      rate: rate
    })
  };

  handleTitle(event) {
    const title = event.currentTarget.value;
    this.setState({
      title: title
    })
  };

  handleDescription(event) {
    const description = event.currentTarget.value;
    this.setState({
      description: description
    })
  };

  updateListingWithCategories(response) {
    const id = response.listing.id;
    var category_selector = this.state.categories;
    category_selector.job_id = id;
    this.props.setCategories({category_selector});
  }

  handleSubmit(event) {
    event.preventDefault();
    const status = 'open';
    const user_id = this.props.currentUser.id;
    const description = this.state.description;
    const rate = this.state.rate;
    const title = this.state.title;

    const job = {title, rate, description, user_id, status};
    this.props.createListing({job})
      .then(response => this.updateListingWithCategories(response));
  }

  render() {

    return(
      <div className='listing-container'>
        <form className='listing' onSubmit={this.handleSubmit}>
          <h3>New Listing</h3>
          <div className='form-block-full'>
            <p>Include a title, brief description, and your offered rate. Remember to select the appropriate category or categories for your posting</p>
          </div>
          <div className='form-block'>
            <div className='left'>
              <label>
                Title
                <input type='text' placeholder='Dishwasher Needed' onChange={this.handleTitle}></input>
              </label>
            </div>
          </div>
          <div className='form-block'>
            <div className='right'>
              <label>
                Rate
                <input type='text' placeholder='10.00' onChange={this.handleRate}></input>
              </label>
            </div>
          </div>
          <div className='form-block-full'>
            <label className='full-width'>
              Description
              <textarea
                className='full-textarea'
                placeholder='We are currently short-staffed and looking for extra help.
                  Our staff is very friendly and will welcome any part-timers with a good attitude.'
                onChange={this.handleDescription}/>
            </label>
          </div>
          <div className='form-block-full'>
            <ul className='role-list'>
              {this.populateRoles()}
            </ul>
          </div>
          <div className='update-button-container'>
            <div className='update-button'>
              <input className='update' type='submit' value='Post Listing' />
              <FontAwesome className='fa fa-long-arrow-right update-arrow' />
            </div>
          </div>
          <ul className='errors'></ul>
          <div className='clearfix'></div>
          <div className='horizontal_rule' />
        </form>
      </div>
    );
  };

};

export default NewListing;
