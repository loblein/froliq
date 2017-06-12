import UserHeader from './user_header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    firstName: state.session.currentUser.first_name,
    lastName: state.session.currentUser.last_name,
    homeTown: state.session.currentUser.biography.home_town,
    roleSelector: state.session.currentUser.role_selector
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
