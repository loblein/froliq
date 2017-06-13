import { connect } from 'react-redux';
import UserMain from './user_main';

const mapStateToProps = (state) => {
  return {
    currentWindow: state.view.currentWindow,
    employer: state.session.currentUser.employer
  };
};

const mapDispatchToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMain);
