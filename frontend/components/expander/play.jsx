import React from 'react';
import { withRouter } from 'react-router';

class Play extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.renderButtonText = this.renderButtonText.bind(this);
  }

  handleClick() {
    if (this.props.signedIn) {
      this.props.logout();
    } else {
      this.props.router.push('/signup');
    }
  };

  renderButtonText() {
    if (this.props.signedIn) {
      return 'Sign Out';
    } else {
      return 'Create an Account';
    }
  };

  render() {
    return (
      <div className='expander-element'>
        <div className='expander-item'>
          <img src={window.coworkerFriends}></img>
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
              <button className='create-account' onClick={this.handleClick}>{this.renderButtonText()}</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

};

export default withRouter(Play);
