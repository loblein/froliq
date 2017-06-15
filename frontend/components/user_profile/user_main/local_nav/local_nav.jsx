import React from 'react';
import FontAwesome from 'react-fontawesome';

class LocalNav extends React.Component {
  constructor(props) {
    super(props)

    this.handleOppsClick = this.handleOppsClick.bind(this);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.renderNavElement = this.renderNavElement.bind(this);
    this.handleAllListingsClick = this.handleAllListingsClick.bind(this);
  }

  handleOppsClick() {
    this.props.renderView('opportunities');
  };

  handleSettingsClick() {
    this.props.renderView('settings');
  };

  renderNavElement() {
    return (this.props.currentUser.employer === true) ?
      <li onClick={this.handleAllListingsClick}>
        <FontAwesome className='fa fa-rocket' /> All Listings
      </li>
      :
      <li onClick={this.handleOppsClick}>
        <FontAwesome className='fa fa-rocket' /> Opportunities
      </li>;
  };

  handleAllListingsClick() {

  };

  render() {
    const firstItem = this.renderNavElement();
    return (
      <nav>
        <ul>
          { firstItem }
          <li>
            <FontAwesome className='fa fa-hourglass-half' /> Pending
          </li>
          <li>
            <FontAwesome className='fa fa-check' /> Completed
            </li>
          <li>
            <FontAwesome className='fa fa-star' /> Ratings
          </li>
          <li>
            <FontAwesome className='fa fa-map' /> Map
          </li>
          <li onClick={this.handleSettingsClick}>
            <FontAwesome className='fa fa-wrench' /> Settings
          </li>
        </ul>
      </nav>
    )
  }
};

export default LocalNav;
