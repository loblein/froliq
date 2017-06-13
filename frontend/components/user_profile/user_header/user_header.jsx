import React from 'react';
import FontAwesome from 'react-fontawesome';
import { values, compact } from 'lodash';

class UserHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      homeTown: this.props.homeTown
    };

    this.renderNotes = this.renderNotes.bind(this);
  };

  renderNotes() {
    const values = _.values(this.props.roleSelector);
    if (_.compact(values).length === 0) {
      return ("Looks like you haven't updated your user settings. Update your roles for better search results.");
    } else {
      return ("You're all caught up. Search and explore new locations!");
    }
  };

  render() {
    const homeBase = <h6>{this.state.homeTown}</h6>
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='upper-spacer'></div>
        </div>
        <div className='row'>
          <div className='col-md-1 col-lg-2'></div>

          <div className='user-header-container col-sm-12 col-md-10 col-lg-8'>
            <div className='user-header'>
              <div className='user-avatar-container'>
                <div className='user-avatar' />
              </div>
              <div className='user-details-container'>
                <div className='user-details'>
                  <h3>{this.props.firstName} {this.props.lastName}</h3>
                    <h6>{ this.props.homeTown }</h6>
                  <div className='user-star-rating'>
                      <FontAwesome className='fa fa-star' />
                      <FontAwesome className='fa fa-star' />
                      <FontAwesome className='fa fa-star' />
                      <FontAwesome className='fa fa-star' />
                      <FontAwesome className='fa fa-star' />
                  </div>
                </div>
              </div>
              <div className='user-blurb-container'>
                <div className='user-blurb'>
                  <h4>notes</h4>
                  { this.renderNotes() }
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-1 col-lg-2'></div>
          </div>
          <div className='row'>
          <div className='lower-spacer'></div>
        </div>
      </div>
    )
  }
}

export default UserHeader;
