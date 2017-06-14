import { connect } from 'react-redux';
import UserMain from './user_main';
import { renderView } from '../../../actions/view_actions';

const mapStateToProps = (state) => {
  return {
    currentWindow: state.view.currentWindow,
    employer: state.session.currentUser.employer
  };
};

const mapDispatchToProps = (state) => {
  return {
    renderView: view => dispatch(renderView(view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMain);
