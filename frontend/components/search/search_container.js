import Search from './search';
import { connect } from 'react-redux';
import { fetchJobs } from '../../actions/job_actions';
import { receiveFilter } from '../../actions/filter_actions';

const mapStateToProps = (state) => {

  return {
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    receiveFilter: location => dispatch(receiveFilter(location)),
    search: filters => dispatch(fetchJobs(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
