import { connect } from 'react-redux';
import UserFooter from './user_footer';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFooter);
