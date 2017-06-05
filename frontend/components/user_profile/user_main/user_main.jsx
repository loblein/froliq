import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import SearchContainer from '../../search/search_container';
import OpportunitiesContainer from './opportunities/opportunities_container';
import LocalNavContainer from './local_nav/local_nav_container';
import UserSettingsContainer from './user_settings/user_settings_container';

class UserMain extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const currentView = this.props.view
    var viewableComponent;

      switch (currentView) {
        case 'opportunities':
          viewableComponent = <OpportunitiesContainer />
          break;
        case 'settings':
          viewableComponent = <UserSettingsContainer />
      };

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-0 col-md-1 col-lg-2 search-gutter'></div>
          <div className='searchbox-row col-sm-12 col-md-10 col-lg-8'>
            <div className='avatar-shadow'></div>
            <div className='search-container'>
              <SearchContainer />
            </div>
          </div>
          <div className='col-sm-0 col-md-1 col-lg-2 search-gutter'></div>
        </div>
        <div className='row soft-background'>
          <div className='col-sm-0 col-md-1 col-lg-2'></div>
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
