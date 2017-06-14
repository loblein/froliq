import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import SearchContainer from '../../search/search_container';
import OpportunitiesContainer from './opportunities/opportunities_container';
import LocalNavContainer from './local_nav/local_nav_container';
import UserSettingsContainer from './user_settings/user_settings_container';
import NewListingContainer from './listings/new_listing_container';

class UserMain extends React.Component {
  constructor(props) {
    super(props);

    this.setListingView = this.setListingView.bind(this);
  }

  setListingView() {
    this.props.renderView('newListing');
  }

  render() {
    const currentWindow = this.props.currentWindow;
    var viewableComponent;

      switch (currentWindow) {
        case 'opportunities':
          viewableComponent = <OpportunitiesContainer />
          break;
        // case 'newListing':
        //   viewableComponent = <NewListingContainer />
        //   break;
        case 'settings':
          viewableComponent = <UserSettingsContainer />
      };

    var searchOrCreate;
      if (this.props.employer) {
        searchOrCreate = <div className='create-job-container'>
          <div className='create-job-bar'>
            <button className='create-job-button' value='Create New Listing' onClick={this.setListingView}>Create New Listing</button>
            <button className='edit-existing-job-button' value='Edit Existing Listing'>Edit Current Listing</button>
          </div>
        </div>;
      } else {
        searchOrCreate = <div className='search-container'>
          <SearchContainer location='user' />
        </div>;
      };


    return (
      <div className='container-fluid'>
        <div className='row off-white'>
          <div className='col-md-1 col-lg-2 search-gutter'></div>
          <div className='searchbox-row col-sm-12 col-md-10 col-lg-8'>
            <div className='avatar-shadow'></div>
            { searchOrCreate }
          </div>
          <div className='col-md-1 col-lg-2 search-gutter'></div>
        </div>
        <div className='row soft-background'>
          <div className='col-md-1 col-lg-2'></div>
          <div className='user-main-container col-md-10 col-sm-12 col-lg-8'>
            <div className='user-main'>

              <div className='local-nav-row'>
                <LocalNavContainer />

                <div className='content-box'>
                  {viewableComponent}
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-0 col-md-1 col-lg-2'></div>
        </div>

      </div>
    )
  }
}

export default UserMain;
