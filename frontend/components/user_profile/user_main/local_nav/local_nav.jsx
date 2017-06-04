import React from 'react';
import FontAwesome from 'react-fontawesome';

class LocalNav extends React.Component {
  constructor(props) {
    super(props)

    this.handleOppsClick = this.handleOppsClick.bind(this);
  }

  handleOppsClick() {
    this.props.populateOpportunities();
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
          <li>
            <FontAwesome className='fa fa-wrench' /> Settings
          </li>
        </ul>
      </nav>
    )
  }
};

export default LocalNav;
