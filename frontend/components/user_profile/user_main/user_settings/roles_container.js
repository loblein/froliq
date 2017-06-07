import { connect } from 'react-redux';
import Roles from './roles';
import { setRoles } from '../../../../actions/role_actions';

const mapStateToProps = (state) => {
  return {
    roles: state.session.currentUser.role_selector
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRoles: (roles) => dispatch(setRoles(roles))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
