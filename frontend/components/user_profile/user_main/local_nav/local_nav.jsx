import React from 'react';
import FontAwesome from 'react-fontawesome';
import UserSettingsContainer from '../user_settings/user_settings_container';

class LocalNav extends React.Component {
  constructor(props) {
    super(props)

    this.handleOppsClick = this.handleOppsClick.bind(this);
    this.handleSettingsClick = this.handleSettingsClick.bind(this);
  }

  handleOppsClick() {
    this.props.renderView('opportunities');
  }

  handleSettingsClick() {
    this.props.renderView('settings');
  }

  render() {
    return (
      <nav>
        <ul>
          <li onClick={this.handleOppsClick}>
            <FontAwesome className='fa fa-rocket' /> Opportunities
          </li>
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