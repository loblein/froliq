import UserHeader from './user_header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    firstName: state.session.currentUser.first_name,
    lastName: state.session.currentUser.last_name,
    homeTown: state.session.currentUser.biography.home_town,
    roleSelector: state.session.currentUser.role_selector,
    employer: state.session.currentUser.employer,
    location: state.session.currentUser.employer_detail.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
