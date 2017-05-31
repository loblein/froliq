import React from 'react';
import FontAwesome from 'react-fontawesome';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='user-search'>
          <h5 className='where-to'>Where to?</h5>
          <input type='text' placeholder='Boston, MA' />
          <FontAwesome className="fa fa-search lookingGlass"></FontAwesome>
          <h5 className='go'>Go!</h5>
        </div>
      </div>
    )
  }
}

export default Search;
