import React from 'react';
import FontAwesome from 'react-fontawesome';
import { merge } from 'lodash';

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
    this.props.receiveFilter(location);
    this.props.search(location);
  }

  render() {
    return (
      <div>
        <div className='user-search'>
          <form onSubmit={this.handleSubmit}>
            <h5 className='where-to'>Where to?</h5>
            <input type='text' placeholder='Boston, MA' onChange={this.updateLocation}></input>
            <button type='submit' value='Go!'>Go!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;
