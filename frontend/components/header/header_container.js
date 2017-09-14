import { connect } from 'react-redux';
import Header from './header';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser !== null,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
