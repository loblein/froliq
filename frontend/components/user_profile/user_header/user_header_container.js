import UserHeader from './user_header';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    firstName: state.session.currentUser.first_name,
    lastName: state.session.currentUser.last_name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
