import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from '../header/header_container';
import UserHeaderContainer from './user_header/user_header_container';
import UserMainContainer from './user_main/user_main_container';
import UserFooterContainer from './user_footer/user_footer_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.fetchJobs = this.fetchJobs.bind(this);
  }

  componentDidUpdate() {
    if (this.props.currentUser === null) {
      this.props.router.push('/');
    }
  }

  fetchJobs() {
    if (this.props.filter.location) {
      this.props.fetchJobs(this.props.filter.location)
      .then(this.props.renderView('opportunities'))
    };
  }

  componentDidMount() {
    this.props.employer ?
      this.props.renderView('newListing')
      :
      this.fetchJobs()
    ;
  }


  render() {

    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <HeaderContainer />
            <UserHeaderContainer />
            <UserMainContainer />
          </div>
          <div className='row'>
            <UserFooterContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(UserProfile);
