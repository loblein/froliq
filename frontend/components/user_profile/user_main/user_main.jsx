import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

class UserMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className='container-fluid inspect'>
        <div className='row add-height'>
          <div className='user-main-container'>
            <div className='user-main'>
              <nav>
                <ul>
                  <li>
                    <FontAwesome className='fa fa-rocket' /> Opportunities
                  </li>
                  <li>
                    <FontAwesome className='fa fa-hourglass-half' /> Pending
                  </li>
                  <li>
                    <FontAwesome className='fa fa-check' /> Completed
                    </li>
                  <li>
                    <FontAwesome className='fa fa-star' /> Ratings
                  </li>
                  <li>
                    <FontAwesome className='fa fa-map' /> Map
                  </li>
                  <li>
                    <FontAwesome className='fa fa-wrench' /> Settings
                  </li>
                </ul>
              </nav>
              <div className='dummy-nav'></div>
              <div className='content-box'>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserMain;
