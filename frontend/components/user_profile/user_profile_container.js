import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { fetchJobs } from '../../actions/job_actions';
import { renderView } from '../../actions/view_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    filter: state.filter,
    employer: state.session.currentUser.employer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: filter => dispatch(fetchJobs(filter)),
    renderView: view => dispatch(renderView(view))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
