import React from 'react';
import FontAwesome from 'react-fontawesome';
import { merge } from 'lodash';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: ''
    }

    this.updateLocation = this.updateLocation.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateLocation(event) {
    const newLocation = event.currentTarget.value;
    this.setState({
      location: newLocation
    });
  }

  handleSearch(event) {
    debugger;
    const location = event.currentTarget.value;
    this.props.search(location);
  }

  render() {
    return (
      <div>
        <div className='user-search'>
          <h5 className='where-to'>Where to?</h5>
          <input type='text' placeholder='Boston, MA' onChange={this.updateLocation}/>
          <FontAwesome className="fa fa-search lookingGlass"></FontAwesome>
          <h5 className='go' onClick={this.handleSearch}>Go!</h5>
        </div>
      </div>
    )
  }
}

export default Search;
