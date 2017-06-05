import { connect } from 'react-redux';
import UserSettings from './user_settings';
import { updateUserInfo } from '../../../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateInfo: (user) => dispatch(updateUserInfo(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
