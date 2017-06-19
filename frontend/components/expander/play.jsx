import React from 'react';
import { withRouter } from 'react-router';

class Play extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.router.push('/signup');
  };

  render() {
    return (
      <div className='expander-element'>
        <div className='expander-item'>
          <img className='play' src={window.coworkerFriends}></img>
          <h3>Play</h3>
          <p>
            <strong>MEET</strong> local people and make new friends from all backgrounds.
          </p>
          <p>
            <strong>NETWORK</strong> with coworkers and learn what there is to do in your area.
          </p>
          <p>
            <strong>HAVE FUN</strong> exploring and discovering your new favorite places.
          </p>
          <div className='clearfix' />
          <div className='text-block'>
            <div className='create-account-container'>
              <button className='create-account' onClick={this.handleClick}>Create an Account</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

};

export default withRouter(Play);
