import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router';
import { sample } from 'lodash';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.updateLocation = this.updateLocation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateLocation(event) {
    const newLocation = event.currentTarget.value;
    this.setState({
      location: newLocation
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    const location = this.state.location;

    // set location in state
    this.props.receiveFilter(location);

    // render appropriate window
    if (this.props.location === 'hero' && this.props.loggedIn) {
      this.props.search(this.props.filter);
      this.props.router.push('/users/:user_id');
    } else if (!this.props.loggedIn) {
      this.props.router.push('/login');
    } else {
      this.props.search(this.props.filter);
      this.props.renderView('opportunities');
    };

  };

  grabPlaceholder() {
    const cities = [
      'Las Vegas, NV',
      'Washington, D.C.',
      'Boston, MA',
      'Atlanta, GA',
      'Portland, OR',
      'Denver, CO',
      'San Francisco, CA',
      'Chicago, IL',
      'Seatle, WA',
      'Sedona, AR',
      'San Diego, CA',
      'Honolulu, HI',
      'New Orleans, LA',
      'Charleston, NC',
      'Cape Cod, MA'
    ];

    return sample(cities);
  }

  render() {
    var wrapperClass;
    if (this.props.location == 'user') {
      wrapperClass = 'user-search';
    } else {
      wrapperClass = 'hero-search';
    };

    return (
      <div>
        <div className={ wrapperClass }>
          <form onSubmit={this.handleSubmit}>
            <h5 className='where-to'>Where to?</h5>
            <input type='text' placeholder={this.grabPlaceholder()} onChange={this.updateLocation}></input>
            <button type='submit' value='Go!'><FontAwesome className='fa fa-long-arrow-right' /> Go!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Search);
