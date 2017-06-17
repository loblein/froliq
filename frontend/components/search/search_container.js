import Search from './search';
import { connect } from 'react-redux';
import { fetchJobs } from '../../actions/job_actions';
import { receiveFilter } from '../../actions/filter_actions';
import { renderView } from '../../actions/view_actions';

const mapStateToProps = (state) => {

  return {
    loggedIn: state.session.currentUser !== null,
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    receiveFilter: location => dispatch(receiveFilter(location)),
    search: filters => dispatch(fetchJobs(filters)),
    renderView: view => dispatch(renderView(view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
