import React from 'react';
import FontAwesome from 'react-fontawesome';

class LocalNav extends React.Component {
  constructor(props) {
    super(props)

    this.handleOppsClick = this.handleOppsClick.bind(this);
    this.handlePendingClick = this.handlePendingClick.bind(this);
    this.handleCompletedClick = this.handleCompletedClick.bind(this);
    this.handleRatingsClick = this.handleRatingsClick.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.renderNavElement = this.renderNavElement.bind(this);
    this.handleAllListingsClick = this.handleAllListingsClick.bind(this);
  }

  handleOppsClick() {
    this.props.renderView('opportunities');
  };

  handlePendingClick() {
    this.props.renderView('pending');
  }

  handleCompletedClick() {
    this.props.renderView('completed');
  }

  handleRatingsClick() {
    this.props.renderView('ratings');
  }

  handleMapClick() {
    this.props.renderView('map');
  }

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
          <li onClick={this.handlePendingClick}>
            <FontAwesome className='fa fa-hourglass-half' /> Pending
          </li>
          <li onClick={this.handleCompletedClick}>
            <FontAwesome className='fa fa-check' /> Completed
            </li>
          <li onClick={this.handleRatingsClick}>
            <FontAwesome className='fa fa-star' /> Ratings
          </li>
          <li onClick={this.handleMapClick}>
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
