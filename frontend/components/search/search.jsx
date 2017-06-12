import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router';

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

    // redirect to user profile
    if (this.props.location === 'hero') {
      this.props.router.push('/users/:user_id');
    }

    this.props.search(this.props.filter);
  };

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
            <input type='text' placeholder='Boston, MA' onChange={this.updateLocation}></input>
            <button type='submit' value='Go!'>Go!</button>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Search);
