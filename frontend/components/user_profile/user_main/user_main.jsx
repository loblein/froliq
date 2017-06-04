import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import SearchContainer from '../../search/search_container';
import OpportunitiesContainer from './opportunities/opportunities_container';
import LocalNavContainer from './local_nav/local_nav_container';

class UserMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='container-fluid inspect'>
        <div className='row add-height'>
          <div className='col-sm-0 col-md-1 col-lg-2'></div>
          <div className='user-main-container col-md-10 col-sm-12 col-lg-8'>
            <div className='user-main'>
              <div className='searchbox-row'>
                <div className='search-container'>
                  <SearchContainer />
                </div>
              </div>
              <div className='local-nav-row'>
                <LocalNavContainer />

                <div className='content-box'>
                  <OpportunitiesContainer />
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-0 col-md-1 col-lg-2'></div>
        </div>
        <div className='row'>
          <div className='user-footer-container'>
            <div className='user-footer'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserMain;
